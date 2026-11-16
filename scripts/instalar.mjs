#!/usr/bin/env node
/*
 * Instalador de um comando só do workshop (Mac e Windows, Node 18+).
 *
 *   npx -y https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza-v3.tar.gz
 *   (Windows: npx.cmd no lugar de npx. Plano B: baixar o ZIP do repo e rodar node scripts/instalar.mjs.
 *   O plano B dispensa baixar o instalador, mas o passo 4 ainda baixa a conexão pelo npm.)
 *
 * O que faz, em ordem:
 *   1. Confere Node, Figma Desktop e Claude Desktop (avisa e dá o link do que faltar).
 *   2. Abre a página do token do Figma e pede o token num campo escondido.
 *   3. Grava o Figma Console MCP no config do Claude Desktop, preservando outros MCP,
 *      com backup do arquivo anterior. Se o config estiver inválido, ou já tiver uma
 *      entrada figma-console diferente, diz o que seria substituído e só continua
 *      com um "sim" digitado (ou com --substituir). Sem confirmação, sai com código 4.
 *   4. Liga o MCP uma vez para ele criar o plugin Desktop Bridge e mostra o
 *      manifest.json no Finder/Explorer, com o caminho copiado. Se o plugin não
 *      ficar pronto, diz que a instalação NÃO terminou e sai com código 3.
 *
 * O instalador nunca declara a conexão pronta: o teste é o Claude dizer o nome
 * do arquivo aberto no Figma.
 *
 * SEGURANÇA: o token nunca é impresso, nunca vai para argumento de processo e
 * só é gravado no config local do Claude Desktop. A cópia de segurança do config
 * antigo pode conter tokens anteriores, então fica só legível pelo usuário.
 * Teste sem tocar na máquina, com ambiente limpo e chave falsa:
 *   env -i PATH="$PATH" HOME=/tmp/casa-teste MCP_CONFIG_PATH=/tmp/casa-teste/x.json FIGMA_ACCESS_TOKEN=figd_TESTE node scripts/instalar.mjs --sem-plugin
 */
import { spawn, spawnSync } from 'node:child_process'
import { chmodSync, copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { homedir, platform } from 'node:os'
import { dirname, join } from 'node:path'
import readline from 'node:readline'

const PINNED = 'figma-console-mcp@1.35.0' // versão testada no ensaio
const SERVER_KEY = 'figma-console'
const TOKEN_PAGE = 'https://www.figma.com/settings'
const IS_WIN = platform() === 'win32'
const IS_MAC = platform() === 'darwin'
const args = new Set(process.argv.slice(2))

const ok = (msg) => console.log(`  [ok] ${msg}`)
const warn = (msg) => console.log(`  [!]  ${msg}`)
const step = (n, msg) => console.log(`\n${n}. ${msg}`)

function configPath() {
  if (process.env.MCP_CONFIG_PATH) return process.env.MCP_CONFIG_PATH
  if (IS_WIN) {
    const appdata = process.env.APPDATA || join(homedir(), 'AppData', 'Roaming')
    return join(appdata, 'Claude', 'claude_desktop_config.json')
  }
  if (IS_MAC) return join(homedir(), 'Library', 'Application Support', 'Claude', 'claude_desktop_config.json')
  return join(homedir(), '.config', 'Claude', 'claude_desktop_config.json')
}

function pluginManifestPath() {
  return join(homedir(), '.figma-console-mcp', 'plugin', 'manifest.json')
}

function anyExists(paths) {
  return paths.filter(Boolean).some((p) => existsSync(p))
}

function hasFigmaDesktop() {
  if (IS_MAC) return anyExists(['/Applications/Figma.app', join(homedir(), 'Applications', 'Figma.app')])
  if (IS_WIN) {
    const local = process.env.LOCALAPPDATA || ''
    return anyExists([join(local, 'Figma'), join(local, 'Programs', 'Figma')])
  }
  return true
}

function hasClaudeDesktop() {
  if (IS_MAC) return anyExists(['/Applications/Claude.app', join(homedir(), 'Applications', 'Claude.app')])
  if (IS_WIN) {
    const local = process.env.LOCALAPPDATA || ''
    return anyExists([join(local, 'AnthropicClaude'), join(local, 'Programs', 'Claude'), join(local, 'Claude')])
  }
  return true
}

function openUrl(url) {
  try {
    if (IS_MAC) spawnSync('open', [url])
    else if (IS_WIN) spawnSync('cmd', ['/c', 'start', '""', url])
    else spawnSync('xdg-open', [url])
  } catch {
    /* sem navegador: a pessoa abre o link impresso */
  }
}

function revealFile(file) {
  try {
    if (IS_MAC) spawnSync('open', ['-R', file])
    else if (IS_WIN) spawnSync('explorer', [`/select,${file}`])
  } catch {
    /* o caminho também vai impresso */
  }
}

function copyToClipboard(text) {
  try {
    if (IS_MAC) return spawnSync('pbcopy', { input: text }).status === 0
    if (IS_WIN) return spawnSync('clip', { input: text, shell: true }).status === 0
  } catch {
    /* sem área de transferência */
  }
  return false
}

function askHidden(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true })
    rl.stdoutMuted = false
    rl._writeToOutput = function write(str) {
      if (rl.stdoutMuted && !str.includes('\n')) rl.output.write('*')
      else rl.output.write(str)
    }
    rl.question(question, (answer) => {
      rl.close()
      process.stdout.write('\n')
      resolve(answer.trim())
    })
    rl.stdoutMuted = true
  })
}

