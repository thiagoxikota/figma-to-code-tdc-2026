# Guia do participante: Seu Figma vira produto

Design com IA, do arquivo ao protótipo que funciona. Workshop do Thiago Xikota no Fora do Frame, uma experiência UXFor. Quarta, 18/11/2026, das 18h00 às 19h40, na Digital College Aldeota, Fortaleza.

Este workshop é para designer. Você não precisa saber programar.


## O que você leva

Todo mundo trabalha na mesma tela: a **Tela demo**, um formulário "Criar sua conta" que está no arquivo do exercício. São duas entregas diferentes, e as duas valem.

1. **Parte A: um protótipo navegável da Tela demo**, feito a partir de uma imagem dela. Antes, uma revisão como um dev faria, e você decide quais pontos aceita.
2. **Parte B: a mesma Tela demo lida direto do arquivo**, com três valores que a imagem não mostra. Depois o Claude gera um componente Card com os tokens dessa tela, e você salva três arquivos numa pasta: `tokens.json`, `Card.html` e `Card.css`.

O Card da Parte B não é o protótipo da Parte A. É outro objeto: o componente que o workshop do Mateus Villain continua às 20h.

Não terminou a Parte B? Você sai com a **pasta de exemplo** (`handoff/`), com os mesmos três arquivos prontos. Você e o Mateus sabem que ela é exemplo, não a sua geração.

Ninguém paga nada: a conta gratuita do Figma e a do Claude servem.


## As duas rotas

- **Parte A, todo mundo.** Precisa só de conta e navegador.
- **Parte B sozinho:** só para quem preparou a máquina em casa, antes de quarta (seção 1). Na sala a gente só confere a conexão. Ninguém instala nada durante o workshop.
- **Parte B em dupla:** quem não preparou senta com alguém que preparou. Você acompanha no notebook do colega e confere os valores no seu próprio Figma.

A Parte B usa uma ligação local entre o Claude e o Figma (o nome técnico é MCP). É ela que deixa o Claude ler o arquivo de verdade, em vez de olhar uma imagem.


## 1. Antes de quarta

### Para todo mundo (10 minutos)

1. **Conta gratuita do Figma:** https://www.figma.com/signup
2. **Conta gratuita do Claude:** https://claude.ai
3. **Duplique o arquivo do exercício** para a sua conta (botão de duplicar):
   https://www.figma.com/community/file/1659374868260259462
   A Tela demo fica na página **"01 Comece aqui"**.
4. Entre nas duas contas e deixe o celular por perto. Login com código no e-mail ou verificação em duas etapas sem o celular trava na hora.

Deu certo quando: você abre a sua cópia do arquivo e vê a Tela demo, com o título "Criar sua conta".

### Para fazer a Parte B sozinho (30 minutos, em casa)

Faça tudo isto em casa, com calma. Na sala não dá tempo de instalar, e a rede pode ser lenta.

**Passo 1. Instale três programas.**

- **Figma Desktop**, o app, não o navegador: https://www.figma.com/downloads/
- **Claude Desktop**, o app do Claude: https://claude.com/download
- **Node.js** versão LTS, a recomendada no site: https://nodejs.org/en/download. Ele só roda o instalador e a ligação com o Figma. Você não vai programar com ele.

Para conferir o Node, abra o Terminal (Mac: Cmd+Espaço, digite Terminal) ou o PowerShell (Windows: tecla Windows, digite PowerShell) e digite `node -v`. Tem que aparecer v18 ou maior. Se você também vai no workshop do Mateus, prefira 22 ou maior.

**Passo 2. Baixe o ZIP do repositório.**

Em https://github.com/thiagoxikota/figma-to-code-tdc-2026 clique em **Code > Download ZIP** e descompacte. Ele traz duas coisas que você vai usar sem depender da rede da sala:

- `fortaleza/pasta-modelo`: copie para a área de trabalho com o nome `fora-do-frame`. Ela já tem os três arquivos vazios com o nome certo;
- `handoff/`: a pasta de exemplo, para o caso de você não terminar.

**Passo 3. Rode o instalador.**

Abra o Figma Desktop e o Claude Desktop, logados. No Terminal ou no PowerShell, cole o comando e aperte Enter.

