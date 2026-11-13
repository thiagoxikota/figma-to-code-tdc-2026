# Guia do participante: Seu Figma vira produto

Design com IA, do arquivo ao protótipo que funciona. Workshop do Thiago Xikota no Fora do Frame, uma experiência UXFor. Quarta, 18/11/2026, das 18h00 às 19h40, na Digital College Aldeota, Fortaleza.

Este workshop é para designer. Você não precisa saber programar.


## O que você leva

Todo mundo trabalha na mesma tela: a **Tela demo**, um formulário "Criar sua conta" que está no arquivo do exercício. É um exercício controlado: a tela tem seis problemas colocados de propósito, e você vai achar alguns deles de dois jeitos.

São **duas saídas diferentes**, e as duas valem:

| | Saída 1: o protótipo | Saída 2: a pasta para o Mateus |
|---|---|---|
| O que é | O formulário "Criar sua conta" funcionando | Um componente Card e os tokens de design, em arquivo |
| De onde vem | Parte A, da imagem da tela. Na Parte B você corrige um ponto dele com um valor lido do arquivo | Parte B, do arquivo lido pelo Claude |
| Onde fica | Na sua conversa do Claude | Na pasta `fora-do-frame`, no seu computador |
| Quem continua | Você, no seu trabalho | O Mateus Villain, às 20h |

**O Mateus continua os tokens e o Card, não o formulário.** O que passa da Parte A para a Parte B é a tela e as suas decisões sobre ela.

Duas palavras que aparecem o tempo todo:

- **Tokens de design:** os valores com nome do design system. Exemplo: `color/brand-primary` é o vermelho `#C8352B`. No Figma eles se chamam variáveis.
- **Card:** um componente pequeno de interface, com título, texto e um botão.

Não terminou a Parte B? Você sai com a **pasta de exemplo** (`handoff/`), que traz os mesmos arquivos prontos. Ela vem no ZIP que **todo mundo baixa antes de quarta**. Você e o Mateus sabem que ela é exemplo, não a sua geração.

Ninguém paga nada: a conta gratuita do Figma e a do Claude servem.


## As duas rotas

- **Parte A, todo mundo.** Precisa só de conta e navegador.
- **Parte B sozinho:** só para quem preparou a máquina em casa, antes de quarta (seção 1). Na sala a gente só confere a conexão. Ninguém instala nada durante o workshop.
- **Parte B em dupla:** quem não preparou senta com alguém que preparou. Um conduz o Claude; o outro lê os prompts em voz alta, confere os valores no próprio Figma e toma as decisões junto. No fim, quem conduziu salva a pasta gerada e quem acompanhou usa a própria pasta de exemplo, do ZIP.

A Parte B usa uma ligação local entre o Claude e o Figma (o nome técnico é MCP). É ela que deixa o Claude ler o arquivo de verdade, em vez de olhar uma imagem.

Notebook da empresa que não deixa instalar programa? Nem tente: você faz a Parte A inteira e a Parte B em dupla.


## 1. Antes de quarta

### Para todo mundo (15 minutos)

1. **Conta gratuita do Figma:** https://www.figma.com/signup. Prefira a sua conta pessoal, não a do trabalho.
2. **Conta gratuita do Claude:** https://claude.ai
3. **Duplique o arquivo do exercício** para a sua conta (botão de duplicar):
   https://www.figma.com/community/file/1659374868260259462
   A Tela demo fica na página **"01 Comece aqui"**.
4. **Baixe o ZIP do repositório.** Em https://github.com/thiagoxikota/figma-to-code-tdc-2026 clique em **Code > Download ZIP** e descompacte. Ele traz duas pastas que funcionam sem internet:
   - `handoff/`: a pasta de exemplo, para o caso de você não terminar a Parte B ou fazer em dupla;
   - `fortaleza/pasta-modelo`: copie para a área de trabalho com o nome `fora-do-frame`. Ela já tem os arquivos com o nome certo, esperando o que você vai gerar.
5. **Teste se o Claude mostra protótipo.** No Claude, abra **Settings > Capabilities** e deixe ligada a opção **Cloud code execution and file creation** (em algumas versões ela aparece como **Create and edit files**). Depois, numa conversa nova, mande:

