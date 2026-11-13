# Roteiro: Seu Figma vira produto (Fortaleza)

**Título:** Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona.

Fora do Frame, uma experiência UXFor, 3º dia (workshops presenciais). Quarta, 18/11/2026, Digital College Aldeota, Av. Santos Dumont, 1510, 1º andar, Fortaleza.

Janela do Thiago: 18h00 às 19h40 (100 min). Às 19h40 entra o coffee; às 20h, o workshop do Mateus Villain (tokens e componente para código, Style Dictionary).

**Público: designers.** Nada de linguagem de dev no palco. A ligação técnica aparece só como "a ligação entre o Claude e o Figma"; a sigla MCP não vai para o telão. A chave de acesso do Figma se chama "chave do Figma"; "token" fica só para os tokens de design.

Fonte única das decisões: `.critica/spec-v3.md` (local, fora do Git; a v2 foi arquivada). Fonte técnica: `docs/pipeline-facts.md`. Prompts palavra por palavra: `guia-participante.md`.


## A tese

"A imagem mostra como a tela parece. O arquivo mostra do que ela é feita."

A **mesma** Tela demo nas duas partes e três propriedades verificáveis (`outputs-prebaked/04-auditoria.md`, defeitos 1, 3 e 4):

1. **Botão "Continuar":** na imagem, um vermelho. No arquivo, `#C8352B` cru, desacoplado do componente Button. O valor é igual ao do token `color/brand-primary`, mas não está ligado a ele: se a marca mudar, esse botão não muda. **É o exemplo do Thiago no telão,** porque corrigir esse ponto não muda nada à vista.
2. **Texto "Leva menos de um minuto":** `#A29B93` sobre `#FFFFFF`, contraste de cerca de 2,75 para 1 (AA pede 4,5 para 1). A imagem deixa estimar; o arquivo dá o valor exato. Correção: `color/text-muted`, `#6C665F`.
3. **Campo "nome":** estilo com borda onde o padrão do sistema é preenchido (`color/surface-alt`, `#F5F3F0`). Na imagem parece escolha; o arquivo mostra que saiu do padrão.

Nunca dizer que o vermelho do botão é uma cor errada: o valor está certo, o vínculo é que falta.

**Onde está a prova.** Os valores acima estão escritos no guia e nos slides. O Claude repetir esses valores mostra que o material é coerente, não que ele leu o arquivo. A palavra "prova" fica reservada para a leitura ao vivo da ponte (passo do Thiago, abaixo). O slide 13 mostra o caminho de um valor e não se chama prova.

É um exercício controlado, e isso é dito na abertura: a tela tem seis problemas colocados de propósito.


## O que cada pessoa leva (dizer no palco, com estas palavras)

1. **O seu formulário, corrigido.** O protótipo de "Criar sua conta" nasce da imagem, na Parte A. Na Parte B cada pessoa aplica nele uma correção com um valor conferido no Figma. Fica na conversa do Claude e é dela.
2. **A pasta `handoff/`, conferida.** O Card e os tokens de design. Vem do ZIP, e na Parte B cada pessoa confere que ela bate com o Figma. É dela que o Mateus parte às 20h.

"O Card não é a continuação do formulário de vocês. É o material da próxima sessão, feito com os mesmos tokens. O formulário fica com vocês."

Gerar o próprio Card e o próprio `tokens.json` saiu do percurso da sala. Virou extensão, para quem terminar antes ou para casa (guia, seção 8).


## As rotas

- **Parte A:** todo mundo. Conta e navegador.
- **Parte B conectado:** quem instalou em casa, com o teste "o Claude disse o nome do arquivo". Manda o prompt de leitura e lê as respostas em voz alta para o grupo.
- **Parte B em grupo:** quem não instalou, em grupos de dois a quatro em volta de uma máquina conectada. Confere os valores no próprio Figma e **corrige o próprio protótipo, no próprio notebook**.

Ninguém instala nem depura máquina na sala.


## Grade

