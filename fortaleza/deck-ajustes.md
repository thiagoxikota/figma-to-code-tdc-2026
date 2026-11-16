# Deck de Fortaleza v9.1: slide a slide

Este arquivo descreve o deck v9.1, com 16 slides seguindo a grade de `roteiro.md`. Montado no Google Slides em 16/11 e exportado para `fortaleza/deck-fortaleza.pdf` (16 páginas, 960 x 540).

**Cópia Fortaleza no Google Slides:** https://docs.google.com/presentation/d/1BCULdnIibjQC0t571Nh77tcL1wnz-PRLkp0gWYTLyhU/edit

**Backup da v8 (17 slides), antes da reconstrução:** https://docs.google.com/presentation/d/1If559sYX9j6idzjM89FIjieSAi37jd58mHGOMRIAUoM/edit

**A apresentação é pelo Google Slides, com as notas do apresentador.** O PDF é reserva e não mostra as notas. Mudou algo no Slides? Exporte o PDF de novo para `fortaleza/deck-fortaleza.pdf` e atualize a tabela abaixo no mesmo commit.


## Regras de todo slide

- Fundo claro liso, fonte Sora, logo xikota no canto superior esquerdo. Vermelho só no destaque.
- Horário só como "até 19h20", no canto superior direito, em 18 pt. A capa mostra "18h00". Sem marcadores de modo e sem "Pronto quando" como rótulo de etapa.
- Linguagem de designer. A frase da casa: "Designer não precisa programar. Precisa dar regra."
- Prompt inteiro só no guia. No slide, no máximo a primeira linha ou a pergunta resumida.
- Corpo de 24 pt ou mais. Legenda em 18 pt. Contraste AA.
- O próprio deck segue o `DESIGN.md`: sem gradiente, sem sombra genérica, sem pílula, sem ícone em círculo, sem emoji. A capa da v8 tinha um borrão vermelho em degradê; na v9.1 o fundo é liso.
- Nunca chamar `#C8352B` de cor errada. O valor é igual ao do token; o que falta é a ligação.
- Os dois erros do molde só aparecem no slide 9, depois de a sala mandar o prompt 1.
- Imagem que não saiu de uma execução real leva a legenda "Exemplo do material". Nenhuma legenda diz "ao vivo".
- As falas ficam nas notas do orador, em linhas curtas de prompter, tiradas de `roteiro.md`.


## A sequência

| # | Canto | Slide | Na tela | Imagem ou diagrama |
|---|---|---|---|---|
| 1 | 18h00 | Capa | "Seu primeiro site, do Figma ao ar" (a segunda linha em vermelho). "Um método que serve para qualquer agente". Nome, evento, Fortaleza 18/11 | sem imagem |
| 2 | até 18h15 | Print ou arquivo? | Print: "Aparência achatada. O agente vê pixels e chuta cor, espaço e fonte." Arquivo (vermelho): "Variável, Auto Layout e hierarquia. O agente não chuta: confere." | frame "Meu portfólio", legenda "Um print mostra só isto." |
| 3 | até 18h15 | As peças | Diagrama 1. "MCP = o protocolo: a regra da conversa." Rodapé: o MCP oficial do Figma é outra rota | diagrama 1 |
| 4 | até 18h45 | Abra o guia pelo QR | "Copie os prompts do guia, não do telão." "Cada prompt uma vez." "meu-site-kit na Área de Trabalho?" Endereço do guia na tag `fortaleza-v4` | QR desenhado no próprio slide |
| 5 | até 18h45 | A ponte em 4 passos | Diagrama 2. "Eu faço junto no telão, devagar. Travou? Levante a mão: os voluntários circulam." | diagrama 2 |
| 6 | até 18h45 | O alô: a primeira vitória | Pergunta do alô resumida; "Confira no Figma: clique no nome e olhe o painel da direita." Em vermelho: "A IA leu uma propriedade do meu frame, e eu conferi no Figma." "Não conectou? Siga a leitura pelo telão e faça o resto igual." | sem imagem |
| 7 | até 18h55 | O harness contra AI slop | "Sem regra, o agente preenche o vazio com a média da internet." Tabela de 3 linhas (abaixo). Rodapé vermelho: a frase da casa | tabela nativa |
| 8 | até 18h55 | Prepare o molde | "2 minutos, sem perfeccionismo." 1 edite direto o frame Meu portfólio; 2 troque nome, bio e projetos; 3 mexa só no texto, as cores ficam. "Duas coisas estão erradas de propósito." | frame "Meu portfólio" |
| 9 | até 19h02 | Prompt 1: leitura e auditoria | 1 anexe o `DESIGN.md`; 2 mande o prompt 1; 3 o agente compara com as suas regras. Caixa Bio: `#A29B93` digitado direto, certo `color/text-muted`. Caixa Botão Fale comigo: `#C8352B` digitado direto, sem ligação com `color/brand-primary`. "O valor é igual. A ligação não existe. Se a marca mudar, esse botão fica para trás." | caixas nativas |
| 10 | até 19h10 | Prompt 2: o index.html | "Um arquivo, com o CSS dentro, já corrigido." 1 prompt 2; 2 baixe para `meu-site`; 3 dois cliques, abre no navegador. Plano B: TextEdit em texto simples. Plano C: site reserva do kit | sem imagem |
| 11 | até 19h20 | Confira como designer | 4 conferências: texto igual ao do frame, bio legível, botão na cor da marca, tela estreita em 1 coluna. "Um ajuste, pedido como designer, terminando com: “Não mude mais nada.”" | frame (legenda "No Figma") e site reserva (legenda "Exemplo do material") lado a lado |
| 12 | até 19h30 | Pasta, GitHub e Netlify | Diagrama 3. "Hoje vocês pulam o cofre e vão direto para a vitrine." | diagrama 3 |
| 13 | até 19h30 | No ar | 1 app.netlify.com/drop; 2 arraste a pasta `meu-site` inteira; 3 janela anônima; 4 celular. Atalhos da janela anônima. "Seu primeiro site está no ar." | sem imagem |
| 14 | até 19h40 | Próximo passo: GitHub + Netlify | 1 peço um ajuste ao agente; 2 a mudança vai para o GitHub; 3 o site atualiza sozinho. "Não é obrigatório hoje. Fica de lição de casa." | demo ao vivo no navegador |
| 15 | até 19h40 | Galeria relâmpago | "Qual regra do seu DESIGN.md fez diferença?" "Três links da sala no telão." | os links da sala, no navegador |
| 16 | até 19h40 | Revogue a chave. Às 20h, Mateus | Settings > Security > Personal access tokens > Revoke em todas. "Pronto quando a lista não mostra mais nenhuma." "Às 20h, depois do coffee, com o Mateus Villain: levem a pasta handoff da Área de Trabalho." Rodapé: o método e a frase da casa | sem imagem |


