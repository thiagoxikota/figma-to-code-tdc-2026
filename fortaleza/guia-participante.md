# Guia do participante: Figma + IA, na prática

Do seu Figma ao primeiro site. Workshop do Thiago Xikota no Fora do Frame, uma experiência UXFor. Quarta, 18/11/2026, das 18h00 às 19h40, na Digital College Aldeota, Fortaleza.

É para designer. Você não precisa programar. Precisa dar regra.


## O que você leva

1. **Um agente de IA mexendo no seu Figma.** Você manda um pedido, e o agente personaliza a sua hero no seu arquivo: troca os textos, muda a cor da variável e deixa tudo editável. Você confere no Figma, camada por camada.
2. **A sua hero virando site.** O agente lê o frame que ele mesmo editou e gera um `index.html`, seguindo as regras que você escreveu no `DESIGN.md`.
3. **O olhar de designer no fim.** Você compara o site com o frame, estreita a janela e pede um ajuste.

A primeira vitória do dia é o alô: a IA lê uma propriedade do seu frame, e você confere no painel do Figma.

Cada pessoa faz no próprio notebook, sem dupla. A conta gratuita do Claude tem limite de mensagens, e ele varia com o dia. O fluxo usa poucas: o alô, o prompt 1, o prompt 2 e, se sobrar, um ajuste. Mande cada prompt uma vez. Bateu no limite? O kit tem um site reserva pronto (veja "Plano C" no prompt 2).


## O mapa das peças

São quatro peças, ligadas em fila:

```
Figma  <->  plugin Desktop Bridge  <->  servidor Figma Console MCP  <->  agente (chat do Claude Desktop, ou Codex)
```

- **Figma:** guarda o design. Camadas, variáveis, Auto Layout, hierarquia.
- **Figma Desktop Bridge (plugin):** roda dentro do Figma e abre uma porta. É por ela que o agente lê e escreve no arquivo.
- **Figma Console MCP (servidor):** leva o pedido do agente até o plugin e traz a resposta de volta.
- **Agente:** entende o seu pedido e decide o que fazer: ler o frame, trocar um texto, mudar uma variável, escrever o código.

**MCP** é o protocolo, a regra da conversa entre o agente e a ferramenta. É como um cabo USB-C: o agente na ponta pode mudar, a ponte é a mesma. Hoje a ponta é o chat do Claude Desktop. Se você usa Codex, veja "Usa Codex?" abaixo.

**E o MCP oficial do Figma?** É outra rota, com requisitos próprios, e não faz parte desta cadeia. Ele também escreve no canvas, num beta para planos elegíveis; o plano gratuito (Starter) fica de fora. Hoje seguimos pelo Figma Console MCP, que funciona com a conta gratuita do Figma.


## Preparo obrigatório, em casa, antes de quarta (30 a 45 minutos)

São três partes. A primeira é rápida e inclui preencher os seus dados. A segunda é a conexão do Figma com o agente: é ela que deixa o agente ler e mexer no seu arquivo. A terceira é opcional.

**Não conseguiu terminar a parte 2?** Chegue às **17h30**: tem uma mesa de instalação com voluntários, antes do workshop. Depois das 18h ninguém instala nada na sala: quem não conectou acompanha pelo telão.

Notebook da empresa que não deixa instalar programa não serve para a parte 2. Se puder, traga o pessoal.

### Parte 1. Contas, arquivo, pastas e os seus dados (15 minutos)