| Horário | Bloco | Min |
|---|---|---|
| 18h00 a 18h05 | Abertura: o que cada pessoa leva, as rotas, o guia pelo QR | 5 |
| 18h05 a 18h10 | A1. Exportar a Tela demo | 5 |
| 18h10 a 18h17 | A2. Revisão da tela, com VIU e SUPONDO | 7 |
| 18h17 a 18h21 | A3. Uma decisão com motivo | 4 |
| 18h21 a 18h35 | A4 e A5. Gerar o protótipo e testar erro, sucesso e uma diferença | 14 |
| 18h35 a 18h43 | A ponte: as três propriedades no Figma e a leitura ao vivo | 8 |
| 18h43 a 18h50 | Conferir a conexão e formar os grupos | 7 |
| 18h50 a 19h00 | B1. Ler a Tela demo pelo arquivo e escolher uma correção | 10 |
| 19h00 a 19h12 | B2. Cada pessoa aplica e testa a correção no próprio formulário | 12 |
| 19h12 a 19h23 | B3. O Thiago gera o Card no telão; a sala confere a própria `handoff/` | 11 |
| 19h23 a 19h28 | Cópias que faltam, por pendrive, e origem da pasta identificada | 5 |
| 19h28 a 19h34 | B4. Revogar todas as chaves do workshop | 6 |
| 19h34 a 19h40 | Fecho: uma pergunta, os limites e a passagem para o Mateus | 6 |

Soma: 100 min. Os tempos são estimativa até o ensaio cronometrado (`checklist-thiago.md`).

### O que tem prioridade quando atrasar

A sala vai atrasar em algum ponto. A regra, nesta ordem:

1. **Os horários de 18h35, 19h00, 19h12 e 19h28 não se movem.** A ponte, a correção, a conferência da pasta e a revogação começam na hora, com quem estiver.
2. **Na Parte A, a prioridade é a decisão (A3) e o teste (A5), não a geração.** Quem ainda está gerando às 18h35 acompanha a ponte e testa depois: o protótipo continua na conversa.
3. **Na Parte B, a prioridade é o B2:** cada pessoa ver a própria correção no próprio formulário. Se o B1 atrasar, o Thiago dita os dois valores do telão e a sala segue para o B2 às 19h00.
4. **O primeiro a encolher é a geração do Card no telão (B3).** A conferência da pasta pela sala não encolhe: é ela que garante a saída das 20h.
5. **O B4 nunca é cortado.** Se faltar tempo, sai a pergunta do fecho.

Isso é dito na abertura, sem rodeio: "Os horários não esperam. Quem atrasar num passo segue com a sala e termina depois, com o guia."


## Bloco a bloco

Cada slide de passo traz, no canto de cima à direita, **Faça agora** (a sala age) ou **Olhe o telão** (o Thiago demonstra).

### 18h00 a 18h05. Abertura

1. Título e nome (slide 1). O Thiago se apresenta em uma frase, sem slide próprio.
2. O que cada pessoa leva, com as palavras acima (slide 2).
3. As rotas e o papel de cada pessoa no grupo (slide 3).
4. QR do guia (slide 4): "Sigam pelo guia na máquina de vocês. O telão mostra a ação e quando deu certo; o texto para copiar está no guia."

Sem pergunta de abertura para a sala: come tempo e não muda nada.

### 18h05 a 18h35. Parte A

| Relógio | Passo | Min | Deu certo quando |
|---|---|---|---|
| 18h05 | A1. Exportar a Tela demo, PNG 2x | 5 | PNG do formulário inteiro salvo |
| 18h10 | A2. Revisão da tela | 7 | Lista numerada, cada ponto "visto" ou "suposto" |
| 18h17 | A3. Você decide quais pontos aceita | 4 | Números anotados, com o porquê das recusas |
| 18h21 | A4. Protótipo com só os pontos aceitos | 14, com o A5 | Formulário aparece na conversa e aceita digitação |
| até 18h35 | A5. Testar e anotar 1 diferença | | Erro e "Conta criada" testados; uma diferença anotada |

O Thiago faz junto no telão, com a Tela demo. No A1, projetar ao vivo a seleção do frame pelo nome e o painel de Export, com zoom.

No A2, não vender a lista como parecer técnico: "É uma leitura de imagem. Ele estima, não mede. Por isso o prompt separa o que viu do que supôs. Na Parte B a gente lê o valor."

No A3, a fala: "A IA aponta. Quem decide é você. Anotem quais pontos aceitam antes de pedir o protótipo. Sem tempo de ler tudo, decidam pelo menos um." O exemplo do slide recusa uma suposição do Claude, com motivo. Dizer: "Recusar pede motivo que se sustente. 'É assim de propósito' não vale para acessibilidade." É o momento mais importante da A.

