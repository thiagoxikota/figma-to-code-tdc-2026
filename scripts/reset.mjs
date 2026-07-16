#!/usr/bin/env node
/*
 * Restaura os componentes known-good depois da geracao ao vivo.
 * NUNCA toca em config do Claude, token, nem em nada pessoal: so em src/components/.
 * Tenta git primeiro; se nao for repo git (maquina de evento com ZIP), copia da
 * pasta pristine (scripts/pristine/).
 * Uso: node scripts/reset.mjs   (ou npm run workshop:reset)
 */
import { existsSync, copyFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { execFileSync } from 'node:child_process'

const root = process.cwd()
const targets = ['Card.tsx', 'Card.css', 'CardRaso.tsx']

function tryGit() {
  try {
    execFileSync('git', ['rev-parse', '--is-inside-work-tree'], { cwd: root, stdio: 'ignore' })
  } catch {
    return false
  }
  try {
    execFileSync('git', ['checkout', '--', 'src/components/'], { cwd: root, stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

function fromPristine() {
  const src = join(root, 'scripts', 'pristine')
  const dst = join(root, 'src', 'components')
  if (!existsSync(src)) return false
  mkdirSync(dst, { recursive: true })
  let restored = 0
  for (const f of targets) {
    const s = join(src, f)
    if (existsSync(s)) { copyFileSync(s, join(dst, f)); restored++ }
  }
  return restored > 0
}

if (tryGit()) {
  console.log('reset: componentes restaurados via git (src/components/). Config e token intactos.')
  process.exit(0)
}
if (fromPristine()) {
  console.log('reset: componentes restaurados de scripts/pristine/. Config e token intactos.')
  process.exit(0)
}
console.error('reset: nao consegui restaurar (sem git e sem scripts/pristine/).')
console.error('Rode "git checkout -- src/components/" manualmente ou recopie o projeto.')
process.exit(1)