1. **Conta gratuita do Figma:** https://www.figma.com/signup (prefira a pessoal, não a do trabalho).
2. **Conta gratuita do Claude:** https://claude.ai
3. **Duplique o arquivo do exercício** para a sua conta: https://www.figma.com/community/file/1659374868260259462 . O molde fica na primeira página, **"Minha hero"**, no frame **"Minha hero"**. Ao lado dele está o **"Exemplo pronto: Thiago"**, a mesma hero já personalizada, para você ver aonde vai chegar. Duplicou antes e não tem essa página? Duplique de novo: ela é nova.
4. **Baixe o ZIP:** https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza-v5.zip . Descompacte e copie para a Área de Trabalho:
   - a pasta `fortaleza/meu-site-kit`. Ela tem o `meus-dados.txt`, o `DESIGN.md` (as regras do seu site), a pasta `reserva` e a pasta `meu-site`, vazia, onde o site vai entrar;
   - a pasta `handoff`, para o workshop do Mateus Villain, às 20h.
5. **Preencha o `meus-dados.txt`.** Abra no TextEdit (Mac) ou no Bloco de Notas (Windows) e troque o exemplo de cada linha pelo seu:
   - Nome
   - Título profissional
   - Bio, até 180 caracteres
   - Texto do botão e link
   - Cor principal, em hex ou pelo nome
   - Fundo: claro ou escuro

   Salve. No dia, você cola esse texto no prompt, sem pensar em texto na hora.

Pronto quando: você vê o frame "Minha hero" na sua cópia do arquivo, as pastas `meu-site-kit` e `handoff` estão na Área de Trabalho e o `meus-dados.txt` está com os seus dados.

### Parte 2. Conecte o Figma ao Claude (20 a 30 minutos)

O nome técnico disso é MCP. Se um dia você for procurar sobre o assunto, é essa a palavra.

Os passos indicam as diferenças do Windows, mas foram ensaiados só no Mac. No Windows, a mesa das 17h30 ajuda.

**Passo 1. Instale três programas.**

- **Figma Desktop**, o app, não o navegador: https://www.figma.com/downloads/
- **Claude Desktop**, o app do Claude: https://claude.com/download . Entre com a mesma conta do claude.ai.
- **Node.js**, versão LTS, a recomendada no site: https://nodejs.org/en/download . Ele só roda o instalador e a conexão. Você não vai programar com ele.

Para conferir o Node, abra o **Terminal** (Mac: Cmd+Espaço, digite Terminal) ou o **PowerShell** (Windows: tecla Windows, digite PowerShell). Digite `node -v` e aperte Enter.

Na tela: aparece um número que começa com v, como `v22...`. Tem que ser v18 ou maior. Se você também vai no workshop do Mateus, prefira 22 ou maior.

**Passo 2. Rode o instalador.**

Abra o Figma Desktop e o Claude Desktop, logados. No Terminal ou no PowerShell, cole o comando e aperte Enter.

Mac:

```
npx -y https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza-v5.tar.gz
```

Windows (repare no `.cmd`, que evita o bloqueio de scripts do PowerShell):

```
npx.cmd -y https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza-v5.tar.gz
```

Na tela, nesta ordem:

1. **"Workshop Figma + Claude: instalação"** e uma lista com `[ok]` ao lado do Node, do Figma Desktop e do Claude Desktop. Faltou algum? Ele mostra o link para baixar.
2. **"Chave do Figma"**. Ele pede um Enter e abre as configurações do Figma no navegador. Lá: aba **Security > Personal access tokens > Generate new token**. Dê um nome fácil de achar depois, como `workshop fortaleza`. Validade de **7 dias**. Em permissões, marque **só leitura em File content**. Nada mais. A chave começa com `figd_` e aparece uma vez só: copie na hora.
3. **"Cole a chave aqui"**. Cole e aperte Enter. Nada aparece enquanto você cola, e é assim mesmo. Em seguida vem `[ok] chave recebida`.
4. **"Ligando o Figma no Claude Desktop"**. Ele grava a conexão e mantém as outras que já existiam. Se ele disser que já existe uma conexão com o mesmo nome, só substitui se você digitar `sim`. Na dúvida, aperte Enter: nada muda, e você leva a máquina à mesa das 17h30.
5. **"Preparando o plugin do Figma"**. Leva um tempo. No fim aparece **"Falta pouco, faça nesta ordem"**, o caminho de um arquivo `manifest.json` (já copiado para você) e uma janela do Finder ou do Explorer com esse arquivo.

