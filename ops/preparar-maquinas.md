# Preparar as máquinas do evento (e as reservas)

Workshop "Do Figma ao código sem handoff". TDC Florianópolis 2026, 23/07.

Este runbook deixa cada máquina do evento pronta ANTES do dia, de modo que, na sala, o participante faça só o mínimo pessoal: logar (Figma e Claude), colar o token e conectar. Todo o resto (projeto baixado, buildado, config do Claude armado com placeholder, plugin importado, tutorial e Figma abertos, rede testada) já está feito.

Quem executa: Apoio 1 e Apoio 2, com o Bruno validando o resultado. Fazer isso na véspera, nunca na manhã do evento.

## Princípios (leia antes de começar)

- **Tudo idempotente.** Todo passo pode ser rodado de novo sem quebrar nada. Se ficou na dúvida se rodou, rode outra vez.
- **A máquina fica pronta MENOS duas coisas: login pessoal e token pessoal.** Essas duas são do participante e entram na hora. Nunca deixe token real gravado, nunca deixe a conta pessoal de ninguém logada.
- **O placeholder do token é literal: `figd_SEU_TOKEN_AQUI`.** Ele deixa o JSON completo e válido, com o mesmo prefixo do token real, para que no dia só o valor mude.
- **Nenhum script imprime token.** Se algum comando pedisse para colar token em texto visível, seria o comando errado.
- **Alvo primário: máquina do evento é Windows.** Os comandos vêm em PowerShell (Windows) e, quando a reserva for Mac, em zsh/bash (macOS) logo abaixo.

## O que fica pronto x o que NÃO fica

| Fica pronto (você faz na véspera) | NÃO fica pronto (é do participante, no dia) |
|---|---|
| Projeto clonado, `npm install`, `npm run build` | Login pessoal no Figma |
| `claude_desktop_config.json` com a entrada `figma-console` e token placeholder | Login pessoal no Claude Desktop |
| Plugin Bridge importado no Figma Desktop | Token real do Figma (`figd_...`) |
| Atalho do wrapper de token e atalho do projeto na área de trabalho | |
| Tutorial (onboarding) aberto no navegador | |
| Arquivo Figma da demo aberto no navegador e no Figma Desktop | |
| Cache do `npx` aquecido com a versão fixada, rede testada | |

---

## Pré-requisitos da máquina

- Windows 10/11 (ou macOS numa reserva). Node 18 ou mais novo instalado (`node -v`).
- Git instalado (para o clone) e permissão de rodar PowerShell.
- Acesso à internet liberado para: registro npm, github.com e loopback local (127.0.0.1).
- Uma conta de staging (não pessoal) do Figma e do Claude para a etapa de importar o plugin e conferir o ambiente. Ela é usada só na preparação e sai no fim (ver "Antes de fechar a máquina").

Local canônico do projeto (use sempre o mesmo caminho em todas as máquinas):

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
- Aviso nas portas 5173/4173 só se algo já estiver ocupando (o preview pula pra próxima).
- Aviso "config do Claude ainda nao existe": normal, você arma no passo 4.

Se aparecer FALHA em Node, npm ou arquivos do projeto, resolva antes de seguir.

### 3. Aquecer o npx e materializar o plugin

O MCP roda por `npx`. Rodar a versão fixada uma vez agora faz duas coisas: baixa o pacote pro cache local (no dia não há download) e cria a pasta do plugin Bridge que você vai importar no passo 5.

Windows (PowerShell):

```powershell
npx -y figma-console-mcp@1.35.0
```

macOS:

```bash
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

Use o merge idempotente do próprio kit, passando o placeholder pela variável de ambiente (o script só aceita algo que comece com `figd_`, e o placeholder começa). Ele preserva qualquer outro servidor MCP que exista e faz backup antes de gravar.

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

Isso grava, no config do Claude, a entrada `mcpServers.figma-console` com `command` npx, `args` `["-y","figma-console-mcp@1.35.0"]` e env `FIGMA_ACCESS_TOKEN` (placeholder) + `ENABLE_MCP_APPS` `"true"`.

Caminho do config, para conferência:

- Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`

Confira o estado sem imprimir valor nenhum:

```powershell
node scripts/mcp-config.mjs --check
```

Esperado: `figma-console: configurado (-y figma-console-mcp@1.35.0)` e `token: presente`.

