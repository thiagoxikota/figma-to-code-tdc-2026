# Roteiro: Seu Figma vira produto (Fortaleza)

**Título:** Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona.

Fora do Frame, uma experiência UXFor, 3º dia (workshops presenciais). Quarta, 18/11/2026, Digital College Aldeota, Av. Santos Dumont, 1510, 1º andar, Fortaleza.

Janela do Thiago: 18h00 às 19h40 (100 min). Às 19h40 entra o coffee; às 20h, o workshop do Mateus Villain (tokens e componente para código, Style Dictionary).

**Público: designers.** O formato do TDC parecia aula de dev. Aqui a promessa é o resultado na mão do designer, e a parte técnica fica no miolo, para quem quiser.

**Promessa:** você sai com a revisão da sua tela do jeito que um dev olharia, um protótipo navegável dela e, se conectar o Figma, os tokens reais do arquivo prontos para o código do Mateus.

Tudo gratuito: conta gratuita do Figma e do Claude. O MCP oficial do Figma fica de fora (o plano Starter dá de 6 a 20 chamadas por mês). A conexão é o `figma-console-mcp@1.35.0` com token e plugin Desktop Bridge, instalada pelo comando único `scripts/instalar.mjs`. Fonte técnica: `docs/pipeline-facts.md`.


## Estrutura em duas partes

- **Parte A, todo mundo, sem instalar nada (25 min).** Exportar a própria tela (ou a "Tela demo") como PNG, colar no Claude gratuito, pedir a revisão de dev e o protótipo HTML navegável, que aparece no próprio Claude.
- **Parte B, Figma conectado (28 min).** Ler o frame real, tokens, auditar, gerar o Card em HTML e CSS com os tokens, conferir a fonte, exportar os tokens em JSON para a pasta do Mateus, revogar. Quem não instalou segue em dupla ou com voluntário.
- **A ponte entre as duas (5 min)** é a tese do workshop: imagem é aproximação; o arquivo conectado traz os valores reais (tokens, nomes), e é isso que o dev precisa.

O setup cai para 15 min porque o comando faz quase tudo. Quem termina o setup cedo, ou não vai instalar, já começa a Parte A; quem ainda instala termina durante a Parte A com voluntário.


## O que muda em relação ao TDC

- Título, promessa e público: designer, não dev. "MCP" sai do título e aparece só no miolo.
- Entra a Parte A, que não depende de instalação nenhuma. Ninguém sai sem resultado.
- O setup manual de 30 min vira o comando de 15 min. O caminho manual fica como plano B no guia.
- A demo de abertura encolhe: o par Take A e Take B do TDC vira o bloco da ponte entre as partes.
- O Card passa a ser gerado direto em HTML e CSS, sem React. Um prompt a menos na conta gratuita, e é o formato que o Mateus usa.
- O exercício do TDC (7 passos) vira a Parte B com 7 passos: Ler, Tokens, Auditar, Gerar, Conferir, Exportar, Revogar.
- Não há máquina do evento nem máquina reserva. Cada pessoa usa o próprio notebook [VERIFICAR com a Gi]. A saída para quem trava é a dupla.


## Grade

| Horário | Bloco | Min |
|---|---|---|
| 18h00 a 18h05 | Abertura: problema e promessa | 5 |
| 18h05 a 18h10 | Como vai ser: duas partes e o que cada um leva | 5 |
| 18h10 a 18h25 | Setup com o comando único (quem não instala já começa a Parte A) | 15 |
| 18h25 a 18h50 | Parte A: tela no Claude, revisão de dev e protótipo | 25 |
| 18h50 a 18h55 | A ponte: imagem é aproximação, arquivo é a fonte | 5 |
| 18h55 a 19h23 | Parte B: Figma conectado, do frame à pasta do Mateus | 28 |
| 19h23 a 19h27 | O que divergiu e limites | 4 |
| 19h27 a 19h32 | Perguntas | 5 |
| 19h32 a 19h36 | Síntese e passagem para o Mateus | 4 |
| 19h36 a 19h40 | Margem | 4 |

Soma: 96 min de conteúdo e 4 de margem, 100 no total. Os slides de cada bloco estão em `deck-ajustes.md`.


## Bloco a bloco

### 18h00 a 18h05. Abertura

Tese: a IA não lê a sua tela, ela lê o que você conseguiu especificar. O resto ela inventa.

Promessa, em linguagem de designer: "Hoje vocês saem com a tela revisada como um dev revisaria, com um protótipo que funciona e, quem conectar o Figma, com os tokens reais prontos para o código. Tudo na conta gratuita."

### 18h05 a 18h10. Como vai ser

Um slide com as duas partes, lado a lado. Parte A: imagem, sem instalar. Parte B: arquivo conectado, com um comando. Dizer quem faz o quê: todo mundo faz a A; quem conseguir instalar faz a B; quem não conseguir faz a B em dupla.

Mostrar o QR do guia (slide 14) e já pedir: "quem vai fazer a Parte B, abre o Terminal agora".

### 18h10 a 18h25. Setup com o comando

No telão, o Thiago roda o comando do guia (seção 2, Passo 2) e mostra cada pausa dele: o link do token, o campo escondido, a mensagem de fim. Depois mostra a importação do plugin e o teste de status.