Mac:

```
npx -y https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/heads/main.tar.gz
```

Windows (repare no `.cmd`, que evita o bloqueio de scripts do PowerShell):

```
npx.cmd -y https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/heads/main.tar.gz
```

O instalador faz isto, nesta ordem:

1. confere se o Node, o Figma Desktop e o Claude Desktop estão aí e dá o link do que faltar;
2. abre as configurações do Figma para você criar o token (a chave temporária que deixa o Claude ler o seu arquivo): aba **Security > Personal access tokens > Generate new token**. Validade de **7 dias** (cobre de casa até quarta; você revoga no fim do workshop). Em permissões, marque **só leitura em File content**. Nada mais é necessário;
3. pede o token num campo escondido: cole e aperte Enter (aparecem só asteriscos);
4. liga o Figma no Claude Desktop sem apagar nada que já esteja lá;
5. prepara o plugin do Figma, mostrando o progresso enquanto isso, e avisa se falhar. No fim, mostra o caminho do arquivo do plugin e já deixa esse caminho copiado.

O token começa com `figd_` e **aparece uma vez só**: copie na hora. Ele é seu. Não mande para ninguém nem deixe outra pessoa digitar por você.

**Se o comando não rodar** (erro de download, rede da empresa, versão nova do npm): abra o Terminal ou o PowerShell dentro da pasta do ZIP que você descompactou e rode:

```
node scripts/instalar.mjs
```

Faz a mesma coisa, sem baixar nada.

**Passo 4. Ligue o plugin e teste.**

1. Feche o Claude Desktop por completo e abra de novo. No Mac é Cmd+Q. No Windows, saia também pelo ícone perto do relógio, não só pelo X. A ligação só carrega quando o app abre.
2. No Figma Desktop, abra a sua cópia do arquivo do exercício. Menu **Plugins > Development > Import plugin from manifest** e escolha o arquivo que o instalador mostrou. No Mac a pasta começa com ponto e fica escondida: na janela de escolher arquivo, aperte Cmd+Shift+G e cole o caminho. No Windows, cole o caminho na barra de endereço do Explorer.
3. Rode o plugin **Figma Desktop Bridge** e deixe a janela dele aberta.
4. No Claude Desktop, abra uma conversa nova e mande:

```
Verifique o status da conexão com o Figma
```

Deu certo quando: **o Claude disse o nome do arquivo** que está aberto no Figma. Aparecer numa lista ou o instalador dizer "ok" não conta como teste.

Não conseguiu até quarta? Tudo bem. Você faz a Parte A inteira e a Parte B em dupla.

### Leve no dia

- Notebook com macOS ou Windows. Linux faz a Parte A normalmente e a Parte B em dupla.
- Carregador.
- Celular.


## Horários

| Horário | O que acontece |
|---|---|
| 18h00 | Abertura: o que você leva, as duas rotas, QR deste guia |
| 18h08 | Parte A com a Tela demo |
| 18h33 | A ponte: o que a imagem não mostra |
| 18h38 | Conferir a conexão (quem instalou em casa); quem não instalou forma dupla |
| 18h48 | Parte B: ler, auditar, gerar o Card, conferir |
| 19h10 | Salvar os três arquivos. Às 19h20, corte: quem não terminou copia a pasta de exemplo |
| 19h22 | Revogar o token |
| 19h26 | Limites e passagem para o Mateus |
| 19h34 | Margem e perguntas rápidas. Fim às 19h40 |


## 2. Parte A: a Tela demo como imagem (18h08 às 18h33)

Funciona no app do Claude ou no navegador (claude.ai), no Figma Desktop ou no Figma do navegador.

A conta gratuita do Claude tem limite de mensagens, e ele vale junto para o navegador e o app. A Parte A usa duas mensagens. Mande cada prompt uma vez e leia com calma antes de pedir mais.

### A1. Exportar a Tela demo (4 min)

1. Na sua cópia do arquivo, página "01 Comece aqui", clique no nome **Tela demo**, em cima do frame, para selecionar o frame inteiro.
2. No painel da direita, em **Export**, clique no **+**. Deixe **PNG** e escolha **2x**.
3. Clique em **Export** e salve a imagem.