```
Crie um botão vermelho em HTML e mostre funcionando aqui na conversa.
```

6. Entre nas duas contas e deixe o celular por perto. Login com código no e-mail ou verificação em duas etapas sem o celular trava na hora.

Deu certo quando:

- você abre a sua cópia do arquivo e vê a Tela demo, com o título "Criar sua conta";
- você abre `handoff/Card.html` com dois cliques e vê dois cards com cor, mesmo sem internet;
- o botão do teste apareceu na conversa do Claude e dá para clicar nele. Veio só o código? Confira a opção do passo 5 e mande de novo.

### Para fazer a Parte B sozinho (30 minutos, em casa)

Faça tudo isto em casa, com calma. Na sala não dá tempo de instalar, e a rede pode ser lenta.

**Passo 1. Instale três programas.**

- **Figma Desktop**, o app, não o navegador: https://www.figma.com/downloads/
- **Claude Desktop**, o app do Claude: https://claude.com/download
- **Node.js** versão LTS, a recomendada no site: https://nodejs.org/en/download. Ele só roda o instalador e a ligação com o Figma. Você não vai programar com ele.

Para conferir o Node, abra o Terminal (Mac: Cmd+Espaço, digite Terminal) ou o PowerShell (Windows: tecla Windows, digite PowerShell) e digite `node -v`. Tem que aparecer v18 ou maior. Se você também vai no workshop do Mateus, prefira 22 ou maior.

**Passo 2. Rode o instalador.**

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
2. abre as configurações do Figma para você criar a **chave do Figma**: aba **Security > Personal access tokens > Generate new token**. Validade de **7 dias**: é uma chave só, criada em casa e usada na quarta, e você revoga no fim do workshop. Em permissões, marque **só leitura em File content**. Nada mais é necessário;
3. pede a chave num campo escondido: cole e aperte Enter (aparecem só asteriscos);
4. liga o Figma no Claude Desktop sem apagar nada que já esteja lá;
5. prepara o plugin do Figma, mostrando o progresso enquanto isso. Se o plugin não ficar pronto, ele diz que **a instalação não terminou** e o que fazer. Se ficar, mostra o caminho do arquivo do plugin e já deixa esse caminho copiado.

**Sobre a chave do Figma.** O Figma chama essa chave de "personal access token". Aqui ela é "a chave", para não confundir com os tokens de design. Ela começa com `figd_` e **aparece uma vez só**: copie na hora. Ela é sua: não mande para ninguém nem deixe outra pessoa digitar por você. E ela lê qualquer arquivo que a sua conta abre, não só o do exercício. Por isso a conta pessoal e a revogação no fim.

**Se o comando não rodar** (erro de download, rede da empresa, versão nova do npm): abra o Terminal ou o PowerShell dentro da pasta do ZIP que você descompactou e rode:

```
node scripts/instalar.mjs
```

Faz a mesma coisa sem precisar baixar o instalador. Ainda precisa de internet: o último passo baixa a ligação com o Figma. Sem internet nenhuma, ou com a rede bloqueando esse download, não tem como instalar: você faz a Parte B em dupla.

**Passo 3. Ligue o plugin e teste.**

1. Feche o Claude Desktop por completo e abra de novo. No Mac é Cmd+Q. No Windows, saia também pelo ícone perto do relógio, não só pelo X. A ligação só carrega quando o app abre.
2. No Figma Desktop, abra a sua cópia do arquivo do exercício. Menu **Plugins > Development > Import plugin from manifest**. O Figma abre uma janela de escolher arquivo, e é nela que você aponta o `manifest.json` que o instalador mostrou:
   - Mac: a pasta começa com ponto e fica escondida. Na janela, aperte Cmd+Shift+G, cole o caminho e confirme;
   - Windows: na mesma janela, cole o caminho no campo **Nome do arquivo** e clique em **Abrir**. Não cole no Explorer fora dessa janela: isso só abre o arquivo, não importa o plugin.
3. Rode o plugin **Figma Desktop Bridge** e deixe a janela dele aberta.
4. No Claude Desktop, abra uma conversa nova e mande:

```
Verifique o status da conexão com o Figma
```

Deu certo quando: **o Claude disse o nome do arquivo** que está aberto no Figma. Aparecer numa lista ou o instalador dizer "ok" não conta como teste.

Não conseguiu até quarta? Tudo bem. Você faz a Parte A inteira e a Parte B em dupla.

### Leve no dia

- Notebook com macOS ou Windows. Linux faz a Parte A normalmente e a Parte B em dupla.
- A pasta do ZIP já descompactada, com `handoff/` dentro.
- Carregador.
- Celular.


## Horários

| Horário | O que acontece |
|---|---|
| 18h00 | Abertura: as duas saídas, as rotas, este guia |
| 18h05 | Parte A com a Tela demo: exportar, revisar, decidir, prototipar, testar |
| 18h35 | A ponte: o que a imagem não mostra |
| 18h41 | Conferir a conexão (quem instalou em casa); quem não instalou forma dupla |
| 18h48 | Parte B: ler, decidir uma correção, gerar o Card, conferir |
| 19h10 | Salvar os arquivos. Às 19h25, corte: quem não terminou usa a pasta de exemplo |
| 19h28 | Revogar a chave do Figma |
| 19h33 | Uma pergunta, os limites e a passagem para o Mateus. Fim às 19h40 |

Os horários não esperam. Se você atrasar num passo, siga para o próximo junto com a sala: o guia fica com você e dá para terminar depois.


## 2. Parte A: a Tela demo como imagem (18h05 às 18h35)

Funciona no app do Claude ou no navegador (claude.ai), no Figma Desktop ou no Figma do navegador. **Instalou a ligação em casa? Faça a Parte A já no Claude Desktop:** você volta a esta conversa na Parte B.

A conta gratuita do Claude tem limite de mensagens, e ele vale junto para o navegador e o app. Não existe um número fixo: varia com o dia. A Parte A usa duas mensagens. Mande cada prompt uma vez e leia com calma antes de pedir mais.

### A1. Exportar a Tela demo (18h05, 5 min)

1. Na sua cópia do arquivo, página "01 Comece aqui", clique no nome **Tela demo**, em cima do frame, para selecionar o frame inteiro.
2. No painel da direita, lá no fim, em **Export**, clique no **+**. Deixe **PNG** e escolha **2x**.
3. Clique em **Export Tela demo** e salve a imagem.

Deu certo quando: você tem um arquivo PNG com o formulário "Criar sua conta" inteiro, do título ao botão. Saiu só um pedaço? Você selecionou uma camada de dentro: clique no nome do frame e exporte de novo.

### A2. A revisão de dev (18h10, 7 min)

Abra uma conversa nova no Claude, anexe a imagem (clipe ou arraste) e mande:

```
Esta imagem é a tela "Criar sua conta" que eu desenhei no Figma: um formulário com título, um texto de apoio, campo de e-mail, campo de nome, uma caixa de opt-in e o botão Continuar. Revise como um dev revisaria antes de construir. Liste no máximo 8 pontos, numerados, do mais grave para o menos grave, olhando: estados que faltam (erro, foco, desabilitado, carregando), espaçamento sem padrão, diferença de estilo entre os dois campos, texto sem padrão e acessibilidade (contraste, área de toque, rótulos). Para cada ponto: o que é, onde está e se você VIU na imagem ou está SUPONDO. Sem código. Não gere nada ainda.
```

Deu certo quando: você tem uma lista numerada, e cada ponto diz se foi visto ou suposto.

### A3. Você decide quais pontos aceita (18h17, 4 min)

Esta é a parte que é sua. A IA aponta, quem conhece a tela é você.

Leia a lista e escolha os pontos que procedem. Anote os números num papel ou num bloco de notas, e para cada um que você recusar, uma frase do porquê. Exemplo: "Aceito 1, 3 e 4. Recuso o 2: o texto de apoio é assim de propósito."

Sem tempo de ler tudo? Decida pelo menos um ponto: um que você aceita ou um que você recusa, com o motivo.

Deu certo quando: você tem os números escolhidos anotados. Ainda não mande nada.