Atenção ao caveat: o `--check` (e o doctor) só verifica o PREFIXO `figd_`. Com o placeholder, ele diz "presente", o que aqui significa "a entrada está armada e o JSON é válido", não "há um token real". É exatamente o estado que queremos numa máquina pré-armada. Se quiser ter certeza de que é o placeholder e não um token esquecido, abra o arquivo de config e confirme que o valor é literalmente `figd_SEU_TOKEN_AQUI`.

Não abra o Claude Desktop logado numa conta pessoal aqui. Se precisar abri-lo para conferir que o MCP carrega, use a conta de staging e feche depois.

### 5. Importar o plugin Bridge no Figma Desktop

Com a conta de staging logada no Figma Desktop:

1. Abra o Figma Desktop.
2. Menu: Plugins > Development > Import plugin from manifest...
3. Aponte para o manifest criado no passo 3:
   - Windows: `%USERPROFILE%\.figma-console-mcp\plugin\manifest.json`
   - macOS: `~/.figma-console-mcp/plugin/manifest.json`

Não é mais baixar ZIP do GitHub. O caminho é sempre importar do manifest auto-empacotado.

O registro de plugin de desenvolvimento é local da máquina, não da conta. Ele continua disponível em Plugins > Development mesmo quando o participante trocar para a conta dele no dia. Por isso a importação feita agora sobrevive ao logout da conta de staging.

Se o item "Import plugin from manifest" não estiver disponível: confirme que a pasta do plugin existe (passo 3) e que você está no Figma Desktop, não no navegador.

### 6. Atalhos na área de trabalho

Dois atalhos, para o participante achar o que precisa sem procurar.

Atalho A, o wrapper de token (é o que o participante roda no dia para colar o token real por cima do placeholder). Aponte o atalho para o script REAL dentro do projeto, não copie o script solto: o `setup-figma-mcp.ps1` procura o `mcp-config.mjs` na mesma pasta, então ele precisa continuar em `scripts/`.

Windows (PowerShell) cria um atalho "Configurar Figma MCP" que chama o wrapper no lugar certo:

```powershell
$ws = New-Object -ComObject WScript.Shell
$lnk = $ws.CreateShortcut("$env:USERPROFILE\Desktop\Configurar Figma MCP.lnk")
$lnk.TargetPath = "powershell.exe"
$lnk.Arguments = "-ExecutionPolicy Bypass -NoExit -File `"C:\TDC\figma-to-code-tdc-2026\scripts\setup-figma-mcp.ps1`""
$lnk.WorkingDirectory = "C:\TDC\figma-to-code-tdc-2026\scripts"
$lnk.Save()
```

macOS: deixe o `scripts/setup-figma-mcp.command` acessível com duplo clique. Dê permissão de execução e crie um alias na Mesa:

```bash
chmod +x ~/TDC/figma-to-code-tdc-2026/scripts/setup-figma-mcp.command
ln -sf ~/TDC/figma-to-code-tdc-2026/scripts/setup-figma-mcp.command ~/Desktop/Configurar\ Figma\ MCP.command
```

Se em vez do atalho você optar por COPIAR o script para a área de trabalho, copie junto o `mcp-config.mjs`, senão o wrapper não acha o merge. O atalho evita esse risco.

Atalho B, o projeto. Um atalho para a pasta do projeto, para chegar rápido ao `npm run workshop:start` do exercício.

Windows:

```powershell
$ws = New-Object -ComObject WScript.Shell
$lnk = $ws.CreateShortcut("$env:USERPROFILE\Desktop\Projeto TDC.lnk")
$lnk.TargetPath = "C:\TDC\figma-to-code-tdc-2026"
$lnk.Save()
```

macOS:

```bash
ln -sf ~/TDC/figma-to-code-tdc-2026 ~/Desktop/Projeto\ TDC
```

### 7. Abrir o tutorial (onboarding)

O assistente do QR guia os 5 checkpoints. Deixe aberto no navegador.

- Quando a URL curta estiver publicada: `thiagoxikota.com/tdc`.
- Enquanto isso, abra o arquivo local direto:
  - Windows: `start "" "C:\TDC\figma-to-code-tdc-2026\onboarding\index.html"`
  - macOS: `open ~/TDC/figma-to-code-tdc-2026/onboarding/index.html`

### 8. Abrir o arquivo Figma da demo

Deixe o arquivo público duplicável aberto, pronto para o participante duplicar depois de logar:

`https://www.figma.com/community/file/1659374868260259462`

- Uma aba no navegador com esse link.
- O Figma Desktop aberto (com a conta de staging por enquanto). O frame de leitura é `Tela demo`.

