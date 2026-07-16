#!/usr/bin/env node
/*
 * Merge seguro e idempotente da entrada do Figma Console MCP no config do Claude Desktop.
 *
 * SEGURANCA: o token vem SOMENTE da env FIGMA_ACCESS_TOKEN (o wrapper seguro a define).
 * Nunca do argv (apareceria na lista de processos), nunca impresso, nunca logado.
 *
 * Modos:
 *   node mcp-config.mjs               instala/atualiza (precisa da env FIGMA_ACCESS_TOKEN)
 *   node mcp-config.mjs --check       status read-only (nao imprime o token)
 *   node mcp-config.mjs --remove      limpeza: remove so a entrada figma-console
 *   node mcp-config.mjs --print-path  imprime o caminho do config e sai
 *
 * Preserva qualquer outro servidor MCP. Faz backup antes de gravar. Roda em Node 18+.
 */
import { readFileSync, writeFileSync, copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { homedir, platform } from 'node:os'
import { join, dirname } from 'node:path'

const PINNED = 'figma-console-mcp@1.35.0' // versao testada no ensaio (16/07/2026)
const SERVER_KEY = 'figma-console'

function configPath() {
  const p = platform()
  if (p === 'win32') {
    const appdata = process.env.APPDATA || join(homedir(), 'AppData', 'Roaming')
    return join(appdata, 'Claude', 'claude_desktop_config.json')
  }
  if (p === 'darwin') {
    return join(homedir(), 'Library', 'Application Support', 'Claude', 'claude_desktop_config.json')
  }
  return join(homedir(), '.config', 'Claude', 'claude_desktop_config.json')
}

// Permite sobrescrever o caminho em teste, sem tocar no config real da maquina.
const path = process.env.MCP_CONFIG_PATH || configPath()

function readConfig(p) {
  if (!existsSync(p)) return { existed: false, cfg: {} }
  const raw = readFileSync(p, 'utf8').trim()
  if (raw === '') return { existed: true, empty: true, cfg: {} }
  try {
    return { existed: true, cfg: JSON.parse(raw) }
  } catch {
    return { existed: true, invalid: true, cfg: null }
  }
}

function backup(p) {
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const dest = `${p}.bak-${stamp}`
  copyFileSync(p, dest)
  return dest
}

const args = new Set(process.argv.slice(2))

if (args.has('--print-path')) {
  console.log(path)
  process.exit(0)
}

if (args.has('--check')) {
  const s = readConfig(path)
  console.log(`config: ${path}`)
  if (!s.existed) { console.log('estado: arquivo ainda nao existe (sera criado no setup)'); process.exit(0) }
  if (s.invalid) { console.log('estado: JSON INVALIDO (rode o setup, ele faz backup e corrige)'); process.exit(1) }
  if (s.empty) { console.log('estado: arquivo vazio'); process.exit(1) }
  const entry = s.cfg.mcpServers && s.cfg.mcpServers[SERVER_KEY]
  if (!entry) { console.log('figma-console: NAO configurado'); process.exit(1) }
  const hasToken = !!(entry.env && String(entry.env.FIGMA_ACCESS_TOKEN || '').startsWith('figd_'))
  const others = Object.keys(s.cfg.mcpServers).filter((k) => k !== SERVER_KEY)
  console.log(`figma-console: configurado (${(entry.args || []).join(' ')})`)
  console.log(`token: ${hasToken ? 'presente' : 'AUSENTE ou invalido'}`) // nunca o valor
  console.log(`outros MCP preservados: ${others.length ? others.join(', ') : 'nenhum'}`)
  process.exit(hasToken ? 0 : 1)
}

const state = readConfig(path)

if (state.invalid) {
  const b = backup(path)
  console.error(`ERRO: ${path} tem JSON invalido. Fiz backup em ${b}.`)
  console.error('Corrija ou apague o arquivo e rode de novo. Nao vou sobrescrever um config que nao consigo ler.')
  process.exit(1)
}

const cfg = state.cfg || {}

if (args.has('--remove')) {
  if (cfg.mcpServers && cfg.mcpServers[SERVER_KEY]) {
    if (state.existed && !state.empty) backup(path)
    delete cfg.mcpServers[SERVER_KEY]
    mkdirSync(dirname(path), { recursive: true })
    writeFileSync(path, JSON.stringify(cfg, null, 2) + '\n')
    console.log(`figma-console removido de ${path}. Outros MCP preservados.`)
  } else {
    console.log('figma-console ja nao estava configurado. Nada a fazer.')
  }
  process.exit(0)
}

// install (default)
const token = process.env.FIGMA_ACCESS_TOKEN
if (!token) {
  console.error('ERRO: FIGMA_ACCESS_TOKEN nao veio no ambiente.')
  console.error('Rode pelo wrapper seguro: setup-figma-mcp.ps1 (Windows) ou setup-figma-mcp.command (macOS).')
  console.error('Ele pede o token num campo escondido e nunca o imprime.')
  process.exit(2)
}
if (!token.startsWith('figd_')) {
  console.error('ERRO: o token nao comeca com "figd_". Confira se copiou o Personal Access Token certo do Figma.')
  process.exit(2)
}

if (state.existed && !state.empty) {
  const b = backup(path)
  console.log(`backup do config anterior: ${b}`)
}

cfg.mcpServers = cfg.mcpServers || {}
const wasThere = !!cfg.mcpServers[SERVER_KEY]
cfg.mcpServers[SERVER_KEY] = {
  command: 'npx',
  args: ['-y', PINNED],
  env: { FIGMA_ACCESS_TOKEN: token, ENABLE_MCP_APPS: 'true' },
}

mkdirSync(dirname(path), { recursive: true })
const out = JSON.stringify(cfg, null, 2) + '\n'
JSON.parse(out) // valida antes de gravar
writeFileSync(path, out)

const others = Object.keys(cfg.mcpServers).filter((k) => k !== SERVER_KEY)
console.log(wasThere ? 'figma-console atualizado (idempotente).' : 'figma-console adicionado.')
console.log(`config: ${path}`)
console.log(`versao fixada: ${PINNED}`)
console.log(`outros MCP preservados: ${others.length ? others.join(', ') : 'nenhum'}`)
console.log('token gravado localmente (nao impresso). Agora FECHE o Claude Desktop por completo e abra de novo.')
