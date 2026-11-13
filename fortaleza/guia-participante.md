# Guia do participante: Seu Figma vira produto

Design com IA, do arquivo ao protótipo que funciona. Workshop do Thiago Xikota no Fora do Frame, uma experiência UXFor. Quarta, 18/11/2026, das 18h00 às 19h40, na Digital College Aldeota, Fortaleza.

Este workshop é para designer. Você não precisa saber programar.


## O que você leva

Todo mundo trabalha na mesma tela: a **Tela demo**, um formulário "Criar sua conta" que está no arquivo do exercício. É um exercício controlado: a tela tem seis problemas colocados de propósito, e você vai achar alguns deles de dois jeitos.

**Garantido, para todo mundo:**

1. **A sua decisão de design, escrita.** Qual ponto da tela você corrige, com qual valor e por quê. O valor você confere no Figma.
2. **A pasta `handoff/`, conferida.** Um componente Card e os tokens de design, em arquivo. Vem do ZIP que você baixa antes de quarta, e na sala você abre e confere. É o material da próxima sessão: o Mateus Villain parte dela às 20h.

**Depende do Claude gratuito:**

3. **O seu formulário, corrigido.** O protótipo de "Criar sua conta", funcionando, com a correção que você decidiu. Ele é gerado na sua conta gratuita do Claude, que tem limite de uso e varia com o dia. A maioria da sala sai com ele. Se a sua conta chegar ao limite ou a geração falhar, você sai com a decisão escrita, acompanha o teste de quem está do lado e aplica a correção em casa, com o prompt deste guia.

**O Card não é a continuação do seu formulário.** É outro componente, feito com os mesmos tokens de design. O Mateus trabalha os tokens e o Card; o formulário continua com você, na conversa do Claude.

Duas palavras que aparecem o tempo todo:

- **Tokens de design:** os valores com nome do design system. Exemplo: `color/brand-primary` é o vermelho `#C8352B`. No Figma eles se chamam variáveis.
- **Card:** um componente pequeno de interface, com título, texto e um botão.

Ninguém paga nada: a conta gratuita do Figma e a do Claude servem.


## As rotas

- **Parte A, todo mundo.** Precisa só de conta e navegador.
- **Parte B conectado:** quem preparou a máquina em casa, antes de quarta (seção 1). O Claude Desktop lê o arquivo do Figma nessa máquina. Na sala a gente só confere a conexão: ninguém instala nada durante o workshop.
- **Parte B em grupo:** quem não preparou senta com alguém conectado, em grupo de até quatro. A leitura do arquivo acontece na máquina conectada. Depois **cada pessoa confere o valor no próprio Figma e corrige o próprio protótipo**, no próprio notebook.

**A regra dos grupos.** Precisa de uma máquina conectada para cada quatro pessoas. Às 18h51 os voluntários contam. Se não houver máquinas suficientes, a leitura do B1 acontece no telão, para a sala inteira, e cada pessoa confere no próprio Figma. O resto da Parte B não muda.

A Parte B usa uma conexão local entre o Claude Desktop e o Figma. É ela que deixa o Claude ler o arquivo, em vez de olhar uma imagem.

Notebook da empresa que não deixa instalar programa? Nem tente: você faz a Parte A inteira e a Parte B em grupo.


## 1. Antes de quarta

### Para todo mundo (reserve meia hora)

1. **Conta gratuita do Figma:** https://www.figma.com/signup. Prefira a sua conta pessoal, não a do trabalho.
2. **Conta gratuita do Claude:** https://claude.ai
3. **Duplique o arquivo do exercício** para a sua conta (botão de duplicar):
   https://www.figma.com/community/file/1659374868260259462
   A Tela demo fica na página **"01 Comece aqui"**. Não conseguiu duplicar? Venha mesmo assim: o ZIP do passo 4 traz a imagem da tela pronta (`fortaleza/telao/tela-demo.png`), e com ela você faz a Parte A.
4. **Baixe o ZIP do workshop** e descompacte:
   https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza.zip
   Dentro dele está a pasta `handoff/`, que funciona sem internet. Copie essa pasta para a Área de Trabalho, com o nome `handoff`. É essa cópia que você abre na sala e leva para as 20h.
   O ZIP traz este guia na mesma versão. Para ler no navegador: https://github.com/thiagoxikota/figma-to-code-tdc-2026/blob/fortaleza/fortaleza/guia-participante.md
5. **Teste se o Claude mostra protótipo.** No Claude, abra **Settings > Capabilities** e deixe ligada a opção **Cloud code execution and file creation** (em algumas versões ela aparece como **Create and edit files**). Depois, numa conversa nova, mande:

```
Crie um botão vermelho em HTML e mostre funcionando aqui na conversa.
```

6. Entre nas duas contas e deixe o celular por perto. Login com código no e-mail ou verificação em duas etapas sem o celular trava na hora.

Deu certo quando:

- você abre a sua cópia do arquivo e vê a Tela demo, com o título "Criar sua conta";
- você abre `handoff/Card.html` com dois cliques e vê dois cards com cor, mesmo sem internet;
- o botão do teste apareceu na conversa do Claude e dá para clicar nele. Veio só o código? Confira a opção do passo 5 e mande de novo, uma vez. Continuou? Avise no grupo. No dia você faz a revisão e a decisão normalmente, acompanha a geração de um colega e sai com a decisão escrita e a pasta.