Deu certo quando: você tem um arquivo PNG com o formulário "Criar sua conta" inteiro.

### A2. A revisão de dev (7 min)

Abra uma conversa nova no Claude, anexe a imagem (clipe ou arraste) e mande:

```
Esta imagem é a tela "Criar sua conta" que eu desenhei no Figma: um formulário com título, um texto de apoio, campo de e-mail, campo de nome, uma caixa de opt-in e o botão Continuar. Revise como um dev revisaria antes de construir. Liste no máximo 8 pontos, numerados, do mais grave para o menos grave, olhando: estados que faltam (erro, foco, desabilitado, carregando), espaçamento sem padrão, diferença de estilo entre os dois campos, texto sem padrão e acessibilidade (contraste, área de toque, rótulos). Para cada ponto: o que é, onde está e se você VIU na imagem ou está SUPONDO. Sem código. Não gere nada ainda.
```

Deu certo quando: você tem uma lista numerada, e cada ponto diz se foi visto ou suposto.

### A3. Você decide quais pontos aceita (3 min)

Esta é a parte que é sua. A IA aponta, quem conhece a tela é você.

Leia a lista e escolha os pontos que procedem. Anote os números num papel ou num bloco de notas, e para cada um que você recusar, uma frase do porquê. Exemplo: "Aceito 1, 3 e 4. Recuso o 2: o texto de apoio é assim de propósito."

Deu certo quando: você tem os números escolhidos anotados. Ainda não mande nada.

### A4. O protótipo (9 min)

Na mesma conversa, troque os números pelos seus e mande:

```
Agora monte um protótipo navegável desta tela "Criar sua conta" em HTML, um arquivo só, e mostre funcionando aqui na conversa. Copie o layout, as cores e os textos da imagem. Aplique SÓ os pontos [NÚMEROS QUE VOCÊ ACEITOU] da sua lista e ignore os outros. Comportamento: os campos de e-mail e nome aceitam digitação; a caixa de opt-in marca e desmarca; clicar em Continuar com algum campo vazio mostra uma mensagem de erro junto do campo; com os dois preenchidos, aparece uma tela de sucesso "Conta criada". O botão tem hover e foco visível.
```

O protótipo aparece na própria conversa, ao lado ou abaixo da resposta. Se aparecer só o código, mande:

```
Mostre o protótipo funcionando aqui na conversa.
```

Continuou só código? Siga com quem está do lado e chame um voluntário.

### A5. Testar e anotar uma diferença (2 min)

1. Clique em Continuar com tudo vazio. Tem que aparecer erro.
2. Preencha e-mail e nome e clique de novo. Tem que aparecer "Conta criada".
3. Olhe o protótipo ao lado da Tela demo no Figma e anote **uma** diferença: uma cor, um espaçamento ou um tamanho de texto que ficou parecido, mas não igual.

Deu certo quando: o protótipo foi testado (erro e sucesso) e você anotou uma diferença.


## 3. A ponte: o que a imagem não mostra (18h33 às 18h38)

A imagem mostra como a tela parece. O arquivo mostra do que ela é feita.

O Thiago abre a mesma Tela demo no Figma e mostra três propriedades:

| Elemento | O que a imagem mostra | O que o arquivo mostra |
|---|---|---|
| Botão "Continuar" | Um vermelho | `#C8352B` digitado direto, sem ligação com o componente Button nem com a variável. O valor é igual ao token `color/brand-primary`, mas não está ligado a ele: se a marca mudar, esse botão não muda |
| Texto "Leva menos de um minuto" | Um cinza claro, dá para estimar | `#A29B93` sobre `#FFFFFF`: contraste de cerca de 2,75 para 1. O mínimo AA é 4,5 para 1 |
| Campo "nome" | Um campo com borda, parece escolha de design | Estilo com borda onde o padrão do sistema é preenchido (`color/surface-alt`), como no campo de e-mail. Saiu do padrão |

O seu protótipo pode ter acertado a cor do botão. O ponto não é a cor: é que a imagem não tem como dizer se ela está ligada ao sistema. A Parte B lê isso direto do arquivo.


## 4. Conferir a conexão (18h38 às 18h48)