### A4. O protótipo (18h21, 9 min)

Na mesma conversa, troque os números pelos seus e mande:

```
Agora monte um protótipo navegável desta tela "Criar sua conta" em HTML, um arquivo só, e mostre funcionando aqui na conversa. Copie o layout, as cores e os textos da imagem. Aplique SÓ os pontos [NÚMEROS QUE VOCÊ ACEITOU] da sua lista e ignore os outros. Comportamento: os campos de e-mail e nome aceitam digitação; a caixa de opt-in marca e desmarca; clicar em Continuar com algum campo vazio mostra uma mensagem de erro junto do campo; com os dois preenchidos, aparece uma tela de sucesso "Conta criada". O botão tem hover e foco visível.
```

O protótipo aparece na própria conversa, ao lado ou abaixo da resposta. Se aparecer só o código, mande **uma vez**:

```
Mostre o protótipo funcionando aqui na conversa.
```

Continuou só código? Não insista, para não gastar o limite: a opção do passo 5 da preparação está desligada. Siga com quem está do lado e chame um voluntário.

Deu certo quando: o formulário aparece na conversa e dá para digitar nos campos.

### A5. Testar e anotar uma diferença (18h30, 5 min)

1. Clique em Continuar com tudo vazio. Tem que aparecer erro.
2. Preencha e-mail e nome e clique de novo. Tem que aparecer "Conta criada".
3. Olhe o protótipo ao lado da Tela demo no Figma e anote **uma** diferença: uma cor, um espaçamento ou um tamanho de texto que ficou parecido, mas não igual.

Deu certo quando: o protótipo foi testado (erro e sucesso) e você anotou uma diferença. Guarde a anotação: na Parte B você confere o valor exato.

Às 18h35 a sala segue para a ponte. Ainda gerando? Pare de olhar a tela e acompanhe: o seu protótipo continua na conversa e você testa depois.


## 3. A ponte: o que a imagem não mostra (18h35 às 18h41)

A imagem mostra como a tela parece. O arquivo mostra do que ela é feita.

O Thiago abre a mesma Tela demo no Figma e mostra três propriedades:

| Elemento | O que a imagem mostra | O que o arquivo mostra |
|---|---|---|
| Botão "Continuar" | Um vermelho | `#C8352B` digitado direto, sem ligação com o componente Button nem com a variável. O valor é igual ao do token `color/brand-primary`, mas não está ligado a ele: se a marca mudar, esse botão não muda |
| Texto "Leva menos de um minuto" | Um cinza claro, dá para estimar | `#A29B93` sobre `#FFFFFF`: contraste de cerca de 2,75 para 1. O mínimo AA é 4,5 para 1 |
| Campo "nome" | Um campo com borda, parece escolha de design | Estilo com borda onde o padrão do sistema é preenchido (`color/surface-alt`), como no campo de e-mail. Saiu do padrão |

O seu protótipo pode ter acertado a cor do botão. O ponto não é a cor: é que a imagem não tem como dizer se ela está ligada ao sistema.

**A cadeia que prova a leitura.** Quando o Claude lê o arquivo, dá para seguir um valor de ponta a ponta:

| 1. No Figma | 2. Token de design | 3. Valor | 4. No resultado gerado |
|---|---|---|---|
| A variável aplicada no componente Button | `color/brand-primary` | `#C8352B` | `background: var(--color-brand-primary);` no `Card.css`, e o botão vermelho do Card |

O botão da Tela demo tem o mesmo valor, mas está fora dessa cadeia. É isso que a Parte B deixa você ver e conferir.


## 4. Conferir a conexão (18h41 às 18h48)

**Instalou em casa?** Figma Desktop com a sua cópia do arquivo aberta, plugin Figma Desktop Bridge rodando, Claude Desktop aberto. Conversa nova:

```
Verifique o status da conexão com o Figma
```

Deu certo quando: o Claude disse o nome do arquivo. Não conectou em uma tentativa? Chame um voluntário uma vez. Não resolveu: dupla.