### Preparo opcional da conexão, para fazer a Parte B conectado (mais meia hora, em casa)

São três programas, uma chave do Figma, um comando, um plugin e um teste. O preparo só terminou quando o teste final passa: **o Claude Desktop diz o nome do arquivo aberto no Figma.**

Faça tudo isto em casa, com calma. Na sala não dá tempo de instalar, e a rede pode ser lenta.

**Passo 1. Instale três programas.**

- **Figma Desktop**, o app, não o navegador: https://www.figma.com/downloads/
- **Claude Desktop**, o app do Claude: https://claude.com/download
- **Node.js** versão LTS, a recomendada no site: https://nodejs.org/en/download. Ele só roda o instalador e a conexão com o Figma. Você não vai programar com ele.

Para conferir o Node, abra o Terminal (Mac: Cmd+Espaço, digite Terminal) ou o PowerShell (Windows: tecla Windows, digite PowerShell) e digite `node -v`. Tem que aparecer v18 ou maior. Se você também vai no workshop do Mateus, prefira 22 ou maior.

**Passo 2. Rode o instalador.**

Abra o Figma Desktop e o Claude Desktop, logados. No Terminal ou no PowerShell, cole o comando e aperte Enter.

Mac:

```
npx -y https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza.tar.gz
```

Windows (repare no `.cmd`, que evita o bloqueio de scripts do PowerShell):

```
npx.cmd -y https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza.tar.gz
```

O instalador faz isto, nesta ordem:

1. confere se o Node, o Figma Desktop e o Claude Desktop estão aí e dá o link do que faltar;
2. abre as configurações do Figma para você criar a **chave do Figma**: aba **Security > Personal access tokens > Generate new token**. Validade de **7 dias**: é uma chave só, criada em casa e usada na quarta, e você revoga no fim do workshop. Em permissões, marque **só leitura em File content**. Nada mais é necessário;
3. pede a chave num campo escondido: cole e aperte Enter (aparecem só asteriscos). Se o navegador não abrir sozinho, o endereço da página aparece escrito para você copiar;
4. conecta o Figma ao Claude Desktop e mantém as outras conexões que já estão lá. Se você já tem uma conexão chamada `figma-console` diferente, ou se o arquivo de configuração do Claude estiver com defeito, ele **para, mostra o que seria substituído e só continua se você digitar `sim`**. Na dúvida, aperte Enter: nada é alterado e você faz a Parte B em grupo;
5. prepara o plugin do Figma, mostrando o progresso enquanto isso. Se o plugin não ficar pronto, ele diz que **a instalação não terminou** e o que fazer. Se ficar, mostra o caminho do arquivo do plugin e já deixa esse caminho copiado.

**Sobre a chave do Figma.** O Figma chama essa chave de "personal access token". Aqui ela é "a chave", para não confundir com os tokens de design. Ela começa com `figd_` e **aparece uma vez só**: copie na hora. Ela é sua: não mande para ninguém nem deixe outra pessoa digitar por você. E ela lê qualquer arquivo que a sua conta abre, não só o do exercício. Por isso a conta pessoal e a revogação no fim.

**Se o comando não rodar** (erro de download, rede da empresa, versão nova do npm): abra o Terminal ou o PowerShell dentro da pasta do ZIP que você descompactou e rode:

```
node scripts/instalar.mjs
```

Faz a mesma coisa sem precisar baixar o instalador. Ainda precisa de internet: o último passo baixa a conexão com o Figma. Sem internet nenhuma, ou com a rede bloqueando esse download, não tem como instalar: você faz a Parte B em grupo.

**Passo 3. Ligue o plugin e teste.**

1. Feche o Claude Desktop por completo e abra de novo. No Mac é Cmd+Q. No Windows, saia também pelo ícone perto do relógio, não só pelo X. A conexão só carrega quando o app abre.
2. No Figma Desktop, abra a sua cópia do arquivo do exercício. Menu **Plugins > Development > Import plugin from manifest**. O Figma abre uma janela de escolher arquivo, e é nela que você aponta o `manifest.json` que o instalador mostrou:
   - Mac: a pasta começa com ponto e fica escondida. Na janela, aperte Cmd+Shift+G, cole o caminho e confirme;
   - Windows: na mesma janela, cole o caminho no campo **Nome do arquivo** e clique em **Abrir**. Não cole no Explorer fora dessa janela: isso só abre o arquivo, não importa o plugin.
3. Rode o plugin **Figma Desktop Bridge** e deixe a janela dele aberta.
4. No Claude Desktop, abra uma conversa nova e mande:

```
Verifique o status da conexão com o Figma
```

Deu certo quando: **o Claude disse o nome do arquivo** que está aberto no Figma. Aparecer numa lista ou o instalador dizer "ok" não conta como teste.

Não conseguiu até quarta? Tudo bem. Você faz a Parte A inteira e a Parte B em grupo.

### Leve no dia

- Notebook com macOS ou Windows. Linux faz a Parte A normalmente e a Parte B em grupo.
- A pasta `handoff` na Área de Trabalho.
- Carregador.
- Celular.


## Horários

