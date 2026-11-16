# Deck de Fortaleza v10: slide a slide

Este arquivo descreve o deck v10, com 16 slides seguindo a grade v10 de `.critica/spec-v9.md` (seção "## v10"). Montado no Google Slides em 16/11 e exportado para `fortaleza/deck-fortaleza.pdf` (16 páginas, 960 x 540).

**Cópia Fortaleza no Google Slides:** https://docs.google.com/presentation/d/1BCULdnIibjQC0t571Nh77tcL1wnz-PRLkp0gWYTLyhU/edit

**Backup da v9.1, antes da reconstrução:** https://docs.google.com/presentation/d/1n1a9pa95XMcuP6NTCwRu_wXOJmZ_145LdtS9yxayJHY/edit

**Backup da v8 (17 slides):** https://docs.google.com/presentation/d/1If559sYX9j6idzjM89FIjieSAi37jd58mHGOMRIAUoM/edit

**A apresentação é pelo Google Slides, com as notas do apresentador.** O PDF é reserva e não mostra as notas. Mudou algo no Slides? Exporte o PDF de novo para `fortaleza/deck-fortaleza.pdf` e atualize a tabela abaixo no mesmo commit.


## Regras de todo slide

- Xikota System com Apple: fundo branco `#FFFFFF`, tinta sumi `#161722`, texto secundário `#4C4A45`, Sora em tudo, títulos em 700. Sem creme.
- Superfícies arredondadas cinza claro (`#F3F3F4`), sem traço. Nenhum contorno preto ou vermelho de 1 px. O canto arredondado é montado com dois retângulos e quatro círculos agrupados, porque a API do Slides não controla o raio do `ROUND_RECTANGLE`.
- Logos no lugar de caixas de texto: Figma, Claude, OpenAI, Node.js, Netlify, GitHub, React, PageSpeed Insights, Mobbin, o símbolo do MCP e ícones Hugeicons (plugin, arquivo, navegador, terminal).
- Vermelho em um foco só por slide: `#DC000C` no claro, `#FF2A1C` no escuro.
- Aberturas de bloco em fundo void `#0B0C11` (slides 8 e 11).
- Nenhum horário no slide. O horário-alvo fica na primeira linha das notas.
- Sem gradiente, sem sombra genérica, sem pílula, sem ícone dentro de círculo, sem emoji, sem travessão.
- Print real só do ensaio. Onde ainda não há print, um espaço cinza arredondado com o rótulo "Print do ensaio", nunca interface falsa.
- Prompt inteiro só no guia. No slide, no máximo a primeira linha ou a pergunta resumida.
- Notas do orador em linhas curtas de prompter.


## A sequência

| # | Horário-alvo (notas) | Slide | Composição | Na tela |
|---|---|---|---|---|
| 1 | 18h00 | Capa | texto à esquerda, imagem dominante à direita | "Figma + IA, na prática" ("na prática" em vermelho), "do seu Figma ao primeiro site", `hero-exemplo-thiago.png` grande, legenda "Exemplo pronto: a hero do Thiago, no Figma", nome e evento |
| 2 | até 18h05 | O que vamos fazer hoje | três cartões | 1 o agente edita sua hero no Figma (número em vermelho, logo Figma); 2 ela vira HTML (ícone de arquivo); 3 você confere (ícone de navegador). "E, se der tempo, no ar." |
| 3 | até 18h10 | As peças | fileira de logos | Figma "onde está o arquivo"; Desktop Bridge "plugin que abre a conversa com o arquivo aberto"; Figma Console MCP "servidor que dá ferramentas ao agente"; Claude / Codex "o agente: lê e altera o design, e escreve o código". "MCP é o protocolo" em vermelho |
| 4 | até 18h13 | Abra o guia | tipografia e QR | "Abra o guia", "Copie do guia, não do telão." QR desenhado no slide para a tag `fortaleza-v5`, link curto do repositório |
| 5 | até 18h22 | Instale e confira | lista com logos e captura | Node.js (`node -v`), instalador do kit, Claude Desktop reiniciado. "Você deve ver isto" em vermelho sobre o espaço de print |
| 6 | até 18h30 | O plugin no Figma | captura dominante | caminho do plugin, "Local · ready" em vermelho, espaço de print grande |
| 7 | até 18h35 | O alô de leitura | cartão escuro e número | pergunta do alô no cartão escuro, "104" grande em vermelho, conferir no painel da direita |
| 8 | 18h35 | Sua hero pelo agente | abertura escura | "Sua hero pelo agente" ("pelo agente" em vermelho), "O agente escreve no seu Figma. Você confere." |
| 9 | até 18h50 | Prompt 1 | cartão escuro e passos | primeira linha do prompt 1, "+ dados do meus-dados.txt" em vermelho, 3 passos, "Confira: as camadas seguem editáveis." |
| 10 | até 18h55 | Antes e depois | comparação | `hero-molde.png` e `hero-exemplo-thiago.png` lado a lado, "Depois" em vermelho |
| 11 | 18h55 a 19h00 | Comentário no Figma | abertura escura com demo | "Comentário no Figma: o agente lê e aplica", handoff em uma linha, espaço de print "gravação reserva" |
| 12 | até 19h05 | Regras escritas | cartão de código e dois cartões | trecho real do `meu-site-kit/DESIGN.md`; Harness "contexto + ferramentas + execução", "O DESIGN.md é uma parte."; chat do Claude Desktop (anexa) e Claude Code (lê da pasta) |
| 13 | até 19h20 | Prompt 2: o index.html | diagrama de três peças | Minha hero, `index.html` em vermelho, Navegador. Plano B (TextEdit) e site reserva no rodapé |
| 14 | até 19h30 | Confira como designer | Figma ao lado do navegador | hero do exemplo e espaço de print do navegador; "Um ajuste por vez, terminando com: “Não mude mais nada.”" em vermelho |
| 15 | até 19h35 | Próximos passos | bento com logos | Netlify Drop (grande), GitHub, PageSpeed Insights, React Bits, Mobbin (Mobbin MCP: Pro e Team), faixa "Galeria" em vermelho |
| 16 | até 19h40 | Revogue e Mateus | divisão clara e escura | "Revogue só o token do workshop" com o caminho no Figma; painel escuro "Às 20h, Mateus Villain. Levem a pasta handoff." |


## Pendências

- [VERIFICAR] Primeira linha do prompt 1 no slide 9 ("Altere só o frame “Minha hero” no Figma, com os meus dados abaixo.") precisa bater com o guia reescrito.
- [VERIFICAR] Pergunta do alô no slide 7 e o tamanho 104 precisam bater com o guia e com o molde.
- [VERIFICAR] Prints do ensaio nos slides 5, 6, 11 e 14: trocar o espaço cinza pela captura real com `replaceImage`.
- [VERIFICAR] Encurtador para o link do slide 4; sem domínio novo sem ordem.
- O QR aponta para `blob/fortaleza-v5/fortaleza/guia-participante.md`: a tag precisa existir antes do dia.
- Logos inseridos por URL pública (Iconify via images.weserv.nl, ícone oficial do Mobbin). O Slides guarda a cópia; não dependem do link depois de inseridos.
- Script de montagem: `/tmp/fortaleza-v10/work/build.py` e `notes.py` (temporários).