A chave é sua: não mande para ninguém nem deixe outra pessoa digitar por você. Ela lê qualquer arquivo que a sua conta abre, por isso a conta pessoal. Você revoga no fim do workshop. Ela é só de leitura: quando o agente mexe no seu frame, quem escreve é o plugin, dentro do seu Figma aberto.

O comando não baixou? Abra o Terminal dentro da pasta do ZIP que você descompactou e rode `node scripts/instalar.mjs`. Faz a mesma coisa, mas ainda precisa de internet.

**Passo 3. Feche e abra o Claude Desktop.**

Feche por completo: no Mac, Cmd+Q. No Windows, saia também pelo ícone perto do relógio, não só pelo X. A conexão só carrega quando o app abre.

**Passo 4. Importe o plugin no Figma.**

No Figma Desktop, abra a sua cópia do arquivo. Menu **Plugins > Development > Import plugin from manifest**. Abre uma janela de escolher arquivo:

- Mac: aperte Cmd+Shift+G, cole o caminho e confirme. A pasta começa com ponto e fica escondida, por isso o atalho.
- Windows: cole o caminho no campo **Nome do arquivo** e clique em **Abrir**.

Na tela: o plugin **Figma Desktop Bridge** passa a aparecer em Plugins > Development.

**Passo 5. Rode o plugin.**

Plugins > Development > **Figma Desktop Bridge**. Abre uma janelinha do plugin. Deixe ela aberta.

Na tela: quando a conexão está de pé, a janelinha mostra **"Local · ready"**.

**Passo 6. Teste.**

Selecione o frame "Minha hero". No Claude Desktop, conversa nova:

```
Qual arquivo está aberto no Figma e qual frame está selecionado? Responda em uma linha.
```

Pronto quando: o Claude responde o nome da sua cópia do arquivo e "Minha hero". O `[ok]` do instalador não conta como teste. O instalador sugere outra frase para o teste; as duas servem.

Não respondeu? Veja "Quando dá errado", no fim deste guia. Não resolveu? Mesa das 17h30.

### Parte 3. Opcional: conta grátis no Netlify (5 minutos)

Só para quem quiser pôr o site no ar no fim, se der tempo. Não é obrigatório: o workshop termina com o site aberto no seu navegador. Crie a conta gratuita em https://app.netlify.com/signup . Com a conta, o site não expira.

Pronto quando: você entra em https://app.netlify.com/drop e vê a área para arrastar a pasta.

### Leve no dia

- Notebook com as partes 1 e 2 prontas, e o carregador.
- O `meus-dados.txt` preenchido.
- Se quiser foto na hero: uma foto sua no notebook, em JPG ou PNG.
- Celular (login com código no e-mail trava sem ele).
- As pastas `meu-site-kit` e `handoff` na Área de Trabalho.

Este guia no navegador: https://github.com/thiagoxikota/figma-to-code-tdc-2026/blob/fortaleza-v5/fortaleza/guia-participante.md


## Usa Codex?

Funciona também. É o mesmo servidor, com outro agente na ponta: o cabo USB-C. O Thiago usa assim no Mac dele. É uma alternativa; o workshop segue com o chat do Claude Desktop.

1. Faça as partes 1 e 2 do mesmo jeito. O instalador prepara o plugin mesmo que o seu agente seja o Codex. Sem o Claude Desktop, ele avisa e deixa continuar.
2. Acrescente a conexão no arquivo `~/.codex/config.toml`, no bloco `[mcp_servers.figma-console]`. O formato fica assim, com a sua chave no lugar de `figd_...`:

```
[mcp_servers.figma-console]
command = "npx"
args = ["-y", "figma-console-mcp@1.35.0"]
env = { FIGMA_ACCESS_TOKEN = "figd_...", ENABLE_MCP_APPS = "true" }
```

