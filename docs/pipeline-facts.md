# Fatos verificados do pipeline (fonte técnica única)

Verificado ao vivo em 16/07/2026 contra o npm, o repositório `southleft/figma-console-mcp` e a bridge conectada de verdade (probe 23ms, arquivo "TDC 2026 - Do Figma ao codigo - DEMO"). Tudo abaixo é o que os materiais do workshop devem usar. Nada aqui é inventado; se um material divergir, ele está errado, não este arquivo.

## Arquitetura (a única do workshop)

```
Claude Desktop
      ↓  (MCP, stdio local via npx)
Figma Console MCP  (figma-console-mcp)
      ↓  (WebSocket local, portas 9223-9232)
Plugin Desktop Bridge  (~/.figma-console-mcp/plugin)
      ↓
Figma Desktop  (arquivo aberto, plugin rodando)
```

Sem MCP remoto oficial, sem Dev Mode MCP, sem Claude no navegador, sem claude.ai, sem screenshot. A decisão está tomada.

## Pacote e versão

- Pacote npm: `figma-console-mcp` (comunidade, open source, MIT).
- Repositório: `https://github.com/southleft/figma-console-mcp`.
- Última no npm em 16/07: `1.35.0`. **Versão fixada para o workshop: `figma-console-mcp@1.35.0`** (testada no ensaio). Fixar é obrigatório: `@latest` pode mudar no meio da semana e quebrar o setup sozinho.
- Node mínimo: 18 (máquina de teste rodou v22.14.0).

## Configuração do Claude Desktop (verbatim)

Arquivo de config:
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Linux (não-oficial): `~/.config/Claude/claude_desktop_config.json`

Entrada a inserir em `mcpServers` (preservando qualquer outra que já exista):

```json
{
  "mcpServers": {
    "figma-console": {
      "command": "npx",
      "args": ["-y", "figma-console-mcp@1.35.0"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "figd_SEU_TOKEN_AQUI",
        "ENABLE_MCP_APPS": "true"
      }
    }
  }
}
```

Depois de salvar: **feche o Claude Desktop por completo e reabra** (no macOS é Cmd+Q, não só fechar a janela). O MCP só carrega no boot do app.

## Token do Figma

- Figma > menu do usuário > Settings > Security > Personal access tokens > Generate new token.
- Escopos mínimos: `file_content:read`, `file_variables:read`, `file_comments:read`, `file_comments:write`.
- Prefixo esperado: começa com `figd_`. Aparece **uma vez só**; copie na hora.
- O token é local. Nunca passa pelo site do workshop, por analytics, por URL, por banco, nem pelos organizadores.

## Plugin Desktop Bridge (fluxo ATUAL, 1.35.0)

Mudou em relação ao passo antigo de "baixar ZIP do GitHub". Na 1.35.0 o plugin é **auto-empacotado** pelo próprio MCP num caminho estável:

- macOS: `~/.figma-console-mcp/plugin/manifest.json`
- Windows: `%USERPROFILE%\.figma-console-mcp\plugin\manifest.json`

Importar: Figma Desktop > Plugins > Development > Import plugin from manifest... > selecionar o `manifest.json` do caminho acima. Rodar o plugin e **deixar ativo** enquanto usa o MCP. Ele varre as portas 9223-9232 e conecta sozinho.

O caminho é criado/atualizado quando o MCP sobe pela primeira vez (o `npx` roda no primeiro boot do Claude Desktop com o config já salvo). Ou seja: salve o config e reabra o Claude ANTES de tentar importar o plugin, senão a pasta pode ainda não existir.

## Teste de conexão

No Claude Desktop, conversa nova: **"Verifique o status da conexão com o Figma"** (ou "Figma status").
Sucesso = resposta confirmando conexão via WebSocket Bridge, com o nome do arquivo aberto.

Não aceitar "o MCP aparece na lista" como sucesso. O teste real: pedir para o Claude **ler o frame** e conferir se ele devolve dados específicos do arquivo (nome do frame, tokens, camadas).

## Arquivo Figma da demo

- Arquivo de trabalho (bridge): "TDC 2026 - Do Figma ao codigo - DEMO", fileKey `aV212CPkZcQVFr7Sa97BAr`, página "01 Comece aqui" (o frame "Tela demo" fica dentro do passo 4, A missão).
- Arquivo público duplicável (participantes): `https://www.figma.com/community/file/1659374868260259462`.
- Frame de leitura: `Tela demo`. Estrutura confirmada via MCP (16/07): título "Criar sua conta", caption de baixo contraste `#a29b93` (defeito plantado 3), grupo `fields` com Input email (fiel) e Input nome (outline, defeito 4), opt-in, e "Botao continuar" (frame DESACOPLADO do componente Button, fill cru `#c8352b`, defeito 1). Seis defeitos plantados no total (ver `outputs-prebaked/04-auditoria.md`).
- Tokens da demo (confirmado ao vivo 16/07 com `refreshCache`): 1 coleção `Workshop Tokens`, 23 variáveis (10 COLOR, 13 FLOAT). Nomes: `color/brand-primary`, `color/brand-primary-hover`, `color/surface`, `color/surface-alt`, `color/text`, `color/text-muted`, `color/border`, `color/focus`, `color/disabled-bg`, `color/disabled-text`, `space/1..4`, `radius/md`, `border/width`, `focus/ring-width`, `tap-target/min`, `size/icon`, `font-size/body`, `font-size/heading`, `font-weight/heading`, `line-height/body`.
- Gotcha do cache (resolvido): a primeira chamada de `figma_get_variables` logo após reconectar pode voltar do cache com 0 coleções. Uma segunda chamada (ou `refreshCache`) traz as 23. No palco: se o prompt 3 (exportar tokens) voltar vazio, é cache frio, peça de novo; não é o arquivo sem tokens.

## Claude Desktop x Claude Code

O workshop inteiro roda em **Claude Desktop**. Claude Code funciona com o mesmo MCP (`claude mcp add figma-console -s user -e FIGMA_ACCESS_TOKEN=figd_... -e ENABLE_MCP_APPS=true -- npx -y figma-console-mcp@1.35.0`) e fica no kit/tutorial como alternativa para casa, mas **não é oferecido como bifurcação na sala**. Um caminho só reduz erro coletivo.
