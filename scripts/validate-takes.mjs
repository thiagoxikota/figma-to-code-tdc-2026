// Prova objetiva do experimento Take A vs Take B (a claim do deck e do 05c).
// PASSA quando, ao mesmo tempo:
//   1. check-tokens APROVA o Take B integrado (src/components/Card.tsx + Card.css): so variavel real.
//   2. check-tokens REPROVA o Take A (outputs-prebaked/05a-card-raso.tsx): hex cru presente.
// Se o Take A "passar" na checagem, o experimento perdeu a prova e este script acusa.
// O typecheck roda antes, no proprio npm script (validate:workshop).
import { execFileSync } from 'node:child_process'

function checkTokens(files) {
  try {
    execFileSync('node', ['scripts/check-tokens.mjs', ...files], { stdio: 'pipe' })
    return true
  } catch {
    return false
  }
}

const takeB = checkTokens(['src/components/Card.tsx', 'src/components/Card.css'])
const takeA = checkTokens(['outputs-prebaked/05a-card-raso.tsx'])

let fail = false
if (takeB) {
  console.log('ok   Take B (src/components/Card.tsx + Card.css): so variavel de tokens.css, nenhum valor cru')
} else {
  console.error('ERRO Take B: valor cru ou token fantasma em src/components/Card.*')
  fail = true
}
if (!takeA) {
  console.log('ok   Take A (outputs-prebaked/05a-card-raso.tsx): reprovado como esperado (hex cru, sem fonte de design)')
} else {
  console.error('ERRO Take A: 05a-card-raso.tsx passou na checagem de token; o experimento perdeu a prova (cade o hex cru?)')
  fail = true
}
process.exit(fail ? 1 : 0)
