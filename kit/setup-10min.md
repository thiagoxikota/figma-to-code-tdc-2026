# Setup em 10 minutos: reproduza o pipeline em casa

Na sala, cada dupla instala o MCP de verdade e faz o Claude ler um frame real. Este kit é o mesmo caminho, passo a passo, pra você refazer sozinho em casa ou concluir o que ficou pela metade no evento. É uma configuração única, leva uns 10 minutos, e depois o fluxo inteiro (ler, gerar, comparar, corrigir) roda na sua máquina.

## Escolha seu caminho

| | Figma Console MCP (comunidade) | Figma MCP oficial |
|---|---|---|
| Custo | Gratuito, open source | Servidor remoto: todos os planos e assentos. Servidor desktop: assento Dev ou Full, planos pagos. |
| Como roda | `npx`, plugin bridge no Figma Desktop | Remoto: endpoint `mcp.figma.com`. Desktop: servidor local do Figma Desktop. |
| Autenticação | Token pessoal (figd_...) | Sessão do Figma |
| Serve pra | Ler arquivo, exportar tokens, auditar, gerar | Fluxo oficial integrado |

Requisitos de plano e assento do MCP oficial mudam rápido; a referência é a doc da Figma (help.figma.com, "Guide to the Figma MCP server", verificado em 15/07/2026: servidor remoto em todos os planos e o caminho recomendado pela Figma; servidor desktop em assento Dev ou Full pago). Usamos o Figma Console MCP da comunidade neste kit porque é o que roda no workshop e não depende de plano pago.

Este kit cobre o caminho da comunidade, que é o que usamos no palco. Nenhum dos dois é mágico: o princípio (dar contexto estruturado pro código) é o mesmo nos dois.

## Fluxo único da sala (e deste kit)

```
Claude Desktop
      ->  (MCP, npx local)
Figma Console MCP  (figma-console-mcp@1.35.0)
      ->  (WebSocket local, portas 9223-9232)
Plugin Bridge, "Figma Desktop Bridge"  (~/.figma-console-mcp/plugin)
      ->
Figma Desktop  (arquivo aberto, plugin rodando)
```

Claude Desktop é o cliente. Claude Code roda o mesmo MCP e está aqui como alternativa pra casa (no fim deste arquivo), nunca como uma segunda opção pra decidir no meio do setup.

## Pré-requisitos

1. Figma Desktop (não o navegador: o plugin bridge só roda no Desktop)
2. Node.js 18 ou mais novo (`node -v` pra conferir)
3. Claude Desktop (a integração MCP não funciona no Claude web)
4. Conta do Figma (a gratuita serve)

## Passo 1: gere o token do Figma

Figma > menu do usuário > Settings > Security > Personal access tokens > Generate new token. Em Expiration, escolha a validade mais curta que cobre o seu uso (pro workshop, 1 dia dá e sobra: mesmo esquecido, o token morre sozinho).

Escopos: `file_content:read`, `file_variables:read`, `file_comments:read`, `file_comments:write` (os mesmos de `docs/pipeline-facts.md`).

**Atenção: o token aparece UMA vez só.** Ele começa com `figd_`. Copie na hora e guarde. Se perder, gere outro. O token é local: nunca passa pelo site do workshop, por URL, por analytics, nem pelos organizadores.

## Passo 2: configure o MCP no Claude Desktop

Claude Desktop > Settings > Developers > Edit Config. Abra o `claude_desktop_config.json`:

- Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`

Adicione a entrada em `mcpServers` (preservando o que já existir lá):

```json
{
  "mcpServers": {
    "figma-console": {
      "command": "npx",
      "args": ["-y", "figma-console-mcp@1.35.0"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "figd_seuTokenAqui",
        "ENABLE_MCP_APPS": "true"
      }
    }
  }
}
```

Dois detalhes que não são opcionais:

- **Versão fixada em `figma-console-mcp@1.35.0`**, não `@latest`. `@latest` puxa a versão mais nova toda vez, e um update no meio da semana pode quebrar seu setup sozinho. Pra um fluxo que não pode surpreender (máquina de palestra, time inteiro, CI), versão travada não é preciosismo, é seguro. Foi a 1.35.0 que testamos.
- **`ENABLE_MCP_APPS` em `"true"`** no `env`. É o que habilita o app do MCP dentro do Claude; sem isso a conexão com a bridge não sobe direito.

Depois de salvar: **feche o Claude Desktop por completo e reabra** (no macOS é Cmd+Q, não só fechar a janela). O MCP só carrega no boot do app.

## Passo 3: importe o plugin Desktop Bridge no Figma

O plugin não é mais "baixar ZIP do GitHub". A partir da 1.35.0, o próprio MCP empacota o plugin num caminho estável na sua máquina quando sobe pela primeira vez:

- macOS: `~/.figma-console-mcp/plugin/manifest.json`
- Windows: `%USERPROFILE%\.figma-console-mcp\plugin\manifest.json`

Passos:

1. Garanta que você já salvou o config e reabriu o Claude Desktop no Passo 2. É o primeiro boot do MCP que cria essa pasta; antes disso ela pode nem existir.
2. No Figma Desktop: Plugins > Development > Import plugin from manifest...
3. Selecione o `manifest.json` do caminho acima.
4. Rode o plugin e **deixe ele ativo** enquanto usa o MCP. Ele varre as portas 9223-9232 e conecta sozinho.

## Passo 4: teste de verdade

Abra o Figma Desktop no arquivo da demo (duplique o arquivo público, link no README) com o plugin rodando. No Claude Desktop, numa conversa nova:

1. Mande: **"Verifique o status da conexão com o Figma"**. Sucesso = ele confirma a conexão via WebSocket Bridge e diz o nome do arquivo aberto.
2. Não pare aí. Peça pra ele **ler o frame "Tela demo"** e confira se ele devolve dado específico do arquivo (título, cores, camadas). O MCP aparecer na lista não é teste; ler o frame e voltar com o conteúdo é.

## Passo 5: rode o arco do workshop

1. Duplique o arquivo Figma público da demo (link no README).
2. Clone este repositório e rode o preview (`npm install && npm run workshop:start`).
3. Use os prompts de `prompts/prompts.md`, na ordem: ler o frame, gerar o componente com o Figma via MCP, abrir o preview, comparar Figma vs implementação, corrigir uma divergência consultando o frame de novo.

## Nas máquinas do evento

As máquinas do evento vêm CRUAS: só Figma Desktop, Claude Desktop e Node. Sem repositório, sem projeto, sem scripts. Nelas o caminho é o guia da sala (thiagoxikota.com/tdc): colar o JSON de config na mão, gerar o próprio token e importar o plugin. Não tente rodar script deste repositório lá; ele não existe na máquina.

Os scripts abaixo valem só pra máquina de palco, pras 3 reservas provisionadas e pra sua máquina de casa (com o repositório clonado):

- macOS: rode `scripts/setup-figma-mcp.command`.
- Windows: rode `scripts/setup-figma-mcp.ps1`.

Os dois fazem o merge idempotente e seguro do `claude_desktop_config.json` (não sobrescrevem outras entradas de MCP) e deixam o env pronto; você só cola o seu token. Pra remover no fim, `npm run workshop:setup-mcp -- --remove`.

Deu algo errado numa máquina COM o repositório (palco, reserva, casa): `npm run workshop:doctor`. Ele diagnostica Node, npm, a estrutura do projeto, as portas do preview e o config do Claude (sem nunca imprimir o token). Plugin e conexão ele NÃO testa: isso você prova no próprio Claude, com o prompt de status. No fim de tudo, revogue o token no Figma (Settings > Security > Personal access tokens > Revoke): na máquina que não é sua é obrigatório, na sua é a higiene recomendada.

## Troubleshooting (a parte que ninguém posta)

- **"Verifique o status" não conecta:** o plugin bridge precisa estar RODANDO no Figma Desktop naquele momento. Ele desconecta se o Figma dormir ou se você fechar o arquivo. Rode o plugin de novo e confirme que o arquivo da demo está aberto.
- **A pasta do plugin não existe:** você tentou importar antes do primeiro boot do MCP. Salve o config, feche e reabra o Claude Desktop, espere ele subir e só então importe o `manifest.json`.
- **Node errado:** `node -v` abaixo de 18 quebra o `npx` do servidor. Atualize pelo site do Node ou via nvm.
- **Firewall corporativo:** a bridge usa WebSocket local nas portas 9223-9232; algumas VPNs e antivírus bloqueiam. Teste fora da VPN.
- **Token que some ou inválido:** o token aparece uma vez só e expira conforme o prazo que você escolheu ao criar. Se perdeu ou venceu, gere outro, atualize o `env` do config e reabra o Claude.
- **Plano gratuito do Claude esgota rápido (rate limit):** o fluxo consome contexto. Prompts curtos e objetivos (como os do kit) gastam menos. Pra uso sério, plano pago.
- **Geração lenta:** normal em horário de pico. O tempo varia com o tamanho do frame lido.
- **A IA inventou nome de variável:** você não mandou ela ler o frame e os tokens primeiro. Contexto bagunçado gera código bagunçado. Peça pra ela ler o frame de novo antes de gerar. Essa é a lição do workshop inteiro.

## Alternativa pra casa: Claude Code

Se você usa Claude Code em vez do Claude Desktop, o mesmo MCP funciona. Na pasta do projeto:

```
claude mcp add figma-console -s user -e FIGMA_ACCESS_TOKEN=figd_seuTokenAqui -e ENABLE_MCP_APPS=true -- npx -y figma-console-mcp@1.35.0
```

O resto (token, plugin bridge, teste, arco) é igual. Na sala a gente não oferece essa bifurcação de propósito: um caminho só reduz erro coletivo. Em casa, escolha o que já é seu.

## Limites reais (sem vender ilusão)

- Código gerado por aqui não é código de produção. É ponto de partida, precisa de revisão.
- O MCP não substitui design system: ele lê o que existe. Arquivo bagunçado gera contexto bagunçado.
- Nada disso é mágica. O ganho vem de dar contexto estruturado pro modelo, não de confiar cego na primeira saída.
