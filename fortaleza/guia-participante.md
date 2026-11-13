# Guia do participante: Seu Figma vira produto

Design com IA, do arquivo ao protótipo que funciona. Workshop do Thiago Xikota no Fora do Frame, uma experiência UXFor. Quarta, 18/11/2026, das 18h00 às 19h40, na Digital College Aldeota, Fortaleza.

Este workshop é para designer. Você não precisa saber programar.

Você sai daqui com:

- uma revisão da sua tela feita do jeito que um dev olharia antes de construir (estados faltando, espaçamento solto, texto sem padrão, acessibilidade);
- um protótipo navegável dessa tela, que aparece no próprio Claude;
- se conectar o Figma ao Claude (Parte B): os tokens reais do arquivo e um componente pronto para o código, numa pasta. É dessa pasta que o workshop do Mateus Villain parte, às 20h.

Ninguém paga nada: a conta gratuita do Figma e a conta gratuita do Claude servem.


## Como o workshop funciona

São duas partes.

- **Parte A, todo mundo, sem instalar nada.** Você exporta uma tela como imagem, cola no Claude e pede duas coisas: uma revisão e um protótipo.
- **Parte B, com o Figma conectado.** Um comando liga o seu Figma ao Claude. Aí o Claude lê o arquivo de verdade: os nomes das camadas, as variáveis, os valores exatos.

A diferença entre as duas é o ponto do workshop. A imagem é uma aproximação: o Claude adivinha a cor e o espaçamento olhando os pixels. O arquivo conectado traz os valores reais (os tokens e os nomes), e é isso que o dev precisa para construir sem chutar.

Não conseguiu instalar? Você faz a Parte A inteira e segue a Parte B em dupla ou com um voluntário.


## 1. Antes de quarta

### Todo mundo (uns 10 minutos)

1. **Conta gratuita do Figma:** https://www.figma.com/signup
2. **Conta gratuita do Claude:** https://claude.ai
3. **O arquivo do exercício.** Abra e clique em duplicar para a sua conta:
   https://www.figma.com/community/file/1659374868260259462
   Dentro dele estão um mini design system (coleção **Workshop Tokens**, 23 variáveis) e a página **"01 Comece aqui"**, com o frame **"Tela demo"**.
4. **Uma tela sua, se quiser.** Na Parte A você pode usar a "Tela demo" ou uma tela do seu próprio trabalho. Se for usar a sua, deixe o arquivo à mão. Evite tela de cliente com dado sensível: a imagem vai para o Claude.

Entre nas duas contas antes de quarta e deixe o celular por perto: login com código no e-mail ou verificação em duas etapas sem o celular trava na hora.

### Para a Parte B (mais uns 10 minutos)

Instale estes três programas. O comando que você roda na sala confere se estão aí e dá o link do que faltar, mas baixar na rede da sala é lento.

1. **Figma Desktop**, o app, não o navegador. O plugin que faz a ponte só roda nele.
   https://www.figma.com/downloads/
2. **Node.js**, versão LTS (a recomendada no site). Ele roda a ponte entre o Figma e o Claude. Você não vai programar com ele.
   https://nodejs.org/en/download
   Para conferir, abra o Terminal (Mac) ou o PowerShell (Windows) e digite `node -v`. Tem que aparecer v18 ou maior. Se você também vai no workshop do Mateus, prefira 22 ou maior.
3. **Claude Desktop**, o app do Claude. A conexão com o Figma não funciona no Claude do navegador.
   https://claude.com/download

Depois crie uma pasta chamada `fora-do-frame` na sua área de trabalho. No fim da Parte B você cola três arquivos nela.

