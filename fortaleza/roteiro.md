# Roteiro: Seu Figma vira produto (Fortaleza)

**Título:** Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona.

Fora do Frame, uma experiência UXFor, 3º dia (workshops presenciais). Quarta, 18/11/2026, Digital College Aldeota, Av. Santos Dumont, 1510, 1º andar, Fortaleza.

Janela do Thiago: 18h00 às 19h40 (100 min). Às 19h40 entra o coffee; às 20h, o workshop do Mateus Villain (tokens e componente para código, Style Dictionary).

**Público: designers.** Nada de linguagem de dev no palco. A parte técnica aparece só como "a conexão entre o Claude Desktop e o Figma"; a sigla MCP não vai para o telão. A chave de acesso do Figma se chama "chave do Figma"; "token" fica só para os tokens de design.

Fonte única das decisões: `.critica/spec-v3.md` (local, fora do Git; a v2 foi arquivada), com a seção "Rodada 5". Fatos técnicos da conexão da Parte B: `docs/pipeline-facts.md`. Prompts palavra por palavra: `guia-participante.md`.


## A tese

"A imagem mostra como a tela parece. O arquivo mostra do que ela é feita."

A **mesma** Tela demo nas duas partes e três propriedades verificáveis (`outputs-prebaked/04-auditoria.md`, defeitos 1, 3 e 4). Cada uma aparece num momento diferente:

1. **Botão "Continuar", na ponte, mostrado pelo Thiago.** Na imagem, um vermelho. No arquivo, `#C8352B` cru, desacoplado do componente Button. O valor é igual ao do token `color/brand-primary`, mas não está ligado a ele: se a marca mudar, esse botão não muda. É a propriedade conhecida da ponte, e corrigir esse ponto não muda nada à vista.
2. **Texto "Leva menos de um minuto", no B1, descoberto pela sala.** `#A29B93` sobre `#FFFFFF`, contraste de cerca de 2,75 para 1 (AA pede 4,5 para 1). Correção: `color/text-muted`, `#6C665F`.
3. **Campo "nome", no B1, descoberto pela sala.** Só com contorno (fundo branco e borda), onde o padrão do sistema é preenchido (`color/surface-alt`, `#F5F3F0`).

As propriedades 2 e 3 **não são reveladas na ponte nem em slide antes do B1.** O slide do B1 mostra a pergunta; os valores aparecem só no slide seguinte, "Confira", depois da leitura.

Nunca dizer que o vermelho do botão é uma cor errada: o valor está certo, o vínculo é que falta.

**Onde está a prova.** O valor do botão está escrito no guia e no slide. O Claude repetir esse valor mostra que o material é coerente, não que ele leu o arquivo. A palavra "prova" fica reservada para a leitura inédita da ponte (slide 12).

É um exercício controlado, e isso é dito na abertura: a tela tem seis problemas colocados de propósito.


## O que cada pessoa leva (dizer no palco, com estas palavras)

**Garantido, para todo mundo:**

1. **A sua decisão de design, escrita.** Qual ponto corrigir, com qual valor e por quê, com o valor conferido no Figma.
2. **A pasta `handoff/`, conferida.** O Card e os tokens de design. Vem do ZIP; na sala cada pessoa abre e confere. É dela que o Mateus parte às 20h.

**Depende do Claude gratuito de cada um:**

3. **O seu formulário, corrigido.** O protótipo nasce da imagem, na Parte A, e recebe a correção na Parte B. "A maioria sai com ele. Se a conta de vocês chegar ao limite, vocês saem com a decisão escrita e aplicam em casa, com o prompt do guia."

Dizer assim, sem rodeio. O título do workshop não muda; a promessa da abertura é esta.

"O Card não é a continuação do formulário de vocês. É o material da próxima sessão, feito com os mesmos tokens. O formulário fica com vocês."

Gerar o próprio Card e o próprio `tokens.json` é extensão, para quem terminar antes ou para casa (guia, seção 8). **O Thiago não gera Card no telão.**


## As rotas

- **Parte A:** todo mundo. Conta e navegador.
- **Parte B conectado:** quem instalou em casa, com o teste "o Claude disse o nome do arquivo". Manda o prompt de leitura e lê as respostas em voz alta para o grupo.
- **Parte B em grupo:** quem não instalou, em grupos de até quatro em volta de uma máquina conectada. Confere os valores no próprio Figma e **corrige o próprio protótipo, no próprio notebook**.