**Não instalou?** Forme dupla agora com alguém que conectou. Abra a Tela demo no seu Figma (o do navegador serve) e deixe a sua pasta `handoff/` do ZIP à mão. Você lê os prompts, confere os valores no seu Figma e decide junto.


## 5. Parte B: a mesma Tela demo, lida do arquivo (18h48 às 19h10)

Use a conversa em que você testou a conexão. A Parte B usa umas quatro mensagens.

### B1. Ler a Tela demo e as três propriedades (18h48, 5 min)

```
Leia no Figma conectado o frame "Tela demo" da página "01 Comece aqui". Responda só estas três perguntas, uma linha cada, com o valor exato que está no arquivo:
1. Botão "Continuar": qual é a cor de fundo? Ela está ligada a alguma variável? O botão é uma instância do componente Button?
2. Texto "Leva menos de um minuto": qual é a cor do texto, a cor do fundo e o contraste entre elas?
3. Campo "nome": qual estilo ele usa, comparado ao campo de e-mail e à variável color/surface-alt?
```

Deu certo quando: aparecem `#C8352B` sem variável ligada, `#A29B93` com contraste perto de 2,75 para 1 e o campo nome com borda, diferente do de e-mail. São os mesmos três pontos da ponte, agora lidos por você. Olhe a diferença que você anotou no A5: se ela é uma dessas três, agora você tem o valor exato.

**Voltou vazio ou sem nenhum valor?** Não repita ainda. Confira duas coisas:

1. Mande `Qual arquivo do Figma você está lendo?`. Tem que ser a sua cópia do arquivo do exercício.
2. Olhe o Figma Desktop: o plugin Figma Desktop Bridge está aberto e rodando? Ele fecha se o Figma dormir ou se você trocar de arquivo.

Arquivo certo e plugin rodando: aí sim mande o B1 de novo.

### B2. Decidir uma correção e levar para o protótipo (18h53, 5 min)

De novo, a parte que é sua. O Claude leu três divergências; quem decide o que corrigir primeiro é você.

**Primeiro, sem prompt.** Escolha **uma** das três e escreva a correção com o motivo, do seu jeito:

| Se você escolher | A correção usa o token | Valor no arquivo |
|---|---|---|
| O botão "Continuar" | `color/brand-primary`, ligado de verdade | `#C8352B` |
| O texto "Leva menos de um minuto" | `color/text-muted` | `#6C665F`, cerca de 5,7 para 1 no branco |
| O campo "nome" | `color/surface-alt`, preenchido como o de e-mail | `#F5F3F0` |

Exemplo: "Texto de apoio: trocar `#A29B93` por `color/text-muted`, porque 2,75 para 1 reprova no AA."

**Depois, leve para o protótipo.** No Claude Desktop, abra na barra lateral a conversa da Parte A (a do protótipo) e mande, trocando o trecho entre colchetes:

```
Decisão minha: [SUA CORREÇÃO, COM O NOME DO TOKEN]. Leia no Figma conectado o valor dessa variável e aplique SÓ essa mudança no protótipo. Depois diga em uma linha: a variável, o valor que você leu no arquivo e o que mudou.
```

Deu certo quando: a resposta traz o nome do token e o valor da tabela acima, e o protótipo mudou só naquele ponto. Agora uma propriedade do seu protótipo vem do arquivo, e não da imagem.

Não achou a conversa da Parte A no Claude Desktop, ou está em dupla e o protótipo ficou em outra máquina? Fique com a decisão escrita e siga. Ela volta no B4.

### B3. Gerar o Card com os tokens (18h58, 8 min)

Volte para a conversa da Parte B. O Card é um exercício de passagem técnica: é o componente que o Mateus continua às 20h, montado com os tokens desta mesma tela. Ele não substitui o seu protótipo.

