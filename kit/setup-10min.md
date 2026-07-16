# Setup em 10 minutos: reproduza o pipeline em casa

O que a gente não fez no palco (de propósito) está aqui. É uma configuração única, leva uns 10 minutos, e depois o fluxo inteiro (ler, auditar, gerar, validar) roda na sua máquina.

## Escolha seu caminho

| | Figma Console MCP (comunidade) | Figma Dev Mode MCP (oficial) |
|---|---|---|
| Custo | Gratuito | Plano pago com Dev seat |
| Como roda | `npx`, plugin bridge no Figma Desktop | Servidor local do próprio Figma Desktop |
| Autenticação | Token pessoal (figd_...) | Sessão do Desktop |
| Serve pra | Ler arquivo, exportar tokens, auditar, gerar | Fluxo Dev Mode integrado |

Este kit cobre o caminho da comunidade, que é o que usamos no palco. Nenhum dos dois é mágico: o princípio (dar contexto estruturado pro código) é o mesmo nos dois.

## Pré-requisitos

1. Figma Desktop (não o navegador: o plugin bridge só roda no Desktop)
2. Node.js 18 ou mais novo (`node -v` pra conferir)
3. Claude Desktop ou Claude Code (a integração MCP não funciona no Claude web)
4. Conta do Figma (a gratuita serve)

## Passo 1: gere o token do Figma

Figma > menu do usuário > Settings > Security > Personal access tokens > Generate new token.

**Atenção: o token aparece UMA vez só.** Copie na hora e guarde. Se perder, gere outro.

## Passo 2: configure o MCP

**Claude Desktop:** Settings > Developers > Edit Config, e adicione ao `claude_desktop_config.json`:

```json
"mcpServers": {
  "figma-console": {
    "command": "npx",
    "args": ["-y", "figma-console-mcp@latest"],
    "env": {
      "FIGMA_ACCESS_TOKEN": "figd_seuTokenAqui"
    }
  }
}
```

**Claude Code:** na pasta do projeto, `claude mcp add figma-console -e FIGMA_ACCESS_TOKEN=figd_seuTokenAqui -- npx -y figma-console-mcp@latest`

**Trave a versão (importante pra time e pra reprodutibilidade):** `@latest` puxa a versão mais nova toda vez, e um update no meio da semana pode quebrar seu setup sozinho. Pra um fluxo que não pode surpreender (CI, máquina de palestra, time inteiro), rode `npm view figma-console-mcp version`, pegue o número e troque `@latest` pela versão exata que você testou (por exemplo `figma-console-mcp@1.4.2`). No dia de uma demo ao vivo, versão travada não é preciosismo, é seguro.

## Passo 3: instale o plugin bridge no Figma Desktop

1. Baixe o repositório: github.com/southleft/figma-console-mcp (Code > Download ZIP)
2. Figma > Plugins > Development > Import plugin from manifest
3. Selecione o `manifest.json` da pasta `figma-desktop-bridge`
4. Rode o plugin e DEIXE ELE ATIVO enquanto usa o MCP

## Passo 4: teste

Reinicie o Claude por completo, abra uma conversa nova e mande: `Figma status`.
Resposta esperada: conectado via WebSocket Bridge.

## Passo 5: rode o arco do workshop

1. Duplique o arquivo Figma público da demo (link no README)
2. Clone este repositório e rode o preview (`npm install && npm run dev`), ou abra o build pronto em `dist/index.html`
3. Use os prompts de `prompts/prompts.md`, na ordem: ler (1), auditar (4), gerar raso (5a), gerar especificado (5b), validar (6, 9, 10)

## Troubleshooting (a parte que ninguém posta)

- **"Figma status" não conecta:** o plugin bridge precisa estar RODANDO no Figma Desktop naquele momento. Ele desconecta se o Figma dormir ou se você fechar o arquivo. Rode o plugin de novo.
- **Node errado:** `node -v` abaixo de 18 quebra o `npx` do servidor. Atualize pelo site do Node ou via nvm.
- **Firewall corporativo:** a bridge usa WebSocket local; algumas VPNs e antivírus bloqueiam. Teste fora da VPN.
- **Token inválido:** tokens expiram conforme o prazo que você escolheu ao criar. Gere outro e atualize o config.
- **Plano gratuito do Claude esgota rápido:** o fluxo consome contexto. Prompts curtos e objetivos (como os do kit) gastam menos. Pra uso sério, plano pago.
- **Geração lenta:** normal em horário de pico. O tempo varia com o tamanho do frame lido.
- **A IA inventou nome de variável:** você esqueceu de mandar ela ler o tokens.css primeiro. É exatamente o defeito que o prompt 5b previne. A lição é o workshop inteiro.
