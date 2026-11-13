# Guia do participante: Figma MCP em Fortaleza

Workshop do Thiago Xikota no Fora do Frame, uma experiência UXFor. Quarta, 18/11/2026, das 18h00 às 19h40, na Digital College Aldeota, Fortaleza.

Você sai daqui com o Claude conectado ao seu Figma, um componente gerado a partir dos tokens do arquivo e uma pasta com os tokens em JSON e o componente em HTML e CSS. É dessa pasta que o workshop do Mateus Villain parte, às 20h.

Ninguém paga nada: a conta gratuita do Figma e a conta gratuita do Claude servem.


## 1. Antes de quarta (em casa, uns 20 minutos)

### O que instalar

1. **Figma Desktop**, o app, não o navegador. O plugin que faz a ponte só roda nele.
   https://www.figma.com/downloads/

2. **Node.js**, versão LTS (a recomendada no site). É ele que roda o MCP.
   https://nodejs.org/en/download
   Para conferir, abra o Terminal (Mac) ou o PowerShell (Windows) e digite `node -v`. Tem que aparecer v18 ou maior. Se você também vai no workshop do Mateus, prefira 22 ou maior.

3. **Claude Desktop**, o app do Claude. A integração com o MCP não funciona no Claude do navegador.
   https://claude.com/download

### Que contas criar

- **Figma**, conta gratuita: https://www.figma.com/signup
- **Claude**, conta gratuita, criada pelo próprio app.

Entre nas duas contas antes de quarta e deixe o celular por perto: login com código no e-mail ou verificação em duas etapas sem o celular trava na hora.

### O arquivo do exercício

Abra e clique em duplicar para a sua conta:
https://www.figma.com/community/file/1659374868260259462

Dentro dele estão um mini design system (coleção **Workshop Tokens**, 23 variáveis) e a página **"01 Comece aqui"**, com o frame **"Tela demo"**.

### A pasta do workshop

Crie uma pasta chamada `fora-do-frame` na sua área de trabalho. No fim do workshop você vai colar três arquivos nela.

