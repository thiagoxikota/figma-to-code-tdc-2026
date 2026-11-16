# Guia do participante: Seu Figma vira produto

Design com IA, do arquivo ao protótipo que funciona. Workshop do Thiago Xikota no Fora do Frame, uma experiência UXFor. Quarta, 18/11/2026, das 18h00 às 19h40, na Digital College Aldeota, Fortaleza.

É para designer. Você não precisa saber programar. Precisa só preparar o notebook em casa, antes de quarta: é lá que você conecta o Figma ao Claude.


## O que você leva

Você sai com o Figma conectado ao Claude na sua máquina, com o seu formulário funcionando, corrigido com um valor que o seu Claude leu do seu arquivo, e sabendo o que a imagem não mostra.

Todo mundo trabalha na mesma tela: a **Tela demo**, um formulário "Criar sua conta" com problemas colocados de propósito. Cada pessoa faz no próprio notebook, sem dupla.

A conta gratuita do Claude tem limite de mensagens, e ele varia com o dia. Hoje cada pessoa usa umas 7: o teste da conexão, a revisão, o protótipo, até 2 ajustes, a leitura do arquivo e a correção. Mande cada prompt uma vez. Bateu no limite? Acompanhe o resto pelo telão e termine em casa, com os prompts deste guia.


## Preparo obrigatório, em casa, antes de quarta (30 a 45 minutos)

São duas partes. A primeira é rápida. A segunda é a conexão do Figma com o Claude, e é ela que deixa o Claude ler o seu arquivo, em vez de olhar uma imagem.

**Não conseguiu terminar a parte 2?** Chegue às **17h30**: tem uma mesa de instalação com voluntários, antes do workshop. Depois das 18h ninguém mexe em máquina na sala: quem não conectou acompanha a leitura do arquivo pelo telão e faz todo o resto igual.

Notebook da empresa que não deixa instalar programa não serve para a parte 2. Se puder, traga o pessoal.

### Parte 1. Contas, arquivo e pasta (15 minutos)

1. **Conta gratuita do Figma:** https://www.figma.com/signup (prefira a pessoal, não a do trabalho).
2. **Conta gratuita do Claude:** https://claude.ai
3. **Duplique o arquivo do exercício** para a sua conta: https://www.figma.com/community/file/1659374868260259462 . A Tela demo fica na página "01 Comece aqui".
4. **Ligue a opção do protótipo.** No Claude, abra **Settings > Capabilities** e ligue **Cloud code execution and file creation** (em algumas versões o nome é **Create and edit files**). Numa conversa nova, mande:

```
Crie um botão vermelho em HTML e mostre funcionando aqui na conversa.
```

5. **Baixe o ZIP e guarde a pasta `handoff`:** https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza-v3.zip . Descompacte e copie a pasta `handoff` para a Área de Trabalho. Ela é para o workshop do Mateus Villain, às 20h. O ZIP também traz a imagem pronta da tela (`fortaleza/telao/tela-demo.png`), para quem não conseguiu duplicar o arquivo.

Pronto quando: você vê a Tela demo na sua cópia do arquivo, o botão vermelho apareceu na conversa e dá para clicar nele, e a pasta `handoff` está na Área de Trabalho.

Veio só o código do botão? Confira a opção do item 4 e mande de novo, uma vez.

### Parte 2. Conecte o Figma ao Claude (20 a 30 minutos)

O nome técnico disso é MCP, o jeito de o Claude conversar com o Figma. Se um dia você for procurar sobre o assunto, é essa a palavra.

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
npx -y https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza-v3.tar.gz
```

Windows (repare no `.cmd`, que evita o bloqueio de scripts do PowerShell):

```
npx.cmd -y https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza-v3.tar.gz
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

No Claude Desktop, conversa nova:

```
Qual arquivo está aberto no Figma agora? Responda só o nome.
```

Pronto quando: o Claude responde o nome da sua cópia do arquivo. O `[ok]` do instalador não conta como teste. O instalador sugere outra frase para o teste; as duas servem.

Não respondeu? Veja "Quando dá errado", no fim deste guia. Não resolveu? Mesa das 17h30.

### Leve no dia

- Notebook com a parte 1 e a parte 2 prontas, e o carregador.
- Celular (login com código no e-mail trava sem ele).
- A pasta `handoff` na Área de Trabalho.

Este guia no navegador: https://github.com/thiagoxikota/figma-to-code-tdc-2026/blob/fortaleza-v3/fortaleza/guia-participante.md


## No dia

Use duas conversas:

- **A conversa do arquivo**, no Claude Desktop: a do teste da conexão. Ela volta no passo 5.
- **A conversa da imagem**, do passo 2 ao 6. Pode ser no Claude Desktop (mesma conta, sem trocar de app) ou no navegador.

### Teste da conexão (até 18h10)

Figma Desktop com a sua cópia aberta e o plugin Figma Desktop Bridge rodando. No Claude Desktop, na conversa do teste de casa ou numa nova:

```
Qual arquivo está aberto no Figma agora? Responda só o nome.
```

Pronto quando: o Claude diz o nome do arquivo. Não disse? Levante a mão quando o Thiago pedir e siga: a leitura do arquivo você acompanha pelo telão, e todo o resto você faz igual.

### 1. Exporte a tela (até 18h14)

Na sua cópia, clique no nome **Tela demo**, em cima do frame. No painel da direita, lá no fim, em **Export**, clique no **+**, deixe **PNG** em **2x** e exporte.

Não duplicou o arquivo? Use a imagem pronta: `fortaleza/telao/tela-demo.png` no ZIP, ou https://github.com/thiagoxikota/figma-to-code-tdc-2026/blob/fortaleza-v3/fortaleza/telao/tela-demo.png (botão de download).

Pronto quando: você tem a imagem do formulário inteiro, do título ao botão. Saiu só um pedaço? Clique no nome do frame e exporte de novo.

### 2. O Claude revisa, você decide (até 18h21)

Conversa nova, anexe a imagem e mande:

```
Você é um designer sênior revisando esta tela de cadastro. Me dê no máximo 3 sugestões de melhoria, numeradas, cada uma com o motivo em uma linha. Contexto: é a primeira etapa do cadastro e não pede senha.
```

Leia e decida. Anote os números que você aceita e, para cada recusa, uma frase do porquê. A IA aponta, quem conhece a tela é você.

Pronto quando: você tem os números anotados e o motivo de cada recusa.

### 3. A tela vira formulário (até 18h35)

Na mesma conversa, troque `[números]` pelos que você aceitou (ou escreva `nenhuma`) e mande:

```
Crie um protótipo funcional desta tela em HTML, aqui na conversa, o mais fiel possível à imagem. Precisa: dá para digitar nos campos, mostrar erro se tentar continuar com campo vazio e mostrar 'Conta criada' quando der certo. Aplique só as sugestões [números]. Não invente outras mudanças.
```

Teste: Continuar com tudo vazio dá erro; com e-mail e nome preenchidos, aparece "Conta criada".

Veio só código? Peça uma vez: `Mostre o protótipo funcionando aqui na conversa.` Continuou? Confira a opção de Settings > Capabilities.

Pronto quando: o formulário aparece na conversa, aceita digitação, dá erro vazio e mostra "Conta criada".

### 4. Brinque com o formulário (até 18h47)

Peça até 2 ajustes, do jeito que você pediria a um colega. Termine o pedido com "Não mude mais nada." Ideias:

- versão escura;
- mais respiro entre os campos;
- mensagem de erro mais gentil;
- botão desabilitado até preencher;
- animação curta no "Conta criada";
- trocar o vermelho da marca por outra cor e ver o que muda.

Mostre ao vizinho.

Pronto quando: o seu formulário tem a sua cara e ainda funciona.

### 5. Chuta o valor (até 19h05)

**Primeiro, o chute pela imagem.** Na conversa da imagem, a do protótipo, mande:

```
Olhando só a imagem: qual é a cor exata, em hexadecimal, do texto 'Leva menos de um minuto'? Esse texto passa no contraste AA? O campo nome é preenchido ou só tem contorno? Responda em 3 linhas.
```

O Thiago manda o mesmo no telão. Depois a sala chuta. Está perto do limite de mensagens? Pule este e acompanhe o chute do telão: a leitura e a correção valem mais.

**Depois, pergunte ao seu arquivo.** Na conversa do arquivo, no Claude Desktop, com o plugin rodando:

```
Pela conexão com o Figma, leia no arquivo aberto, na Tela demo: a cor do texto 'Leva menos de um minuto' e se ela está ligada a alguma variável; o preenchimento e o contorno do campo nome comparados com o campo de e-mail; se o botão Continuar usa a variável color/brand-primary; e o valor de color/text-muted e color/surface-alt na coleção Workshop Tokens. Responda em 4 linhas curtas, com os valores.
```

O Thiago faz o mesmo no telão, junto com a sala. Compare o que o seu Claude leu com o seu chute.

**Uma leitura que não está em material nenhum.** A sala escolhe uma camada e um valor. O Thiago pergunta no telão e compara com o painel do Figma. Repita na sua conversa do arquivo, trocando o trecho entre colchetes:

```
Pela conexão com o Figma, na Tela demo: [o valor que a sala escolheu]? Responda só o valor.
```

Depois, clique na mesma camada no seu Figma e compare com o painel da direita.

A imagem mostra como a tela parece. O arquivo mostra do que ela é feita.

<details>
<summary>A resposta do arquivo (abra depois do telão)</summary>

- **Texto "Leva menos de um minuto":** `#A29B93` sobre branco, contraste de 2,75 para 1. O AA pede 4,5. A cor certa é o token `color/text-muted`, `#6C665F` (cerca de 5,7 para 1).
- **Campo nome:** só contorno. O padrão do sistema, como no campo de e-mail, é preenchido com `color/surface-alt`, `#F5F3F0`.
- **Botão "Continuar":** `#C8352B`, igual ao token `color/brand-primary`, mas digitado direto, sem ligação. Se a marca mudar, esse botão fica para trás. A imagem não tem como mostrar isso.

</details>

### 6. Corrija com o valor que o seu Claude leu (até 19h20)

Escolha uma correção e mande na **conversa da imagem**, a do protótipo. Troque o trecho entre colchetes pelo valor do seu arquivo.

Campo nome. O valor é o preenchimento do campo de e-mail, que a sua leitura trouxe:

```
No protótipo, deixe o campo nome igual ao campo de e-mail: preenchido com [valor], sem contorno diferente. Não mude mais nada.
```

Texto de apoio. A sua leitura mostrou que o cinza está solto, sem variável. O valor certo é o da variável `color/text-muted`, que o seu Claude acabou de ler. Quer conferir com os olhos? No Figma, **Variables**, na barra da esquerda, coleção Workshop Tokens.

```
No protótipo, troque a cor do texto 'Leva menos de um minuto' para [valor] (é o token color/text-muted do arquivo). Não mude mais nada.
```

Não conectou? Use o valor que o telão mostrou (está na resposta do arquivo, acima).

Compare antes e depois. Mudou mais do que você pediu? Mande uma vez: `Desfaça o resto. Só a mudança que eu pedi.`

Pronto quando: o ponto escolhido mudou, o resto ficou igual, e erro e "Conta criada" continuam funcionando.

É um valor copiado do arquivo agora. O protótipo não fica ligado ao Figma: se o token mudar amanhã, ele não muda sozinho.

### 7. Galeria (até 19h30)

Três ou quatro pessoas mostram o formulário e dizem qual correção fizeram e por quê.

Pronto quando: você sabe dizer em uma frase por que escolheu a sua.

### Revogue a chave do Figma (até 19h35)

Todo mundo que criou chave faz, na sala. No Figma: **Settings > Security > Personal access tokens**. Clique em **Revoke** em todas as chaves que você criou para o workshop e confirme na janela que o Figma abre. Repetiu a instalação e criou mais de uma? Revogue todas.

Pronto quando: nenhuma chave do workshop aparece mais na lista.

Depois, se quiser, desligue também a conexão nas configurações do Claude Desktop. Para usar de novo em casa, crie uma chave nova e rode o instalador outra vez.

### No fim

- O protótipo serve para testar a ideia e conversar com o time. Não é produto pronto.
- Imagem serve para conversar sobre como a tela parece. Para cor, medida e ligação com o design system, vá ao arquivo.
- O arquivo só diz o que existe nele: valor digitado direto volta solto, como o botão de hoje. Numa tela sua, confira antes se as cores e os espaços estão ligados a variáveis. Evite tela de cliente com dado sensível.
- O seu formulário fica no histórico do Claude. Para guardar o arquivo, procure no painel do protótipo a opção de baixar ou copiar o código.

**Às 20h, com o Mateus:** leve a pasta `handoff` da Área de Trabalho. Ela tem um Card e os tokens de design. O seu formulário fica com você, no Claude. O Node que você instalou no preparo serve para a sessão dele.


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
| Não acho o Export | Clique no nome do frame, em cima da tela. O Export fica no fim do painel da direita |
| O Claude não aceita a imagem | Confira se é PNG e arraste para a caixa de mensagem |
| O protótipo veio só como código | Peça uma vez para mostrar funcionando. Depois confira Settings > Capabilities |
| Não acho as variáveis no Figma | Variables, na barra da esquerda. Em versão anterior: nada selecionado, painel da direita, Local variables. Ou a busca de ações (Cmd+K ou Ctrl+K), digitando `variables` |
| Bateu no limite da conta | Acompanhe pelo telão. Em casa, use os prompts deste guia |
| Não tenho a pasta `handoff` | Chame um voluntário: ele copia do pendrive |