```
Gere um componente Card em HTML e CSS puros: sem JavaScript, sem bibliotecas.
Antes de gerar, leia no Figma conectado as variáveis da coleção Workshop Tokens e use só elas (cor, espaçamento, tipografia, raio). Não invente valores.
FORMATO OBRIGATÓRIO: dois blocos de código, o primeiro com o arquivo Card.html e o segundo com o arquivo Card.css. O Card.html é uma página completa, em pt-BR, que carrega tokens.css e Card.css com <link>, nesta ordem, e mostra dois cards: um normal e um desabilitado. Use exatamente estas classes: card, card__body, card__title, card__description, card__action e card--disabled. O título é um h3 e a ação é um <button type="button">Ver detalhes</button>. O Card.css tem hover, foco visível de 2px, alvo mínimo de 44px e contraste AA. Toda cor, espaçamento, raio e tamanho de fonte vem de variável CSS com o MESMO nome do token do Figma (ex: var(--color-brand-primary)), sem hex digitado, e ao lado de cada uma um comentário com o valor do Figma (ex: /* #C8352B */). Só a largura máxima do card e a opacidade do estado desabilitado podem ser valores fixos. Para a família da fonte, use font-family: var(--font-body, system-ui, sans-serif).
No fim, fora dos blocos, diga em 3 linhas qual token você usou para: a cor do botão, o tamanho do título e o espaçamento interno.
```

Deu certo quando: vieram dois blocos de código, o primeiro começando com `<!doctype html>` e o segundo com as classes `.card`.

### B4. Conferir três linhas do CSS contra o Figma (19h06, 4 min)

Aqui quem confere é você, não a IA. As 3 linhas que o Claude escreve no fim são o resumo dele. O que vale é o que está escrito dentro do bloco `Card.css`.

**No bloco `Card.css`,** ache estas três linhas (Cmd+F ou Ctrl+F ajuda):

| Onde, no `Card.css` | Tem que estar escrito | Comentário ao lado |
|---|---|---|
| `.card__action`, linha `background` | `var(--color-brand-primary)` | `#C8352B` |
| `.card__title`, linha `font-size` | `var(--font-size-heading)` | `20` ou `20px` |
| `.card__body`, linha `padding` | `var(--space-3)` | `24` ou `24px` |

**No Figma,** abra as variáveis: clique numa área vazia do canvas, para não ter nada selecionado, e procure **Variables** (em algumas versões, **Local variables**) no painel da direita. Não achou? Abra a busca de ações (Cmd+K no Mac, Ctrl+K no Windows) e digite `variables`. Na coleção Workshop Tokens, confira:

| Token no Figma | Valor |
|---|---|
| `color/brand-primary` | `#C8352B` |
| `font-size/heading` | 20 |
| `space/3` | 24 |

Deu certo quando: as três linhas existem no CSS com esses nomes, e os três valores batem com o painel do Figma.

A sua decisão do B2 também está aqui: se foi o botão, é a linha do `background`; se foi o texto de apoio, procure `var(--color-text-muted)` em `.card__description`. O Card não tem campo de formulário: quem escolheu o campo "nome" vê a correção só no protótipo.

Não bateu, ou o CSS usa outro nome? Mande, trocando o trecho entre colchetes:

```
No Card, [QUAL PROPRIEDADE] não bate com o Figma conectado. Leia de novo a variável no Figma, explique a diferença e corrija SÓ isso. Devolva os dois blocos, Card.html e Card.css, completos.
```


## 6. Salvar os arquivos (19h10 às 19h28)

Este passo existe para você sair com arquivo, não só com conversa. São 15 minutos até o corte das 19h25. Faça antes de revogar a chave, porque o prompt ainda lê o Figma.

### B5. Os tokens em JSON e a pasta (19h10)

**1. Peça o JSON (19h10).** Mande:

```
Leia de novo no Figma conectado as variáveis da coleção Workshop Tokens e devolva todas como UM arquivo JSON no formato W3C Design Tokens (DTCG).
FORMATO OBRIGATÓRIO: JSON válido, sem comentário. A primeira parte do nome da variável no Figma vira o grupo e o resto vira a chave (ex: color/brand-primary vira {"color": {"brand-primary": {...}}}). Cada token tem só "$value" e "$type". $type é um destes: color, dimension, fontWeight, number. Cor em hex. Medida como texto com px (ex: "8px"). Peso de fonte e altura de linha como número. Não invente token nem valor. Devolva só o bloco de código.
```

**2. Copie e cole na pasta (19h13).** O Claude gratuito não grava arquivo no seu computador.

