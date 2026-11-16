# Guia do participante: Seu primeiro site, do Figma ao ar

Workshop do Thiago Xikota no Fora do Frame, uma experiência UXFor. Quarta, 18/11/2026, das 18h00 às 19h40, na Digital College Aldeota, Fortaleza.

É para designer. Você não precisa programar. Precisa dar regra.


## O que você leva

Você sai com o seu primeiro site no ar: um mini portfólio feito do seu Figma, com regras suas, e um link para mandar a quem quiser.

E sai sabendo o método, que serve para qualquer agente:

1. O agente lê o arquivo do Figma, não um print.
2. Você dá as regras num arquivo, o `DESIGN.md`.
3. O agente gera um `index.html`.
4. Você confere e publica.

A primeira vitória do dia: a IA lê uma propriedade do seu frame, e você confere no Figma.

Cada pessoa faz no próprio notebook, sem dupla. A conta gratuita do Claude tem limite de mensagens, e ele varia com o dia. O fluxo usa poucas: o alô, a leitura, o site e, se sobrar, um ajuste. Mande cada prompt uma vez. Bateu no limite? O kit tem um site reserva pronto (veja "Plano C" no passo 3).


## O mapa das peças

São quatro peças, ligadas em fila:

```
Figma  ->  plugin Desktop Bridge  ->  servidor Figma Console MCP  ->  agente (Claude Desktop ou Codex)
```

- **Figma:** guarda o design. Cores, variáveis, Auto Layout, hierarquia.
- **Figma Desktop Bridge (plugin):** roda dentro do Figma e abre uma porta para fora.
- **Figma Console MCP (servidor):** traduz. Pega o pedido do agente e devolve o que está no arquivo.
- **Agente:** escreve o código, seguindo as suas regras.

**MCP** é o protocolo, a regra da conversa entre o agente e a ferramenta. É como um cabo USB-C: o agente na ponta pode mudar, a ponte é a mesma. Hoje a ponta é o Claude Desktop. Se você usa Codex, veja "Usa Codex?" abaixo.

O Figma também tem um MCP oficial. É outra rota, com requisitos próprios, e não faz parte desta cadeia. Hoje seguimos por esta.


## O harness: onde mora a sua regra

O `DESIGN.md` do kit tem as suas regras: tipografia, só as variáveis do arquivo, contraste, e o que é proibido inventar (gradiente, sombra genérica, pílula, ícone em círculo, emoji). É o que separa o seu site de um site genérico de IA. O conteúdo é o mesmo em qualquer agente; muda onde ele mora:

| Onde você roda | Onde mora a regra | Lê sozinho? |
|---|---|---|
| Claude Desktop (chat) | `DESIGN.md` anexado na conversa, ou colado no prompt | Não. Anexe em toda conversa nova |
| Claude Code | `CLAUDE.md` na pasta do projeto | Sim |
| Codex | `AGENTS.md` na pasta do projeto | Sim |

Hoje é o Claude Desktop: você anexa o `DESIGN.md` no prompt 1.


## Preparo obrigatório, em casa, antes de quarta (30 a 45 minutos)

São três partes. A primeira é rápida. A segunda é a conexão do Figma com o agente, e é ela que deixa o agente ler o seu arquivo, em vez de olhar uma imagem. A terceira é a conta do Netlify, onde o site vai ao ar.

**Não conseguiu terminar a parte 2?** Chegue às **17h30**: tem uma mesa de instalação com voluntários, antes do workshop. Depois das 18h ninguém instala nada na sala: quem não conectou acompanha a leitura pelo telão.

Notebook da empresa que não deixa instalar programa não serve para a parte 2. Se puder, traga o pessoal.

### Parte 1. Contas, arquivo e pastas (15 minutos)

1. **Conta gratuita do Figma:** https://www.figma.com/signup (prefira a pessoal, não a do trabalho).
2. **Conta gratuita do Claude:** https://claude.ai
3. **Duplique o arquivo do exercício** para a sua conta: https://www.figma.com/community/file/1659374868260259462 . O molde do site fica na página **"Portfólio"**, no frame **"Meu portfólio"**. Duplicou antes e não tem essa página? Duplique de novo: ela é nova. [VERIFICAR no ensaio: a atualização do arquivo publicada na Community]
4. **Baixe o ZIP:** https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza-v4.zip . Descompacte e copie para a Área de Trabalho:
   - a pasta `fortaleza/meu-site-kit`. Ela tem o `DESIGN.md` (as regras do seu site) e a pasta `meu-site`, vazia, onde o site vai entrar;
   - a pasta `handoff`, para o workshop do Mateus Villain, às 20h.