| Horário | O que acontece | Corte |
|---|---|---|
| 18h00 | Abertura: o que é garantido, o que depende do Claude, as rotas, este guia | 18h05 |
| 18h05 | A1: exportar a Tela demo | 18h11 |
| 18h11 | A2: a revisão da tela, no máximo três sugestões | 18h18 |
| 18h18 | A3: você decide o que aceita | 18h22 |
| 18h22 | A4 e A5: gerar o protótipo e testar | 18h40 |
| 18h40 | A ponte: o que a imagem não mostra, com uma leitura do arquivo ao vivo | 18h51 |
| 18h51 | Conferir a conexão, contar as máquinas e formar os grupos | 18h59 |
| 18h59 | B1: ler a Tela demo pelo arquivo e escolher uma correção | 19h08 |
| 19h08 | B2: cada pessoa aplica e testa a correção no próprio formulário | 19h21 |
| 19h21 | B3: abrir a pasta `handoff/`; quem ficou sem recebe a cópia | 19h30 |
| 19h30 | B4: revogar as chaves do Figma | 19h36 |
| 19h36 | Fecho: o antes e o depois do formulário e a passagem para o Mateus | 19h40 |

**Os cortes valem.** No horário do corte a sala segue para o passo seguinte, e o slide de cada passo mostra esse horário. Se você atrasar, pare onde está e acompanhe: o guia fica com você e dá para terminar depois. O que você não terminar na sala não some: a conversa do Claude e a pasta continuam com você.


## 2. Parte A: a Tela demo como imagem (18h05 às 18h40)

Funciona no app do Claude ou no navegador (claude.ai), no Figma Desktop ou no Figma do navegador. Guarde a conversa do protótipo: você volta a ela na Parte B.

A conta gratuita do Claude tem limite de mensagens, e ele vale junto para o navegador e o app. Não existe um número fixo: varia com o dia. A Parte A usa duas mensagens e a Parte B, de uma a três. Mande cada prompt uma vez e leia com calma antes de pedir mais.

### A1. Exportar a Tela demo (18h05, até 18h11)

1. Na sua cópia do arquivo, página "01 Comece aqui", clique no nome **Tela demo**, em cima do frame, para selecionar o frame inteiro.
2. No painel da direita, lá no fim, em **Export**, clique no **+**. Deixe **PNG** e escolha **2x**.
3. Clique em **Export Tela demo** e salve a imagem.

Deu certo quando: você tem um arquivo PNG com o formulário "Criar sua conta" inteiro, do título ao botão. Saiu só um pedaço? Você selecionou uma camada de dentro: clique no nome do frame e exporte de novo.

**Não duplicou o arquivo, ou o Figma não abriu?** Não espere. Use a imagem pronta da Tela demo:

- no ZIP: `fortaleza/telao/tela-demo.png`;
- ou baixe direto: https://github.com/thiagoxikota/figma-to-code-tdc-2026/blob/fortaleza/fortaleza/telao/tela-demo.png (botão de download, no alto à direita).

Com ela você entra no A2 junto com a sala. A conferência no Figma você faz depois, quando conseguir duplicar o arquivo.

### A2. Revisar como designer (18h11, até 18h18)

Abra uma conversa nova no Claude, anexe a imagem (clipe ou arraste) e mande:

```
Esta imagem é a tela "Criar sua conta" que eu fiz no Figma: título, um texto de apoio, campo de e-mail, campo de nome, uma caixa de opt-in e o botão Continuar.
Contexto: é a primeira etapa do cadastro, aberta no celular. Esta etapa pede só e-mail e nome. A senha é criada depois, por um link enviado ao e-mail.
Revise como designer, antes de eu especificar a construção. Liste no máximo 3 sugestões, numeradas, da mais grave para a menos grave, olhando: diferença de estilo entre os dois campos, espaçamento sem padrão, texto e acessibilidade (contraste, área de toque, rótulos). Para cada uma: o que é, onde está e se você VIU na imagem ou SUPÔS.
Não liste o que o protótipo vai ter de qualquer jeito: campos que aceitam digitação, mensagem de erro com campo vazio e a tela "Conta criada".
Sem código. Não gere nada ainda.
```

O prompt separa duas coisas:

- **o mínimo do protótipo,** que não é sugestão e não entra na sua decisão: digitar nos campos, erro com campo vazio e a tela "Conta criada";
- **as sugestões da revisão,** que são suas para aceitar ou recusar.

Deu certo quando: você tem até três sugestões numeradas, e cada uma diz se foi vista ou suposta.

O Claude não mede nada numa imagem: ele estima. Um contraste "baixo" aqui é palpite. O número exato vem do arquivo, na Parte B.

### A3. Você decide o que aceita (18h18, até 18h22)

Esta é a parte que é sua. A IA aponta, quem conhece a tela é você.

Leia as sugestões e decida cada uma. Anote os números num papel ou num bloco de notas, e para cada recusa, uma frase do porquê.

Um exemplo, só para mostrar o formato (as suas sugestões vão ser outras). Imagine que a sugestão 2 seja "falta um campo de senha":

> "Aceito a 1 e a 3. Recuso a 2: o contexto diz que esta etapa não pede senha, ela é criada depois, por um link."

A recusa do exemplo se apoia no contexto que está escrito no prompt. É esse o critério: recusar pede um motivo que dê para mostrar. "É assim de propósito" não serve para um problema de acessibilidade, e contexto inventado na hora também não.

Sem tempo de ler tudo? Decida pelo menos uma: uma que você aceita ou uma que você recusa, com o motivo.

Deu certo quando: você tem os números anotados, com o motivo de cada recusa. Ainda não mande nada.