**Instalou em casa?** Figma Desktop com a sua cópia do arquivo aberta, plugin Figma Desktop Bridge rodando, Claude Desktop aberto. Conversa nova:

```
Verifique o status da conexão com o Figma
```

Deu certo quando: o Claude disse o nome do arquivo. Não conectou em uma tentativa? Chame um voluntário uma vez. Não resolveu: dupla.

**Não instalou?** Forme dupla agora com alguém que conectou. Abra a Tela demo no seu Figma (o do navegador serve). Você lê os prompts, confere os valores no seu Figma e ajuda a decidir.


## 5. Parte B: a mesma Tela demo, lida do arquivo (18h48 às 19h10)

Use a conversa em que você testou a conexão. Cole cada prompt na mesma conversa, na ordem. A Parte B usa umas cinco mensagens.

### B1. Ler a Tela demo e as três propriedades (5 min)

```
Leia no Figma conectado o frame "Tela demo" da página "01 Comece aqui". Responda só estas três perguntas, uma linha cada, com o valor exato que está no arquivo:
1. Botão "Continuar": qual é a cor de fundo? Ela está ligada a alguma variável? O botão é uma instância do componente Button?
2. Texto "Leva menos de um minuto": qual é a cor do texto, a cor do fundo e o contraste entre elas?
3. Campo "nome": qual estilo ele usa, comparado ao campo de e-mail e à variável color/surface-alt?
```

Deu certo quando: aparecem `#C8352B` sem variável ligada, `#A29B93` com contraste perto de 2,75 para 1 e o campo nome com borda, diferente do de e-mail. São os mesmos três pontos da ponte, agora lidos por você.

**Voltou vazio ou sem nenhum valor?** Não repita ainda. Confira duas coisas:

1. Mande `Qual arquivo do Figma você está lendo?`. Tem que ser a sua cópia do arquivo do exercício.
2. Olhe o Figma Desktop: o plugin Figma Desktop Bridge está aberto e rodando? Ele fecha se o Figma dormir ou se você trocar de arquivo.

Arquivo certo e plugin rodando: aí sim mande o B1 de novo.

### B2. Auditar (5 min)

```
Audite a Tela demo contra o design system deste arquivo. Considere SOMENTE a página "01 Comece aqui"; não leia a página de gabarito. Para cada inconsistência: o elemento, o que está errado, qual token ou regra foi violada e a severidade (bloqueia acessibilidade / quebra consistência / cosmético).
```

Deu certo quando: cada achado vem com o nome de um token ou de uma regra. A tela tem seis problemas plantados.

Compare com a sua lista da Parte A: os mesmos problemas, agora com o nome do token. Quem decide o que importa continua sendo você.

### B3. Gerar o Card com os tokens (7 min)

O Card é o componente que o Mateus continua às 20h. Ele usa os tokens desta mesma tela.

```
Gere um componente Card em HTML e CSS puros: sem JavaScript, sem bibliotecas.
Antes de gerar, leia no Figma conectado as variáveis da coleção Workshop Tokens e use só elas (cor, espaçamento, tipografia, raio). Não invente valores.
FORMATO OBRIGATÓRIO: dois blocos de código, o primeiro com o arquivo Card.html e o segundo com o arquivo Card.css. O Card.html é uma página completa, em pt-BR, que carrega tokens.css e Card.css com <link>, nesta ordem, e mostra dois cards: um normal e um desabilitado. Use exatamente estas classes: card, card__body, card__title, card__description, card__action e card--disabled. O título é um h3 e a ação é um <button type="button">Ver detalhes</button>. O Card.css tem hover, foco visível de 2px, alvo mínimo de 44px e contraste AA. Todo estilo vem de variável CSS com o MESMO nome do token do Figma (ex: var(--color-brand-primary)), sem hex digitado, e ao lado de cada uma um comentário com o valor do Figma (ex: /* #C8352B */). Para a família da fonte, use font-family: var(--font-body, system-ui, sans-serif).
No fim, fora dos blocos, diga em 3 linhas qual token você usou para: a cor do botão, o tamanho do título e o espaçamento interno.
```

Deu certo quando: vieram dois blocos de código e as 3 linhas do fim.

### B4. Conferir três valores no Figma (5 min)

