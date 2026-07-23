#!/usr/bin/env node

import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const canonicalPath = join(root, 'docs', 'tutorial-canonical.json')
const onboardingPath = join(root, 'onboarding', 'index.html')
const readmePath = join(root, 'README.md')
const promptsPath = join(root, 'prompts', 'prompts.md')

const errors = []
const fail = (message) => errors.push(message)
const read = (path) => readFileSync(path, 'utf8')

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function comparable(value) {
  return String(value)
    .replace(/\\r/g, ' ')
    .replace(/\\n/g, ' ')
    .replace(/\\t/g, ' ')
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, '\\')
    .replace(/\s+/g, ' ')
    .trim()
}

function assertOrderedText(source, snippets, label) {
  const haystack = comparable(source)
  let cursor = -1
  for (const snippet of snippets) {
    const needle = comparable(snippet)
    const index = haystack.indexOf(needle, cursor + 1)
    if (index === -1) {
      fail(`${label}: conteúdo canônico ausente: ${JSON.stringify(snippet.slice(0, 90))}`)
      continue
    }
    if (index < cursor) {
      fail(`${label}: conteúdo fora da ordem canônica: ${JSON.stringify(snippet.slice(0, 90))}`)
    }
    cursor = index
  }
}

function parseStepDefinitions(source) {
  const pattern = /(?:\bkey\b|["']key["'])\s*:\s*["']([^"']+)["']/g
  return Array.from(source.matchAll(pattern), (match) => ({
    key: match[1],
    index: match.index,
  }))
}

function propertyPattern(property, value) {
  const prop = `(?:\\b${escapeRegex(property)}\\b|["']${escapeRegex(property)}["'])`
  return new RegExp(`${prop}\\s*:\\s*["']${escapeRegex(value)}["']`)
}

function validateSteps(source, canonicalSteps) {
  const definitions = parseStepDefinitions(source)
  const expectedSetup = canonical.journey.setup.map((step) => step.key)
  const expectedPractice = canonical.journey.practice.map((step) => step.key)
  const actualSetup = definitions.map((step) => step.key).filter((key) => !key.startsWith('p-'))
  const actualPractice = definitions.map((step) => step.key).filter((key) => key.startsWith('p-'))

  if (JSON.stringify(actualSetup) !== JSON.stringify(expectedSetup)) {
    fail(`onboarding: passos de setup divergentes; esperado ${expectedSetup.join(', ')}, encontrado ${actualSetup.join(', ')}`)
  }
  if (JSON.stringify(actualPractice) !== JSON.stringify(expectedPractice)) {
    fail(`onboarding: passos de prática divergentes; esperado ${expectedPractice.join(', ')}, encontrado ${actualPractice.join(', ')}`)
  }

  for (const step of canonicalSteps) {
    const definitionIndex = definitions.findIndex((definition) => definition.key === step.key)
    if (definitionIndex === -1) {
      fail(`onboarding: definição do passo ${step.key} ausente`)
      continue
    }

    const start = definitions[definitionIndex].index
    const end = definitions[definitionIndex + 1]?.index ?? source.length
    const segment = source.slice(start, end)
    if (!propertyPattern('rail', step.rail).test(segment)) {
      fail(`onboarding: rail divergente no passo ${step.key}; esperado ${JSON.stringify(step.rail)}`)
    }
    if (!propertyPattern('title', step.title).test(segment)) {
      fail(`onboarding: título divergente no passo ${step.key}; esperado ${JSON.stringify(step.title)}`)
    }
    const duration = new RegExp(`(?:\\best\\b|\\bduration\\b|\\bdurationMinutes\\b|["'](?:est|duration|durationMinutes)["'])\\s*:\\s*${step.durationMinutes}\\b`)
    if (!duration.test(segment)) {
      fail(`onboarding: duração divergente no passo ${step.key}; esperado ${step.durationMinutes} min`)
    }
  }
}

function parseNumberedSection(source, heading, nextHeading) {
  const start = source.indexOf(heading)
  if (start === -1) return []
  const end = nextHeading ? source.indexOf(nextHeading, start + heading.length) : source.length
  const section = source.slice(start, end === -1 ? source.length : end)
  return Array.from(section.matchAll(/^\d+\.\s+\*\*([^*]+)\*\*(.*)$/gm), (match) => ({
    label: match[1].replace(/\.$/, '').trim(),
    rest: match[2],
  }))
}

function collectActiveMarkdown(path) {
  const entries = readdirSync(path, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    if (['.git', 'node_modules', 'dist', 'outputs-prebaked'].includes(entry.name)) continue
    const full = join(path, entry.name)
    const rel = relative(root, full).toLowerCase()
    if (/(^|[/_-])(aposentado|retired|archive)([/_.-]|$)/.test(rel)) continue
    if (entry.isDirectory()) files.push(...collectActiveMarkdown(full))
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) files.push(full)
  }
  return files
}

let canonical
try {
  canonical = JSON.parse(read(canonicalPath))
} catch (error) {
  console.error(`FALHOU: não foi possível ler ${relative(root, canonicalPath)}: ${error.message}`)
  process.exit(1)
}

const setup = canonical?.journey?.setup
const practice = canonical?.journey?.practice
if (!Array.isArray(setup) || setup.length !== 4) {
  fail('canonical: a jornada precisa ter exatamente 4 passos de setup')
}
if (!Array.isArray(practice) || practice.length !== 5) {
  fail('canonical: a jornada precisa ter exatamente 5 passos de prática')
}

const allSteps = [...(setup || []), ...(practice || [])]
const requiredStepFields = ['key', 'rail', 'title', 'durationMinutes']
for (const step of allSteps) {
  for (const field of requiredStepFields) {
    if (step?.[field] === undefined || step[field] === '') {
      fail(`canonical: passo sem ${field}: ${JSON.stringify(step)}`)
    }
  }
}
if (new Set(allSteps.map((step) => step.key)).size !== allSteps.length) {
  fail('canonical: chaves de passo duplicadas')
}
if ((setup || []).reduce((sum, step) => sum + step.durationMinutes, 0) !== 21) {
  fail('canonical: setup precisa somar 21 minutos')
}
if ((practice || []).reduce((sum, step) => sum + step.durationMinutes, 0) !== 23) {
  fail('canonical: prática precisa somar 23 minutos')
}

const promptOrder = ['read', 'generate', 'compare', 'fix']
const prompts = promptOrder.map((key) => canonical?.prompts?.[key])
for (let index = 0; index < prompts.length; index += 1) {
  if (typeof prompts[index] !== 'string' || prompts[index].trim() === '') {
    fail(`canonical: prompt ${promptOrder[index]} ausente`)
  }
}
for (const [key, phrase] of Object.entries(canonical?.fallbackPhrases || {})) {
  if (typeof phrase !== 'string' || phrase.trim() === '') fail(`canonical: frase de fallback ${key} vazia`)
}
if (Object.keys(canonical?.fallbackPhrases || {}).length < 3) {
  fail('canonical: registre ao menos três frases de fallback')
}

const uiCopyKeys = ['timing', 'fallback', 'pair', 'reserve', 'setupHelp']
for (const key of uiCopyKeys) {
  if (typeof canonical?.uiCopy?.[key] !== 'string' || canonical.uiCopy[key].trim() === '') {
    fail(`canonical: uiCopy.${key} ausente`)
  }
}

const onboarding = read(onboardingPath)
validateSteps(onboarding, allSteps)
assertOrderedText(onboarding, prompts.filter(Boolean), 'onboarding prompts')
for (const key of ['timing', 'fallback', 'pair', 'reserve']) {
  const copy = canonical?.uiCopy?.[key]
  if (typeof copy === 'string' && !onboarding.includes(copy)) {
    fail(`onboarding: uiCopy.${key} ausente ou divergente`)
  }
}

for (const forbidden of ['p-concluir', 'Mesa / máquina', 'Chamar apoio']) {
  if (onboarding.includes(forbidden)) fail(`onboarding: conteúdo removido voltou: ${JSON.stringify(forbidden)}`)
}
for (const legacy of [
  // decisao do dono 23/07 de manha: o desafio volta pro frame Tela demo; legado proibido agora e a variante Card
  'qual token você usou pra cor do título',
  'Leia de novo o componente \\"Card\\" via MCP',
  'Consulte de novo o componente \\"Card\\" via MCP',
]) {
  if (onboarding.includes(legacy)) fail(`onboarding: prompt legado voltou: ${JSON.stringify(legacy)}`)
}

const readme = read(readmePath)
const setupSummary = `4 passos: ${setup.map((step) => step.rail).join(', ')}`
if (!comparable(readme).includes(comparable(setupSummary))) {
  fail(`README: resumo do setup ausente ou divergente: ${setupSummary}`)
}

const practiceItems = parseNumberedSection(readme, '### Exercício real (23 min)', '## Como reproduzir em casa')
if (practiceItems.length !== 5) {
  fail(`README: exercício real precisa listar 5 passos; encontrado ${practiceItems.length}`)
} else {
  practice.forEach((step, index) => {
    if (!practiceItems[index].label.startsWith(step.rail)) {
      fail(`README: passo ${index + 1} da prática deveria começar com ${step.rail}`)
    }
    if (!new RegExp(`\\(${step.durationMinutes}\\s*min\\)`).test(practiceItems[index].rest)) {
      fail(`README: duração do passo ${step.rail} deveria ser ${step.durationMinutes} min`)
    }
  })
}

const promptsDoc = read(promptsPath)
assertOrderedText(promptsDoc, prompts.filter(Boolean), 'prompts/prompts.md')
for (const legacy of [
  'qual token você usou pra cor do título',
  'Antes de gerar, leia o componente "Card" deste arquivo Figma via MCP',
]) {
  if (comparable(promptsDoc).includes(comparable(legacy))) {
    fail(`prompts/prompts.md: prompt legado voltou: ${JSON.stringify(legacy)}`)
  }
}

const activeMarkdown = collectActiveMarkdown(root)
const staleDeckCount = /\b19\s+(?:slides?|p[aá]ginas?|pages?)\b/gi
for (const path of activeMarkdown) {
  const content = read(path)
  const matches = content.match(staleDeckCount)
  if (matches?.length) {
    fail(`${relative(root, path)}: contagem aposentada do deck encontrada: ${matches.join(', ')}`)
  }
}

if (errors.length) {
  console.error(`FALHOU: ${errors.length} divergência(s) no tutorial canônico:`)
  for (const error of errors) console.error(`  - ${error}`)
  process.exit(1)
}

console.log('OK: tutorial consistente com docs/tutorial-canonical.json (4 setup + 5 prática, prompts e deck de 30 páginas).')