function askEnter(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
    rl.question(question, () => {
      rl.close()
      resolve()
    })
  })
}

function askLine(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
    let answered = false
    rl.question(question, (answer) => {
      answered = true
      rl.close()
      resolve(answer.trim())
    })
    // Entrada fechada (sem terminal): conta como resposta vazia, nunca como "sim".
    rl.on('close', () => {
      if (!answered) resolve('')
    })
  })
}

// O que o instalador grava. Serve também para saber se a entrada que já existe é a nossa.
function ourEntry(token) {
  // Windows: o Claude Desktop não inicia `npx` direto (é um script .cmd), então
  // o comando passa pelo cmd. Padrão ainda não ensaiado numa máquina Windows real.
  return {
    command: IS_WIN ? 'cmd' : 'npx',
    args: IS_WIN ? ['/c', 'npx', '-y', PINNED] : ['-y', PINNED],
    env: { FIGMA_ACCESS_TOKEN: token, ENABLE_MCP_APPS: 'true' },
  }
}

// Descreve uma entrada existente sem nunca mostrar o env (onde ficam as chaves).
function describeEntry(entry) {
  const cmd = typeof entry?.command === 'string' ? entry.command : '(sem comando)'
  const list = Array.isArray(entry?.args) ? entry.args.map(String) : []
  const text = [cmd, ...list].join(' ').replace(/figd_[A-Za-z0-9_-]+/g, 'figd_***')
  return text.length > 140 ? `${text.slice(0, 140)}...` : text
}

// Conflito = algo que este instalador apagaria ou trocaria sem a pessoa pedir.
function findConflict(path) {
  const state = readConfig(path)
  if (state.invalid) return { kind: 'invalido' }
  const current = state.cfg?.mcpServers?.[SERVER_KEY]
  if (!current) return null
  const mine = ourEntry('')
  const same = current.command === mine.command && JSON.stringify(current.args || []) === JSON.stringify(mine.args)
  return same ? null : { kind: 'entrada', atual: describeEntry(current) }
}