1. Em cada bloco de código, clique no botão de copiar.
2. Abra o arquivo correspondente da pasta `fora-do-frame` num editor de texto, apague o que tiver e cole:
   - o bloco do B5 vai para `tokens.json`;
   - o primeiro bloco do B3 (ou da correção do B4) vai para `Card.html`;
   - o segundo bloco vai para `Card.css`.
3. Salve como texto puro:
   - VS Code ou outro editor de código: é só salvar;
   - Mac, TextEdit: antes de colar, Formatar > Converter em Texto Simples;
   - Windows, Bloco de Notas: em Salvar como, escolha "Todos os arquivos" e codificação UTF-8.

Não mexa no `config.json` que já está na pasta: é a configuração que o Mateus usa às 20h.

**3. Confira abrindo os arquivos (19h19).** JSON válido não quer dizer JSON certo. São quatro conferências:

| O quê | Como conferir | Deu certo quando |
|---|---|---|
| Nomes | Mostre as extensões. Mac: Finder > Ajustes > Avançado > Mostrar todas as extensões. Windows: Explorer > Exibir > Extensões de nomes de arquivos | Os nomes são exatamente `tokens.json`, `Card.html` e `Card.css`, sem `.txt` no fim |
| `Card.html` | Abra no navegador (dois cliques ou arraste para uma aba) | Aparecem dois cards com o texto "Ver detalhes". Sem cor e sem espaçamento ainda: é esperado, o `tokens.css` nasce às 20h com o Mateus |
| `tokens.json`, formato | Cole o conteúdo em https://jsonlint.com e clique em validar | O validador diz que o JSON é válido |
| `tokens.json`, valores | Procure no arquivo os três tokens do B4 | `brand-primary` com `"#C8352B"`, `heading` (dentro de `font-size`) com `"20px"` e `3` (dentro de `space`) com `"24px"`. São os mesmos nomes do `Card.css` e os mesmos valores do Figma |

Medida sem `px`, como `24` solto, vira `24rem` na conversão do Mateus. Se vier assim, mande: `Refaça o JSON com todas as medidas como texto com px.`

Sem internet para o validador? Não dá para validar o formato aqui. Confira os três valores, crie na pasta um arquivo `nao-validado.txt` e avise o Mateus, que valida às 20h. Ou troque o seu `tokens.json` pelo de `handoff/` e anote em `veio-do-exemplo.txt`.

Quer ver um Card já com cor? Abra o `handoff/Card.html` da pasta de exemplo. O seu acende às 20h.

### Às 19h25: corte

Quem não terminou para aqui e usa a pasta de exemplo, que já está no seu computador desde a preparação:

- **Não tem nenhum arquivo, ou fez em dupla e a pasta gerada ficou com o colega:** copie a sua pasta `handoff/` inteira para a área de trabalho e deixe com o nome `handoff`. Assim você e o Mateus sabem que é o exemplo, não a sua geração.
- **Falta só um arquivo:** copie só ele de `handoff/` para a sua `fora-do-frame` e crie ali um arquivo de texto `veio-do-exemplo.txt` com o nome do arquivo copiado.

Chegou sem o ZIP? Levante a mão: os voluntários têm a pasta num pendrive e copiam para você, sem internet.

Deu certo quando: você tem os três arquivos com o nome certo, abertos e conferidos, ou a pasta de exemplo copiada e identificada.


## 7. B6. Revogar a chave do Figma (19h28 às 19h33)

No Figma: **Settings > Security > Personal access tokens**. Clique em **Revoke** na chave do workshop e confirme na janela que o Figma abre.

É uma chave só: a que você criou em casa é a mesma que usou hoje. Se a lista mostrar mais de uma chave do workshop, porque você criou outra ao repetir a instalação, revogue todas. A cópia de segurança que o instalador guarda da configuração antiga do Claude pode ter a chave dentro; revogada, ela não serve para nada.

Deu certo quando: a chave sumiu da lista de Personal access tokens.

Não é opcional e não tem corte. Depois, se quiser, desligue a ligação com o Figma nas configurações do Claude Desktop.


## 8. Limites, sem maquiar

