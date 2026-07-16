# Preparar as máquinas (as NOSSAS: palco e reservas)

Workshop "Do Figma ao código sem handoff". TDC Florianópolis 2026, 23/07.

## Leia isto antes de tudo: o escopo mudou em 16/07

**As ~40 máquinas do evento NÃO são provisionadas por nós.** A TI confirmou em 16/07: elas chegam com Node.js, Figma Desktop e Claude Desktop instalados, e nada além disso. O resto é padrão de máquina (sem plugin importado, sem config de MCP, sem projeto, sem git). Vale pra todas, e não há janela de acesso pra mexer nelas antes.

Isso não é problema, é o formato: **o setup é o conteúdo.** Na máquina do evento, a dupla monta token, config e plugin ao vivo, guiada pela onboarding do QR (`thiagoxikota.com/tdc`). A rota dela é a mesma do notebook próprio, sem o passo de instalar app. Os 25 min dos 5 checkpoints existem exatamente pra isso.

**Este runbook cobre só o que a gente controla:**

| Máquina | Quem provisiona | Estado alvo |
|---|---|---|
| Máquina de palco (a do Bruno, que roda a demo) | nós, na véspera | tudo pronto, incluindo o projeto e o preview |
| Reserva 1, 2, 3 (notebooks nossos) | nós, na véspera | tudo pronto menos o token (que é da pessoa que migrar) |
| ~40 máquinas do evento | ninguém | cruas: só Node, Figma Desktop e Claude Desktop |

Para as reservas, o detalhe de operação e o fluxo de migração estão em `maquinas-reserva.md`. Este arquivo é o passo a passo de provisionamento que as duas usam.

Quem executa: Apoio 1 e Apoio 2, com o Bruno validando. Fazer na véspera, nunca na manhã do evento.

## Princípios

- **Tudo idempotente.** Todo passo pode ser rodado de novo sem quebrar nada. Na dúvida, rode outra vez.
- **A máquina fica pronta MENOS o token pessoal.** Ele é do participante (ou do Bruno, na de palco) e entra na hora.
- **O placeholder do token é literal: `figd_SEU_TOKEN_AQUI`.** Deixa o JSON completo e válido, com o mesmo prefixo do real, pra que no dia só o valor mude.
- **Nenhum script imprime token.**

---

## Pré-requisitos

- Windows 10/11 ou macOS. Node 18 ou mais novo (`node -v`).
- O repositório é **público** (aberto em 16/07): `https://github.com/thiagoxikota/figma-to-code-tdc-2026`. Clone anônimo funciona; se a máquina não tiver git, baixe o ZIP (Code > Download ZIP) e extraia.
- Uma conta de staging (não pessoal) do Figma e do Claude pra importar o plugin e conferir o ambiente. Sai no fim (ver "Antes de fechar a máquina").

Local canônico do projeto (o mesmo em todas):

- Windows: `C:\TDC\figma-to-code-tdc-2026`
- macOS: `~/TDC/figma-to-code-tdc-2026`

---

## Passo a passo

### 1. Baixar o projeto e buildar

O clone e o build provam de uma vez que github e npm estão acessíveis.

Windows (PowerShell):

```powershell
mkdir C:\TDC -Force | Out-Null
cd C:\TDC
git clone https://github.com/thiagoxikota/figma-to-code-tdc-2026.git
cd figma-to-code-tdc-2026
npm install
npm run build
```

macOS (zsh/bash):

```bash
mkdir -p ~/TDC && cd ~/TDC
git clone https://github.com/thiagoxikota/figma-to-code-tdc-2026.git
cd figma-to-code-tdc-2026
npm install
npm run build
```

Sem git na máquina? Baixe o ZIP de `https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/heads/main.zip`, extraia no caminho canônico e rode `npm install && npm run build`.

Re-rodar é seguro: `git clone` num diretório já existente falha sem estragar nada (nesse caso, entre na pasta e rode `git pull`). `npm install` e `npm run build` são idempotentes.

Resultado esperado: build verde e a pasta `dist/` criada.

### 2. Validar a base com o doctor

```powershell
npm run workshop:doctor
```

O doctor é read-only e nunca imprime token. Nesta etapa (ainda sem config do Claude) o esperado é:

- OK em Node 18+, npm, npx.
- OK nos arquivos do projeto e no `dist/index.html`.
- OK em `node_modules`.
- Aviso nas portas 5173/4173 só se algo já estiver ocupando.
- Aviso "config do Claude ainda nao existe": normal, você arma no passo 4.

Se aparecer FALHA em Node, npm ou arquivos do projeto, resolva antes de seguir.