Caminho mais fácil: baixe este repositório em **Code > Download ZIP** (https://github.com/thiagoxikota/figma-to-code-tdc-2026), descompacte e copie a pasta `fortaleza/pasta-modelo` para a área de trabalho com o nome `fora-do-frame`. Ela já vem com os três arquivos vazios no formato certo, e o ZIP traz também a rede de segurança `handoff/`, caso você não termine.

### Leve no dia

- Notebook com macOS ou Windows, com permissão para instalar programa. Linux não roda esse fluxo: você faz em dupla.
- Carregador.
- Celular.


## 2. Na sala: setup guiado (18h17 às 18h47)

São quatro passos. O Thiago chama um de cada vez no telão. Travou? Pare de repetir e chame um voluntário. Não resolveu rápido: sente em dupla com quem já conectou e siga junto.

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

O token começa com `figd_` e **aparece uma vez só** no Figma. Copie na hora. Ele é seu: não mande para ninguém nem deixe voluntário digitar por você.

Quando terminar, **feche o Claude por completo e abra de novo**. No Mac é Cmd+Q. No Windows, saia também pelo ícone perto do relógio, não só pelo X. O MCP só carrega quando o app abre.

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

Deu certo quando o Claude confirma a conexão e diz o nome do arquivo aberto. O MCP aparecer numa lista não conta como teste.


## 3. Na sala: o exercício (18h47 às 19h20)

Cole cada prompt numa mesma conversa, na ordem. Tudo roda dentro do Claude.

### 1. Ler (3 min)

```
Leia o frame "Tela demo" deste arquivo Figma via MCP. Devolva a árvore de camadas, os componentes e os tokens (variáveis) aplicados. Descreva estrutura e semântica, não pixels.
```

### 2. Tokens (3 min)

```
Exporte as variáveis deste arquivo como tokens: nome, valor, tipo (cor / espaçamento / tipografia) e coleção. Depois aponte quais valores aparecem na tela demo como número cru, sem referência a token.
```

Voltou sem nenhum token? É cache frio logo depois de conectar. Peça de novo na mesma conversa.

### 3. Auditar (3 min)

```
Audite a tela demo contra o design system deste arquivo. Considere SOMENTE a página "01 Comece aqui"; não leia a página de gabarito. Para cada inconsistência: o elemento, o que está errado, qual token ou regra foi violada, e severidade (bloqueia acessibilidade / quebra consistência / cosmético). Onde houver texto sobre fundo, avalie o contraste.
```

A tela tem seis defeitos plantados. A IA acha. Quem decide o que importa é você.

### 4. Gerar (5 min)

```
Gere um componente Card em React + TypeScript, function component. Props tipadas: title, description, imageUrl?, onClick?. Estados default, hover, focus-visible e disabled. Acessibilidade: article, heading por prop, foco visível de 2px, alvo mínimo de 44px, contraste AA.
Antes de gerar, leia o frame "Tela demo" deste arquivo Figma via MCP e use os tokens (cor, espaçamento, tipografia, raio) e a estrutura de lá. Não invente valores; puxe do Figma.
FORMATO OBRIGATÓRIO (pra eu conseguir auditar o que você fez): um arquivo só, sem libs externas, SEM Tailwind e sem classe utilitária. Todo estilo vem de variável CSS com o MESMO nome do token do Figma (ex: var(--color-brand-primary)), e ao lado de cada uma um comentário com o valor que veio do frame (ex: /* #C8352B, do frame */). No fim, liste em 3 linhas: qual token você usou pra cor do botão, pro tamanho do título e pro espaçamento interno. Devolva só o código e essas 3 linhas.
```

### 5. Inspecionar (3 min)

```
Leia de novo o frame "Tela demo" via MCP e me devolva SÓ uma tabela com três linhas, uma por propriedade: cor do botão, tamanho do título e espaçamento interno. Para cada uma: o nome do token no Figma e o valor. Não comente o meu código ainda, não diga se está certo. Só a fonte.
```

Compare a tabela com o código do passo 4. Você confere, não a IA.

### 6. Corrigir, se houver o que corrigir (3 min)

```
Consulte de novo o frame "Tela demo" via MCP. Esta propriedade no meu código não bate com o frame: [DIGA QUAL]. Explique a diferença e ajuste SÓ ela, usando o token certo do frame. Preserve o resto. Não reescreva o componente.
```

Pode não haver divergência nenhuma, e está certo assim.

### 7. Exportar: leve tokens e componente pro código (10 min)

Este passo existe para você sair com arquivo, não só com conversa. São dois prompts e um momento de copiar e colar. Faça antes de revogar o token, porque o primeiro prompt ainda lê o Figma.

**7a. Tokens em JSON**

```
Leia de novo as variáveis da coleção Workshop Tokens deste arquivo Figma via MCP e devolva todas como UM arquivo JSON no formato W3C Design Tokens (DTCG), que o Style Dictionary lê direto.
FORMATO OBRIGATÓRIO: JSON válido, sem comentário. A primeira parte do nome da variável no Figma vira o grupo e o resto vira a chave (ex: color/brand-primary vira {"color": {"brand-primary": {...}}}). Cada token tem só "$value" e "$type". $type é um destes: color, dimension, fontWeight, number. Cor em hex. Medida como texto com px (ex: "8px"). Peso de fonte e altura de linha como número. Não invente token nem valor: só o que existe na coleção, com o valor do Figma. No fim do JSON, fora do bloco, diga em 1 linha quantos tokens exportou. Devolva só o bloco de código e essa linha.
```

Confira duas coisas: a contagem (a coleção tem 23 variáveis) e se toda medida veio com `px`, como `"24px"`. Número solto, como `24`, vira `24rem` na conversão do workshop do Mateus. Se vier assim, mande: `Refaça o JSON com todas as medidas como texto com px.`

**7b. Card em HTML e CSS**

```
Converta o Card que corrigimos nesta conversa para HTML e CSS puros: sem React, sem JavaScript, sem libs, sem Tailwind.
FORMATO OBRIGATÓRIO: dois blocos de código, o primeiro com o arquivo Card.html e o segundo com o arquivo Card.css. O Card.html é uma página completa, em pt-BR, que carrega tokens.css e Card.css com <link> (nesta ordem) e mostra dois cards: um normal e um no estado disabled. Use exatamente estas classes: card, card__body, card__title, card__description, card__action e card--disabled. O título é um h3 e a ação é um <button type="button">Ver detalhes</button>. O Card.css usa só as variáveis CSS com o nome do token do Figma que você já usou no componente, sem hex cru, e mantém hover, focus-visible e disabled. Não mude nenhum valor do componente. Devolva só os dois blocos.
```

**7c. Salvar na pasta**

O Claude Desktop gratuito não grava arquivo no seu computador. Você copia e cola:

1. Em cada bloco de código da resposta, clique no botão de copiar.
2. Abra o arquivo correspondente da pasta `fora-do-frame` num editor de texto, apague o que tiver e cole.
   - Bloco do 7a vai para `tokens.json`.
   - Primeiro bloco do 7b vai para `Card.html`.
   - Segundo bloco do 7b vai para `Card.css`.
3. Salve como texto puro.
   - VS Code ou outro editor de código: é só salvar.
   - Mac, TextEdit: antes de colar, Formatar > Converter em Texto Simples.
   - Windows, Bloco de Notas: em Salvar como, escolha "Todos os arquivos" e codificação UTF-8, para não virar `Card.html.txt`.

Sem a pasta-modelo? Crie os três arquivos com esses nomes exatos dentro de `fora-do-frame`.

O `Card.html` ainda vai abrir sem cor nem espaçamento. Isso é esperado: ele carrega um `tokens.css` que ainda não existe. Às 20h, no workshop do Mateus, o Style Dictionary transforma o seu `tokens.json` nesse `tokens.css`. Quer ver o card agora? Copie o `handoff/tokens.css` do repositório para dentro da pasta.

Não terminou, bateu no limite da conta gratuita ou o JSON veio estranho? Use a rede de segurança: a pasta `handoff/` do repositório tem `tokens.json`, `tokens.css`, `Card.html` e `Card.css` prontos e testados. Você chega no workshop do Mateus do mesmo ponto que todo mundo.

### 8. Revogar o token (3 min)

No Figma: Settings > Security > Personal access tokens > Revoke.

Não é opcional e não tem corte. Depois, se quiser, tire a entrada `figma-console` do `claude_desktop_config.json`.


## 4. Se você já usa Claude Code

O Claude Code roda o mesmo MCP e pede plano pago do Claude. Se você já tem, pode usar no lugar do Claude Desktop. O resto (token, plugin, prompts) é igual.

No passo 3, em vez de editar o config, rode no terminal, trocando o token:

```
claude mcp add figma-console -s user -e FIGMA_ACCESS_TOKEN=COLE_SEU_TOKEN_AQUI -e ENABLE_MCP_APPS=true -- npx -y figma-console-mcp@1.35.0
```

Depois abra uma sessão com `claude` antes de importar o plugin: é esse primeiro boot que cria a pasta `~/.figma-console-mcp/plugin`.

No passo 7, o Claude Code grava arquivo direto. Abra o `claude` dentro da sua pasta `fora-do-frame` e acrescente ao fim de cada prompt: `Salve o resultado em tokens.json` (no 7a) e `Salve em Card.html e Card.css` (no 7b).

No fim, além de revogar o token: `claude mcp remove figma-console -s user`.


## 5. Quando dá errado

| Sintoma | O que fazer |
|---|---|
| O status não conecta | O plugin Bridge precisa estar rodando no Figma Desktop com o arquivo aberto. Ele cai se o Figma dormir ou o arquivo fechar. Rode o plugin de novo |
| A pasta do plugin não existe | O Claude ainda não abriu com o config salvo. Feche o Claude por completo, abra, espere subir e só então importe |
| `npx` não encontrado | Node não instalado ou abaixo de 18. Instale, feche e abra o Claude de novo |
| Token recusado ou status sem nome do arquivo | Confira se começa com `figd_` e se não entrou espaço ao colar. Persistiu: gere outro, cole no config e reabra o Claude |
| Tokens voltam vazios | Cache frio. Peça de novo na mesma conversa |
| Já existe outro MCP de Figma no seu Claude | Desligue durante o workshop, senão o Claude chama o errado |
| VPN, rede corporativa ou antivírus | A ponte usa as portas locais 9223 a 9232. Desligue a VPN |
| A IA inventou nome de token ou cor | Ela não leu o frame antes de gerar. Peça a leitura de novo. É a lição do workshop inteiro |
| Limite da conta gratuita | Siga em dupla com quem ainda tem uso e pegue os arquivos em `handoff/` |


## 6. Limites, sem maquiar

- Código gerado por IA não é código de produção. É ponto de partida, e você revisa.
- O MCP não substitui design system. Ele lê o que existe. Arquivo bagunçado gera contexto bagunçado.
- Se o Thiago usar no telão um resultado pré-gerado dos ensaios, ele avisa na hora.