### A4. O protótipo (18h22, com o A5 até 18h40)

Na mesma conversa, troque os números pelos seus e mande:

```
Agora monte um protótipo desta tela "Criar sua conta" em HTML, um arquivo só, e mostre funcionando aqui na conversa. Copie o layout, as cores e os textos da imagem.
O MÍNIMO, que vale sempre: os campos de e-mail e nome aceitam digitação; clicar em Continuar com algum campo vazio mostra uma mensagem de erro junto do campo; com os dois preenchidos, aparece uma tela "Conta criada".
DA SUA LISTA, aplique SÓ as sugestões [NÚMEROS QUE VOCÊ ACEITOU]. Não aplique as outras e não acrescente estado, efeito ou texto que eu não pedi.
```

Não aceitou nenhuma? Troque o trecho entre colchetes por `nenhuma`.

O protótipo aparece na própria conversa, ao lado ou abaixo da resposta. Se aparecer só o código, mande **uma vez**:

```
Mostre o protótipo funcionando aqui na conversa.
```

Continuou só código? Não insista, para não gastar o limite. Faça nesta ordem:

1. Confira em **Settings > Capabilities** se a opção do passo 5 da preparação está ligada. Estava desligada: ligue e mande o pedido mais uma vez.
2. Estava ligada, ou não mudou nada: pare aqui. Acompanhe o protótipo de quem está do lado e chame um voluntário. Na Parte B você decide a correção, escreve a decisão e aplica depois, em casa.

Deu certo quando: o formulário aparece na conversa e dá para digitar nos campos.

### A5. Testar e anotar uma diferença (até 18h40)

1. Clique em Continuar com tudo vazio. Tem que aparecer erro.
2. Preencha e-mail e nome e clique de novo. Tem que aparecer "Conta criada".
3. Olhe o protótipo ao lado da Tela demo no Figma e anote **uma** diferença: uma cor, um espaçamento ou um tamanho de texto que ficou parecido, mas não igual.

Deu certo quando: o protótipo foi testado (erro e sucesso) e você anotou uma diferença. Guarde a anotação: na Parte B você confere o valor exato.

Às 18h40 a sala segue para a ponte. Ainda gerando? Pare de olhar a tela e acompanhe: o seu protótipo continua na conversa e você testa depois.


## 3. A ponte: o que a imagem não mostra (18h40 às 18h51)

A imagem mostra como a tela parece. O arquivo mostra do que ela é feita.

O Thiago abre a mesma Tela demo no Figma e mostra duas coisas.

**Uma propriedade conhecida: o botão "Continuar".** Na imagem, um vermelho. No arquivo, `#C8352B` digitado direto, sem ligação com o componente Button nem com a variável. O valor é igual ao do token `color/brand-primary`, mas não está ligado a ele: se a marca mudar, esse botão não muda. O seu protótipo pode ter acertado a cor. O ponto não é a cor: é que a imagem não tem como dizer se ela está ligada ao sistema.

**Uma leitura inédita, ao vivo.** O valor do botão está escrito aqui, então o Claude repetir esse valor não mostra que ele leu o arquivo. Para isso o Thiago faz uma leitura no telão com uma propriedade que **não está neste guia nem no prompt**, escolhida pela sala: ele mostra o painel do Figma, o pedido que o Claude Desktop faz ao Figma e o que volta. É essa sequência, vista acontecendo, que mostra de onde veio a resposta.

As outras propriedades da tela quem lê é você, no B1.


## 4. Conferir a conexão e formar os grupos (18h51 às 18h59)

**Instalou em casa?** Figma Desktop com a sua cópia do arquivo aberta, plugin Figma Desktop Bridge rodando, **Claude Desktop** aberto (o app, não o navegador). Conversa nova:

```
Verifique o status da conexão com o Figma
```

Deu certo quando: o Claude disse o nome do arquivo. Não conectou em uma tentativa? Chame um voluntário uma vez. Não resolveu: grupo.

**Conectou? Levante a mão.** Os voluntários contam as máquinas conectadas. A conta é simples: uma para cada quatro pessoas da sala.

- **Tem máquinas suficientes:** quem não conectou se junta a alguém que conectou, em grupo de até quatro. Leve o seu notebook: você vai usar o seu Figma (o do navegador serve) e a conversa do seu protótipo. Quem está conectado manda o prompt do B1 e lê as respostas em voz alta; os outros conferem cada valor no próprio Figma e anotam.
- **Não tem:** ninguém muda de lugar. O Thiago faz a leitura do B1 no telão, e cada pessoa confere no próprio Figma.


## 5. Parte B: a mesma Tela demo, lida do arquivo (18h59 às 19h36)

### B1. Ler e escolher uma correção (18h59, até 19h08)

**Na máquina conectada** (ou no telão, se o B1 for coletivo), na conversa em que a conexão foi testada:

```
Leia no Figma conectado o frame "Tela demo" da página "01 Comece aqui". Responda só estas três perguntas, uma linha cada, com o valor exato que está no arquivo:
1. Texto "Leva menos de um minuto": qual é a cor do texto, a cor do fundo e o contraste entre elas?
2. Campo "nome": qual estilo ele usa, comparado ao campo de e-mail?
3. Na coleção Workshop Tokens, qual é o valor de color/text-muted e de color/surface-alt?
```

