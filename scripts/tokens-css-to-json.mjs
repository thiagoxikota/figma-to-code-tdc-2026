// Gera handoff/tokens.json (formato W3C Design Tokens, DTCG) a partir de src/tokens.css.
// Serve a edição Fortaleza: a sala sai com os tokens em JSON e o workshop seguinte
// converte com Style Dictionary de volta para CSS. Zero dependência, Node 18+.
//
// Regra de nome: o grupo do JSON é o prefixo do nome da variável do Figma
// (color/brand-primary vira color > brand-primary, e o Style Dictionary devolve
// --color-brand-primary). Prefixo desconhecido derruba o script de propósito:
// token novo em tokens.css precisa ganhar grupo e tipo aqui antes.
//
// Uso: node scripts/tokens-css-to-json.mjs [saida]   (padrão: handoff/tokens.json)

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

const SRC = 'src/tokens.css'
const OUT = process.argv[2] || 'handoff/tokens.json'

// Mais longo primeiro: "font-size" antes de "font", "tap-target" antes de qualquer outro.
const GROUPS = [
  ['font-weight', 'fontWeight'],
  ['line-height', 'number'],
  ['tap-target', 'dimension'],
  ['font-size', 'dimension'],
  ['radius', 'dimension'],
  ['border', 'dimension'],
  ['color', 'color'],
  ['space', 'dimension'],
  ['focus', 'dimension'],
  ['size', 'dimension'],
  ['font', 'fontFamily'],
]

const DERIVED = {
  'font-body':
    'Derivado do estilo de texto do arquivo. Stack de fonte não vira variável no Figma; não conta nas 23 variáveis da coleção Workshop Tokens.',
}

const css = readFileSync(SRC, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '')
const out = {}
let count = 0

for (const m of css.matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/g)) {
  const name = m[1]
  const raw = m[2].trim()
  const hit = GROUPS.find(([g]) => name.startsWith(g + '-'))
  if (!hit) throw new Error(`sem grupo para --${name}: acrescente o prefixo em GROUPS`)
  const [group, type] = hit
  const key = name.slice(group.length + 1)

  let value = raw
  if (type === 'fontWeight' || type === 'number') value = Number(raw)
  if (type === 'fontFamily') value = raw.split(',').map((s) => s.trim().replace(/^"|"$/g, ''))
  if (type === 'color') value = raw.toUpperCase()

  const token = { $value: value, $type: type }
  if (DERIVED[name]) token.$description = DERIVED[name]
  out[group] ??= {}
  out[group][key] = token
  count++
}

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n')
console.log(`${count} tokens de ${SRC} -> ${OUT}`)
