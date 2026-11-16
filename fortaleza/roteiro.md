# Roteiro: Figma + IA, na prática (Fortaleza, v10)

**Título:** Figma + IA, na prática. **Subtítulo:** do seu Figma ao primeiro site.

Fora do Frame, uma experiência UXFor, 3º dia (workshops presenciais). Quarta, 18/11/2026, Digital College Aldeota, Av. Santos Dumont, 1510, 1º andar, Fortaleza.

Janela do Thiago: 18h00 às 19h40 (100 min). Mesa de instalação com os voluntários às 17h30. Às 19h40 entra o coffee; às 20h, o workshop do Mateus Villain (tokens e componente para código, Style Dictionary), a partir da pasta `handoff`.

**Público: designers.** Linguagem de designer no palco. A frase que costura tudo: "Designer não precisa programar. Precisa dar regra."

Fonte das decisões: `.critica/spec-v9.md` (local, fora do Git), seção v10. Prompts palavra por palavra: `guia-participante.md`. Fala no prompter: `roteiro-prompter.txt`. Deck: `deck-ajustes.md`.

**Horário só aqui e nas notas.** Nenhum slide mostra horário no canto.


## A tese

O foco é o Figma ligado ao agente pelo Figma Console MCP e o plugin Desktop Bridge, a rota gratuita. A primeira experiência da sala é o agente **alterar o Figma da pessoa**, e a pessoa conferir como designer.

1. O agente lê o arquivo do Figma, não um print. (O alô.)
2. O agente escreve no Figma: personaliza a hero com os dados de cada um, sem quebrar as camadas. (Prompt 1.)
3. O designer escreve as regras: `DESIGN.md`, uma parte do harness. (Possibilidades.)
4. O agente transforma a hero em `index.html`, e o designer confere ao lado do frame. (Prompt 2 e conferência.)

**A promessa, dita na abertura:** "Hoje um agente de IA vai mexer no Figma de vocês. E depois vai transformar o que ele fez em site."

**A primeira vitória da sala:** "A IA leu uma propriedade do meu frame, e eu conferi no Figma." É o alô.

**A segunda, a que dá o nome ao workshop:** "A IA escreveu no meu Figma, e as camadas continuam editáveis."

**Cada um conecta o Figma ao próprio agente.** A instalação é no preparo obrigatório de casa: Claude Desktop, com o Codex como alternativa. Mesa de instalação às 17h30. Na sala, o setup guiado é para conferir as peças, ver o plugin em "Local · ready" e fazer o alô; ninguém instala na sala. Quem não conectou segue pelo telão.

**As peças, com o nome certo:**

- **MCP** é o protocolo: a regra de conversa entre o agente e uma ferramenta.
- **Figma Console MCP** (`figma-console-mcp`) é o servidor que fala esse protocolo.
- **Figma Desktop Bridge** é o plugin que roda dentro do Figma e abre a porta para o servidor. É ele que escreve no arquivo; a chave do Figma fica só de leitura.
- **O MCP oficial do Figma** é outra rota, com requisitos próprios. Também escreve no canvas, num beta para planos elegíveis; o Starter (gratuito) fica de fora. Nunca dizer que ele só lê nem que é sempre pago.

**O molde:** página "Minha hero" (a primeira do arquivo da Community), frame "Minha hero", 1440 por 860, com Auto Layout e as variáveis da coleção Workshop Tokens. Camadas: Disponibilidade (ponto e "Status"), Nome (Sora 104), Título profissional (Sora 40, cor `color/brand-primary`), Bio (Inter 22), Ações ("Botão principal" com "Texto do botão", e "Link secundário"), Foto (opcional). Sem projetos e sem erro plantado. Ao lado, "Exemplo pronto: Thiago", a mesma hero personalizada com a foto do Thiago. Imagens: `img/hero-molde.png`, `img/hero-exemplo-thiago.png`.

