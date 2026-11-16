# Roteiro: Seu primeiro site, do Figma ao ar (Fortaleza, v9.1)

**Título:** Seu primeiro site, do Figma ao ar.

Fora do Frame, uma experiência UXFor, 3º dia (workshops presenciais). Quarta, 18/11/2026, Digital College Aldeota, Av. Santos Dumont, 1510, 1º andar, Fortaleza.

Janela do Thiago: 18h00 às 19h40 (100 min). Mesa de instalação com os voluntários às 17h30. Às 19h40 entra o coffee; às 20h, o workshop do Mateus Villain (tokens e componente para código, Style Dictionary), a partir da pasta `handoff`.

**Público: designers.** Linguagem de designer no palco. A frase que costura tudo: "Designer não precisa programar. Precisa dar regra."

Fonte das decisões: `.critica/spec-v9.md` (local, fora do Git), seção v9.1. Prompts palavra por palavra: `guia-participante.md`. Fala no prompter: `roteiro-prompter.txt`. Deck: `deck-ajustes.md`.


## A tese

Método, não ferramenta. Quatro movimentos que servem para qualquer agente:

1. O agente lê o arquivo do Figma, não um print.
2. O designer dá as regras num arquivo, o `DESIGN.md`. É o harness contra AI slop.
3. O agente gera um `index.html` único.
4. O designer confere e publica.

**A promessa, dita na abertura:** "Vocês saem daqui com o primeiro site no ar, feito do Figma de vocês, com regras de vocês."

**A primeira vitória da sala:** "A IA leu uma propriedade do meu frame, e eu conferi no Figma." É o alô.

**Cada um conecta o Figma ao próprio agente.** A instalação é no preparo obrigatório de casa: Claude Desktop, com o Codex como alternativa. Mesa de instalação às 17h30. Na sala, os 30 minutos de conexão são para entender as peças, ligar o plugin, fazer o alô e conferir; ninguém instala na sala. Quem não conectou segue a leitura pelo telão.

**As peças, com o nome certo:**

- **MCP** é o protocolo: a regra de conversa entre o agente e uma ferramenta.
- **Figma Console MCP** (`figma-console-mcp`) é o servidor que fala esse protocolo.
- **Figma Desktop Bridge** é o plugin que roda dentro do Figma e abre a porta para o servidor.
- **O MCP oficial do Figma** existe e é outra rota, com requisitos próprios. Não é um passo desta cadeia. Se perguntarem, essa é a resposta.

**O molde:** página "Portfólio" (a primeira do arquivo da Community), frame "Meu portfólio". Duas inconsistências plantadas para o "aha" da leitura:

1. **Bio:** `#A29B93` digitado direto, contraste baixo no fundo claro. Certo: `color/text-muted`.
2. **Botão "Fale comigo":** `#C8352B` digitado direto, sem ligação com `color/brand-primary`. Nunca dizer que o vermelho está errado: o valor é igual, a ligação é que falta.

É um exercício controlado, e isso é dito: o molde tem problemas colocados de propósito.

**Mensagens no Claude gratuito:** sem promessa de número. O limite varia com o dia. O fluxo usa poucas mensagens: o alô, a leitura, o site e, se sobrar, um ajuste. Cada prompt uma vez. Quem bater no limite usa o site reserva do kit (`meu-site-kit/reserva/index.html`), troca os textos e publica igual.


## Grade v9.1

| Horário | Bloco | Slides | Min |
|---|---|---|---|
| 17h30 a 18h00 | Mesa de instalação, com os voluntários (fora da grade) | | |
| 18h00 a 18h15 | Mapa: capa, print x arquivo, as peças | 1 a 3 | 15 |
| 18h15 a 18h45 | Conectar: guia e QR, a ponte em 4 passos, o alô (primeira vitória) | 4 a 6 | 30 |
| 18h45 a 18h55 | Regras: o harness, prepare o molde | 7 e 8 | 10 |
| 18h55 a 19h10 | Gerar: prompt 1 (leitura e auditoria), prompt 2 (o `index.html`) | 9 e 10 | 15 |
| 19h10 a 19h20 | Conferir e corrigir: site ao lado do frame, um ajuste | 11 | 10 |
| 19h20 a 19h30 | Publicar: pasta, GitHub e Netlify; Netlify Drop e aba anônima | 12 e 13 | 10 |
| 19h30 a 19h40 | Galeria e próximos passos: demo GitHub+Netlify, galeria, revogar, passagem para o Mateus | 14 a 16 | 10 |

Soma: 100 min. A validar no ensaio cronometrado (`checklist-thiago.md`).

### Prioridade quando atrasar

1. **A galeria encolhe primeiro:** um link, ou nenhum.
2. **Depois a demo do GitHub:** vira uma frase com o diagrama do slide 12.
3. **Conectar, gerar, conferir, publicar e revogar não são cortados.**
4. Quem atrasou num passo segue com a sala. A conversa continua no Claude, o guia tem tudo e o kit tem o site reserva.


## Bloco a bloco