Antes de salvar, confira o comando, a versão e os nomes do `env` no ZIP, em `scripts/instalar.mjs` (função `ourEntry`) ou em `scripts/mcp-config.mjs`. Vale o que está lá. No Windows, o instalador usa `cmd` com `/c npx -y ...`; confira no mesmo trecho.

3. Abra o Codex de novo, com o plugin rodando no Figma, e mande o mesmo teste da parte 2. No Codex, as regras do `DESIGN.md` podem morar num `AGENTS.md` na pasta do projeto (veja "Regras escritas", abaixo).

Esse caminho não foi ensaiado com participantes [VERIFICAR no ensaio]. Travou? Volte para o Claude Desktop.


## No dia

Tudo acontece numa conversa só, no chat do Claude Desktop, com o Figma Desktop aberto na sua cópia, na página "Minha hero", e o plugin Figma Desktop Bridge rodando ("Local · ready").

### O alô: a primeira vitória (até 18h35)

Selecione o frame "Minha hero". No Claude Desktop, conversa nova:

```
Pela conexão com o Figma: qual o nome do arquivo aberto e qual o tamanho da fonte da camada 'Nome' no frame 'Minha hero'? Responda em uma linha.
```

Agora confira no Figma: clique no texto "Seu Nome", dentro do frame, e olhe o tamanho da fonte no painel da direita.

Pronto quando: o Claude diz o nome do arquivo e um tamanho de fonte, e o painel do Figma mostra o mesmo número. A IA leu uma propriedade do seu frame, e você conferiu. Ela leu o arquivo, não uma imagem.

Não disse? Levante a mão quando o Thiago pedir. Os voluntários ajudam com o plugin e com o Claude Desktop, mas ninguém instala nada na sala. Não deu? Acompanhe pelo telão e faça o que der com o Thiago.

### Prompt 1: o agente escreve no seu Figma (até 18h55)

1. Abra o seu `meus-dados.txt` e copie tudo.
2. No Figma, clique no frame "Minha hero" para selecionar.
3. Na mesma conversa do alô, mande o prompt abaixo e, no lugar da última linha, cole os seus dados:

```
Use o Figma Console MCP para personalizar somente o frame selecionado, chamado 'Minha hero'. Aplique os dados abaixo. Troque os textos das camadas Nome, Título profissional, Bio, Texto do botão e Link secundário. Mude o valor da variável color/brand-primary para a cor principal. Se o fundo for escuro, mude os valores das variáveis: color/surface para #1F1C1A, color/surface-alt para #2A2623, color/text para #FFFFFF e color/text-muted para #B5AEA6. Preserve a estrutura e o Auto Layout. Mantenha tudo editável. Não crie outras seções, páginas ou cards. Não faça perguntas. Ao terminar, confira e resuma em até 5 linhas o que alterou.

[cole aqui o meus-dados.txt]
```

O Claude Desktop pode pedir permissão para usar as ferramentas do Figma. Permita.

**Confira no Figma, como designer:**

1. Os textos do frame são os seus, palavra por palavra.
2. Clique numa camada de texto: ela continua sendo texto, editável, com o mesmo nome no painel de camadas. Nada virou imagem.
3. Clique no título profissional e olhe o painel da direita: a cor continua ligada à variável `color/brand-primary`, agora com o valor novo.
4. O "Exemplo pronto: Thiago", ao lado, também mudou de cor. Não é erro: as variáveis valem para o arquivo todo. É a prova de que a cor está ligada, e não digitada solta.
5. A cor principal dá para ler sobre o fundo? Se não der, troque o valor da variável à mão no painel de variáveis.

Achou algo errado? Corrija à mão no Figma. O arquivo é seu, e tudo continua editável.

**A foto é opcional e vai à mão.** Arraste a sua foto do computador para dentro do quadro "Foto (opcional)" no Figma. Ajuste o enquadramento. O agente não mexe na foto.