**Os dados vêm de casa:** cada pessoa preenche o `meu-site-kit/meus-dados.txt` (nome, título, bio, botão e link, cor principal, fundo) e cola no prompt 1. Ninguém escreve bio na sala.

**Mensagens no Claude gratuito:** sem promessa de número. O fluxo usa poucas: o alô, o prompt 1, o prompt 2 e, se sobrar, um ajuste. Cada prompt uma vez. Risco número um do ensaio: o servidor expõe muitas ferramentas no modo local, e a lista pesa no limite da conta gratuita [VERIFICAR no ensaio: quanto]. Quem bater no limite edita a hero à mão no Figma e usa o site reserva do kit (`meu-site-kit/reserva/index.html`).


## Grade v10

| Horário | Bloco | Slides | Min |
|---|---|---|---|
| 17h30 a 18h00 | Mesa de instalação, com os voluntários (fora da grade) | | |
| 18h00 a 18h10 | Abertura: capa com a hero, 1 min de demo do agente mexendo no Figma, as peças com logos | 1 a 3 | 10 |
| 18h10 a 18h35 | Setup guiado: guia e QR, instale e confira, o plugin em "Local · ready", o alô de leitura | 4 a 7 | 25 |
| 18h35 a 18h55 | Sua hero pelo agente: abertura de etapa, prompt 1 escreve no Figma, confira no Figma | 8 a 10 | 20 |
| 18h55 a 19h05 | Possibilidades (telão): comentário lido e aplicado, handoff, regras escritas, harness, Desktop x Code | 11 e 12 | 10 |
| 19h05 a 19h20 | Do Figma ao HTML: prompt 2 com o `DESIGN.md`, baixar, abrir | 13 | 15 |
| 19h20 a 19h30 | Confira como designer: Figma ao lado do navegador, tela estreita, um ajuste | 14 | 10 |
| 19h30 a 19h40 | Próximos passos e galeria, revogar o token do workshop, Mateus às 20h | 15 e 16 | 10 |

Soma: 100 min. A validar no ensaio cronometrado (`checklist-thiago.md`).

### Prioridade quando atrasar

1. **A galeria encolhe primeiro:** um link, ou nenhum.
2. **Depois os próximos passos:** viram o slide 15 parado na tela, com "está tudo no guia".
3. **Depois a demo do comentário:** fica a gravação, sem ao vivo.
4. **O alô, o prompt 1, o prompt 2, a conferência e revogar não são cortados.**
5. Quem atrasou num passo segue com a sala. A conversa continua no Claude, o guia tem tudo e o kit tem o site reserva.


## Bloco a bloco

### 17h30 a 18h00. Mesa de instalação

Os voluntários atendem quem não terminou a conexão em casa (`guia-voluntarios.md`). O Thiago monta o palco e não entra na mesa. Às 18h a mesa fecha.

### 18h00 a 18h10. Abertura (slides 1 a 3)

**Slide 1, capa.** "Figma + IA, na prática", subtítulo "do seu Figma ao primeiro site", com a hero do exemplo (`img/hero-exemplo-thiago.png`) ocupando a tela. Fala: boas-vindas, quem é o Thiago, e a promessa: "Hoje um agente de IA vai mexer no Figma de vocês. E depois vai transformar o que ele fez em site."

**Slide 2, o que vamos fazer hoje.** Demo de 1 minuto: o agente personalizando a hero no Figma, com os textos e a cor mudando no canvas. Fala por cima: "Isso é o que cada um de vocês vai fazer. Não é print, não é imagem gerada. É o arquivo de vocês, com camadas editáveis." [VERIFICAR no ensaio: ao vivo num arquivo de demo separado ou gravação acelerada; se for gravação, dizer que é gravação.] Não usar o arquivo do alô nem gastar o prompt 1 do palco aqui.

**Slide 3, as peças.** Logos em fila, sem caixa de texto: Figma, plugin Desktop Bridge, Figma Console MCP, Claude (e Codex ao lado). Fala, uma linha por peça:

- "O Figma guarda o design."
- "O Desktop Bridge é um plugin. Ele abre uma porta no Figma, e é por ela que o agente lê e escreve."
- "O Figma Console MCP é um servidor. Ele leva o pedido do agente até o plugin."
- "O agente entende o pedido. Hoje é o chat do Claude Desktop. Eu uso o Codex na mesma ponte."

Depois: "MCP é o protocolo, a regra da conversa. É como um cabo USB-C: o agente na ponta pode mudar, a ponte é a mesma." Se perguntarem do MCP oficial do Figma: "É outra rota. Também escreve no canvas, num beta para planos elegíveis, fora do plano gratuito. Hoje a gente vai pela rota que funciona com a conta gratuita."

### 18h10 a 18h35. Setup guiado (slides 4 a 7)

**Slide 4, guia e QR.** QR grande e um link curto [VERIFICAR: encurtador; sem domínio novo sem ordem do dono]. "Abram o guia pelo QR. Copiem os prompts do guia, não do telão. Cada prompt uma vez." Conferir que `meu-site-kit` está na Área de Trabalho e que o `meus-dados.txt` está preenchido. Não preencheu: "Façam agora, dois minutos. Seis linhas."

**Slide 5, instale e confira.** Três quadros: Node (`node -v` com v18 ou maior), o instalador, e "você deve ver isto" com a tela real do instalador terminando bem [VERIFICAR: captura real do setup para o slide]. Fala: "Isso foi feito em casa. Aqui a gente só confere." Claude Desktop fechado por completo depois da instalação (Mac: Cmd+Q). Os voluntários circulam.

**Slide 6, o plugin.** A janelinha do Figma Desktop Bridge com "Local · ready" [VERIFICAR: captura real]. Passos: Figma Desktop com a cópia aberta, página "Minha hero"; Plugins > Development > Figma Desktop Bridge; deixar a janela aberta. Fala: "Viu 'Local · ready'? A porta está aberta." O Thiago faz junto no telão, devagar.

**Slide 7, o alô de leitura: a primeira vitória.** Selecionar o frame "Minha hero" e mandar o prompt do alô: o nome do arquivo e o tamanho da fonte da camada "Nome". O Thiago faz no telão e confere no painel: clica em "Seu Nome", o painel mostra 104. Fala: "A IA leu uma propriedade do frame de vocês. Agora confiram: cliquem no nome e olhem o painel da direita. Bateu? Essa é a primeira vitória. Ela leu o arquivo, não uma imagem." Depois: "Quem não conectou, levanta a mão." Os voluntários conferem plugin e Claude Desktop; ninguém instala na sala. Não deu: segue pelo telão.

### 18h35 a 18h55. Sua hero pelo agente (slides 8 a 10)

**Slide 8, abertura de etapa: "Sua hero pelo agente".** Tela limpa, com o molde (`img/hero-molde.png`). Fala: "Até aqui o agente leu. Agora ele vai escrever. Vocês trouxeram seis dados de casa. O agente vai colocar esses dados no frame de vocês."

**Slide 9, prompt 1: o agente escreve no Figma.** Copiar o `meus-dados.txt`, selecionar o frame "Minha hero" e mandar o prompt 1 do guia, com os dados colados no fim. Se o Claude pedir permissão para usar as ferramentas, permitir. O Thiago manda o mesmo no telão, com os dados dele, e o canvas visível ao lado. Fala enquanto roda: "Reparem no que o prompt pede: só este frame, troca os textos, muda a variável da cor, preserva o Auto Layout, não cria nada novo, não pergunta. Prompt bom é prompt com limite."

**Slide 10, confira no Figma: antes e depois.** O molde e a hero personalizada lado a lado. O Thiago confere no telão, como designer:

1. Os textos são os dados, palavra por palavra.
2. Clica numa camada: continua texto, editável, com o mesmo nome no painel de camadas.
3. Clica no título: a cor continua ligada a `color/brand-primary`, com o valor novo.
4. O "Exemplo pronto: Thiago" também mudou de cor. Fala: "Não é erro. A variável vale para o arquivo todo. É a prova de que a cor está ligada, e não digitada solta."