**A regra numérica dos grupos.** Precisa de **uma máquina conectada para cada quatro pessoas**. Às 18h51 os voluntários contam as máquinas que passaram no teste e as pessoas na sala, e dizem os dois números ao Thiago.

| Pessoas na sala | Máquinas conectadas que a rota em grupo pede |
|---|---|
| 17 a 20 | 5 |
| 21 a 24 | 6 |
| 25 a 28 | 7 |
| 29 a 32 | 8 |

Com menos de 17 pessoas, a conta é a mesma: divida por quatro e arredonde para cima.

- **Atingiu o número:** grupos.
- **Ficou abaixo, mesmo por uma:** ninguém move cadeira. O B1 é feito no telão, uma vez, e cada pessoa confere no próprio Figma. O Thiago anuncia: "Hoje a leitura é no telão. Fiquem onde estão."

A decisão é tomada uma vez, às 18h55, e não se revê. Se uma máquina cair depois, o grupo dela acompanha a leitura do grupo ao lado.

Ninguém instala nem depura máquina na sala.


## Grade

| Horário | Bloco | Min |
|---|---|---|
| 18h00 a 18h05 | Abertura: o que é garantido e o que depende do Claude, as rotas, o guia no notebook, a regra de corte | 5 |
| 18h05 a 18h11 | A1. Exportar a Tela demo; PNG pronto para quem não duplicou o arquivo | 6 |
| 18h11 a 18h18 | A2. Revisar como designer: no máximo três sugestões, VIU ou SUPÔS | 7 |
| 18h18 a 18h22 | A3. Uma decisão com motivo | 4 |
| 18h22 a 18h40 | A4 e A5. Gerar o protótipo e testar erro, sucesso e uma diferença | 18 |
| 18h40 a 18h51 | A ponte: o botão (propriedade conhecida) e uma leitura inédita ao vivo | 11 |
| 18h51 a 18h59 | Conferir a conexão, contar as máquinas e formar os grupos ou anunciar o B1 no telão | 8 |
| 18h59 a 19h08 | B1. Ler, conferir e escolher uma correção; os valores aparecem depois da leitura | 9 |
| 19h08 a 19h21 | B2. Cada pessoa aplica e testa a correção no próprio formulário | 13 |
| 19h21 a 19h30 | B3. Abrir a pasta `handoff/` e entregar as cópias que faltam | 9 |
| 19h30 a 19h36 | B4. Revogar todas as chaves do workshop | 6 |
| 19h36 a 19h40 | Fecho: o antes e o depois do formulário, uma resposta da sala e a passagem para o Mateus | 4 |

Soma: 100 min. É a ordem que a crítica da v4 propôs, a validar no ensaio cronometrado (`checklist-thiago.md`).

### O que tem prioridade quando atrasar

A grade só fecha porque o Thiago **segue no corte e deixa gente terminando depois**. Isso é dito na abertura e está em cada slide de passo, que mostra "até" e o horário.

1. **Os cortes de 18h40, 19h08, 19h21 e 19h30 não se movem.** A ponte, a correção, a pasta e a revogação começam na hora, com quem estiver.
2. **Na Parte A, a prioridade é a decisão (A3) e o teste (A5), não a geração.** Quem ainda está gerando às 18h40 acompanha a ponte e testa depois: o protótipo continua na conversa.
3. **Na ponte, o primeiro a encolher é a fala sobre o botão.** A leitura inédita não é cortada: ela é a prova.
4. **Na Parte B, a prioridade é o B2:** cada pessoa ver a própria correção no próprio formulário. Se o B1 atrasar, às 19h06 o Thiago mostra o slide "Confira" e dita os dois valores.
5. **O B4 nunca é cortado.** Se faltar tempo, sai a resposta da sala no fecho.

A fala da abertura: "Os horários não esperam. Cada slide mostra até que horas vai o passo. Quem atrasar para onde está, segue com a sala e termina depois, com o guia."


## Bloco a bloco

