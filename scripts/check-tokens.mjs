// Checagem determinística do workshop. Prova que o componente usa a FONTE real do
// design, nao so que evitou hex. Acusa dois problemas:
//   1. VALOR CRU: cor em hex cravada na mao (#4A90D9 etc).
//   2. TOKEN FANTASMA: var(--x) onde --x NAO existe em src/tokens.css.
// O segundo e o que pega o Take A que "inventa um token" (var(--primary-color))
// sem relacao com o design system. Zero dependencia, roda em Node 18+.
//
// Uso: node scripts/check-tokens.mjs <arquivo> [<arquivo> ...]
//   (a allowlist de tokens reais vem de src/tokens.css)

import { readFileSync } from 'node:fs'

const TOKENS_FILE = 'src/tokens.css'
const files = process.argv.slice(2)
if (files.length === 0) {
  console.error('uso: node scripts/check-tokens.mjs <arquivo> [...]')
  process.exit(2)
}

// 1. monta a allowlist a partir dos tokens que REALMENTE existem
const allow = new Set()
try {
  const t = readFileSync(TOKENS_FILE, 'utf8')
  for (const m of t.matchAll(/--([a-zA-Z0-9-]+)\s*:/g)) allow.add(m[1])
} catch {
  console.error(`nao achei ${TOKENS_FILE} pra montar a allowlist de tokens`)
  process.exit(2)
}

const HEX = /#[0-9a-fA-F]{3,8}\b/g
const VAR = /var\(\s*--([a-zA-Z0-9-]+)\s*\)/g
let violations = 0

for (const f of files) {
  let src
  try {
    src = readFileSync(f, 'utf8')
  } catch {
    console.error(`skip (nao existe): ${f}`)
    continue
  }
  // remove comentarios de bloco preservando o numero da linha
  const noBlock = src.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '))
  noBlock.split('\n').forEach((rawLine, i) => {
    const code = rawLine.replace(/\/\/.*$/, '')
    for (const h of code.matchAll(HEX)) {
      violations++
      console.log(`  VALOR CRU      ${f}:${i + 1}  ${h[0]}`)
    }
    for (const v of code.matchAll(VAR)) {
      if (!allow.has(v[1])) {
        violations++
        console.log(`  TOKEN FANTASMA ${f}:${i + 1}  --${v[1]}  (nao existe em ${TOKENS_FILE})`)
      }
    }
  })
}

if (violations > 0) {
  console.error(`\nFALHOU: ${violations} problema(s). Use SO variaveis que existem em ${TOKENS_FILE}, sem valor cravado.`)
  process.exit(1)
}
console.log(`OK: so tokens reais de ${TOKENS_FILE}, zero valor cru.`)
process.exit(0)