Aqui quem confere é você, não a IA. No Figma, abra o painel de variáveis (com nada selecionado, em **Local variables** no painel da direita) e compare com as 3 linhas do B3:

| No Card | Token esperado | Valor no Figma |
|---|---|---|
| Cor do botão | `color/brand-primary` | `#C8352B` |
| Tamanho do título | `font-size/heading` | 20 |
| Espaçamento interno | `space/3` | 24 |

Deu certo quando: os três tokens existem no painel e os valores batem.

Não bateu? Mande, trocando o trecho entre colchetes:

```
No Card, [QUAL PROPRIEDADE] não bate com o Figma conectado. Leia de novo a variável no Figma, explique a diferença e corrija SÓ isso. Devolva os dois blocos, Card.html e Card.css, completos.
```


## 6. Salvar os três arquivos (19h10 às 19h22)

Este passo existe para você sair com arquivo, não só com conversa. Faça antes de revogar o token, porque o prompt ainda lê o Figma.

### B5. Os tokens em JSON e a pasta

Mande:

```
Leia de novo no Figma conectado as variáveis da coleção Workshop Tokens e devolva todas como UM arquivo JSON no formato W3C Design Tokens (DTCG).
FORMATO OBRIGATÓRIO: JSON válido, sem comentário. A primeira parte do nome da variável no Figma vira o grupo e o resto vira a chave (ex: color/brand-primary vira {"color": {"brand-primary": {...}}}). Cada token tem só "$value" e "$type". $type é um destes: color, dimension, fontWeight, number. Cor em hex. Medida como texto com px (ex: "8px"). Peso de fonte e altura de linha como número. Não invente token nem valor. Devolva só o bloco de código.
```

**Copie e cole na pasta.** O Claude gratuito não grava arquivo no seu computador.

1. Em cada bloco de código, clique no botão de copiar.
2. Abra o arquivo correspondente da pasta `fora-do-frame` num editor de texto, apague o que tiver e cole:
   - o bloco do B5 vai para `tokens.json`;
   - o primeiro bloco do B3 (ou da correção do B4) vai para `Card.html`;
   - o segundo bloco vai para `Card.css`.
3. Salve como texto puro:
   - VS Code ou outro editor de código: é só salvar;
   - Mac, TextEdit: antes de colar, Formatar > Converter em Texto Simples;
   - Windows, Bloco de Notas: em Salvar como, escolha "Todos os arquivos" e codificação UTF-8.

**Confira abrindo os arquivos.** Contar itens no JSON não prova que ele está certo. Abra cada arquivo:

| Arquivo | Como conferir | Deu certo quando |
|---|---|---|
| Nomes | Mostre as extensões. Mac: Finder > Ajustes > Avançado > Mostrar todas as extensões. Windows: Explorer > Exibir > Extensões de nomes de arquivos | Os nomes são exatamente `tokens.json`, `Card.html` e `Card.css`, sem `.txt` no fim |
| `Card.html` | Abra no navegador (dois cliques ou arraste para uma aba) | Aparecem dois cards com o texto "Ver detalhes". Sem cor e sem espaçamento ainda: é esperado, o `tokens.css` nasce às 20h com o Mateus |
| `tokens.json` | Cole o conteúdo em https://jsonlint.com e clique em validar. Sem internet: pergunte ao Claude `Este JSON é válido? Responda só sim ou não e, se não, a linha do erro.` | O validador diz que o JSON é válido e as medidas aparecem com `px`, como `"24px"` |

Medida sem `px`, como `24` solto, vira `24rem` na conversão do Mateus. Se vier assim, mande: `Refaça o JSON com todas as medidas como texto com px.`

Quer ver um Card já com cor? Abra o `handoff/Card.html` da pasta de exemplo. O seu acende às 20h.

### Às 19h20: corte

Quem não terminou para aqui e usa a pasta de exemplo do ZIP:

- **Não tem nenhum arquivo:** copie a pasta `handoff/` inteira para a área de trabalho e deixe com o nome `handoff`. Assim você e o Mateus sabem que é o exemplo, não a sua geração.
- **Falta só um arquivo:** copie só ele de `handoff/` para a sua `fora-do-frame` e crie ali um arquivo de texto `veio-do-exemplo.txt` com o nome do arquivo copiado.