async function confirmConflict(path) {
  const conflict = findConflict(path)
  if (!conflict) return
  const mine = ourEntry('')
  console.log('')
  if (conflict.kind === 'invalido') {
    warn('O arquivo de configuração do Claude Desktop não é um JSON válido:')
    console.log(`       ${path}`)
    console.log('  Se eu continuar: guardo uma cópia dele ao lado (.bak) e crio um arquivo novo SÓ com a conexão do Figma.')
    console.log('  As outras conexões que estavam nesse arquivo param de funcionar até alguém consertar a cópia.')
  } else {
    warn(`Já existe uma conexão "${SERVER_KEY}" diferente no seu Claude Desktop:`)
    console.log(`       hoje:   ${conflict.atual}`)
    console.log(`       depois: ${[mine.command, ...mine.args].join(' ')}`)
    console.log('  Se eu continuar: troco SÓ essa entrada (comando e chave). As outras conexões ficam como estão.')
    console.log('  A configuração de hoje fica guardada numa cópia ao lado (.bak), mas deixa de valer.')
  }
  if (args.has('--substituir')) {
    ok('substituição confirmada pela opção --substituir')
    return
  }
  const answer = await askLine('  Digite sim para substituir, ou só Enter para parar sem mexer em nada: ')
  if (answer.toLowerCase() !== 'sim') {
    console.log('\nParei sem mexer em nada. A sua configuração continua como estava.')
    console.log('Leve esta tela à mesa de instalação, às 17h30, antes do workshop. Um voluntário ajuda.\n')
    process.exit(4)
  }
}

function readConfig(p) {
  if (!existsSync(p)) return { existed: false, cfg: {} }
  const raw = readFileSync(p, 'utf8').trim()
  if (raw === '') return { existed: true, cfg: {} }
  try {
    return { existed: true, cfg: JSON.parse(raw) }
  } catch {
    return { existed: true, invalid: true, cfg: {} }
  }
}

function writeConfig(token) {
  const path = configPath()
  const state = readConfig(path)
  let backupPath = ''
  if (state.existed) {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-')
    const backup = `${path}.bak-${stamp}`
    copyFileSync(path, backup)
    try {
      chmodSync(backup, 0o600)
    } catch {
      /* Windows ignora o modo; o arquivo já fica na pasta do usuário */
    }
    backupPath = backup
  }
  // JSON quebrado: só chega aqui depois do "sim" de confirmConflict. O backup guarda o original.
  const cfg = state.invalid ? {} : state.cfg
  cfg.mcpServers = cfg.mcpServers || {}
  const mine = ourEntry(token)
  const current = cfg.mcpServers[SERVER_KEY]
  const sameCommand =
    current && current.command === mine.command && JSON.stringify(current.args || []) === JSON.stringify(mine.args)
  // Mesma conexão já instalada: troca só a chave e mantém o que a pessoa tinha a mais (outras opções de env).
  cfg.mcpServers[SERVER_KEY] = sameCommand
    ? { ...current, ...mine, env: { ...(current.env || {}), ...mine.env } }
    : mine
  const out = `${JSON.stringify(cfg, null, 2)}\n`
  JSON.parse(out)
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, out)
  try {
    chmodSync(path, 0o600) // o arquivo guarda a chave: só o dono da conta lê
  } catch {
    /* Windows ignora o modo */
  }
  const others = Object.keys(cfg.mcpServers).filter((k) => k !== SERVER_KEY)
  return { path, others, wasInvalid: !!state.invalid, backupPath }
}

// Encerra o MCP de aquecimento e os filhos dele: um processo esquecido seguraria
// a porta 9223 e o plugin conectaria nele em vez do Claude Desktop.
function stopTree(child) {
  try {
    child.stdin.end()
  } catch {
    /* já fechou */
  }
  try {
    if (IS_WIN) spawnSync('taskkill', ['/pid', String(child.pid), '/T', '/F'], { stdio: 'ignore' })
    else child.kill()
  } catch {
    /* já saiu */
  }
}