| Relógio | Min | Marca esperada |
|---|---|---|
| 18h13 | 3 | Comando colado e rodando |
| 18h17 | 7 | Maioria com token colado e Claude reaberto |
| 18h21 | 11 | Maioria com o plugin Bridge importado e rodando |
| 18h23 | 13 | **Corte:** quem está travado vai para a Parte A e faz a B em dupla |
| 18h25 | 15 | **A Parte A começa para todo mundo**, com gente ainda terminando o setup com voluntário |

Quem não vai instalar já faz o A1 (exportar a tela) durante o setup. O Thiago não desce do palco para depurar máquina; quem vai até a pessoa é o voluntário. Fila crescendo no mesmo ponto: o Thiago resolve no telão para todos. Se o comando falhar para muita gente, o Thiago mostra o caminho manual (guia, Passo 3) no telão uma vez.

### 18h25 a 18h50. Parte A

| Relógio | Passo | Min |
|---|---|---|
| 18h25 | A1. Exportar a tela como PNG 2x | 5 |
| 18h30 | A2. Prompt da revisão de dev | 8 |
| 18h38 | A3. Prompt do protótipo navegável | 10 |
| 18h48 | A4. Olhar com olho de designer | 2 |

Prompts, palavra por palavra, no `guia-participante.md`, seção 3. O Thiago faz junto no telão, com a "Tela demo".

Durante o A3, pedir para a sala testar o protótipo de verdade: clicar, digitar, enviar vazio. Se alguém topar, dois minutos no telão com a tela de um participante (só com a pessoa autorizando e sem dado sensível).

Fala de fechamento do bloco (sugestão): "Isso já muda a conversa com o dev. Mas olhem a cor do botão no protótipo e a do Figma. Parecida não é igual."

### 18h50 a 18h55. A ponte

No telão, lado a lado: o protótipo da Parte A e o resultado do arquivo conectado (slides 12 e 13 do TDC, reaproveitados). A imagem dá a forma; o arquivo dá o nome e o valor (`color/brand-primary`, `space/3`). É isso que o dev precisa, e é isso que o Mateus usa às 20h.

Frase-âncora: "Imagem é aproximação. O arquivo é a fonte."

### 18h55 a 19h23. Parte B

| Relógio | Passo | Min |
|---|---|---|
| 18h55 | B1. Ler o frame real | 3 |
| 18h58 | B2. Tokens | 3 |
| 19h01 | B3. Auditar (comparar com a revisão da Parte A) | 4 |
| 19h05 | B4. Gerar o Card em HTML e CSS com os tokens | 6 |
| 19h11 | B5. Conferir a fonte e corrigir, se houver o que corrigir | 3 |
| 19h14 | B6. Exportar os tokens em JSON e salvar os três arquivos | 7 |
| 19h21 | B7. Revogar o token | 2 |

Prompts no `guia-participante.md`, seção 5. Quem não conectou acompanha em dupla. No B3, o gancho é comparar com a lista da Parte A: os mesmos problemas, agora com o nome do token violado.

Fala de abertura do B6 (sugestão): "Até aqui tudo ficou dentro da conversa. Agora vocês levam pro código. Às 20h o Mateus parte exatamente desses três arquivos."

Às 19h21 quem não terminou pega a pasta `handoff/` do repositório. Ninguém fica sem arquivo. O B7 não tem corte: voluntários conferem bancada por bancada.

### 19h23 a 19h27. O que divergiu e limites

O que divergiu entre o protótipo da imagem e o Card do arquivo? Pode não ter divergido nada no B5, e está certo. Limites: protótipo da imagem é aproximação; código gerado por IA é ponto de partida; a conexão lê o design system que existe, não cria um.

### 19h27 a 19h32. Perguntas

Corta pergunta que vira consultoria individual: "me procura no coffee".

### 19h32 a 19h36. Síntese e passagem

Ferramentas mudam, princípios permanecem: especifique a fonte, confira o valor, decida você. Depois o slide de passagem: o que cada um tem na pasta, e que o Mateus começa às 20h com Style Dictionary a partir daí. Se o slide do formulário ficar (decisão do Thiago, ver `deck-ajustes.md`), ele fecha.

### 19h36 a 19h40. Margem

Fecha no horário. O coffee é das 19h40 às 20h.


## Contingências de sala

- **Rede cai para muita gente:** a Parte A segue (a imagem já está no notebook; o Claude precisa de internet, então quem ficar sem rede acompanha no telão). A Parte B vira demonstração no telão, e todo mundo usa `handoff/` para o Mateus.
- **Comando falha em massa:** o Thiago mostra o caminho manual no telão uma vez. Quem não resolver até 18h23 faz a B em dupla.
- **Limite da conta gratuita em massa:** dupla com quem ainda tem uso; na Parte B, `handoff/`.
- **Demo do palco trava:** resultado do ensaio, de `outputs-prebaked/`, dito como ensaio. Nunca vender pré-gerado como ao vivo.
- **Atraso acumulado:** o início da Parte B às 18h55 não se move. Se a B atrasar, o B6 encurta para "pegue o `handoff/`" e o B7 continua inteiro.