Sem o ZIP? Peça a um voluntário ou baixe em https://github.com/thiagoxikota/figma-to-code-tdc-2026, se a rede deixar.

Deu certo quando: você tem os três arquivos com o nome certo, abertos e conferidos, ou a pasta de exemplo copiada e identificada.


## 7. B6. Revogar o token (19h22 às 19h26)

No Figma: **Settings > Security > Personal access tokens**. Clique em **Revoke** no token do workshop e confirme.

Revogue também o token que você criou em casa, se ainda estiver na lista. Rodar o instalador de novo guarda uma cópia da configuração antiga do Claude, com o token antigo dentro; revogado, ele não serve para nada.

Deu certo quando: o token sumiu da lista de Personal access tokens.

Não é opcional e não tem corte. Depois, se quiser, desligue a ligação com o Figma nas configurações do Claude Desktop.


## 8. Limites, sem maquiar

- O protótipo da Parte A é aproximação: serve para testar a ideia e conversar com o time, não para entregar valor exato.
- `var(--token)` no código não prova sozinho que a IA leu o Figma. A prova é a cadeia: a propriedade no Figma, o token, o valor e o código gerado. Por isso o B4 é seu.
- Código gerado por IA não é código de produção. É ponto de partida, e alguém revisa.
- A ligação com o Figma não substitui design system. Ela lê o que existe. Arquivo bagunçado gera contexto bagunçado.
- Se o Thiago mostrar no telão um resultado pré-gerado dos ensaios, ele avisa na hora.


## 9. Quando dá errado

| Sintoma | O que fazer |
|---|---|
| Não acho o Export no Figma | Selecione o frame clicando no nome dele, em cima da tela. O Export fica no fim do painel da direita |
| O Claude não aceita a imagem | Confira se é PNG. Arraste o arquivo para a caixa de mensagem |
| O protótipo veio só como código | Mande: `Mostre o protótipo funcionando aqui na conversa.` Continuou: siga com quem está do lado |
| Limite da conta gratuita | Siga em dupla com quem ainda tem uso. Na Parte B, use a pasta de exemplo |
| `npx` não reconhecido (em casa) | Node não instalado ou abaixo de 18. Instale, feche e abra o Terminal ou o PowerShell e rode de novo |
| Erro de script no PowerShell (em casa) | Use `npx.cmd` no lugar de `npx` |
| O comando não baixa (em casa) | Plano B: na pasta do ZIP, rode `node scripts/instalar.mjs` |
| O instalador diz que falhou ao preparar o plugin | Leia a mensagem que ele mostra e rode de novo. Persistiu: plano B ou dupla no dia |
| O Claude não diz o nome do arquivo | O plugin Figma Desktop Bridge precisa estar rodando no Figma Desktop com a sua cópia aberta. Ele cai se o Figma dormir ou o arquivo fechar. Rode o plugin de novo |
| A pasta do plugin não existe | O Claude ainda não abriu depois da instalação. Feche o Claude por completo, abra, espere e só então importe |
| Token recusado | Confira se começa com `figd_` e se não entrou espaço ao colar. Persistiu: gere outro e rode o comando de novo |
| B1 volta vazio | Pergunte qual arquivo o Claude está lendo e confira se o plugin está rodando. Só depois repita |
| Já existe outra ligação de Figma no seu Claude | Desligue durante o workshop, senão o Claude chama a errada |
| VPN, rede da empresa ou antivírus | A ligação usa as portas locais 9223 a 9232. Desligue a VPN. Não resolveu: dupla |
| A IA inventou nome de token ou valor | Ela não leu o Figma antes de gerar. Peça a leitura de novo. É a lição do workshop inteiro |


## 10. Para fazer em casa depois

- **Com uma tela sua.** Repita a Parte A com uma tela do seu trabalho. Ajuste o prompt do A2 e do A4 para o que a tela tem: o prompt da Tela demo fala de campos e de envio porque ela é um formulário. Evite tela de cliente com dado sensível: a imagem vai para o Claude.
- **Com o Claude Code.** Quem já tem plano pago do Claude pode usar o Claude Code no lugar do Claude Desktop. O comando de ligação está em `docs/pipeline-facts.md`, no repositório.