Fala: "Achou algo errado? Corrijam à mão. O arquivo é de vocês, e continua editável." Foto: opcional, arrastada à mão para o quadro "Foto (opcional)". O agente não mexe na foto.

### 18h55 a 19h05. Possibilidades (slides 11 e 12)

Só telão. A sala não gasta mensagem.

**Slide 11, comentário lido e aplicado, e handoff.** Demo do Thiago: um comentário deixado no frame vira pedido; o agente lê o comentário pela conexão e aplica no canvas. Em seguida, um handoff curto: o agente lê o frame e escreve o que um dev precisa saber (variáveis, espaços, estados). Gravação reserva pronta [VERIFICAR no ensaio: gravação feita e testada]; se o ao vivo falhar, passar a gravação e dizer que é gravação. Fala: "O comentário que vocês deixam para o time pode virar tarefa do agente."

**Slide 12, regras escritas: DESIGN.md e harness, Desktop x Code.** Fala: "Vocês decidiram seis coisas antes de vir. Agora escrevam as regras." E: "Sabe aquele site de IA que todo mundo reconhece? Gradiente roxo, sombra em tudo, botão pílula, ícone dentro de círculo, emoji. Isso acontece quando ninguém deu regra. O agente preenche o vazio com a média da internet."

Harness, com o nome certo: "Harness é tudo o que envolve o agente para ele trabalhar: o contexto que ele recebe, as ferramentas que ele pode usar, como o Figma Console MCP, e o jeito de executar. O DESIGN.md é uma parte disso: as regras de design, num arquivo." Mostrar a tabela:

| Onde você roda | Onde mora a regra | Lê sozinho? |
|---|---|---|
| Chat do Claude Desktop (o de hoje) | `DESIGN.md` anexado na conversa, ou colado no prompt | Não. Anexe em toda conversa nova |
| Claude Code (terminal, ou aba Code do app Desktop) | `CLAUDE.md` na pasta do projeto | Sim |
| Codex | `AGENTS.md` na pasta do projeto | Sim |

Fala: "O chat conversa. O Claude Code trabalha numa pasta do computador. Os dois estão no mesmo app, mas são coisas diferentes. Hoje é o chat, então vocês anexam." Fecha: "Designer não precisa programar. Precisa dar regra. E regra boa é regra escrita."

### 19h05 a 19h20. Do Figma ao HTML (slide 13)

**Slide 13, prompt 2: o `index.html`.** Na mesma conversa, anexar o `DESIGN.md` e mandar o prompt 2 do guia. Baixar o arquivo para a pasta `meu-site`, abrir no navegador. Quem pôs foto: exportar em JPG, renomear para `foto.jpg` e colocar na mesma pasta. O Thiago faz no telão. Plano B, se não aparecer o botão de baixar: copiar o código, TextEdit em texto simples (Bloco de Notas no Windows), salvar como `index.html`. Plano C, se a conta bateu no limite: o site reserva do kit, com os textos marcados `TROQUE` trocados.

Se a geração do palco falhar: mostrar a saída do ensaio e dizer que é do ensaio.

### 19h20 a 19h30. Confira como designer (slide 14)

**Slide 14, confira como designer.** Navegador ao lado do frame no Figma. Cinco conferências: os textos; as fontes (Sora e Inter); a cor principal e o fundo; o botão e o link levam para o lugar certo; janela estreita, com a foto embaixo e nenhum texto cortado. Fala: "A IA entrega rápido. Quem diz se está certo é vocês. Olhem como olham um handoff." Achou diferença: um ajuste, pedido como designer (o que vê e o que quer), terminando com "Não mude mais nada." Baixar de novo e substituir o arquivo em `meu-site`. O Thiago faz um ajuste real no telão.

### 19h30 a 19h40. Próximos passos e fecho (slides 15 e 16)