## Os diagramas e a tabela

Caixas retas, contorno fino escuro, fundo branco, setas simples. Vermelho só onde marca o destaque.

**Diagrama 1, as peças (slide 3).** Quatro caixas em fila, ligadas por setas nos dois sentidos. Em cima, o tipo em cinza; no meio, o nome; embaixo da caixa, o papel:

1. app, **Figma**: "guarda o design".
2. plugin, **Desktop Bridge**: "abre a porta no Figma".
3. servidor, **Figma Console MCP** (contorno vermelho): "leva o pedido e traz o arquivo".
4. agente, **Claude Desktop ou Codex**: "escreve o código".

Abaixo: "MCP = o protocolo: a regra da conversa." Rodapé: "O MCP oficial do Figma é outra rota, com requisitos próprios. Hoje vamos por esta."

**Diagrama 2, a ponte em 4 passos (slide 5).** Quatro caixas numeradas em vermelho, com seta entre elas:

1. Figma Desktop: na sua cópia, página Portfólio.
2. Plugin Desktop Bridge: rodando no Figma.
3. Claude Desktop: aberto, depois de fechar por completo.
4. Conversa nova: e o alô.

**Diagrama 3, pasta, GitHub e Netlify (slide 12).** Três caixas: Sua pasta ("onde o site nasce"), GitHub ("cofre com histórico"), Netlify ("vitrine: dá o link"). Setas cheias da pasta ao GitHub e do GitHub ao Netlify, com "próximo passo" sob o GitHub. Linha tracejada vermelha da pasta direto ao Netlify, com "hoje: Netlify Drop".

**Tabela do harness (slide 7).** Tabela nativa do Slides:

| Onde você roda | Onde mora a regra | Lê sozinho? |
|---|---|---|
| Claude Desktop (chat) | `DESIGN.md` anexado na conversa, ou colado no prompt | Não. Anexe em toda conversa nova (em vermelho) |
| Claude Code | `CLAUDE.md` na pasta do projeto | Sim |
| Codex | `AGENTS.md` na pasta do projeto | Sim |


## De onde vem cada imagem

Nenhuma captura é inventada.

- **Frame "Meu portfólio"** (slides 2, 8 e 11): `fortaleza/img/frame-meu-portfolio.png`, inserido pela URL raw do GitHub na `main`.
- **Site reserva** (slide 11, legenda "Exemplo do material"): `fortaleza/img/site-reserva.png`, também pela URL raw da `main`.
- **QR do guia** (slide 4): `qr-guia.png` e `qr-guia.svg` foram refeitos com segno para `https://github.com/thiagoxikota/figma-to-code-tdc-2026/blob/fortaleza-v4/fortaleza/guia-participante.md`. No slide, o QR é desenhado com retângulos nativos do Slides, sem arquivo hospedado; a leitura foi conferida na miniatura renderizada. O link só abre depois de a tag `fortaleza-v4` existir no GitHub. Se a URL mudar, o QR do slide precisa ser redesenhado.

**Espaço reservado para o ensaio** (capturas que podem entrar depois, sempre ditas como ensaio):

| Slide | Captura do ensaio |
|---|---|
| 6 | O Claude Desktop respondendo o arquivo e o tamanho da fonte |
| 9 | A resposta do prompt 1, com os dois pontos |
| 10 | O `index.html` do ensaio aberto no navegador |
| 13 | O Netlify Drop com o link gerado |
| 14 | Reserva da demo GitHub+Netlify |
