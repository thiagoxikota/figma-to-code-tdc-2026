#!/usr/bin/env node
/*
 * Confere uma pasta do workshop de Fortaleza, sem internet:
 *
 *   node scripts/conferir-pasta.mjs CAMINHO_DA_PASTA
 *
 * Olha três coisas: os nomes dos arquivos, se o tokens.json é um JSON válido e se
 * ele traz as 23 variáveis da coleção Workshop Tokens, com nome, tipo e valor.
 * Não altera nada. Sai com código 0 quando a pasta está conferida e 1 quando não está.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'

// As 23 variáveis da coleção Workshop Tokens: [grupo, chave, tipo, valor].
const ESPERADO = [
  ['color', 'brand-primary', 'color', '#C8352B'],
  ['color', 'brand-primary-hover', 'color', '#A82A22'],
  ['color', 'surface', 'color', '#FFFFFF'],
  ['color', 'surface-alt', 'color', '#F5F3F0'],
  ['color', 'text', 'color', '#1F1C1A'],
  ['color', 'text-muted', 'color', '#6C665F'],
  ['color', 'border', 'color', '#E2DDD6'],
  ['color', 'focus', 'color', '#1D4ED8'],
  ['color', 'disabled-bg', 'color', '#EDEAE5'],
  ['color', 'disabled-text', 'color', '#A29B93'],
  ['space', '1', 'dimension', '8px'],
  ['space', '2', 'dimension', '16px'],
  ['space', '3', 'dimension', '24px'],
  ['space', '4', 'dimension', '32px'],
  ['font-size', 'body', 'dimension', '16px'],
  ['font-size', 'heading', 'dimension', '20px'],
  ['font-weight', 'heading', 'fontWeight', 700],
  ['line-height', 'body', 'number', 1.5],
  ['radius', 'md', 'dimension', '8px'],
  ['border', 'width', 'dimension', '1px'],
  ['focus', 'ring-width', 'dimension', '2px'],
  ['tap-target', 'min', 'dimension', '44px'],
  ['size', 'icon', 'dimension', '24px'],
]
// Token que só a pasta de exemplo tem: vem do estilo de texto, não da coleção.
const EXTRA_ACEITO = new Set(['font/body'])

const pasta = resolve(process.argv[2] || '.')
const problemas = []
const certo = (msg) => console.log(`  [ok] ${msg}`)
const errado = (msg) => {
  problemas.push(msg)
  console.log(`  [!]  ${msg}`)
}
const igual = (a, b) => String(a).trim().toLowerCase() === String(b).trim().toLowerCase()

console.log(`\nConferindo a pasta: ${pasta}\n`)
if (!existsSync(pasta)) {
  console.log('  [!]  Essa pasta não existe. Arraste a pasta para o Terminal depois do comando, para o caminho sair certo.\n')
  process.exit(1)
}

console.log('1. Nomes dos arquivos')
const nomes = readdirSync(pasta)
for (const nome of ['tokens.json', 'Card.html', 'Card.css', 'config.json']) {
  if (nomes.includes(nome)) certo(nome)
  else if (nomes.includes(`${nome}.txt`)) errado(`${nome} está salvo como ${nome}.txt. Renomeie tirando o .txt do fim.`)
  else errado(`falta o arquivo ${nome}`)
}

console.log('\n2. tokens.json')
let dados = null
const caminho = join(pasta, 'tokens.json')
if (existsSync(caminho)) {
  try {
    dados = JSON.parse(readFileSync(caminho, 'utf8'))
    certo('é um JSON válido')
  } catch (erro) {
    errado(`não é um JSON válido (${erro.message}). Cole de novo o bloco inteiro, do primeiro { ao último }.`)
  }
}

if (dados) {
  const achados = new Set()
  for (const [grupo, itens] of Object.entries(dados)) {
    if (itens && typeof itens === 'object') {
      for (const [chave, token] of Object.entries(itens)) {
        if (token && typeof token === 'object' && '$value' in token) achados.add(`${grupo}/${chave}`)
      }
    }
  }
  let batem = 0
  for (const [grupo, chave, tipo, valor] of ESPERADO) {
    const nome = `${grupo}/${chave}`
    const token = dados?.[grupo]?.[chave]
    if (!token || !('$value' in token)) {
      errado(`falta ${nome}`)
      continue
    }
    if (token.$type !== tipo) errado(`${nome}: o tipo é "${token.$type}", o esperado é "${tipo}"`)
    else if (tipo === 'dimension' && !/px$/.test(String(token.$value))) {
      errado(`${nome}: a medida veio como ${JSON.stringify(token.$value)}, sem px. O esperado é "${valor}"`)
    } else if (!igual(token.$value, valor)) {
      errado(`${nome}: o valor é ${JSON.stringify(token.$value)}, no Figma é ${JSON.stringify(valor)}`)
    } else batem += 1
  }
  const sobrando = [...achados].filter(
    (nome) => !EXTRA_ACEITO.has(nome) && !ESPERADO.some(([grupo, chave]) => `${grupo}/${chave}` === nome),
  )
  for (const nome of sobrando) errado(`${nome} não existe na coleção Workshop Tokens`)
  if (batem === ESPERADO.length) certo(`as ${ESPERADO.length} variáveis estão aí, com nome, tipo e valor certos`)
  else console.log(`       ${batem} de ${ESPERADO.length} variáveis conferem`)
}

console.log('')
if (problemas.length === 0) {
  console.log('Pasta conferida. Pode levar para o Mateus.\n')
  process.exit(0)
}
console.log(`Pasta NÃO conferida: ${problemas.length} ${problemas.length === 1 ? 'ponto' : 'pontos'} acima.`)
console.log('Corrija e rode de novo. Sem tempo? Leve a pasta handoff, que já está conferida, e diga isso ao Mateus.\n')
process.exit(1)
