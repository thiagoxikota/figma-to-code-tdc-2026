# Deck de Fortaleza v10: slide a slide

Este arquivo descreve o deck v10, com 16 slides seguindo a grade v10 de `.critica/spec-v9.md` (seção "## v10"). Montado no Google Slides em 16/11 e exportado para `fortaleza/deck-fortaleza.pdf` (16 páginas, 960 x 540). Em 18/11 ganhou 14 slides bônus depois do fecho (B1 a B14; o slide 11 saiu do deck), e o PDF passou a 29 páginas.

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
| 4 | até 18h13 | Abra o guia | tipografia e QR | "Abra o guia", "Copie do guia, não do telão." QR desenhado no slide para a raiz do `figma-ia-na-pratica` (conferido por leitura do QR em 18/11), link curto do repositório |
| 5 | até 18h22 | Instale e confira | lista com logos e captura | Node.js (`node -v`), instalador do kit, Claude Desktop reiniciado. "Você deve ver isto" em vermelho sobre o espaço de print |
| 6 | até 18h30 | O plugin no Figma | captura dominante | caminho do plugin, "Connected" em vermelho, espaço de print grande |
| 7 | até 18h35 | O alô de leitura | cartão escuro e número | pergunta do alô no cartão escuro, "Fale comigo" grande em vermelho, conferir olhando o frame |
| 8 | 18h35 | Sua hero pelo agente | abertura escura | "Sua hero pelo agente" ("pelo agente" em vermelho), "O agente escreve no seu Figma. Você confere." |
| 9 | até 18h50 | Prompt 1 | cartão escuro e passos | primeira linha do prompt 1, "+ dados do meus-dados.txt" em vermelho, 3 passos, "Confira: as camadas seguem editáveis." |
| 10 | até 18h55 | Antes e depois | comparação | `hero-molde.png` e `hero-exemplo-thiago.png` lado a lado, "Depois" em vermelho |
| 11 | 18h55 a 19h00 | Comentário no Figma | abertura escura com demo | "Comentário no Figma: o agente lê e aplica", handoff em uma linha, espaço de print "gravação reserva" |
| 12 | até 19h05 | Regras escritas | cartão de código e dois cartões | trecho real do `meu-site-kit/DESIGN.md`; Harness "contexto + ferramentas + execução", "O DESIGN.md é uma parte."; chat do Claude Desktop (anexa) e Claude Code (lê da pasta) |
| 13 | até 19h20 | Prompt 2: o index.html | diagrama de três peças | Minha hero, `index.html` em vermelho, Navegador. Plano B (TextEdit) e site reserva no rodapé |
| 14 | até 19h30 | Confira como designer | Figma ao lado do navegador | hero do exemplo e espaço de print do navegador; "Um ajuste por vez, terminando com: “Não mude mais nada.”" em vermelho |
| 15 | até 19h35 | Próximos passos | bento com logos | Netlify Drop (grande), GitHub, PageSpeed Insights, React Bits, Mobbin (Mobbin MCP: Pro e Team), faixa "Galeria" em vermelho |
| 16 | até 19h40 | Fecho e LinkedIn | fundo branco, frase grande em preto | "A barreira do código caiu. O olhar continua sendo seu." (emoji 👀 posto pelo Thiago) em destaque; QR code do LinkedIn (linkedin.com/in/thiagoxikota), "Thiago Xikota" e "Vamos continuar a conversa no LinkedIn" |
| B1 | bônus | Bônus | abertura escura | "Bônus" e "para quem quer ir além" em vermelho; "Só se a sala inteira chegou aqui." |
| B2 | bônus | Quebra-gelo | três perguntas e hero | crítica do diretor de arte com "Concorda com o agente?" em vermelho; `hero-exemplo-thiago.png` |
| B3 | bônus | Fluxos opcionais | quatro cartões com ícone | Handoff, Versão celular, Codex na mesma ponte, Site no ar; rodapé em vermelho |
| B4 | bônus | Site no ar: Netlify | pra que, quando, outras opções e cartão escuro "Como" | Vercel, GitHub Pages, Cloudflare Pages; três passos do Drop |
| B5 | bônus | Histórico do site: GitHub | pra que, quando, outras opções e cartão escuro "Como, sem terminal" | GitHub Desktop, GitLab, Bitbucket; New repository, upload, Commit changes, Import an existing project |
| B6 | bônus | Handoff, celular e Codex | três cartões "O que é, Quando, Como" | prompts no guia, seção Bônus |
| B7 | bônus | Case: portfólio | texto e print computador + celular | prints reais de thiagoxikota.com, logos Claude, GitHub, Netlify |
| B8 | bônus | Case: Touch Grass | texto e print | print real do repositório público `thiagoxikota/touch-grass` |
| B9 | bônus | Mais dicas | lista numerada | "não mude mais nada." em vermelho |
| B10 | bônus | Roube minha stack | cinco cartões e três skills | Claude Code, Codex, Figma Console MCP, Context7, Playwright MCP; frontend-design, superpowers, skill-creator |
| B11 | bônus | Sites para roubar | grade de prints reais | Refero, Mobbin, Land-book, Godly, shadcn/ui, React Bits |
| B12 | bônus | Ícones, fontes e docs | quatro prints reais | Hugeicons, Fontshare, Context7, superpowers |
| B13 | bônus | Plano B: instalação manual | passos e cartão de código | Edit Config, bloco JSON (Mac) e variação Windows com `cmd /c` |
| B14 | bônus | Plano B: o plugin e o teste | passos e print real | Import plugin from manifest, caminhos Mac e Windows, "Connected" em vermelho, `print-06-plugin.png` |


## Pendências

- [VERIFICAR] Primeira linha do prompt 1 no slide 9 ("Altere só o frame “Minha hero” no Figma, com os meus dados abaixo.") precisa bater com o guia reescrito.
- Pergunta do alô no slide 7 e o "Fale comigo" batem com o guia e com o molde.
- [VERIFICAR] Prints do ensaio nos slides 5, 6, 11 e 14: trocar o espaço cinza pela captura real com `replaceImage`.
- O QR e o link do slide 4 apontam para https://github.com/thiagoxikota/figma-ia-na-pratica.
- Logos inseridos por URL pública (Iconify via images.weserv.nl, ícone oficial do Mobbin). O Slides guarda a cópia; não dependem do link depois de inseridos.
- Script de montagem: `/tmp/fortaleza-v10/work/build.py` e `notes.py` (temporários). Bônus: `deck-build/bonus.py` (refaz os slides B1 a B14 sem tocar no resto).
- Prints do bônus capturados em 18/11 com Playwright, em `img/bonus/`, servidos pelo raw do GitHub.