// Liga o MCP uma vez: no primeiro boot ele cria o plugin em ~/.figma-console-mcp/plugin.
// Mostra progresso a cada 10 s e desiste cedo se o processo morrer.
function warmPlugin(token) {
  const manifest = pluginManifestPath()
  if (existsSync(manifest)) return Promise.resolve({ ok: true })
  return new Promise((resolve) => {
    let errText = ''
    const child = spawn(IS_WIN ? 'npx.cmd' : 'npx', ['-y', PINNED], {
      env: { ...process.env, FIGMA_ACCESS_TOKEN: token, ENABLE_MCP_APPS: 'true' },
      stdio: ['pipe', 'ignore', 'pipe'],
      shell: IS_WIN,
    })
    child.stderr.on('data', (chunk) => {
      errText = (errText + chunk.toString()).slice(-2000)
    })
    const started = Date.now()
    let done = false
    const finish = (result) => {
      if (done) return
      done = true
      clearInterval(timer)
      stopTree(child)
      resolve(result)
    }
    const timer = setInterval(() => {
      const secs = Math.round((Date.now() - started) / 1000)
      if (existsSync(manifest)) return finish({ ok: true })
      if (secs >= 180) return finish({ ok: false, reason: 'demorou mais de 3 minutos (rede lenta ou bloqueada?)' })
      if (secs % 10 === 0) console.log(`     baixando e preparando o plugin... ${secs} s (pode levar até 2 min na primeira vez)`)
    }, 1000)
    child.on('error', (error) =>
      finish({ ok: false, npx: true, reason: `não consegui rodar o npx (${error.code || error.message})` }),
    )
    child.on('exit', (code) => {
      if (existsSync(manifest)) return finish({ ok: true })
      const lastLine = errText.trim().split('\n').filter(Boolean).pop() || ''
      // Sem token na mensagem: o stderr do npx não recebe o token, mas cortamos qualquer figd_ por garantia.
      const safe = lastLine.replace(/figd_[A-Za-z0-9_-]+/g, 'figd_***').slice(0, 160)
      const notFound = code === 127 || code === 9009 || /not recognized|não é reconhecido|command not found|ENOENT/i.test(errText)
      finish({ ok: false, npx: notFound, reason: `o processo parou (código ${code})${safe ? `: ${safe}` : ''}` })
    })
  })
}