Pronto quando: o frame "Minha hero" mostra os seus dados, e as camadas continuam editáveis.

### Possibilidades: o Thiago mostra no telão (até 19h05)

Aqui você só assiste. Não gaste mensagem.

- **Comentário no Figma, lido e aplicado.** Um comentário deixado no arquivo vira pedido: o agente lê o comentário pela conexão e aplica no frame.
- **Handoff.** O agente lê o frame e escreve o que um dev precisa saber: variáveis, espaços, estados.
- **Regras escritas.** O que você decidiu no `meus-dados.txt`, você também pode escrever como regra, para valer em toda conversa. Veja abaixo.

#### Regras escritas: DESIGN.md e harness

**Harness** é tudo o que envolve o agente para ele trabalhar: o contexto que ele recebe, as ferramentas que ele pode usar (como o Figma Console MCP) e o jeito de executar. O `DESIGN.md` é uma parte disso: as suas regras de design, num arquivo. Sem regra, o agente preenche o vazio com a média da internet: gradiente, sombra genérica, botão pílula, ícone dentro de círculo, emoji, texto de enfeite. O `DESIGN.md` do kit proíbe tudo isso.

O conteúdo da regra é o mesmo em qualquer agente. Muda onde ela mora:

| Onde você roda | Onde mora a regra | Lê sozinho? |
|---|---|---|
| Chat do Claude Desktop (o de hoje) | `DESIGN.md` anexado na conversa, ou colado no prompt | Não. Anexe em toda conversa nova |
| Claude Code (no terminal, ou na aba Code do app Claude Desktop) | `CLAUDE.md` na pasta do projeto | Sim |
| Codex | `AGENTS.md` na pasta do projeto | Sim |

O chat e o Claude Code são coisas diferentes, mesmo dentro do mesmo app. O chat conversa. O Claude Code trabalha numa pasta do seu computador: lê os arquivos, cria, edita. Hoje é o chat.

### Prompt 2: a hero vira site (até 19h20)

Na mesma conversa, anexe o arquivo `DESIGN.md` da pasta `meu-site-kit` (arraste para a caixa de mensagem) e mande:

```
Siga as regras do DESIGN.md anexo. Pela conexão com o Figma, leia o frame 'Minha hero' como está agora e gere um único arquivo index.html dessa hero, com o CSS dentro. Seja fiel ao frame e use as variáveis da coleção Workshop Tokens como variáveis CSS. Fontes Sora e Inter pelo Google Fonts. Use os links dos meus dados no botão e no link secundário. Responsivo: em tela estreita, a foto vai para baixo do texto e nenhum texto é cortado. Sem bibliotecas. Se o frame tiver foto, não embuta a imagem: use img src="foto.jpg". Entregue como arquivo para baixar.
```

Depois:

1. Baixe o arquivo pelo botão de download do Claude [VERIFICAR no ensaio: o nome do botão no Claude Desktop gratuito].
2. Coloque o arquivo dentro da pasta `meu-site`, em `meu-site-kit`. O nome tem que ser exatamente `index.html`.
3. Pôs foto no Figma? Selecione a foto, exporte em JPG pelo painel Export, renomeie para `foto.jpg` e coloque na mesma pasta `meu-site`.
4. Dê dois cliques no `index.html`. Ele abre no navegador.

**Plano B,** se não aparecer o botão de baixar: copie o código da resposta. Mac: abra o TextEdit, menu Formatar > Converter em Texto Simples, cole e salve como `index.html` dentro de `meu-site`; se ele perguntar, use `.html`. Windows: abra o Bloco de Notas, cole, Salvar como, em Tipo escolha "Todos os arquivos" e salve como `index.html` dentro de `meu-site`.