Pronto quando: você vê o frame "Meu portfólio" na sua cópia do arquivo, e as pastas `meu-site-kit` e `handoff` estão na Área de Trabalho.

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
npx -y https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza-v4.tar.gz
```

Windows (repare no `.cmd`, que evita o bloqueio de scripts do PowerShell):

```
npx.cmd -y https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza-v4.tar.gz
```

Na tela, nesta ordem:

1. **"Workshop Figma + Claude: instalação"** e uma lista com `[ok]` ao lado do Node, do Figma Desktop e do Claude Desktop. Faltou algum? Ele mostra o link para baixar.
2. **"Chave do Figma"**. Ele pede um Enter e abre as configurações do Figma no navegador. Lá: aba **Security > Personal access tokens > Generate new token**. Validade de **7 dias**. Em permissões, marque **só leitura em File content**. Nada mais. A chave começa com `figd_` e aparece uma vez só: copie na hora.
3. **"Cole a chave aqui"**. Cole e aperte Enter. Nada aparece enquanto você cola, e é assim mesmo. Em seguida vem `[ok] chave recebida`.
4. **"Ligando o Figma no Claude Desktop"**. Ele grava a conexão e mantém as outras que já existiam. Se ele disser que já existe uma conexão com o mesmo nome, só substitui se você digitar `sim`. Na dúvida, aperte Enter: nada muda, e você leva a máquina à mesa das 17h30.
5. **"Preparando o plugin do Figma"**. Leva um tempo. No fim aparece **"Falta pouco, faça nesta ordem"**, o caminho de um arquivo `manifest.json` (já copiado para você) e uma janela do Finder ou do Explorer com esse arquivo.

A chave é sua: não mande para ninguém nem deixe outra pessoa digitar por você. Ela lê qualquer arquivo que a sua conta abre, por isso a conta pessoal. Você revoga no fim do workshop.

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

**Passo 6. Teste.**

Selecione o frame "Meu portfólio". No Claude Desktop, conversa nova:

```
Qual arquivo está aberto no Figma e qual frame está selecionado? Responda em uma linha.
```

Pronto quando: o Claude responde o nome da sua cópia do arquivo e "Meu portfólio". O `[ok]` do instalador não conta como teste. O instalador sugere outra frase para o teste; as duas servem.

Não respondeu? Veja "Quando dá errado", no fim deste guia. Não resolveu? Mesa das 17h30.

### Parte 3. Conta grátis no Netlify (5 minutos)

O Netlify é onde o seu site fica no ar. Crie a conta gratuita antes: https://app.netlify.com/signup . Com a conta, o site não expira.

Pronto quando: você entra em https://app.netlify.com/drop e vê a área para arrastar a pasta.

### Leve no dia

- Notebook com as partes 1, 2 e 3 prontas, e o carregador.
- Celular (login com código no e-mail trava sem ele).
- As pastas `meu-site-kit` e `handoff` na Área de Trabalho.

Este guia no navegador: https://github.com/thiagoxikota/figma-to-code-tdc-2026/blob/fortaleza-v4/fortaleza/guia-participante.md


## Usa Codex?

Funciona também. É o mesmo servidor, com outro agente na ponta: o cabo USB-C. O Thiago usa assim no Mac dele. É uma alternativa; o workshop segue com o Claude Desktop.

1. Faça as partes 1 e 2 do mesmo jeito. O instalador prepara o plugin mesmo que o seu agente seja o Codex. Sem o Claude Desktop, ele avisa e deixa continuar.
2. Acrescente a conexão no arquivo `~/.codex/config.toml`, no bloco `[mcp_servers.figma-console]`. O formato fica assim, com a sua chave no lugar de `figd_...`:

```
[mcp_servers.figma-console]
command = "npx"
args = ["-y", "figma-console-mcp@1.35.0"]
env = { FIGMA_ACCESS_TOKEN = "figd_...", ENABLE_MCP_APPS = "true" }
```

Antes de salvar, confira o comando, a versão e os nomes do `env` no ZIP, em `scripts/instalar.mjs` (função `ourEntry`) ou em `scripts/mcp-config.mjs`. Vale o que está lá. No Windows, o instalador usa `cmd` com `/c npx -y ...`; confira no mesmo trecho.

3. Abra o Codex de novo, com o plugin rodando no Figma, e mande o mesmo teste da parte 2.

Esse caminho não foi ensaiado com participantes [VERIFICAR no ensaio]. Travou? Volte para o Claude Desktop.


## No dia

Tudo acontece numa conversa só, no Claude Desktop, com o Figma Desktop aberto na sua cópia e o plugin Figma Desktop Bridge rodando.

### O alô: a primeira vitória (até 18h45)

Selecione o frame "Meu portfólio". No Claude Desktop, conversa nova:

```
Pela conexão com o Figma: qual arquivo está aberto, e qual o tamanho da fonte do nome no frame 'Meu portfólio'? Responda em uma linha.
```

Agora confira no Figma: clique no nome dentro do frame e olhe o tamanho da fonte no painel da direita.

Pronto quando: o Claude diz o nome do arquivo e um tamanho de fonte, e o painel do Figma mostra o mesmo número. A IA leu uma propriedade do seu frame, e você conferiu. Não disse? Levante a mão quando o Thiago pedir. Os voluntários ajudam com o plugin e com o Claude Desktop, mas ninguém instala nada na sala. Não deu? Siga a leitura pelo telão e faça o resto com o Thiago.

### 1. Prepare o molde (até 18h55)

Dois minutos, sem perfeccionismo.

O arquivo já é a sua cópia, então mexa direto no frame "Meu portfólio", na página "Portfólio". Troque o nome, a bio e os títulos dos dois projetos pelos seus. Mexa só no texto. As cores ficam como estão: tem duas coisas erradas de propósito ali, e o agente vai achar.

Pronto quando: existe um frame "Meu portfólio" com o seu nome.

### 2. A leitura com as suas regras (até 19h02)

Na mesma conversa do alô, anexe o arquivo `DESIGN.md` da pasta `meu-site-kit` e mande:

```
Siga as regras do DESIGN.md anexo. Pela conexão com o Figma, leia o frame 'Meu portfólio'. Liste no máximo 3 pontos em que o frame foge das variáveis da coleção Workshop Tokens ou do contraste AA, cada um com o valor atual e o valor certo. Não gere código ainda.
```

O Claude Desktop não lê arquivo sozinho: por isso o `DESIGN.md` vai anexado.

Pronto quando: a lista tem os pontos, cada um com o valor atual e o valor certo.

<details>
<summary>O que o arquivo tem de errado (abra depois do telão)</summary>

- **Bio:** cor `#A29B93` digitada direto, com contraste baixo no fundo claro. O certo é a variável `color/text-muted`.
- **Botão "Fale comigo":** `#C8352B` digitado direto, sem ligação com a variável `color/brand-primary`. O valor é igual; o que falta é a ligação. Se a marca mudar, esse botão fica para trás.