### 17h30 a 18h00. Mesa de instalação

Os voluntários atendem quem não terminou a conexão em casa (`guia-voluntarios.md`). O Thiago monta o palco e não entra na mesa. Às 18h a mesa fecha.

### 18h00 a 18h15. Mapa (slides 1 a 3)

**Slide 1, capa.** Título e nome. A promessa: "Vocês saem com o primeiro site no ar, feito do Figma de vocês, com regras de vocês." E: "Hoje não é sobre uma ferramenta. É um método que serve para qualquer agente."

**Slide 2, print x arquivo.** Sem gastar prompt da sala. Fala: "Print é aparência achatada. O agente vê pixels e chuta: chuta a cor, chuta o espaço, chuta a fonte. O arquivo tem variável, Auto Layout e hierarquia. Quando o agente lê o arquivo, ele não chuta. Ele confere."

**Slide 3, as peças.** Diagrama em fila: Figma, plugin Desktop Bridge, servidor Figma Console MCP, agente (Claude Desktop ou Codex). Fala, uma linha por peça:

- "O Figma guarda o design."
- "O Desktop Bridge é um plugin. Ele abre uma porta no Figma."
- "O Figma Console MCP é um servidor. Ele leva o pedido do agente e traz o que está no arquivo."
- "O agente escreve o código. Hoje é o Claude Desktop. Eu uso o Codex na mesma ponte."

Depois: "MCP é o protocolo, a regra da conversa. É como um cabo USB-C: o agente na ponta pode mudar, a ponte é a mesma." E: "O Figma tem um MCP oficial. É outra estrada, com requisitos próprios. Hoje a gente vai por esta."

### 18h15 a 18h45. Conectar (slides 4 a 6)

**Slide 4, guia e QR.** "Abram o guia pelo QR. Copiem os prompts do guia, não do telão. Cada prompt uma vez." Conferir que a pasta `meu-site-kit` está na Área de Trabalho.

**Slide 5, a ponte em 4 passos.** O diagrama de 4 passos, que cada um segue na própria máquina: 1. Figma Desktop com a cópia aberta, na página "Portfólio". 2. Plugin Figma Desktop Bridge rodando. 3. Claude Desktop aberto (fechado por completo depois da instalação). 4. Conversa nova. O Thiago faz junto no telão, devagar. Os voluntários circulam.

**Slide 6, o alô: a primeira vitória.** Selecionar o frame "Meu portfólio" e mandar o prompt do alô: o agente diz o arquivo aberto e o tamanho da fonte do nome. O Thiago faz no telão e confere no painel do Figma: clica no nome, o painel mostra 48. Fala: "A IA leu uma propriedade do frame de vocês. Agora confiram no Figma: cliquem no nome e olhem o painel da direita. Bateu? Essa é a primeira vitória. Ela leu o arquivo, não uma imagem." Depois: "Quem não conectou, levanta a mão." Os voluntários conferem plugin e Claude Desktop; ninguém instala na sala. Não deu: segue a leitura pelo telão e faz o resto igual.

### 18h45 a 18h55. Regras (slides 7 e 8)

**Slide 7, o harness contra AI slop.** Fala: "Sabe aquele site de IA que todo mundo reconhece? Gradiente roxo, sombra em tudo, botão pílula, ícone dentro de círculo, emoji no título. Isso acontece quando ninguém deu regra. O agente preenche o vazio com a média da internet." E: "O DESIGN.md é a regra de vocês, num arquivo." Mostrar a tabela:

| Onde você roda | Onde mora a regra | Lê sozinho? |
|---|---|---|
| Claude Desktop (chat) | `DESIGN.md` anexado na conversa, ou colado no prompt | Não. Anexe em toda conversa nova |
| Claude Code | `CLAUDE.md` na pasta do projeto | Sim |
| Codex | `AGENTS.md` na pasta do projeto | Sim |

Fala: "O conteúdo é o mesmo. O nome do arquivo muda com o agente. No chat de hoje, ele não lê arquivo sozinho: vocês anexam." Fecha: "Designer não precisa programar. Precisa dar regra. E regra boa é regra escrita."

**Slide 8, prepare o molde.** Dois minutos, sem perfeccionismo. Editar direto o frame "Meu portfólio" (o arquivo já é a cópia de cada um): trocar nome, bio e projetos. Fala: "Mexam só no texto. As cores ficam: tem duas coisas erradas de propósito, e o agente vai achar."

### 18h55 a 19h10. Gerar (slides 9 e 10)

**Slide 9, prompt 1: leitura e auditoria.** Anexar o `DESIGN.md` e mandar o prompt 1. O Thiago manda o mesmo no telão, com o painel do Figma ao lado. Quando a resposta vier, mostrar no painel: a bio com `#A29B93` solto, o botão com `#C8352B` sem ligação. Fala: "O valor do botão é igual ao da marca. A ligação não existe. Se a marca mudar, esse botão fica para trás. Print nenhum mostra isso." E: "Vocês não abriram código. Vocês deram regra, e o agente auditou contra ela."