**Plano C,** se a conta bateu no limite ou o site não saiu: na pasta `meu-site-kit/reserva` tem um `index.html` pronto, igual ao frame "Minha hero". Abra no TextEdit (Bloco de Notas no Windows), troque os textos marcados com `TROQUE` pelos do seu `meus-dados.txt`, troque a cor em `--brand-primary`, salve e copie o arquivo para dentro de `meu-site`.

Pronto quando: o `index.html` abre no navegador.

### Confira como designer (até 19h30)

Coloque o navegador ao lado do Figma, com o frame "Minha hero" na tela, e confira:

1. Os textos são os do frame, palavra por palavra.
2. As fontes são as do frame: Sora no nome e no título, Inter no resto.
3. A cor principal está no título e no ponto do status, e o fundo é o que você escolheu.
4. O botão e o link levam para os endereços certos. Clique para ver.
5. Estreite a janela do navegador até ficar do tamanho de um celular: a foto vai para baixo e nenhum texto é cortado.

Achou diferença e sobrou mensagem? Um ajuste, pedido como designer, com o que você vê e o que quer. Por exemplo: "No celular, o nome está grande demais e quebra em três linhas. Diminua o nome só em tela estreita." Termine sempre com:

```
Não mude mais nada.
```

Baixe de novo e substitua o `index.html` dentro de `meu-site`.

Pronto quando: as cinco conferências batem.

### Próximos passos (opcionais)

Nada daqui é obrigatório hoje. É o caminho para depois.

- **Netlify Drop: o site no ar.** Para quem terminou e criou a conta na parte 3. Entre na conta, abra https://app.netlify.com/drop e arraste a pasta `meu-site` inteira (a pasta, não o arquivo solto). Em segundos sai um link terminando em `.netlify.app`. Abra o link numa janela anônima (Cmd+Shift+N no Chrome e no Safari do Mac, Ctrl+Shift+N no Chrome do Windows): se abriu lá, abre para qualquer pessoa. Depois, no celular.
- **GitHub: o cofre com histórico.** A sua pasta é onde o site nasce. O GitHub guarda cada versão dela, com data e o que mudou; errou, volta para a de ontem. Esse cofre se chama repositório. O Netlify é a vitrine que dá o link. Ligando os dois, cada mudança guardada no GitHub vira site novo sozinha.
- **PageSpeed Insights: a nota do site.** Com o link no ar, cole em https://pagespeed.web.dev . Ele usa o Lighthouse e dá notas de desempenho, acessibilidade e boas práticas, com o que melhorar.
- **React Bits: componentes animados.** https://reactbits.dev . São componentes em React, para depois, quando você trabalhar num projeto com o Claude Code. Não encaixam no `index.html` de hoje.
- **Mobbin MCP: referência real dentro do agente.** O Mobbin é uma biblioteca de telas de apps reais. O MCP dele deixa o agente buscar referência ali. Disponível nos planos Pro e Team.

### Revogue a chave do workshop (até 19h40)

Todo mundo que criou chave faz, na sala. No Figma: **Settings > Security > Personal access tokens**. Ache a chave que você criou para o workshop (a de 7 dias, com o nome que você deu) e clique em **Revoke**. Confirme na janela que o Figma abre. Criou mais de uma para hoje, porque repetiu a instalação? Revogue cada uma delas. As outras chaves que você já tinha ficam como estão.

Pronto quando: a chave do workshop não aparece mais na lista.

Depois, se quiser, desligue também a conexão nas configurações do Claude Desktop. Para usar de novo em casa, crie uma chave nova e rode o instalador outra vez.

### No fim

- O método vale para qualquer frame seu: o agente lê e escreve pela conexão, você confere no Figma, escreve as regras no `DESIGN.md`, pede o `index.html` e confere como designer.
- O agente trabalha melhor com arquivo organizado: camadas com nome, Auto Layout e cores ligadas a variáveis. Evite arquivo de cliente com dado sensível.
- Para mudar a hero, edite o frame, peça um novo `index.html` e substitua o arquivo em `meu-site`.