Espere a resposta e leia em voz alta para o grupo. **Só depois** abra a conferência abaixo.

**Voltou vazio ou sem nenhum valor?** Não repita ainda. Confira duas coisas:

1. Mande `Qual arquivo do Figma você está lendo?`. Tem que ser a cópia do arquivo do exercício.
2. Olhe o Figma Desktop: o plugin Figma Desktop Bridge está aberto e rodando? Ele fecha se o Figma dormir ou se você trocar de arquivo.

Arquivo certo e plugin rodando: aí sim mande o B1 de novo.

**Cada pessoa, no próprio Figma,** confere o valor da pergunta 3. Clique em **Variables**, na barra de navegação da esquerda: a vista das variáveis ocupa a janela inteira. Abra a coleção Workshop Tokens e ache `color/text-muted` e `color/surface-alt`. Não achou essa entrada? Em versões anteriores do Figma o caminho é outro: clique numa área vazia do canvas e procure **Local variables** no painel da direita. Ou abra a busca de ações (Cmd+K no Mac, Ctrl+K no Windows) e digite `variables`.

#### Confira, depois da leitura

| Pergunta | O que o arquivo diz |
|---|---|
| 1 | `#A29B93` sobre `#FFFFFF`, contraste perto de 2,75 para 1. O mínimo AA é 4,5 para 1 |
| 2 | O campo nome está só com contorno: fundo branco e borda. O de e-mail, que segue o padrão do sistema, é preenchido |
| 3 | `color/text-muted` = `#6C665F` e `color/surface-alt` = `#F5F3F0` |

Na imagem, o cinza do texto dava para desconfiar e o campo nome parecia escolha de design. O arquivo dá o número e mostra que o campo saiu do padrão.

**Agora escolha uma correção.** São duas, as que mudam à vista no formulário:

| Se você escolher | O que muda | Token | Valor conferido |
|---|---|---|---|
| O texto "Leva menos de um minuto" | Fica mais escuro: passa de 2,75 para cerca de 5,7 para 1 | `color/text-muted` | `#6C665F` |
| O campo "nome" | Deixa de ser só contorno e fica igual ao de e-mail, preenchido | `color/surface-alt` | `#F5F3F0` |

**Escreva a decisão, do seu jeito.** Ela é uma das duas coisas garantidas que você leva. Exemplo: "Texto de apoio: trocar `#A29B93` por `#6C665F`, de `color/text-muted`, porque 2,75 para 1 reprova no AA."

Deu certo quando: você viu as três respostas, conferiu no seu Figma o valor do token que escolheu e a sua decisão está escrita. Olhe também a diferença que você anotou no A5: se ela é uma dessas, agora você tem o valor exato.

### B2. Aplicar e testar a correção no seu formulário (19h08, até 19h21)

Cada pessoa faz no próprio notebook, **na conversa do próprio protótipo** (a da Parte A). Vale para quem está conectado e para quem está em grupo: este prompt não precisa da conexão com o Figma, porque o valor você já conferiu.

Se escolheu o texto de apoio:

```
Decisão minha: trocar a cor do texto de apoio "Leva menos de um minuto" para #6C665F, valor de color/text-muted lido no Figma. Aplique só essa mudança no protótipo e diga o que mudou.
```

Se escolheu o campo nome:

```
Decisão minha: o campo "nome" deixa de ser só contorno. Tire o fundo branco com borda destacada e deixe o campo igual ao de e-mail: fundo #F5F3F0, valor de color/surface-alt lido no Figma, e a mesma borda do campo de e-mail. Aplique só essa mudança no protótipo e diga o que mudou.
```

Depois teste, olhando o protótipo:

1. o ponto que você escolheu mudou:
   - texto de apoio: ficou mais escuro;
   - campo nome: **os dois campos estão iguais.** Mesmo fundo e mesma borda; o campo nome não ficou com um contorno diferente do de e-mail;
2. o resto ficou igual;
3. Continuar vazio ainda dá erro, e preenchido ainda dá "Conta criada".

Deu certo quando: as três coisas acontecem. Mudou mais do que você pediu? Mande uma vez: `Desfaça o resto. Só a mudança que eu pedi.`

**O que essa correção é, e o que não é.** É um valor copiado do Figma naquele momento. O protótipo não ficou ligado à variável: se ela mudar no Figma depois, ele não muda sozinho.

**Guarde o seu formulário.** Ele fica na conversa, no histórico do Claude, e dá para abrir de novo depois. Quer o arquivo? No painel do protótipo, procure a opção de baixar ou de copiar o código e salve como `formulario.html`.

**Não tem protótipo,** porque o A4 não gerou ou o limite da conta acabou? Você continua com o que é garantido: a decisão escrita, com o valor conferido. Acompanhe o teste de quem está do lado e aplique em casa, quando o limite voltar, com os prompts A4 e B2 deste guia.

### B3. Abrir a pasta `handoff/` (19h21, até 19h30)

A pasta é a `handoff` da **Área de Trabalho**, a cópia que você fez do ZIP. Não precisa do Claude nem de internet. O Card dela é material da sessão do Mateus, não a continuação do seu formulário.

**Sem a pasta no notebook, ou ela não abre?** Levante a mão agora: um voluntário copia a `handoff` do pendrive.