No A4, quem recebe só código manda o pedido de novo **uma vez**. Depois confere a opção de Settings > Capabilities. Estava ligada: para e acompanha o vizinho, sem gastar limite. A causa pode ser outra, e ninguém investiga na sala.

Se a geração do A4 falhar no telão: mostrar a saída do ensaio, dita como ensaio.

Às 18h35 o Thiago vai para a ponte, mesmo com gente terminando.

### 18h35 a 18h43. A ponte

Slide 10, a tese. Depois, no Figma, na mesma Tela demo, com zoom, selecionar uma a uma (os slides 11 e 12 trazem os recortes reais da tela, para o caso de o Figma não projetar):

1. O botão "Continuar": mostrar o fill `#C8352B` sem variável ligada e a camada fora do componente Button. Clicar em **Variables**, na barra de navegação da esquerda, e mostrar `color/brand-primary` com o mesmo valor. "O valor é igual. O vínculo não existe. Se a marca mudar, esse botão fica para trás. A imagem não tem como mostrar isso."
2. O texto "Leva menos de um minuto": `#A29B93` sobre `#FFFFFF`, cerca de 2,75 para 1 contra 4,5 do AA.
3. O campo "nome" ao lado do campo de e-mail: borda contra preenchido (`color/surface-alt`).

**A prova, ao vivo (passo do Thiago, slide 13).** Três minutos, sem pular:

1. Pedir à sala uma camada da Tela demo e uma propriedade que **não esteja no guia nem em slide nenhum**. Sugestões se ninguém falar: o raio do canto de um campo, a largura do frame, o espaço entre os campos.
2. Selecionar a camada no Figma e deixar o valor visível no painel da direita, com zoom. Não ler em voz alta ainda.
3. No Claude Desktop, perguntar só por essa propriedade, sem escrever o valor.
4. Abrir, na resposta, o pedido que o Claude fez ao Figma e o que voltou. Mostrar os dois.
5. Voltar ao painel do Figma e comparar o valor com a resposta.

A fala: "Esse valor não está escrito em lugar nenhum do material. Vocês viram o pedido sair e a resposta voltar. Isso é a prova de que ele leu o arquivo." Se a ligação falhar no telão: dizer que falhou, mostrar a captura do ensaio dita como ensaio, e não chamar de prova.

Gancho para a B: "Agora vocês leem isso no arquivo, escolhem uma correção e veem ela acontecer no formulário de vocês."

### 18h43 a 18h50. Conferir a conexão e formar os grupos

No telão: Figma Desktop com o arquivo, plugin Figma Desktop Bridge rodando, e a resposta do Claude com o nome do arquivo. "Deu certo quando o Claude disse o nome do arquivo."

Uma tentativa coletiva, junto com o telão. Não conectou: uma ajuda de voluntário. Não resolveu: grupo. O Thiago não desce do palco para depurar.

Os voluntários montam os grupos, de dois a quatro por máquina conectada, e todo mundo leva o próprio notebook. Papel dito no palco: "Quem está conectado manda o prompt e lê a resposta em voz alta. Os outros conferem no próprio Figma. No B2, cada um corrige o próprio formulário."

### 18h50 a 19h00. B1, ler e escolher

Uma pessoa por grupo manda o prompt B1 (quatro perguntas). A sala confere no próprio Figma os dois valores da pergunta 4: Variables, na barra da esquerda, coleção Workshop Tokens. O Thiago mostra esse caminho no telão, com zoom.

Se voltar vazio: não é para repetir no escuro. Primeiro perguntar qual arquivo o Claude está lendo, depois conferir se o plugin está rodando.

Depois, a escolha: "São duas correções, as que mudam à vista: o texto de apoio ou o campo nome. Escolham uma e escrevam o motivo." O botão não é opção da sala: o Thiago usa como exemplo, porque o valor é igual e nada muda na tela.

Às 18h58, com a sala atrasada: o Thiago dita os dois valores, `#6C665F` e `#F5F3F0`, e todo mundo segue.

### 19h00 a 19h12. B2, a correção no próprio formulário

O momento central da Parte B. Fala: "Cada um no seu notebook, na conversa do seu protótipo. Colem o prompt B2 da correção que escolheram. Ele não precisa da ligação: o valor vocês já conferiram."