Cada slide de passo traz, no canto de cima à direita, **Faça agora** (a sala age) ou **Olhe o telão** (o Thiago demonstra), e logo abaixo o horário do corte ("até 18h11"). Quando o Thiago mostra antes de a sala fazer, a ordem é dita: "Primeiro olhem. Depois façam."

### 18h00 a 18h05. Abertura

1. Título e nome (slide 1). O Thiago se apresenta em uma frase, sem slide próprio.
2. O que é garantido e o que depende do Claude gratuito, com as palavras acima (slide 2). A imagem do slide é o formulário com a correção do texto de apoio, e isso é dito: "É um exemplo do material, com a correção do texto de apoio. O de vocês vai ter a correção que vocês escolherem."
3. As rotas (slide 3).
4. O guia, no notebook (slide 4): "Abram no notebook, pelo link da mensagem do grupo. O QR leva ao mesmo lugar, para quem quiser acompanhar no celular. O telão mostra a ação e quando deu certo; o texto para copiar está no guia."

Sem pergunta de abertura para a sala: come tempo e não muda nada.

### 18h05 a 18h40. Parte A

| Relógio | Passo | Min | Deu certo quando |
|---|---|---|---|
| 18h05 | A1. Exportar a Tela demo, PNG 2x | 6 | PNG do formulário inteiro salvo |
| 18h11 | A2. Revisar como designer | 7 | Até três sugestões numeradas, cada uma "viu" ou "supôs" |
| 18h18 | A3. Você decide o que aceita | 4 | Números anotados, com o porquê das recusas |
| 18h22 | A4. Protótipo: o mínimo, mais só as sugestões aceitas | 18, com o A5 | Formulário aparece na conversa e aceita digitação |
| até 18h40 | A5. Testar e anotar 1 diferença | | Erro e "Conta criada" testados; uma diferença anotada |

O Thiago faz junto no telão, com a Tela demo. No A1, projetar ao vivo a seleção do frame pelo nome e o painel de Export, com zoom. Dizer logo no começo: "Quem não duplicou o arquivo não espera: a imagem pronta está no ZIP e no guia, com link direto. Entra no A2 com a gente."

No A2, a fala: "Vocês revisam como designers, antes de especificar a construção. É uma leitura de imagem: ele estima, não mede. Por isso o prompt separa o que viu do que supôs." O prompt separa o mínimo do protótipo (digitar, erro com campo vazio, "Conta criada") das sugestões. Só as sugestões entram na decisão.

No A3, a fala: "A IA aponta. Quem decide é você. Anotem o que aceitam antes de pedir o protótipo. Sem tempo de ler tudo, decidam pelo menos uma." O exemplo do slide recusa uma sugestão com base no contexto que está escrito no prompt (a etapa não pede senha). Dizer: "Recusar pede um motivo que dê para mostrar. 'É assim de propósito' não vale para acessibilidade, e contexto inventado na hora também não." É o momento mais importante da A.

No A4, o prompt aplica o mínimo e só as sugestões aceitas. Ele não reimpõe hover, foco nem outro estado: se a pessoa recusou, não entra. Quem recebe só código manda o pedido de novo **uma vez**. Depois confere a opção de Settings > Capabilities. Estava ligada: para e acompanha o vizinho, sem gastar limite. A causa pode ser outra, e ninguém investiga na sala.

Se a geração do A4 falhar no telão: mostrar a saída do ensaio, dita como ensaio. Os slides 8 e 9 trazem imagens de exemplo do material (o formulário preenchido, o erro e "Conta criada"), para a sala saber o que procurar.

Às 18h40 o Thiago vai para a ponte, mesmo com gente terminando.

### 18h40 a 18h51. A ponte

Onze minutos, duas coisas. Nada sobre o texto de apoio nem sobre o campo nome: isso a sala descobre no B1.

**1. A propriedade conhecida: o botão (slides 10 e 11, cerca de 4 min).** Slide 10, a tese. Depois, no Figma, na mesma Tela demo, com zoom: selecionar o botão "Continuar", mostrar o fill `#C8352B` sem variável ligada e a camada fora do componente Button. Clicar em **Variables**, na barra de navegação da esquerda, e mostrar `color/brand-primary` com o mesmo valor. "O valor é igual. O vínculo não existe. Se a marca mudar, esse botão fica para trás. A imagem não tem como mostrar isso." O slide 11 traz o recorte real do botão, para o caso de o Figma não projetar.