**Às 20h, com o Mateus:** leve a pasta `handoff` da Área de Trabalho. Ela tem um Card e os tokens de design. O Node que você instalou no preparo serve para a sessão dele.


## Quando dá errado

| Sintoma | O que fazer |
|---|---|
| `node -v` não mostra nada, ou mostra menos que v18 | Instale o Node LTS pelo site. Acabou de instalar? Feche e abra o Terminal ou o PowerShell |
| `npx` não reconhecido | Ele vem com o Node. Confira `node -v` e `npm -v`. Acabou de instalar? Feche e abra o Terminal ou o PowerShell |
| Erro de script no PowerShell | Use `npx.cmd` no lugar de `npx` |
| O comando não baixa | Na pasta do ZIP, rode `node scripts/instalar.mjs`. Ainda precisa de internet |
| O navegador não abriu a página da chave | O endereço aparece escrito no Terminal: https://www.figma.com/settings |
| O instalador diz que já existe uma conexão com o mesmo nome, ou que a configuração não é válida | Ele não mexeu em nada. Na dúvida, não digite `sim`: leve à mesa das 17h30 |
| O instalador diz que a instalação NÃO terminou | Siga os passos que ele mostra e rode de novo. Ele reaproveita a chave que você já colou |
| A janelinha do plugin não mostra "Local · ready" | Feche o plugin e rode de novo. O Claude Desktop foi fechado por completo depois da instalação? Desligue a VPN |
| O Claude não diz o nome do arquivo | Figma Desktop (não o navegador) com a sua cópia aberta e o plugin Figma Desktop Bridge rodando. Ele cai se o Figma dormir ou o arquivo fechar: rode de novo |
| A chave venceu ou foi revogada | Crie outra (7 dias, só leitura em File content) e rode o instalador de novo |
| Não tenho a página "Minha hero" | A sua cópia é antiga. Duplique o arquivo da Community de novo |
| O tamanho da fonte do alô não bate com o painel | Confira se você clicou no "Seu Nome" dentro do frame "Minha hero", e não no exemplo do Thiago |
| O prompt 1 mexeu no frame errado | Desfaça com Cmd+Z (Ctrl+Z no Windows). Selecione só o frame "Minha hero" e mande de novo |
| O prompt 1 criou camadas novas ou desfez o Auto Layout | Desfaça com Cmd+Z (Ctrl+Z) e corrija à mão. Não gaste outra mensagem |
| O título ficou ilegível no fundo escuro | Troque o valor de `color/brand-primary` à mão no painel de variáveis, por uma cor mais clara |
| Não consigo anexar o `DESIGN.md` | Arraste o arquivo para a caixa de mensagem. Não deu? Abra o arquivo, copie o texto e cole antes do prompt |
| O site veio só como código, sem arquivo para baixar | Use o plano B do prompt 2: TextEdit em texto simples ou Bloco de Notas, salvo como `index.html` |
| A foto não aparece no site | Confira se a foto está em `meu-site` com o nome exato `foto.jpg`, ao lado do `index.html` |
| O arquivo baixou com outro nome, ou como `index.html.txt` | Renomeie para `index.html`. No Windows, mostre as extensões do arquivo para ver o nome inteiro |
| O `index.html` abre como texto no navegador | Ele foi salvo com formatação. Refaça pelo plano B, em texto simples |
| Bateu no limite da conta | Plano C: o site reserva do kit. O seu frame no Figma continua pronto; em casa, use os prompts deste guia |
| O Netlify Drop não aceita ou o link mostra "Page not found" | Arraste a pasta `meu-site`, não o arquivo solto, e confira que dentro dela está `index.html` com esse nome exato |
| O link do Netlify não abre na janela anônima | Sem login, o site do Drop expira. Entre na sua conta do Netlify e arraste a pasta de novo |
| Não tenho a pasta `meu-site-kit` ou a `handoff` | Chame um voluntário: ele copia do pendrive |