O Thiago faz no telão a correção do texto de apoio e mostra o antes e o depois. Depois o teste: mudou só ali, e erro e sucesso continuam funcionando.

Dizer com estas palavras: "É um valor copiado do Figma agora. O protótipo não ficou ligado à variável: se ela mudar amanhã, ele não muda sozinho."

Quem ficou sem protótipo ou sem limite escreve a decisão, acompanha o teste do vizinho e aplica em casa.

Quem terminou antes e está conectado pode começar a extensão (guia, seção 8). Avisar: tem que acabar antes das 19h28.

### 19h12 a 19h23. B3, conferir a pasta

Duas coisas ao mesmo tempo, e o slide 17 diz isso:

- **No telão,** o Thiago manda o prompt do Card (o E1 do guia) e deixa gerar. Fala: "É assim que nasceu a pasta que vocês baixaram: o Card feito com os tokens lidos do arquivo. É material do Mateus, não a continuação do formulário."
- **Na sala,** cada pessoa abre a própria `handoff` e faz três conferências: o `Card.html` abre com cor; `#C8352B`, `20px` e `24px` estão no `tokens.json`; os mesmos três valores estão nas variáveis do Figma.

Quando o Card do telão ficar pronto, comparar uma linha do CSS dele com a variável no Figma. Não ficou pronto até 19h20: seguir sem ele. A conferência da sala é o que importa.

### 19h23 a 19h28. Todo mundo com a pasta

"Quem não tem a pasta `handoff` no notebook levanta a mão agora." O voluntário do pendrive copia. Depois: "De onde veio a pasta de vocês? `handoff` é o exemplo do workshop, conferido por vocês. Só quem fez a extensão tem também a `fora-do-frame`."

Começar às 19h23 em ponto, para não invadir a revogação.

### 19h28 a 19h34. B4, revogar

No telão: Settings > Security > Personal access tokens > Revoke, a confirmação e a lista depois, sem o valor de nenhuma chave à vista. "Revoguem todas as chaves que vocês criaram para o workshop. O normal é uma; quem repetiu a instalação tem mais." Sem corte. Voluntários passam pelas fileiras perguntando.

### 19h34 a 19h40. Fecho

Uma pergunta para a sala (slide 20), duas ou três respostas curtas: "Qual ponto vocês recusaram, ou qual correção escolheram, e por quê?" Funciona para quem fez só a A.

Limites, curtos (slide 21): o protótipo não é produto pronto; a correção é um valor copiado, não uma ligação; antes de usar numa tela sua, confira se as cores e os espaços dela estão ligados a variáveis.

Passagem (slide 22, o último): "Às 20h, levem a pasta `handoff` aberta. O Mateus abre o `tokens.json` e o `Card.html` dela. O formulário de vocês fica na conversa do Claude e não entra na sessão dele." Detalhes em `para-o-mateus.md`.

Pergunta que vira consultoria individual: "me procura no coffee". Fecha no horário.


## Contingências de sala

- **Rede cai para muita gente:** a Parte A depende do Claude e para; o Thiago mostra no telão a saída do ensaio, dita como ensaio. Na Parte B, a correção vira demonstração no telão e a conferência da `handoff/` segue normal: ela não depende de internet.
- **Conexão falha para muita gente às 18h43:** grupos maiores. Não há instalação na sala.
- **Quase ninguém conectado:** o B1 acontece só no telão, com a sala conferindo os valores no próprio Figma. O B2 continua individual: o prompt não precisa da ligação.
- **Limite da conta gratuita em massa:** quem ficou sem uso escreve a decisão e acompanha o vizinho. A `handoff/` não depende do Claude.
- **Demo do palco trava:** saída do ensaio, dita como ensaio. Nunca vender pré-gerado como ao vivo, e nunca chamar captura de prova.
- **Atraso acumulado:** a regra de prioridade acima. O B4 (revogar) nunca é cortado.
- **Pendrive:** só é prometido no palco se um voluntário confirmou que leva (`guia-voluntarios.md`). Sem confirmação até terça, o Thiago leva o dele.
- **Máquinas, rede, tomadas, projetor, número de voluntários:** [VERIFICAR com a Gi] (`perguntas-gi.md`).
