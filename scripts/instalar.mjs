#!/usr/bin/env node
/*
 * Instalador de um comando só do workshop (Mac e Windows, Node 18+).
 *
 *   npx -y https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/heads/main.tar.gz
 *   (Windows: npx.cmd no lugar de npx. Plano B: baixar o ZIP do repo e rodar node scripts/instalar.mjs)
 *
 * O que faz, em ordem:
 *   1. Confere Node, Figma Desktop e Claude Desktop (avisa e dá o link do que faltar).
 *   2. Abre a página do token do Figma e pede o token num campo escondido.
 *   3. Grava o Figma Console MCP no config do Claude Desktop, preservando outros MCP,
 *      com backup do arquivo anterior.
 *   4. Liga o MCP uma vez para ele criar o plugin Desktop Bridge e mostra o
 *      manifest.json no Finder/Explorer, com o caminho copiado.
 *
 * SEGURANÇA: o token nunca é impresso, nunca vai para argumento de processo e
 * só é gravado no config local do Claude Desktop. A cópia de segurança do config
 * antigo pode conter tokens anteriores, então fica só legível pelo usuário.
 * Teste sem tocar na máquina: MCP_CONFIG_PATH=/tmp/x.json FIGMA_ACCESS_TOKEN=figd_teste node scripts/instalar.mjs --sem-plugin
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
  // JSON quebrado: o backup acima guarda o original e o config recomeça limpo.
  const cfg = state.invalid ? {} : state.cfg
  cfg.mcpServers = cfg.mcpServers || {}
  cfg.mcpServers[SERVER_KEY] = {
    command: 'npx',
    args: ['-y', PINNED],
    env: { FIGMA_ACCESS_TOKEN: token, ENABLE_MCP_APPS: 'true' },
  }
  const out = `${JSON.stringify(cfg, null, 2)}\n`
  JSON.parse(out)
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, out)
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
    child.on('error', (error) => finish({ ok: false, reason: `não consegui rodar o npx (${error.code || error.message})` }))
    child.on('exit', (code) => {
      if (existsSync(manifest)) return finish({ ok: true })
      const lastLine = errText.trim().split('\n').filter(Boolean).pop() || ''
      // Sem token na mensagem: o stderr do npx não recebe o token, mas cortamos qualquer figd_ por garantia.
      const safe = lastLine.replace(/figd_[A-Za-z0-9_-]+/g, 'figd_***').slice(0, 160)
      finish({ ok: false, reason: `o processo parou (código ${code})${safe ? `: ${safe}` : ''}` })
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

  step(2, 'Token do Figma')
  let token = process.env.FIGMA_ACCESS_TOKEN || ''
  if (!token) {
    console.log('  Vou abrir as configurações do Figma no navegador.')
    console.log('  Lá: aba Security > Personal access tokens > Generate new token.')
    console.log('  Validade: 1 dia basta. Em escopos, marque só leitura em File content. O resto pode ficar sem acesso.')
    console.log('  O token começa com figd_ e aparece uma vez só: copie na hora.')
    await askEnter('  Aperte Enter para abrir o Figma...')
    openUrl(TOKEN_PAGE)
    for (let attempt = 0; attempt < 3 && !token.startsWith('figd_'); attempt += 1) {
      token = await askHidden('  Cole o token aqui (não aparece na tela) e aperte Enter: ')
      if (!token.startsWith('figd_')) warn('Esse não parece o token: ele começa com figd_. Tente de novo.')
    }
  }
  if (!token.startsWith('figd_')) {
    warn('Sem token válido. Rode o comando de novo quando tiver o token.')
    process.exit(2)
  }
  ok('token recebido (não aparece na tela; vai só para o config do Claude Desktop)')

  step(3, 'Ligando o Figma no Claude Desktop')
  const result = writeConfig(token)
  if (result.wasInvalid) warn('O config antigo estava quebrado: guardei uma cópia .bak e criei um novo.')
  ok(`configurado em ${result.path}`)
  if (result.backupPath) ok(`cópia do config anterior: ${result.backupPath}`)
  if (result.others.length) ok(`outros conectores preservados: ${result.others.join(', ')}`)

  step(4, 'Preparando o plugin do Figma')
  const manifest = pluginManifestPath()
  const warm = args.has('--sem-plugin') ? { ok: existsSync(manifest) } : await warmPlugin(token)
  const pluginReady = warm.ok
  if (pluginReady) ok(`plugin pronto em ${manifest}`)
  else {
    if (warm.reason) warn(`Não deu para preparar o plugin agora: ${warm.reason}.`)
    warn('Ele também é criado quando o Claude Desktop abre com internet. Siga os passos abaixo; se o arquivo não existir no passo B, chame um voluntário.')
  }

  console.log('\nFalta pouco, faça nesta ordem:\n')
  console.log(`  A. Feche o Claude Desktop por completo (${IS_MAC ? 'Cmd+Q' : 'clique direito no ícone perto do relógio > Quit'}) e abra de novo.`)
  console.log('  B. No Figma Desktop: menu Plugins > Development > Import plugin from manifest...')
  console.log(`     Escolha este arquivo: ${manifest}`)
  if (copyToClipboard(manifest)) console.log('     (o caminho já está copiado: cole com Cmd+Shift+G no Mac ou na barra do Explorer no Windows)')
  console.log('  C. Abra o arquivo do workshop no Figma e rode o plugin Figma Desktop Bridge. Deixe ele aberto.')
  console.log('  D. No Claude Desktop, numa conversa nova: "Verifique o status da conexão com o Figma".')
  console.log('     Deu certo quando o Claude disser o NOME do arquivo que está aberto no Figma.\n')
  if (pluginReady) revealFile(manifest)
  console.log('Travou? Chame um voluntário. Ninguém fica para trás.\n')
}

main().catch((error) => {
  console.error(`\nAlgo deu errado: ${error && error.message ? error.message : error}`)
  console.error('Chame um voluntário e mostre esta tela.')
  process.exit(1)
})