</details>

### 3. O site (até 19h10)

Na mesma conversa, mande:

```
Agora gere um único arquivo index.html, com o CSS dentro, fiel ao frame e às variáveis, já com as correções acima. Sem bibliotecas, sem fontes externas além da do frame, até 150 linhas. Entregue como arquivo para baixar.
```

Depois:

1. Baixe o arquivo pelo botão de download do Claude [VERIFICAR no ensaio: o nome do botão no Claude Desktop gratuito].
2. Coloque o arquivo dentro da pasta `meu-site`, em `meu-site-kit`. O nome tem que ser exatamente `index.html`.
3. Dê dois cliques no `index.html`. Ele abre no navegador.

Não achou o botão de baixar? Plano B: copie o código da resposta. Mac: abra o TextEdit, menu Formatar > Converter em Texto Simples, cole e salve como `index.html` dentro de `meu-site`; se ele perguntar, use `.html`. Windows: abra o Bloco de Notas, cole, Salvar como, em Tipo escolha "Todos os arquivos" e salve como `index.html` dentro de `meu-site`.

Plano C, se a conta bateu no limite ou o site não saiu: na pasta `meu-site-kit/reserva` tem um `index.html` pronto, igual ao frame e já corrigido. Abra no TextEdit (Bloco de Notas no Windows), troque "Seu Nome", a bio, os projetos e o `seu@email.com`, salve e copie o arquivo para dentro de `meu-site`.

Pronto quando: o `index.html` abre no navegador.

### 4. Confira e corrija (até 19h20)

Coloque o site no navegador ao lado do frame no Figma e confira como designer:

1. O texto é o do frame, palavra por palavra.
2. A bio está legível, mais escura que no frame.
3. O botão usa o vermelho da marca.
4. Estreite a janela do navegador: os dois projetos viram uma coluna só.

Achou diferença e sobrou mensagem? Um ajuste, pedido como designer, terminando com:

```
Não mude mais nada.
```

Baixe de novo e substitua o `index.html` dentro de `meu-site`.

Pronto quando: as quatro conferências batem.

### 5. Publique no Netlify Drop (até 19h30)