- O protótipo da Parte A não é produto pronto: serve para testar a ideia e conversar com o time. As cores e medidas dele vêm da imagem, menos o ponto que você corrigiu no B2.
- `var(--token)` no código não prova sozinho que a IA leu o Figma. A prova é a cadeia: a variável no Figma, o token, o valor e o resultado gerado. Por isso o B4 é seu.
- Código gerado por IA não é código de produção. É ponto de partida, e alguém revisa.
- A ligação com o Figma não substitui design system. Ela lê o que existe. Arquivo bagunçado gera contexto bagunçado.
- A Tela demo é um exercício controlado, com problemas colocados de propósito. Numa tela sua, a lista vai ser outra.
- Se o Thiago mostrar no telão um resultado pré-gerado dos ensaios, ele avisa na hora.


## 9. Quando dá errado

| Sintoma | O que fazer |
|---|---|
| Não acho o Export no Figma | Selecione o frame clicando no nome dele, em cima da tela. O Export fica no fim do painel da direita |
| O Claude não aceita a imagem | Confira se é PNG. Arraste o arquivo para a caixa de mensagem |
| O protótipo veio só como código | Mande uma vez: `Mostre o protótipo funcionando aqui na conversa.` Continuou: em Settings > Capabilities, ligue Cloud code execution and file creation (ou Create and edit files). No dia, siga com quem está do lado |
| Limite da conta gratuita | Siga em dupla com quem ainda tem uso. Na Parte B, use a pasta de exemplo |
| Não acho as variáveis no Figma | Nada selecionado, painel da direita, Variables ou Local variables. Ou busca de ações (Cmd+K ou Ctrl+K) e digite `variables` |
| `npx` não reconhecido (em casa) | Node não instalado ou abaixo de 18. Instale, feche e abra o Terminal ou o PowerShell e rode de novo |
| Erro de script no PowerShell (em casa) | Use `npx.cmd` no lugar de `npx` |
| O comando não baixa (em casa) | Plano B: na pasta do ZIP, rode `node scripts/instalar.mjs`. Ainda precisa de internet para o último passo |
| O instalador diz que a instalação não terminou | Siga os três passos que ele mostra e rode de novo. Ele reaproveita a chave que você já colou. Persistiu: dupla no dia |
| O Claude não diz o nome do arquivo | O plugin Figma Desktop Bridge precisa estar rodando no Figma Desktop com a sua cópia aberta. Ele cai se o Figma dormir ou o arquivo fechar. Rode o plugin de novo |
| No Windows, o Claude não mostra a ligação com o Figma | Feche o Claude também pelo ícone perto do relógio e abra de novo. Persistiu: dupla no dia, e avise o Thiago |
| A pasta do plugin não existe | O Claude ainda não abriu depois da instalação. Feche o Claude por completo, abra, espere e só então importe |
| Chave recusada | Confira se começa com `figd_` e se não entrou espaço ao colar. Persistiu: gere outra e rode o comando de novo |
| B1 volta vazio | Pergunte qual arquivo o Claude está lendo e confira se o plugin está rodando. Só depois repita |
| Já existe outra ligação de Figma no seu Claude | Desligue durante o workshop, senão o Claude chama a errada |
| VPN, rede da empresa ou antivírus | A ligação usa as portas locais 9223 a 9232. Desligue a VPN. Não resolveu: dupla |
| A IA inventou nome de token ou valor | Ela não leu o Figma antes de gerar. Peça a leitura de novo. É a lição do workshop inteiro |


## 10. Para fazer em casa depois

- **Com uma tela sua.** Repita a Parte A com uma tela do seu trabalho. Ajuste o prompt do A2 e do A4 para o que a tela tem: o prompt da Tela demo fala de campos e de envio porque ela é um formulário. Evite tela de cliente com dado sensível: a imagem vai para o Claude.
- **As outras duas correções.** Repita o B2 com as divergências que você não escolheu, até o protótipo usar os três valores do arquivo.
- **Com o Claude Code.** Quem já tem plano pago do Claude pode usar o Claude Code no lugar do Claude Desktop. O comando de ligação está em `docs/pipeline-facts.md`, no repositório.