| O quê | Como | Deu certo quando |
|---|---|---|
| 1. O Card | Dois cliques em `Card.html`: ele abre no navegador | Aparecem dois cards **com cor**: um normal, com o botão vermelho "Ver detalhes", e um desabilitado |
| 2. Três valores, como amostra | Abra `tokens.json` como texto: botão direito > Abrir com > TextEdit (Mac) ou Bloco de Notas (Windows). Só leia, não salve | Você acha `"brand-primary"` com `"#C8352B"`, `"heading"` (dentro de `"font-size"`) com `"20px"` e `"3"` (dentro de `"space"`) com `"24px"` |

**Estado 1, que todo mundo alcança na sala: pasta aberta e valores locais vistos.** O Card abre com cor e os três valores estão no arquivo. Os três valores são uma amostra, não a pasta inteira: o arquivo tem 24 tokens.

**Estado 2, só com rede e com o arquivo do Figma aberto: valores comparados com o Figma.** Em Variables, na coleção Workshop Tokens, `color/brand-primary` é `#C8352B`, `font-size/heading` é 20 e `space/3` é 24.

Sem rede, sem tempo ou sem o arquivo duplicado, o estado 2 **fica pendente**, e tudo bem dizer isso: "abri a pasta e vi os valores; ainda não comparei com o Figma". Faça em casa. Não chame a pasta de conferida contra o Figma antes disso.

Algum valor não bateu? Chame um voluntário: ou a pasta é de outra versão, ou a sua cópia do arquivo do Figma foi alterada.

**Tem Node instalado?** Dá para conferir as 23 variáveis do `tokens.json` com um comando, e aí vale conferir a pasta certa: a da Área de Trabalho, que é a que você leva. No Terminal, dentro da pasta do ZIP, digite o comando abaixo, dê um espaço e **arraste a pasta `handoff` da Área de Trabalho para o Terminal**. O caminho aparece sozinho. Depois, Enter.

```
node scripts/conferir-pasta.mjs
```

A última linha tem que dizer **Pasta conferida**. O comando confere os nomes dos arquivos e as 23 variáveis do `tokens.json` (nome, tipo e valor). Ele não olha o conteúdo do `Card.html`, do `Card.css` nem do `config.json`: para esses, o teste é o Card abrir com cor.

Só quem fez a extensão (seção 8) tem também a pasta `fora-do-frame`, gerada na própria máquina. Diga isso ao Mateus.

### B4. Revogar as chaves do Figma (19h30, até 19h36)

Só para quem criou chave. No Figma: **Settings > Security > Personal access tokens**. Clique em **Revoke** em **todas as chaves que você criou para o workshop** e confirme na janela que o Figma abre.

O normal é ter uma só, criada em casa e usada hoje. Se você repetiu a instalação e criou outra, a lista mostra mais de uma: revogue todas. A cópia de segurança que o instalador guarda da configuração antiga do Claude pode ter a chave dentro; revogada, ela não serve para nada.

Deu certo quando: nenhuma chave do workshop aparece mais na lista de Personal access tokens.

Não é opcional e não tem corte. Depois, se quiser, desligue a conexão com o Figma nas configurações do Claude Desktop.

Não criou chave? Ajude quem está do lado a achar a tela.


## 6. O fecho e as 20h, com o Mateus

O workshop termina no formulário: o Thiago mostra o antes e o depois da correção, e a sala olha o próprio. Depois vem a passagem.

Às 20h, leve a pasta `handoff` aberta. Ela tem o Card e os tokens de design: é ela que o Mateus abre. **O seu formulário continua na conversa do Claude e não entra na sessão dele.** Ninguém precisa apagar nem mudar arquivo da própria pasta para acompanhar o Mateus.

Se alguém perguntar, a frase é esta: "Esta pasta tem o Card e os tokens; o meu formulário ficou no Claude."


## 7. Limites, sem maquiar

- O protótipo não é produto pronto: serve para testar a ideia e conversar com o time. As cores e medidas dele vêm da imagem, menos o ponto que você corrigiu no B2.
- A correção do B2 é um valor copiado, não uma ligação com o Figma.
- `var(--token)` num código não mostra sozinho que a IA leu o Figma, e um valor igual ao deste guia também não. O que mostra é ver a leitura acontecer, como na ponte.
- Código gerado por IA não é código de produção. É ponto de partida, e alguém revisa.
- A conexão lê o que existe no arquivo. Antes de usar numa tela sua, confira se as cores e os espaços dela estão ligados a variáveis: o que estiver digitado direto volta como valor solto, igual ao botão de hoje.
- A Tela demo é um exercício controlado, com problemas colocados de propósito. Numa tela sua, a lista vai ser outra.
- Se o Thiago mostrar no telão um resultado pré-gerado dos ensaios, ele avisa na hora.


## 8. Extensão: gerar a sua própria pasta

Para quem terminou o B2 antes do tempo e está conectado, ou para fazer em casa. **Não faz parte do percurso da sala:** quem não fizer não perde nada do que foi prometido.

Precisa da conexão com o Figma funcionando. Na sala, termine antes das 19h30, porque os prompts leem o Figma e a chave é revogada nessa hora. Em casa, depois do workshop, rode o instalador de novo com uma chave nova e revogue no fim.

Aqui aparecem HTML, CSS e JSON. Você não precisa escrever nenhum deles, mas vai copiar, colar e conferir.

### E1. Gerar o Card

Na conversa conectada ao Figma:

```
Gere um componente Card em HTML e CSS puros: sem JavaScript, sem bibliotecas.
Antes de gerar, leia no Figma conectado as variáveis da coleção Workshop Tokens e use só elas (cor, espaçamento, tipografia, raio). Não invente valores.
FORMATO OBRIGATÓRIO: dois blocos de código, o primeiro com o arquivo Card.html e o segundo com o arquivo Card.css. O Card.html é uma página completa, em pt-BR, que carrega tokens.css e Card.css com <link>, nesta ordem, e mostra dois cards: um normal e um desabilitado. Use exatamente estas classes: card, card__body, card__title, card__description, card__action e card--disabled. O título é um h3 e a ação é um <button type="button">Ver detalhes</button>. O Card.css tem hover, foco visível de 2px, alvo mínimo de 44px e contraste AA. Toda cor, espaçamento, raio e tamanho de fonte vem de variável CSS com o MESMO nome do token do Figma (ex: var(--color-brand-primary)), sem hex digitado, e ao lado de cada uma um comentário com o valor do Figma (ex: /* #C8352B */). Só três valores podem ser fixos: a largura máxima do card, a opacidade do estado desabilitado e o peso do texto do botão (600). Para a família da fonte, use font-family: var(--font-body, system-ui, sans-serif).
```

Os três valores fixos são os mesmos do `Card.css` da pasta `handoff`: largura máxima, opacidade do desabilitado e peso do texto do botão.

Deu certo quando: vieram dois blocos de código, o primeiro começando com `<!doctype html>` e o segundo com as classes `.card`. Isso só diz que o formato veio certo. O conteúdo você confere no E2.

### E2. Conferir três linhas do CSS contra o Figma

No bloco `Card.css`, ache estas linhas (Cmd+F ou Ctrl+F ajuda) e compare com as variáveis no seu Figma:

| Onde, no `Card.css` | Tem que estar escrito | No Figma |
|---|---|---|
| `.card__action`, linha `background` | `var(--color-brand-primary)` | `color/brand-primary` = `#C8352B` |
| `.card__title`, linha `font-size` | `var(--font-size-heading)` | `font-size/heading` = 20 |
| `.card__body`, linha `padding` | `var(--space-3)` | `space/3` = 24 |

Não bateu, ou o CSS usa outro nome? Mande, trocando o trecho entre colchetes:

```
No Card, [QUAL PROPRIEDADE] não bate com o Figma conectado. Leia de novo a variável no Figma, explique a diferença e corrija SÓ isso. Devolva os dois blocos, Card.html e Card.css, completos.
```

### E3. Pedir os tokens em JSON

```
Leia de novo no Figma conectado as variáveis da coleção Workshop Tokens e devolva todas como UM arquivo JSON no formato W3C Design Tokens (DTCG).
FORMATO OBRIGATÓRIO: JSON válido, sem comentário. A primeira parte do nome da variável no Figma vira o grupo e o resto vira a chave (ex: color/brand-primary vira {"color": {"brand-primary": {...}}}). Cada token tem só "$value" e "$type". $type é um destes: color, dimension, fontWeight, number. Cor em hex. Medida como texto com px (ex: "8px"). Peso de fonte e altura de linha como número. Não invente token nem valor. Devolva só o bloco de código.
```

### E4. Salvar os três arquivos

O Claude gratuito não grava arquivo no seu computador: é copiar e colar. No ZIP, copie a pasta `fortaleza/pasta-modelo` para a Área de Trabalho com o nome `fora-do-frame`. Ela já tem os três arquivos com o nome certo e o `config.json` que o Mateus usa. Não mexa no `config.json`.

**Primeiro, abra cada arquivo como código.** Dois cliques não servem: o `Card.html` abre no navegador, como página.

- **Editor de código** (VS Code ou outro): arraste o arquivo para o editor. É o caminho mais simples.
- **Windows, Bloco de Notas:** botão direito no arquivo > Abrir com > Bloco de Notas.
- **Mac, TextEdit:** ele abre `.html` como página formatada, e o arquivo parece uma janela vazia. Antes, no TextEdit, abra Ajustes > Abrir e Salvar e marque a opção de mostrar arquivos HTML como código HTML. Depois, botão direito no arquivo > Abrir com > TextEdit.

**Depois, cole.** Apague o que estiver no arquivo e cole o bloco inteiro:

- o bloco do E3 vai para `tokens.json`;
- o primeiro bloco do E1 (ou da correção do E2) vai para `Card.html`;
- o segundo bloco vai para `Card.css`.

Salve com o mesmo nome. No Bloco de Notas, em Salvar como, escolha "Todos os arquivos" e codificação UTF-8, para não entrar `.txt` no fim.

### E5. Conferir a pasta, sem depender de site

| O quê | Como conferir | Deu certo quando |
|---|---|---|
| Nomes | Mostre as extensões. Mac: Finder > Ajustes > Avançado > Mostrar todas as extensões. Windows: Explorer > Exibir > Extensões de nomes de arquivos | `tokens.json`, `Card.html` e `Card.css`, sem `.txt` no fim |
| `Card.html` | Dois cliques | Aparecem dois cards com o texto "Ver detalhes", **sem cor e sem espaçamento**. É o esperado na pasta gerada: o `tokens.css` nasce às 20h, com o Mateus. Na `handoff` o Card já abre com cor porque ela traz o `tokens.css` pronto |
| `tokens.json`, contagem | No editor, busque `"$value"` (Cmd+F ou Ctrl+F): a busca mostra quantas vezes aparece | **23**, uma por variável da coleção |
| `tokens.json`, três valores | Busque no arquivo | `brand-primary` com `"#C8352B"`, `heading` (em `font-size`) com `"20px"` e `3` (em `space`) com `"24px"` |