### 3. Aquecer o npx e materializar o plugin

O MCP roda por `npx`. Rodar a versão fixada uma vez agora faz duas coisas: baixa o pacote pro cache local (no dia não há download) e cria a pasta do plugin Bridge que você importa no passo 5.

```powershell
npx -y figma-console-mcp@1.35.0
```

É um servidor MCP: ele sobe e fica esperando. Deixe uns 10 segundos e encerre com Ctrl+C. Depois confirme que a pasta do plugin nasceu:

Windows:

```powershell
Test-Path "$env:USERPROFILE\.figma-console-mcp\plugin\manifest.json"
```

macOS:

```bash
ls ~/.figma-console-mcp/plugin/manifest.json
```

Windows deve responder `True`; macOS deve listar o arquivo. Se a pasta não apareceu, rode o `npx` de novo e espere mais alguns segundos antes do Ctrl+C.

### 4. Armar o config do Claude Desktop SEM token (placeholder)

Use o merge idempotente do próprio kit, passando o placeholder pela variável de ambiente (o script só aceita algo que comece com `figd_`, e o placeholder começa). Ele preserva qualquer outro servidor MCP e faz backup antes de gravar.

Windows (PowerShell), a partir da pasta do projeto:

```powershell
$env:FIGMA_ACCESS_TOKEN='figd_SEU_TOKEN_AQUI'
npm run workshop:setup-mcp
$env:FIGMA_ACCESS_TOKEN=$null
```

macOS, a partir da pasta do projeto:

```bash
FIGMA_ACCESS_TOKEN='figd_SEU_TOKEN_AQUI' npm run workshop:setup-mcp
```

Isso grava a entrada `mcpServers.figma-console` com `command` npx, `args` `["-y","figma-console-mcp@1.35.0"]` e env `FIGMA_ACCESS_TOKEN` (placeholder) + `ENABLE_MCP_APPS` `"true"`.

Caminho do config, para conferência:

- Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`

Confira o estado sem imprimir valor nenhum:

```powershell
node scripts/mcp-config.mjs --check
```

Esperado: `figma-console: configurado (-y figma-console-mcp@1.35.0)` e `token: presente`.

Atenção ao caveat: o `--check` (e o doctor) só verifica o PREFIXO `figd_`. Com o placeholder ele diz "presente", o que aqui significa "a entrada está armada e o JSON é válido", não "há um token real". É exatamente o estado que queremos. Pra ter certeza de que é o placeholder e não um token esquecido, abra o config e confirme que o valor é literalmente `figd_SEU_TOKEN_AQUI`.

### 5. Importar o plugin Bridge no Figma Desktop

Com a conta de staging logada no Figma Desktop:

1. Abra o Figma Desktop.
2. Menu: Plugins > Development > Import plugin from manifest...
3. Aponte para o manifest criado no passo 3:
   - Windows: `%USERPROFILE%\.figma-console-mcp\plugin\manifest.json`
   - macOS: `~/.figma-console-mcp/plugin/manifest.json`

Não é baixar ZIP do GitHub. O caminho é sempre importar do manifest auto-empacotado.

### 6. Deixar o ambiente montado

- Arquivo Figma da demo aberto, na página do frame "Tela demo", com o plugin Bridge rodando.
- Onboarding aberta no navegador: `https://thiagoxikota.com/tdc`.
- Atalho do projeto na área de trabalho.
- Na máquina de PALCO (só nela): Vite rodando (`npm run workshop:start`) com o slot 2 vazio, prompts abertos, prebaked em janela de fundo.

### 7. Verificação final

```powershell
npm run workshop:doctor
```

Esperado: nenhuma FALHA. O token sai como `presente` (é o placeholder; o prefixo `figd_` confere).

- [ ] `npm run workshop:doctor` sem nenhuma FALHA.
- [ ] `node scripts/mcp-config.mjs --check` diz `configurado` e `token: presente` (placeholder).
- [ ] Plugin Bridge importado e rodando.
- [ ] Config tem só o placeholder `figd_SEU_TOKEN_AQUI`, nunca um token real esquecido.

---

## Antes de fechar a máquina

- Deslogue a conta de staging do Figma e do Claude. Nenhuma conta nossa fica logada numa reserva que um participante vai usar.
- Confirme que o config tem só o placeholder.
- Nenhum terminal com segredo na memória; histórico limpo.

## O que NÃO fazer

- Não tente provisionar as máquinas do evento. Não há janela de acesso, e o plano não depende disso.
- Não logue conta de palestrante em máquina que um participante vai usar (conta compartilhada = rate limit, e a demo do palco morre junto).