**Slide 15, próximos passos e galeria.** Bento com cinco quadros e logos: Netlify Drop, GitHub, PageSpeed Insights, React Bits, Mobbin. Fala curta, uma linha por quadro:

- "Netlify Drop: quem terminou arrasta a pasta `meu-site` e ganha um link. Testem numa janela anônima."
- "GitHub: um cofre com histórico. Cada versão guardada, com data. Ligado ao Netlify, cada mudança vira site novo sozinha."
- "PageSpeed Insights: cola o link e recebe a nota. Ele usa o Lighthouse."
- "React Bits: componentes animados em React. Para depois, com o Claude Code."
- "Mobbin MCP: referência de apps reais dentro do agente. É dos planos Pro e Team."

"Nada disso é obrigatório. Está tudo no guia." Galeria relâmpago: até três heros da sala no telão, quem topar. Atrasou: uma, ou nenhuma.

**Slide 16, revogue o token do workshop e Mateus às 20h.** Revogar: "Figma, Settings, Security, Personal access tokens. Achem a chave que vocês criaram para o workshop, a de 7 dias, e cliquem em Revoke. Só ela. As outras que vocês já tinham ficam." O Thiago mostra o caminho sem abrir a lista com a chave do palco; a dele é revogada depois, fora do telão. Nunca cortado.

Passagem: "Às 20h, depois do coffee, levem a pasta `handoff` da Área de Trabalho. Ela tem um Card e os tokens de design: é dela que o Mateus parte." Fecho: "Hoje o agente leu o Figma de vocês, escreveu nele, e transformou em site. Vocês conferiram cada passo. Designer não precisa programar. Precisa dar regra." Dúvida individual: coffee. Fecha no horário. Detalhes em `para-o-mateus.md`.


## Contingências

- **Muita gente sem conexão no alô:** não muda a dinâmica. O prompt 1 vai para o telão. Quem não conectou personaliza a hero à mão no Figma (textos e o valor de `color/brand-primary` no painel de variáveis) e usa o plano C para o site.
- **O prompt 1 bate no limite da conta:** a pessoa edita a hero à mão no Figma, com os dados do `meus-dados.txt`, e usa o site reserva do kit para o HTML. O frame no Figma continua sendo dela.
- **A lista de ferramentas pesa no plano gratuito:** o servidor expõe muitas ferramentas no modo local, e isso consome o limite antes do primeiro prompt [VERIFICAR no ensaio: o gasto real no Claude gratuito e se cabe alô, prompt 1 e prompt 2]. Se não couber, cortar o alô para quem já fez o teste em casa e manter o prompt 1.
- **O prompt 1 quebra o frame** (cria camadas, desfaz Auto Layout, mexe no frame errado): Cmd+Z (Ctrl+Z no Windows) e corrigir à mão. Não gastar outra mensagem.
- **Rede cai para muita gente:** o Thiago segue no telão com a saída do ensaio, dita como ensaio. O Netlify Drop depende de internet; fica para casa.
- **Limite da conta em massa no prompt 2:** site reserva do kit, troca os textos e segue. Quem preferir termina em casa com os prompts do guia.
- **Conexão do palco cai:** dizer que caiu. Mostrar a captura do ensaio, dita como ensaio. Nunca vender pré-gerado como ao vivo.
- **Demo do comentário falha:** a gravação reserva, dita como gravação.
- **Botão de baixar não aparece:** plano B do guia, no telão.
- **Netlify Drop falha ou o link não abre na janela anônima:** conferir a pasta e o nome `index.html`; sem login o site expira. Uma tentativa, depois casa.
- **Alguém sem `meu-site-kit` ou `handoff`:** o voluntário do pendrive copia durante a sala ou no coffee, sem parar o workshop.
- **Atraso acumulado:** a regra de prioridade acima.
- **Máquinas, rede, tomadas, projetor, número de voluntários, espaço para a mesa das 17h30:** [VERIFICAR com a Gi] (`perguntas-gi.md`).
