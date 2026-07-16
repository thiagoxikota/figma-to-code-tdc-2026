#!/usr/bin/env node
/*
 * Diagnostico do ambiente do workshop. Read-only. Nunca imprime segredo.
 * Uso: node scripts/doctor.mjs   (ou npm run workshop:doctor)
 */
import { existsSync, readFileSync } from 'node:fs'
import { homedir, platform } from 'node:os'
import { join } from 'node:path'
import { createServer } from 'node:net'
import { execFileSync } from 'node:child_process'

let fail = 0
const ok = (m) => console.log(`  OK    ${m}`)
const bad = (m) => { console.log(`  FALHA ${m}`); fail++ }
const warn = (m) => console.log(`  aviso ${m}`)

console.log('Diagnostico do workshop - Do Figma ao codigo sem handoff')
console.log('')

// Node
const major = parseInt(process.versions.node.split('.')[0], 10)
major >= 18 ? ok(`Node ${process.versions.node}`) : bad(`Node ${process.versions.node} (precisa 18+)`)

// npm / npx
try { ok(`npm ${execFileSync('npm', ['-v'], { encoding: 'utf8' }).trim()}`) } catch { bad('npm nao encontrado no PATH') }
try { execFileSync('npx', ['-v'], { encoding: 'utf8' }); ok('npx disponivel (o MCP roda por npx)') } catch { warn('npx nao respondeu') }

// estrutura do projeto
const root = process.cwd()
for (const f of ['package.json', 'src/tokens.css', 'src/components/Card.tsx', 'src/components/Card.css', 'dist/index.html']) {
  existsSync(join(root, f)) ? ok(`existe ${f}`) : bad(`falta ${f}`)
}
existsSync(join(root, 'node_modules')) ? ok('dependencias instaladas (node_modules)') : warn('node_modules ausente: rode npm install')

// portas do preview
function portFree(port) {
  return new Promise((res) => {
    const s = createServer()
    s.once('error', () => res(false))
    s.once('listening', () => s.close(() => res(true)))
    s.listen(port, '127.0.0.1')
  })
}
for (const port of [5173, 4173]) {
  // eslint-disable-next-line no-await-in-loop
  const free = await portFree(port)
  free ? ok(`porta ${port} livre`) : warn(`porta ${port} ocupada (o preview pula pra proxima)`)
}

// config do Claude Desktop (read-only, nunca imprime o token)
function claudeCfgPath() {
  const p = platform()
  if (p === 'win32') {
    const a = process.env.APPDATA || join(homedir(), 'AppData', 'Roaming')
    return join(a, 'Claude', 'claude_desktop_config.json')
  }
  if (p === 'darwin') return join(homedir(), 'Library', 'Application Support', 'Claude', 'claude_desktop_config.json')
  return join(homedir(), '.config', 'Claude', 'claude_desktop_config.json')
}
const cfgP = claudeCfgPath()
if (!existsSync(cfgP)) {
  warn(`config do Claude ainda nao existe (${cfgP}) - rode o setup do MCP`)
} else {
  try {
    const cfg = JSON.parse(readFileSync(cfgP, 'utf8') || '{}')
    const entry = cfg.mcpServers && cfg.mcpServers['figma-console']
    if (!entry) {
      warn('config do Claude existe, mas figma-console ainda nao esta la')
    } else {
      ok(`figma-console no config (${(entry.args || []).join(' ')})`)
      const hasTok = !!(entry.env && String(entry.env.FIGMA_ACCESS_TOKEN || '').startsWith('figd_'))
      hasTok ? ok('token presente no config') : bad('token ausente/invalido no config')
    }
  } catch {
    bad(`config do Claude com JSON invalido (${cfgP}) - rode o setup, ele faz backup`)
  }
}

console.log('')
if (fail) { console.log(`Resultado: ${fail} falha(s). Resolva as marcadas com FALHA.`); process.exit(1) }
console.log('Resultado: ambiente OK para o workshop.')