**2. A leitura inédita, que é a prova (slide 12, cerca de 7 min).** Sem pular passo:

1. Pedir à sala uma camada da Tela demo e uma propriedade que **não esteja no guia nem em slide nenhum**. Sugestões se ninguém falar: o raio do canto de um campo, a largura do frame, o tamanho do título.
2. Selecionar a camada no Figma e deixar o valor visível no painel da direita, com zoom. Não ler em voz alta ainda.
3. No Claude Desktop, perguntar só por essa propriedade, sem escrever o valor.
4. Abrir, na resposta, o pedido que o Claude fez ao Figma e o que voltou. Mostrar os dois.
5. Voltar ao painel do Figma e comparar o valor com a resposta.

A fala: "Esse valor não está escrito em lugar nenhum do material. Vocês viram o pedido sair e a resposta voltar. Isso é a prova de que ele leu o arquivo." Se a conexão falhar no telão: dizer que falhou, mostrar a captura do ensaio dita como ensaio, e não chamar de prova.

Gancho para a B: "Agora vocês leem o arquivo, escolhem uma correção e veem ela acontecer no formulário de vocês."

### 18h51 a 18h59. Conferir a conexão, contar e formar os grupos

No telão: Figma Desktop com o arquivo, plugin Figma Desktop Bridge rodando, e a resposta do **Claude Desktop** com o nome do arquivo. Dizer "Claude Desktop": a Parte A valia no navegador, a conexão não. "Deu certo quando o Claude disse o nome do arquivo."

Uma tentativa coletiva, junto com o telão. Não conectou: uma ajuda de voluntário. Não resolveu: grupo. O Thiago não desce do palco para depurar.

Às 18h55: "Quem conectou levanta a mão." Os voluntários contam e aplicam a regra numérica (seção "As rotas"). O Thiago anuncia o resultado em uma frase: grupos, ou B1 no telão.

Com grupos: até quatro por máquina conectada, e todo mundo leva o próprio notebook. Papel dito no palco: "Quem está conectado manda o prompt e lê a resposta em voz alta. Os outros conferem no próprio Figma. No B2, cada um corrige o próprio formulário."

### 18h59 a 19h08. B1, ler e escolher

Slide 14: a pergunta, sem os valores. Uma pessoa por grupo manda o prompt B1 (três perguntas), ou o Thiago manda no telão se a regra numérica não fechou. A sala espera a resposta.

Depois da resposta, e só depois, o slide 15, "Confira": os valores e os recortes reais da Tela demo. A sala confere no próprio Figma os dois valores da pergunta 3: Variables, na barra da esquerda, coleção Workshop Tokens. O Thiago mostra esse caminho no telão, com zoom.

Se voltar vazio: não é para repetir no escuro. Primeiro perguntar qual arquivo o Claude está lendo, depois conferir se o plugin está rodando.

Depois, a escolha: "São duas correções, as que mudam à vista: o texto de apoio ou o campo nome. Escolham uma e **escrevam a decisão com o motivo**. Essa decisão escrita é o que vocês levam de qualquer jeito."

Às 19h06, com a sala atrasada: o Thiago vai para o slide "Confira" e dita os dois valores, `#6C665F` e `#F5F3F0`.

### 19h08 a 19h21. B2, a correção no próprio formulário

O momento central da Parte B. Fala: "Cada um no seu notebook, na conversa do seu protótipo. Colem o prompt B2 da correção que escolheram. Ele não precisa da conexão: o valor vocês já conferiram."

O Thiago faz no telão a correção do texto de apoio e mostra o antes e o depois. O slide 16 mostra as duas correções, antes e depois: o texto de apoio nas duas cores e os campos, do material. Depois o teste: mudou só ali, e erro e sucesso continuam funcionando. No campo nome, o critério é os dois campos ficarem iguais, sem contorno diferente.

Dizer com estas palavras: "É um valor copiado do Figma agora. O protótipo não ficou ligado à variável: se ela mudar amanhã, ele não muda sozinho."

Quem ficou sem protótipo ou sem limite: "Vocês têm a decisão escrita, com o valor conferido. É o que foi garantido. Acompanhem o teste do vizinho e apliquem em casa."