async function main() {
  console.log('\nWorkshop Figma + Claude: instalação\n')

  step(1, 'Conferindo a máquina')
  const major = Number(process.versions.node.split('.')[0])
  if (major < 18) {
    warn(`Node ${process.versions.node} é antigo. Instale o Node 18 ou mais novo: https://nodejs.org/en/download`)
    process.exit(1)
  }
  ok(`Node ${process.versions.node}`)
  const missing = []
  if (hasFigmaDesktop()) ok('Figma Desktop')
  else missing.push(['Figma Desktop', 'https://www.figma.com/downloads/'])
  if (hasClaudeDesktop()) ok('Claude Desktop')
  else missing.push(['Claude Desktop', 'https://claude.com/download'])
  for (const [name, url] of missing) warn(`Não achei o ${name}. Baixe aqui: ${url} (dá para continuar e instalar depois)`)

  // Antes de pedir a chave: se a configuração tem algo que seria trocado, avisa e para.
  await confirmConflict(configPath())

  step(2, 'Chave do Figma (personal access token)')
  let token = process.env.FIGMA_ACCESS_TOKEN || ''
  // Segunda rodada: a chave aparece uma vez só no Figma, então a que já está
  // gravada no config pode ser reaproveitada sem a pessoa criar outra.
  const saved = readConfig(configPath()).cfg?.mcpServers?.[SERVER_KEY]?.env?.FIGMA_ACCESS_TOKEN || ''
  if (!token && saved.startsWith('figd_')) {
    console.log('  Já existe uma chave do workshop gravada nesta máquina.')
    const answer = await askHidden('  Aperte Enter para usar a mesma, ou cole uma chave nova: ')
    token = answer === '' ? saved : answer
  }
  if (!token) {
    console.log('  Vou abrir as configurações do Figma no navegador.')
    console.log('  Lá: aba Security > Personal access tokens > Generate new token.')
    console.log('  Validade: 7 dias (cobre até o workshop; você revoga no fim). Em escopos, marque só leitura em File content. O resto pode ficar sem acesso.')
    console.log('  Use a sua conta pessoal do Figma: a chave lê qualquer arquivo que a conta abre, não só o do exercício.')
    console.log('  A chave começa com figd_ e aparece uma vez só: copie na hora.')
    await askEnter('  Aperte Enter para abrir o Figma...')
    openUrl(TOKEN_PAGE)
    console.log(`  O navegador não abriu? Copie e abra este endereço: ${TOKEN_PAGE}`)
    for (let attempt = 0; attempt < 3 && !token.startsWith('figd_'); attempt += 1) {
      token = await askHidden('  Cole a chave aqui (não aparece na tela) e aperte Enter: ')
      if (!token.startsWith('figd_')) warn('Essa não parece a chave: ela começa com figd_. Tente de novo.')
    }
  }
  if (!token.startsWith('figd_')) {
    warn('Sem chave válida. Rode o comando de novo quando tiver a chave do Figma.')
    process.exit(2)
  }
  ok('chave recebida (não aparece na tela; vai só para o config do Claude Desktop)')

  step(3, 'Ligando o Figma no Claude Desktop')
  const result = writeConfig(token)
  if (result.wasInvalid) warn('O arquivo antigo era inválido: guardei a cópia .bak e criei um novo, só com a conexão do Figma.')
  ok(`configurado em ${result.path}`)
  if (result.backupPath) ok(`cópia do config anterior: ${result.backupPath}`)
  if (result.others.length) ok(`outros conectores preservados: ${result.others.join(', ')}`)

  step(4, 'Preparando o plugin do Figma')
  const manifest = pluginManifestPath()
  const warm = args.has('--sem-plugin') ? { ok: existsSync(manifest) } : await warmPlugin(token)
  const pluginReady = warm.ok
  if (!pluginReady) {
    warn(`O plugin NÃO ficou pronto${warm.reason ? `: ${warm.reason}` : ''}.`)
    console.log('\nA instalação NÃO terminou. O Claude Desktop já está configurado, mas falta o plugin do Figma.\n')
    if (warm.npx) {
      console.log('  O comando npx não rodou. Ele vem junto com o Node, então confira três coisas:')
      console.log('     a. Node instalado: digite node -v. Tem que aparecer v18 ou maior.')
      console.log('     b. npm instalado: digite npm -v. Não apareceu número? Reinstale o Node pelo site, versão LTS.')
      console.log('     c. PATH: instalou agora? Feche e abra o Terminal (ou o PowerShell) para ele achar o comando.')
    }
    console.log('  1. Confira a internet. Este passo baixa a conexão pelo npm, mesmo quando você roda pelo ZIP.')
    console.log(`  2. Feche o Claude Desktop por completo (${IS_MAC ? 'Cmd+Q' : 'clique direito no ícone perto do relógio > Quit'}), abra de novo e espere 2 minutos.`)
    console.log('  3. Rode este mesmo comando outra vez. A chave do Figma é a mesma: não precisa criar outra.')
    console.log('\nNão resolveu até quarta? Chegue às 17h30 na mesa de instalação.\n')
    process.exit(3)
  }
  ok(`plugin pronto em ${manifest}`)

  console.log('\nFalta pouco, faça nesta ordem:\n')
  console.log(`  A. Feche o Claude Desktop por completo (${IS_MAC ? 'Cmd+Q' : 'clique direito no ícone perto do relógio > Quit'}) e abra de novo.`)
  console.log('  B. No Figma Desktop: menu Plugins > Development > Import plugin from manifest...')
  console.log(`     Escolha este arquivo: ${manifest}`)
  if (copyToClipboard(manifest)) console.log(`     (o caminho já está copiado: na janela que o Figma abre, ${IS_MAC ? 'aperte Cmd+Shift+G e cole' : 'cole no campo "Nome do arquivo" e clique em Abrir'})`)
  console.log('  C. Abra o arquivo do workshop no Figma e rode o plugin Figma Desktop Bridge. Deixe ele aberto.')
  console.log('  D. No Claude Desktop, numa conversa nova: "Verifique o status da conexão com o Figma".')
  console.log('     Deu certo quando o Claude disser o NOME do arquivo que está aberto no Figma.')
  console.log('     Só isso prova a conexão. O "ok" deste instalador não prova.\n')
  revealFile(manifest)
  console.log('Travou em casa? Chegue às 17h30 na mesa de instalação. Se não der, no dia você acompanha a leitura pelo telão.\n')
}

main().catch((error) => {
  console.error(`\nAlgo deu errado: ${error && error.message ? error.message : error}`)
  console.error('Chame um voluntário e mostre esta tela.')
  process.exit(1)
})