Caminho mais fácil: baixe este repositório em **Code > Download ZIP** (https://github.com/thiagoxikota/figma-to-code-tdc-2026), descompacte e copie a pasta `fortaleza/pasta-modelo` para a área de trabalho com o nome `fora-do-frame`. Ela já vem com os três arquivos vazios no formato certo, e o ZIP traz também a pasta `handoff/`, a rede de segurança caso você não termine.

### Leve no dia

- Notebook com macOS ou Windows. Para a Parte B, com permissão para instalar programa. Linux faz a Parte A normalmente e a Parte B em dupla.
- Carregador.
- Celular.


## 2. Na sala: instalar com um comando (18h10 às 18h25)

Quem vai fazer a Parte B instala agora. Quem não vai instalar já começa a Parte A (seção 3) e segue no seu ritmo.

O Thiago mostra cada passo no telão. Travou? Pare de repetir e chame um voluntário. Não resolveu rápido: siga a Parte A e faça a Parte B em dupla com quem já conectou.

### Passo 1. Abrir

Figma Desktop e Claude Desktop abertos e logados. No Figma, a sua cópia do arquivo do exercício aberta na página "01 Comece aqui".

### Passo 2. Instalar com um comando

Abra o **Terminal** (Mac: Cmd+Espaço, digite Terminal) ou o **PowerShell** (Windows: tecla Windows, digite PowerShell). Cole este comando e aperte Enter:

```
npx -y https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/heads/main.tar.gz
```

É o mesmo comando no Mac e no Windows. Ele:

1. confere se o Node, o Figma Desktop e o Claude Desktop estão instalados e dá o link do que faltar;
2. abre as configurações do Figma para você gerar o token (aba Security > Personal access tokens > Generate new token, validade de 1 dia, leitura em File content, Variables e Comments);
3. pede o token num campo escondido: cole e aperte Enter (aparecem só asteriscos);
4. liga o Figma no Claude Desktop sem apagar nada que já esteja lá;
5. prepara o plugin do Figma e mostra o arquivo dele, com o caminho já copiado.

O token é a chave que deixa o Claude ler o seu arquivo. Ele começa com `figd_` e **aparece uma vez só** no Figma: copie na hora. Ele é seu: não mande para ninguém nem deixe voluntário digitar por você.

Quando terminar, **feche o Claude por completo e abra de novo**. No Mac é Cmd+Q. No Windows, saia também pelo ícone perto do relógio, não só pelo X. A conexão só carrega quando o app abre.

### Passo 3. Se o comando falhar: o caminho manual

Só use se o Passo 2 deu erro. Gere o token no Figma como descrito acima. No Claude Desktop: Settings > Developer > Edit Config. Isso abre o arquivo `claude_desktop_config.json` no lugar certo.

Se o arquivo estiver vazio ou só com `{}`, apague tudo e cole o bloco abaixo. Se já tiver outros servidores dentro de `mcpServers`, acrescente só a entrada `figma-console` ao lado deles.

```json
{
  "mcpServers": {
    "figma-console": {
      "command": "npx",
      "args": ["-y", "figma-console-mcp@1.35.0"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "COLE_SEU_TOKEN_AQUI",
        "ENABLE_MCP_APPS": "true"
      }
    }
  }
}
```

Troque `COLE_SEU_TOKEN_AQUI` pelo seu token, mantendo as aspas. Salve, feche o Claude por completo e abra de novo. A versão fica fixada em `1.35.0` de propósito: não troque por `@latest`.

### Passo 4. Ligar e testar

No Figma Desktop: Plugins > Development > Import plugin from manifest. Escolha o arquivo que o instalador mostrou (o caminho já está copiado):

- Mac: `~/.figma-console-mcp/plugin/manifest.json`
- Windows: `%USERPROFILE%\.figma-console-mcp\plugin\manifest.json`

No Mac a pasta começa com ponto e fica escondida. Na janela de escolher arquivo, aperte Cmd+Shift+G e cole o caminho.

Rode o plugin **Figma Desktop Bridge** e deixe a janela dele aberta até o fim.

No Claude, abra uma conversa nova e mande:

```
Verifique o status da conexão com o Figma
```

Deu certo quando o Claude confirma a conexão e diz o nome do arquivo aberto. Aparecer numa lista não conta como teste.

Conectou? Vá para a Parte A. A Parte B começa às 18h55 para todo mundo.


## 3. Parte A: sua tela no Claude, sem instalar nada (18h25 às 18h50)

Funciona no app do Claude ou no navegador (claude.ai), no Figma Desktop ou no Figma do navegador.

A conta gratuita do Claude tem limite de mensagens. Os dois prompts são curtos de propósito: mande cada um uma vez e leia com calma antes de pedir mais.

### A1. Exportar a tela (5 min)

1. No Figma, clique no nome do frame que você quer (a "Tela demo" ou uma tela sua) para selecionar o frame inteiro.
2. No painel da direita, em **Export**, clique no **+**. Deixe **PNG** e escolha **2x**.
3. Clique em **Export** e salve a imagem.

### A2. A revisão de dev (8 min)

Abra uma conversa nova no Claude, anexe a imagem (clipe ou arraste) e mande:

```
Esta é uma tela que eu desenhei no Figma. Revise como um dev revisaria antes de construir. Liste no máximo 8 pontos, do mais grave para o menos grave, olhando: estados que faltam (erro, carregando, vazio, desabilitado, foco), espaçamento sem padrão, texto sem padrão (tamanho, peso, caixa) e acessibilidade (contraste, área de toque, rótulos). Para cada ponto: o que é, onde está na tela e o que eu decido no Figma. Sem código.
```

Leia a lista. Você decide o que procede: a IA aponta, quem conhece a tela é você.

### A3. O protótipo navegável (10 min)

Na mesma conversa, mande:

```
Agora monte um protótipo navegável desta tela em HTML, um arquivo só, e mostre funcionando aqui na conversa. Os campos aceitam digitação, o botão tem hover e foco visível, campo obrigatório vazio mostra mensagem de erro e o envio leva a uma tela de sucesso. Copie o layout, as cores e os textos da imagem e já aplique as correções da lista acima.
```

O protótipo aparece no próprio Claude. Clique, digite, tente enviar vazio. Se aparecer só o código, mande: `Mostre o protótipo funcionando aqui na conversa.`

### A4. Olhar com olho de designer (2 min)

Compare o protótipo com a sua tela no Figma. Alguma cor, espaçamento ou tamanho de texto ficou parecido, mas não igual? Guarde isso para os próximos cinco minutos.


## 4. Imagem ou arquivo: a diferença (18h50 às 18h55)

Na Parte A, o Claude só tinha pixels. A cor e o espaçamento do protótipo são estimativa: ele olhou a imagem e chutou um valor próximo. Para conversar sobre a tela, serve. Para construir, não: o dev precisa saber que aquela cor é `color/brand-primary` e que aquele espaço é `space/3`, porque é isso que vira código e é isso que muda junto quando o design system muda.

Na Parte B, o Claude lê o arquivo conectado. Ele não adivinha: devolve o nome da camada, o nome do token e o valor que está no Figma.


## 5. Parte B: o Figma conectado (18h55 às 19h23)

Use a conversa em que você testou a conexão, ou abra uma nova. Cole cada prompt na mesma conversa, na ordem. Não conectou? Siga em dupla com quem conectou ou acompanhe um voluntário.

### B1. Ler o frame real (3 min)

```
Leia o frame "Tela demo" deste arquivo Figma via MCP. Devolva a árvore de camadas, os componentes e os tokens (variáveis) aplicados. Descreva estrutura e semântica, não pixels.
```

### B2. Tokens (3 min)

```
Exporte as variáveis deste arquivo como tokens: nome, valor, tipo (cor / espaçamento / tipografia) e coleção. Depois aponte quais valores aparecem na tela demo como número cru, sem referência a token.
```

Voltou sem nenhum token? É cache frio logo depois de conectar. Peça de novo na mesma conversa.

### B3. Auditar (4 min)

```
Audite a tela demo contra o design system deste arquivo. Considere SOMENTE a página "01 Comece aqui"; não leia a página de gabarito. Para cada inconsistência: o elemento, o que está errado, qual token ou regra foi violada, e severidade (bloqueia acessibilidade / quebra consistência / cosmético). Onde houver texto sobre fundo, avalie o contraste.
```

A tela tem seis defeitos plantados. Compare com a revisão da Parte A: agora cada achado vem com o nome do token que foi violado. Quem decide o que importa continua sendo você.

### B4. Gerar o componente (6 min)

```
Gere um componente Card em HTML e CSS puros: sem JavaScript, sem libs, sem Tailwind.
Antes de gerar, leia o frame "Tela demo" deste arquivo Figma via MCP e use os tokens (cor, espaçamento, tipografia, raio) de lá. Não invente valores; puxe do Figma.
FORMATO OBRIGATÓRIO: dois blocos de código, o primeiro com o arquivo Card.html e o segundo com o arquivo Card.css. O Card.html é uma página completa, em pt-BR, que carrega tokens.css e Card.css com <link> (nesta ordem) e mostra dois cards: um normal e um no estado disabled. Use exatamente estas classes: card, card__body, card__title, card__description, card__action e card--disabled. O título é um h3 e a ação é um <button type="button">Ver detalhes</button>. O Card.css tem hover, focus-visible de 2px, alvo mínimo de 44px e contraste AA. Todo estilo vem de variável CSS com o MESMO nome do token do Figma (ex: var(--color-brand-primary)), sem hex cru, e ao lado de cada uma um comentário com o valor que veio do frame (ex: /* #C8352B, do frame */). No fim, fora dos blocos, liste em 3 linhas: qual token você usou pra cor do botão, pro tamanho do título e pro espaçamento interno.
```

### B5. Conferir a fonte (3 min)

```
Leia de novo o frame "Tela demo" via MCP e me devolva SÓ uma tabela com três linhas, uma por propriedade: cor do botão, tamanho do título e espaçamento interno. Para cada uma: o nome do token no Figma e o valor. Não comente o meu código ainda, não diga se está certo. Só a fonte.
```

Compare a tabela com as 3 linhas do fim do B4. Você confere, não a IA. Se algo não bater, mande:

```
Consulte de novo o frame "Tela demo" via MCP. Esta propriedade no meu código não bate com o frame: [DIGA QUAL]. Explique a diferença e ajuste SÓ ela, usando o token certo do frame. Preserve o resto. Não reescreva o componente.
```

Pode não haver divergência nenhuma, e está certo assim.

### B6. Exportar para a pasta (7 min)

Este passo existe para você sair com arquivo, não só com conversa. Faça antes de revogar o token, porque o prompt ainda lê o Figma.

```
Leia de novo as variáveis da coleção Workshop Tokens deste arquivo Figma via MCP e devolva todas como UM arquivo JSON no formato W3C Design Tokens (DTCG), que o Style Dictionary lê direto.
FORMATO OBRIGATÓRIO: JSON válido, sem comentário. A primeira parte do nome da variável no Figma vira o grupo e o resto vira a chave (ex: color/brand-primary vira {"color": {"brand-primary": {...}}}). Cada token tem só "$value" e "$type". $type é um destes: color, dimension, fontWeight, number. Cor em hex. Medida como texto com px (ex: "8px"). Peso de fonte e altura de linha como número. Não invente token nem valor: só o que existe na coleção, com o valor do Figma. No fim do JSON, fora do bloco, diga em 1 linha quantos tokens exportou. Devolva só o bloco de código e essa linha.
```

Confira duas coisas: a contagem (a coleção tem 23 variáveis) e se toda medida veio com `px`, como `"24px"`. Número solto, como `24`, vira `24rem` na conversão do workshop do Mateus. Se vier assim, mande: `Refaça o JSON com todas as medidas como texto com px.`

**Salvar na pasta.** O Claude Desktop gratuito não grava arquivo no seu computador. Você copia e cola:

1. Em cada bloco de código, clique no botão de copiar.
2. Abra o arquivo correspondente da pasta `fora-do-frame` num editor de texto, apague o que tiver e cole.
   - Bloco do B6 vai para `tokens.json`.
   - Primeiro bloco do B4 (ou da correção do B5) vai para `Card.html`.
   - Segundo bloco do B4 (ou da correção do B5) vai para `Card.css`.
3. Salve como texto puro.
   - VS Code ou outro editor de código: é só salvar.
   - Mac, TextEdit: antes de colar, Formatar > Converter em Texto Simples.
   - Windows, Bloco de Notas: em Salvar como, escolha "Todos os arquivos" e codificação UTF-8, para não virar `Card.html.txt`.

Sem a pasta-modelo? Crie os três arquivos com esses nomes exatos dentro de `fora-do-frame`.

O `Card.html` ainda vai abrir sem cor nem espaçamento. Isso é esperado: ele carrega um `tokens.css` que ainda não existe. Às 20h, no workshop do Mateus, o Style Dictionary transforma o seu `tokens.json` nesse `tokens.css`. Quer ver o card agora? Copie o `handoff/tokens.css` do repositório para dentro da pasta.

Não terminou, fez só a Parte A, bateu no limite da conta gratuita ou o JSON veio estranho? Use a rede de segurança: a pasta `handoff/` do repositório tem `tokens.json`, `tokens.css`, `Card.html` e `Card.css` prontos e testados. Você chega no workshop do Mateus do mesmo ponto que todo mundo.

### B7. Revogar o token (2 min)

No Figma: Settings > Security > Personal access tokens > Revoke.

Não é opcional e não tem corte. Depois, se quiser, tire a entrada `figma-console` do `claude_desktop_config.json`.


## 6. Se você já usa Claude Code

O Claude Code faz a mesma conexão e pede plano pago do Claude. Se você já tem, pode usar no lugar do Claude Desktop na Parte B. O resto (token, plugin, prompts) é igual.

No passo 3 do setup, em vez de editar o config, rode no terminal, trocando o token:

```
claude mcp add figma-console -s user -e FIGMA_ACCESS_TOKEN=COLE_SEU_TOKEN_AQUI -e ENABLE_MCP_APPS=true -- npx -y figma-console-mcp@1.35.0
```

Depois abra uma sessão com `claude` antes de importar o plugin: é esse primeiro boot que cria a pasta `~/.figma-console-mcp/plugin`.

No B4 e no B6, o Claude Code grava arquivo direto. Abra o `claude` dentro da sua pasta `fora-do-frame` e acrescente ao fim do prompt: `Salve em Card.html e Card.css` (no B4) e `Salve o resultado em tokens.json` (no B6).

No fim, além de revogar o token: `claude mcp remove figma-console -s user`.


## 7. Quando dá errado

| Sintoma | O que fazer |
|---|---|
| Não acho o Export no Figma | Selecione o frame clicando no nome dele, em cima da tela. O Export fica no fim do painel da direita |
| O Claude não aceita a imagem | Confira se é PNG ou JPG. Arraste o arquivo para a caixa de mensagem |
| O protótipo veio só como código | Mande: `Mostre o protótipo funcionando aqui na conversa.` |
| O status não conecta | O plugin Bridge precisa estar rodando no Figma Desktop com o arquivo aberto. Ele cai se o Figma dormir ou o arquivo fechar. Rode o plugin de novo |
| A pasta do plugin não existe | O Claude ainda não abriu com o config salvo. Feche o Claude por completo, abra, espere subir e só então importe |
| `npx` não encontrado | Node não instalado ou abaixo de 18. Instale, feche e abra o Terminal ou o PowerShell e rode o comando de novo |
| Token recusado ou status sem nome do arquivo | Confira se começa com `figd_` e se não entrou espaço ao colar. Persistiu: gere outro, rode o comando de novo e reabra o Claude |
| Tokens voltam vazios | Cache frio. Peça de novo na mesma conversa |
| Já existe outra conexão de Figma no seu Claude | Desligue durante o workshop, senão o Claude chama a errada |
| VPN, rede corporativa ou antivírus | A ponte usa as portas locais 9223 a 9232. Desligue a VPN |
| A IA inventou nome de token ou cor | Ela não leu o frame antes de gerar. Peça a leitura de novo. É a lição do workshop inteiro |
| Limite da conta gratuita | Siga em dupla com quem ainda tem uso e pegue os arquivos em `handoff/` |


## 8. Limites, sem maquiar

- O protótipo da Parte A é aproximação: serve para testar a ideia e conversar com o time, não para entregar valor exato.
- Código gerado por IA não é código de produção. É ponto de partida, e alguém revisa.
- A conexão não substitui design system. Ela lê o que existe. Arquivo bagunçado gera contexto bagunçado.
- Se o Thiago usar no telão um resultado pré-gerado dos ensaios, ele avisa na hora.