Quem terminou antes e está conectado pode começar a extensão (guia, seção 8). Avisar: tem que acabar antes das 19h30.

### 19h21 a 19h30. B3, abrir a pasta

Poucos minutos, sem geração no telão. O Thiago abre a própria `handoff` e faz os mesmos passos da sala:

1. "Quem não tem a pasta `handoff` na Área de Trabalho levanta a mão agora." O voluntário do pendrive copia.
2. Dois cliques no `Card.html`: dois cards com cor.
3. `tokens.json` aberto como texto: `#C8352B`, `20px` e `24px`. "São três valores de amostra, não a pasta inteira."

Dois estados, ditos com estas palavras:

- **"Pasta aberta e valores locais vistos":** todo mundo chega aqui, mesmo sem rede.
- **"Valores comparados com o Figma":** só quem tem rede e o arquivo aberto, olhando os mesmos três em Variables. "Quem não conseguiu comparar agora diz isso sem problema: abri a pasta, ainda não comparei com o Figma."

A fala sobre o Card: "Esse Card é o objeto da sessão do Mateus. Ele foi feito com os mesmos tokens que vocês acabaram de ver. Não é a continuação do formulário de vocês."

Só quem fez a extensão tem também a `fora-do-frame`.

### 19h30 a 19h36. B4, revogar

No telão: Settings > Security > Personal access tokens > Revoke, a confirmação e a lista depois, sem o valor de nenhuma chave à vista. "Revoguem todas as chaves que vocês criaram para o workshop. O normal é uma; quem repetiu a instalação tem mais." Sem corte. Voluntários passam pelas fileiras perguntando.

### 19h36 a 19h40. Fecho

Quatro minutos, e o último objeto na tela é o formulário.

1. **O antes e o depois (slide 19).** O formulário com o texto de apoio antes e depois. "Olhem o de vocês. Essa diferença veio de uma decisão de vocês, com um valor lido do arquivo." Uma resposta da sala, uma só: "Qual correção você escolheu, e por quê?" Sem tempo, sai a resposta.
2. **Limites, em uma respiração (slide 20):** o protótipo não é produto pronto; a correção é um valor copiado, não uma ligação com o Figma; numa tela sua, ligue cores e espaços a variáveis antes de pedir.
3. **A passagem (slide 21, o último).** O slide mostra o formulário corrigido, não nomes de arquivo. "Vocês saem com uma decisão de vocês, com o valor lido do arquivo. Quem conseguiu gerar sai com ela aplicada; quem bateu no limite aplica em casa, com o prompt do guia. Às 20h, levem a pasta `handoff` aberta: é dela que o Mateus parte. O formulário fica com vocês." Detalhes em `para-o-mateus.md`.

Pergunta que vira consultoria individual: "me procura no coffee". Fecha no horário.


## Contingências de sala

- **Rede cai para muita gente:** a Parte A depende do Claude e para; o Thiago mostra no telão a saída do ensaio, dita como ensaio. Na Parte B, a correção vira demonstração no telão. No B3, a sala chega ao estado "pasta aberta e valores locais vistos", que não usa internet. A comparação com o Figma **fica pendente** para quem usa o Figma no navegador, e o Thiago diz isso: ninguém chama a pasta de conferida contra o arquivo sem ter comparado.
- **Máquinas conectadas abaixo da regra numérica às 18h55:** B1 no telão, sem mover cadeira. O B2 continua individual: o prompt não precisa da conexão.
- **Uma máquina conectada cai depois de os grupos formados:** o grupo acompanha a leitura do grupo ao lado ou o slide "Confira".
- **Limite da conta gratuita em massa:** quem ficou sem uso tem a decisão escrita e acompanha o vizinho. A `handoff/` não depende do Claude.
- **Demo do palco trava:** saída do ensaio, dita como ensaio. Nunca vender pré-gerado como ao vivo, e nunca chamar captura de prova.
- **Atraso acumulado:** a regra de prioridade acima. O B4 (revogar) nunca é cortado.
- **Pendrive:** só é prometido no palco se um voluntário confirmou que leva (`guia-voluntarios.md`). Sem confirmação até terça, o Thiago leva o dele.
- **Máquinas, rede, tomadas, projetor, número de voluntários:** [VERIFICAR com a Gi] (`perguntas-gi.md`).
