# Teste on-metal (o que só o humano roda no hardware real)

Este checklist é turnkey: cada item tem o comando/ação, o resultado esperado e o critério de passa/falha. **Nada aqui foi rodado pelo agente.** É a bateria que Thiago e Bruno rodam nas máquinas de verdade (Windows do evento, reservas, Mac de palco) na semana do evento. Rodar em ordem; parar e resolver no primeiro FALHA.

Fonte técnica: `docs/pipeline-facts.md`. Pacote fixado `figma-console-mcp@1.35.0`, Node 18+.

## A. Rede e firewall (go/no-go, antes de tudo)

Na rede da sala do TDC (não no 4G próprio), numa máquina do evento:

- [ ] `node -v` responde 18+ e `npx -v` responde. FALHA: Node ausente ou antigo.
- [ ] `npx -y figma-console-mcp@1.35.0 --help` (ou primeiro boot do Claude com o config) baixa o pacote sem travar. Prova que o **npm registry** está liberado. FALHA: timeout no download = registry bloqueado.
- [ ] Claude Desktop abre e loga (claude.ai liberado). FALHA: login não completa.
- [ ] Com o plugin Bridge rodando, "Verifique o status da conexão com o Figma" conecta. Prova o **WebSocket local nas portas 9223-9232**. FALHA: conecta o MCP mas o Bridge não responde = porta bloqueada por VPN/antivírus.
- [ ] Duplicar o arquivo público da Community abre no Figma Desktop (figma.com/api.figma.com liberados). 
- [ ] GitHub acessível (o pacote pode tocar github.io). 

Se A falhar em massa: o bloco mão-na-máquina cai pro fallback coletivo (Bruno no teclado). Decidir com a TI até 21/07.

## B. Setup completo na máquina do evento (Windows)

Numa máquina do evento provisionada por `ops/preparar-maquinas.md`:

- [ ] Gerar um token de teste no Figma (Settings > Security > Personal access tokens). Começa com `figd_`.
- [ ] Botão direito em `setup-figma-mcp.ps1` > Run with PowerShell. Colar o token (não aparece na tela). Espera: "figma-console adicionado" ou "atualizado". FALHA: erro de merge ou token impresso na tela.
- [ ] Conferir que o token **não** aparece em lugar nenhum do terminal nem em log.
- [ ] Fechar o Claude Desktop por completo e reabrir. Espera: sobe sem erro; primeira vez pode levar 30-60s baixando o pacote.
- [ ] Figma Desktop > Plugins > Development > rodar o Bridge (pré-importado). Deixar aberto. Selecionar o frame "Tela demo".
- [ ] No Claude, conversa nova: "Verifique o status da conexão com o Figma". Espera: confirma conexão via WebSocket Bridge com o nome do arquivo.
- [ ] "Leia o frame Tela demo..." (prompt 1). Espera: devolve nome do frame, camadas, componentes e tokens (não descrição vaga). FALHA: devolve genérico ou vazio.
- [ ] Exportar tokens (prompt 3). Espera: 1 coleção `Workshop Tokens`, 23 variáveis. Se voltar vazio na primeira, pedir de novo (cache frio) e conferir os 23.
- [ ] Gerar o Card (prompt 5b / GEN). Colar em `src/components/Card.tsx`. `npm run workshop:start`. Espera: preview em localhost:5173, o card renderiza no slot 2.
- [ ] `npm run workshop:check`. Espera: typecheck OK + token check OK (só variável, zero hex cru) no card com contexto.
- [ ] Comparar (prompt 9) e corrigir uma divergência (FIX). Espera: correção landa no preview.
- [ ] `npm run workshop:reset`. Espera: componentes restaurados; **config e token intactos** (o reset não toca credencial).
- [ ] Limpeza: `npm run workshop:setup-mcp -- --remove` + revogar o token de teste no Figma. Espera: figma-console removido, outros MCP preservados.

## C. Setup completo em macOS (Mac de palco e participantes Mac)

Mesma sequência de B, trocando:
- [ ] `scripts/setup-figma-mcp.command` (duplo-clique ou `./setup-figma-mcp.command`) no lugar do `.ps1`.
- [ ] Config em `~/Library/Application Support/Claude/claude_desktop_config.json`.
- [ ] Plugin em `~/.figma-console-mcp/plugin/manifest.json`.
- [ ] Fechar o Claude com Cmd+Q (não só a janela) antes de reabrir.

## D. Estabilidade da auditoria (não-determinismo do LLM)

- [ ] Rodar o prompt 4 (auditar inconsistências) 10+ vezes ao longo da semana contra o arquivo congelado. Espera: os 6 defeitos plantados saem estáveis na maioria das rodadas. FALHA: se instável, a auditoria ao vivo vira confirmação narrada sobre `outputs-prebaked/04-auditoria.md`.

## E. Artefatos de palco

- [ ] `slides/deck.pdf` abre em tela cheia, 15 páginas, 16:9 (1920x1080), sem mojibake (acentos corretos: código, peças, Florianópolis), sem corte de conteúdo no projetor.
- [ ] QR (`qr/kit.png` e `kit-dark-on-light.svg`) escaneia no celular, de longe e projetado, e abre `thiagoxikota.com/tdc`.
- [ ] `onboarding/index.html` copiado pra área de trabalho de cada máquina abre por duplo-clique (file://) e roteia por dispositivo, mesmo sem rede.
- [ ] Vídeo de emergência (`ops/video-emergencia.md`) abre local (disco + pendrive) e tem os capítulos.

## F. Preflight do dia (speaker room, na bateria)

- [ ] `caffeinate -dimsu` rodando (Mac de palco), Do Not Disturb, zero Electron aberto.
- [ ] `figma_get_status` (ou "Figma status") responde OK com o nome do arquivo.
- [ ] Vite rodando, slot 2 vazio, prompts abertos, prebaked na janela de fundo.
- [ ] Rede no 4G próprio, não no wifi do evento.
- [ ] HDMI + espelhamento 1920x1080 confirmado; adaptador reserva na mochila.

## Como reportar

Marcar cada item. Qualquer FALHA vira linha no `ops/contingencias.md` (sintoma > ação). O go/no-go do bloco mão-na-máquina depende de A e B verdes numa máquina do evento até 21/07.