No dia, o participante loga na conta dele, duplica esse arquivo para os drafts, abre a cópia e roda o plugin Bridge nela.

### 9. Testar a rede

Três checagens que não precisam de token real:

1. Registro npm e npx. Já provado no passo 3 (o `npx` baixou o pacote). Reforço rápido:

   ```powershell
   npm ping
   ```

2. GitHub. Já provado no clone do passo 1. Reforço rápido:

   ```powershell
   git ls-remote https://github.com/southleft/figma-console-mcp HEAD
   ```

   Responder com um hash = github acessível para o pacote e para o projeto.

3. WebSocket local da Bridge. A Bridge conecta em 127.0.0.1 nas portas 9223 a 9232. Garanta que:
   - nenhum outro app está segurando essas portas;
   - o firewall do Windows não bloqueia o Node em loopback (se aparecer o aviso de firewall ao subir o MCP, libere para rede privada).

   A prova de ponta a ponta da Bridge (status conectado e leitura do frame) exige token real e é deliberadamente deixada para o dia, no checkpoint 5. Aqui você valida tudo, menos token e login.

---

## Reservas (Reserva 1, 2, 3)

As reservas passam pela MESMA preparação (passos 1 a 9) e, por serem o destino da migração em 2 minutos, ficam um passo à frente:

- Logadas numa conta de staging (não pessoal) no Figma e no Claude Desktop, já aquecidas, para que a migração pule o login.
- Projeto já buildado e preview testado uma vez.
- Mantêm a regra de segurança: organizadores não deixam token pessoal gravado. O participante que migrar cola o próprio token pelo atalho "Configurar Figma MCP" e retoma do checkpoint em que estava.

Gatilho de uso (do runbook da sala): pessoa no minuto 20 sem passar do checkpoint 3, erro de permissão de instalação, Node ausente, ou máquina que não deixa importar plugin. Migrar leva cerca de 2 minutos: senta na reserva, o ambiente já está pronto, cola o token, conecta.

---

## Validação final: a máquina está pronta?

Rode o doctor uma última vez, com o config já armado:

```powershell
npm run workshop:doctor
```

Agora o esperado inclui, além dos OK do passo 2:

- `figma-console no config (-y figma-console-mcp@1.35.0)`.
- `token presente no config` (lembre: é o placeholder; prefixo `figd_` confere).

Checklist de "pronta" (marque cada item por máquina):

- [ ] `node -v` mostra 18 ou mais novo.
- [ ] Projeto em `C:\TDC\figma-to-code-tdc-2026` (ou `~/TDC/...`), com `npm install` e `npm run build` feitos, pasta `dist/` presente.
- [ ] `npm run workshop:doctor` sem nenhuma FALHA.
- [ ] `node scripts/mcp-config.mjs --check` diz `configurado` e `token: presente` (placeholder).
- [ ] Pasta `~/.figma-console-mcp/plugin/manifest.json` existe.
- [ ] Plugin Bridge importado em Figma Desktop > Plugins > Development.
- [ ] Atalho "Configurar Figma MCP" na área de trabalho apontando para `scripts/setup-figma-mcp.ps1` (ou `.command`).
- [ ] Atalho "Projeto TDC" na área de trabalho.
- [ ] Tutorial (onboarding) aberto no navegador.
- [ ] Arquivo Figma da demo aberto no navegador e no Figma Desktop.
- [ ] Rede ok: npm ping responde, `git ls-remote` da bridge responde, portas 9223-9232 livres e loopback liberado.
- [ ] Nenhuma conta pessoal logada, nenhum token real gravado.

Só quando os 12 itens estão marcados a máquina conta como pronta.

---

## Antes de fechar a máquina (véspera)

- Deslogue a conta de staging do Figma e do Claude Desktop nas máquinas do evento (as reservas ficam logadas na staging de propósito).
- Confirme que o config tem só o placeholder `figd_SEU_TOKEN_AQUI`, nunca um token real esquecido.
- Deixe o Figma Desktop e o navegador abertos nos lugares certos (frame `Tela demo` e onboarding), para o participante não caçar nada.

## Teardown pós-evento (pointer)

Depois do workshop, em cada máquina: revogar qualquer token que tenha entrado, remover o MCP com `npm run workshop:setup-mcp -- --remove`, remover o plugin se for o caso, restaurar os componentes com `npm run workshop:reset` (não toca em credencial) e sair de todas as contas. O `--remove` preserva outros servidores MCP e faz backup antes.