Quem instalou a conexão tem Node, então dá para conferir tudo de uma vez: os nomes, se o JSON é válido e as 23 variáveis com nome, tipo e valor. No Terminal, dentro da pasta do ZIP:

```
node scripts/conferir-pasta.mjs CAMINHO_DA_SUA_PASTA
```

Depois de `conferir-pasta.mjs`, dê um espaço e arraste a pasta `fora-do-frame` para o Terminal: o caminho aparece sozinho. Deu certo quando a última linha diz **Pasta conferida**.

Medida sem `px`, como `24` solto, vira `24rem` na conversão do Mateus. Se vier assim, mande: `Refaça o JSON com todas as medidas como texto com px.`

Não conferiu a contagem, ou ela não deu 23? A pasta não está conferida: crie nela um arquivo `nao-conferida.txt` e leve também a `handoff`. Às 20h, diga ao Mateus que a sua é a `fora-do-frame`.


## 9. Quando dá errado

| Sintoma | O que fazer |
|---|---|
| Não dupliquei o arquivo do exercício | Use a imagem pronta: `fortaleza/telao/tela-demo.png`, no ZIP. Você faz a Parte A com ela e confere no Figma depois |
| Não acho o Export no Figma | Selecione o frame clicando no nome dele, em cima da tela. O Export fica no fim do painel da direita |
| O Claude não aceita a imagem | Confira se é PNG. Arraste o arquivo para a caixa de mensagem |
| O protótipo veio só como código | Mande uma vez: `Mostre o protótipo funcionando aqui na conversa.` Continuou: confira em Settings > Capabilities a opção Cloud code execution and file creation (ou Create and edit files). Estava ligada: pare e acompanhe quem está do lado |
| Limite da conta gratuita | Você continua com o que é garantido: a decisão escrita e a pasta `handoff`, que não depende do Claude. Acompanhe quem ainda tem uso e aplique a correção em casa |
| Não acho as variáveis no Figma | Variables, na barra de navegação da esquerda. Em versão anterior: nada selecionado, painel da direita, Local variables. Ou a busca de ações (Cmd+K ou Ctrl+K), digitando `variables` |
| `npx` não reconhecido (em casa) | O `npx` vem com o Node. Confira três coisas: `node -v` mostra v18 ou maior; `npm -v` mostra um número (se não, reinstale o Node pelo site); e, se você acabou de instalar, feche e abra o Terminal ou o PowerShell, para ele achar o comando |
| Erro de script no PowerShell (em casa) | Use `npx.cmd` no lugar de `npx` |
| O comando não baixa (em casa) | Plano B: na pasta do ZIP, rode `node scripts/instalar.mjs`. Ainda precisa de internet para o último passo |
| O instalador parou dizendo que já existe uma conexão `figma-console`, ou que a configuração não é válida | Ele não mexeu em nada. Leia o que ele diz que seria substituído. Na dúvida, não digite `sim`: faça a Parte B em grupo |
| O instalador diz que a instalação não terminou | Siga os passos que ele mostra e rode de novo. Ele reaproveita a chave que você já colou. Persistiu: grupo no dia |
| O navegador não abriu a página da chave | O endereço aparece escrito no Terminal: copie e abra. É https://www.figma.com/settings |
| O Claude não diz o nome do arquivo | O plugin Figma Desktop Bridge precisa estar rodando no Figma Desktop com a sua cópia aberta. Ele cai se o Figma dormir ou o arquivo fechar. Rode o plugin de novo |
| No Windows, o Claude não mostra a conexão com o Figma | Feche o Claude também pelo ícone perto do relógio e abra de novo. Persistiu: grupo no dia, e avise o Thiago |
| A pasta do plugin não existe | O Claude ainda não abriu depois da instalação. Feche o Claude por completo, abra, espere e só então importe |
| Chave recusada | Confira se começa com `figd_` e se não entrou espaço ao colar. Persistiu: gere outra e rode o comando de novo |
| B1 volta vazio | Pergunte qual arquivo o Claude está lendo e confira se o plugin está rodando. Só depois repita |
| VPN, rede da empresa ou antivírus | A conexão usa as portas locais 9223 a 9232. Desligue a VPN. Não resolveu: grupo |
| A IA trouxe um nome de token ou um valor que não existe | Ela não leu o Figma antes de responder. Peça a leitura de novo e confira no seu Figma |


## 10. Para fazer em casa depois

- **Com uma tela sua.** Repita a Parte A com uma tela do seu trabalho. Ajuste o prompt do A2 e do A4 para o que a tela tem: o prompt da Tela demo fala de campos e de envio porque ela é um formulário. Evite tela de cliente com dado sensível: a imagem vai para o Claude.
- **A outra correção.** Repita o B2 com a correção que você não escolheu.
- **A extensão** da seção 8, com calma.
- **Com o Claude Code.** Quem já tem plano pago do Claude pode usar o Claude Code no lugar do Claude Desktop. O comando de conexão está em `docs/pipeline-facts.md`, no repositório.