1. Entre na sua conta e abra https://app.netlify.com/drop
2. Arraste a pasta `meu-site` inteira para a área indicada. A pasta, não o arquivo solto.
3. Espere alguns segundos. O Netlify mostra um link terminando em `.netlify.app`.
4. Copie o link e abra numa janela anônima: Cmd+Shift+N no Chrome e no Safari do Mac, Ctrl+Shift+N no Chrome do Windows. Se abriu lá, abre para qualquer pessoa.
5. Abra no celular. Mande para alguém.

Sem GitHub e sem terminal.

Pronto quando: o link abre o seu site na janela anônima e no celular.

### E o GitHub?

Não é obrigatório hoje. Mas vale entender a diferença:

- **A sua pasta** é onde o site nasce, no seu computador.
- **O GitHub** é um cofre com histórico. Cada versão do site fica guardada, com data e o que mudou. Errou? Volta para a de ontem. Esse cofre se chama repositório.
- **O Netlify** é a vitrine. Ele pega a pasta e dá um link.

Por que isso muda a vida do designer: quando o GitHub está ligado ao Netlify, cada mudança guardada no cofre vira site novo sozinha. Você pede um ajuste ao agente, ele guarda no GitHub, e o link já mostra a versão nova. O Thiago mostra no telão.

### Revogue a chave do Figma (até 19h40)

Todo mundo que criou chave faz, na sala. No Figma: **Settings > Security > Personal access tokens**. Clique em **Revoke** em todas as chaves que você criou para o workshop e confirme na janela que o Figma abre. Repetiu a instalação e criou mais de uma? Revogue todas.

Pronto quando: nenhuma chave do workshop aparece mais na lista.

Depois, se quiser, desligue também a conexão nas configurações do Claude Desktop. Para usar de novo em casa, crie uma chave nova e rode o instalador outra vez.

### No fim

- O método vale para qualquer frame seu: arquivo lido pela conexão, regras no `DESIGN.md`, um `index.html`, conferir, publicar.
- O agente só lê o que existe no arquivo. Valor digitado direto volta solto, como a bio e o botão de hoje. Numa tela sua, ligue cores e espaços a variáveis antes de pedir o código. Evite arquivo de cliente com dado sensível.
- O site é um ponto de partida. Para mudar, edite o frame, peça um novo `index.html` e arraste a pasta de novo no Netlify [VERIFICAR no ensaio: se arrastar de novo atualiza o mesmo site ou cria outro].

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
| O Claude não diz o nome do arquivo | Figma Desktop (não o navegador) com a sua cópia aberta e o plugin Figma Desktop Bridge rodando. Ele cai se o Figma dormir ou o arquivo fechar: rode de novo. O Claude Desktop foi fechado por completo depois da instalação? Desligue a VPN |
| A chave venceu ou foi revogada | Crie outra (7 dias, só leitura em File content) e rode o instalador de novo |
| Não tenho a página "Portfólio" | A sua cópia é antiga. Duplique o arquivo da Community de novo |
| O Claude leu o frame errado | Confira se só um frame se chama "Meu portfólio" e se ele está selecionado |
| Não consigo anexar o `DESIGN.md` | Arraste o arquivo para a caixa de mensagem. Não deu? Abra o arquivo, copie o texto e cole antes do prompt |
| O site veio só como código, sem arquivo para baixar | Use o plano B do passo 3: TextEdit em texto simples ou Bloco de Notas, salvo como `index.html` |
| O tamanho da fonte do alô não bate com o painel | Confira se o nome que você clicou está dentro do frame "Meu portfólio" e se o Claude leu o arquivo certo |
| O link não abre na janela anônima | Sem login, o site do Drop expira. Entre na sua conta do Netlify e arraste a pasta de novo |
| O arquivo baixou com outro nome, ou como `index.html.txt` | Renomeie para `index.html`. No Windows, mostre as extensões do arquivo para ver o nome inteiro |
| O `index.html` abre como texto no navegador | Ele foi salvo com formatação. Refaça pelo plano B, em texto simples |
| O Netlify Drop não aceita ou o link mostra "Page not found" | Arraste a pasta `meu-site`, não o arquivo solto, e confira que dentro dela está `index.html` com esse nome exato |
| O Netlify pede login | Entre na conta que você criou na parte 3. Sem conta, o site expira |
| Bateu no limite da conta | Use o site reserva (plano C do passo 3) e publique igual. Em casa, use os prompts deste guia |
| Não tenho a pasta `meu-site-kit` ou a `handoff` | Chame um voluntário: ele copia do pendrive |