**Slide 10, prompt 2: o `index.html`.** Mandar o prompt 2, baixar o arquivo para a pasta `meu-site`, abrir no navegador. O Thiago faz no telão. Plano B, se não aparecer o botão de baixar: copiar o código, TextEdit em texto simples (Bloco de Notas no Windows), salvar como `index.html`. Plano C, se a conta bateu no limite: o site reserva do kit.

Se a geração do palco falhar: mostrar a saída do ensaio e dizer que é do ensaio.

### 19h10 a 19h20. Conferir e corrigir (slide 11)

**Slide 11, confira como designer.** Site no navegador ao lado do frame no Figma. Quatro conferências: o texto é o do frame; a bio ficou legível; o botão usa a cor da marca; em tela estreita, as colunas viram uma. Fala: "A IA entrega rápido. Quem diz se está certo é vocês. Olhem como olham um handoff." Achou diferença: um ajuste, pedido como designer, terminando com "Não mude mais nada." Baixar de novo e substituir o arquivo em `meu-site`. O Thiago faz um ajuste real no telão.

### 19h20 a 19h30. Publicar (slides 12 e 13)

**Slide 12, pasta, GitHub e Netlify.** Diagrama: sua pasta, GitHub, Netlify. Fala curta: "A pasta é onde o site nasce. O GitHub é um cofre com histórico: cada versão guardada, com data. Isso se chama repositório. O Netlify é a vitrine: pega a pasta e dá um link. Hoje vocês pulam o cofre e vão direto para a vitrine."

**Slide 13, no ar.** Netlify Drop, logado: arrastar a pasta `meu-site` inteira. O Thiago faz no telão. Depois: "Copiem o link e abram numa janela anônima. Se abriu lá, abre para qualquer pessoa. Agora no celular." Atalho da janela anônima: Cmd+Shift+N no Chrome e no Safari do Mac; Ctrl+Shift+N no Chrome do Windows. "Esse é o primeiro site de vocês no ar."

### 19h30 a 19h40. Galeria e próximos passos (slides 14 a 16)

**Slide 14, próximo passo: GitHub + Netlify (2 min).** Um site com o GitHub ligado ao Netlify. O Thiago pede um ajuste ao agente, a mudança vai para o GitHub e o site atualiza sozinho. Fala: "É por isso que o GitHub muda a vida do designer: cada mudança vira histórico, e a vitrine se atualiza sozinha. Não é obrigatório hoje. Fica de lição de casa." Se o deploy demorar, seguir para a galeria e voltar ao link no fim.

**Slide 15, galeria relâmpago.** Três links da sala no telão. Cada pessoa diz uma regra do `DESIGN.md` que fez diferença. Atrasou: um link, ou nenhum.

**Slide 16, revogar e passagem.** Revogar: "Figma, Settings, Security, Personal access tokens. Revoke em todas as que vocês criaram para hoje. Pronto quando a lista não mostra mais nenhuma." O Thiago mostra o caminho sem abrir a lista com a chave do palco; a dele é revogada depois, fora do telão. Nunca cortado.

Passagem: "Às 20h, depois do coffee, levem a pasta `handoff` da Área de Trabalho. Ela tem um Card e os tokens de design: é dela que o Mateus parte." Fecho: "O método é de vocês: arquivo lido, regra escrita, um HTML, conferir, publicar. Designer não precisa programar. Precisa dar regra." Dúvida individual: coffee. Fecha no horário. Detalhes em `para-o-mateus.md`.


## Contingências

- **Muita gente sem conexão no alô:** não muda a dinâmica. A leitura do prompt 1 vai para o telão. Quem não conectou manda o prompt 2 numa conversa normal, anexando o `DESIGN.md`, ou usa o site reserva do kit [VERIFICAR no ensaio: qual das duas saídas ensinar].
- **Rede cai para muita gente:** o Thiago segue no telão com a saída do ensaio, dita como ensaio. O Netlify Drop depende de internet; quem não publicou na sala publica em casa com o guia.
- **Limite da conta em massa:** site reserva do kit, troca os textos e publica igual. Quem preferir termina em casa com os prompts do guia.
- **Conexão do palco cai na leitura:** dizer que caiu. Mostrar o painel do Figma com os dois valores e a captura do ensaio, dita como ensaio. Nunca vender pré-gerado como ao vivo.
- **Botão de baixar não aparece:** plano B do guia, no telão.
- **Netlify Drop falha:** conferir que a pasta tem `index.html` com esse nome exato; tentar de novo uma vez; senão, em casa.
- **Link não abre na janela anônima:** o site expira sem login. Entrar na conta do Netlify e arrastar de novo.
- **Alguém sem `meu-site-kit` ou `handoff`:** o voluntário do pendrive copia durante a sala ou no coffee, sem parar o workshop.
- **Atraso acumulado:** a regra de prioridade acima.
- **Máquinas, rede, tomadas, projetor, número de voluntários, espaço para a mesa das 17h30:** [VERIFICAR com a Gi] (`perguntas-gi.md`).
