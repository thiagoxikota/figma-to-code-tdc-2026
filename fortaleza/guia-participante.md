# Guia do participante: Seu Figma vira produto

Design com IA, do arquivo ao protótipo que funciona. Workshop do Thiago Xikota no Fora do Frame, uma experiência UXFor. Quarta, 18/11/2026, das 18h00 às 19h40, na Digital College Aldeota, Fortaleza.

É para designer. Você não precisa saber programar e não instala nada.


## O que você leva

Você sai com o seu formulário funcionando, corrigido com um valor que veio do arquivo, e sabendo o que a imagem não mostra.

Todo mundo trabalha na mesma tela: a **Tela demo**, um formulário "Criar sua conta" com problemas colocados de propósito.

A conta gratuita do Claude tem limite de mensagens, e ele varia com o dia. Hoje cada pessoa usa umas 5: a revisão, o protótipo, até 2 ajustes e a correção. Mande cada prompt uma vez. Bateu no limite? Junte com quem está do lado e siga no notebook dele. Você aplica em casa, com os prompts deste guia.


## Preparo, 15 minutos, antes de quarta

1. **Conta gratuita do Figma:** https://www.figma.com/signup (prefira a pessoal, não a do trabalho).
2. **Conta gratuita do Claude:** https://claude.ai
3. **Duplique o arquivo do exercício** para a sua conta: https://www.figma.com/community/file/1659374868260259462 . A Tela demo fica na página "01 Comece aqui".
4. **Ligue a opção do protótipo.** No Claude, abra **Settings > Capabilities** e ligue **Cloud code execution and file creation** (em algumas versões o nome é **Create and edit files**). Numa conversa nova, mande:

```
Crie um botão vermelho em HTML e mostre funcionando aqui na conversa.
```

5. **Baixe o ZIP e guarde a pasta `handoff`:** https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza-v2.zip . Descompacte e copie a pasta `handoff` para a Área de Trabalho. Ela é para o workshop do Mateus Villain, às 20h. O ZIP também traz a imagem pronta da tela (`fortaleza/telao/tela-demo.png`), para quem não conseguiu duplicar o arquivo.

Pronto quando: você vê a Tela demo na sua cópia do arquivo, o botão vermelho apareceu na conversa e dá para clicar nele, e a pasta `handoff` está na Área de Trabalho.

Veio só o código do botão? Confira a opção do item 4 e mande de novo, uma vez. Continuou? Venha mesmo assim: você acompanha o vizinho.

**Leve:** notebook, carregador e celular (login com código no e-mail trava sem ele).

Este guia no navegador: https://github.com/thiagoxikota/figma-to-code-tdc-2026/blob/fortaleza-v2/fortaleza/guia-participante.md


## Os 7 passos

Funciona no Claude do navegador ou no app, e no Figma do navegador ou no app. Faça tudo na mesma conversa, do passo 2 ao 6.

### 1. Exporte a tela (até 18h10)

Na sua cópia, clique no nome **Tela demo**, em cima do frame. No painel da direita, lá no fim, em **Export**, clique no **+**, deixe **PNG** em **2x** e exporte.

Não duplicou o arquivo? Use a imagem pronta: `fortaleza/telao/tela-demo.png` no ZIP, ou https://github.com/thiagoxikota/figma-to-code-tdc-2026/blob/fortaleza-v2/fortaleza/telao/tela-demo.png (botão de download).

Pronto quando: você tem a imagem do formulário inteiro, do título ao botão. Saiu só um pedaço? Clique no nome do frame e exporte de novo.

### 2. O Claude revisa, você decide (até 18h18)

Conversa nova no Claude, anexe a imagem e mande:

```
Você é um designer sênior revisando esta tela de cadastro. Me dê no máximo 3 sugestões de melhoria, numeradas, cada uma com o motivo em uma linha. Contexto: é a primeira etapa do cadastro e não pede senha.
```

Leia e decida. Anote os números que você aceita e, para cada recusa, uma frase do porquê. A IA aponta, quem conhece a tela é você.

Pronto quando: você tem os números anotados e o motivo de cada recusa.

### 3. A tela vira formulário (até 18h33)

Na mesma conversa, troque `[números]` pelos que você aceitou (ou escreva `nenhuma`) e mande:

```
Crie um protótipo funcional desta tela em HTML, aqui na conversa, o mais fiel possível à imagem. Precisa: dá para digitar nos campos, mostrar erro se tentar continuar com campo vazio e mostrar 'Conta criada' quando der certo. Aplique só as sugestões [números]. Não invente outras mudanças.
```

Teste: Continuar com tudo vazio dá erro; com e-mail e nome preenchidos, aparece "Conta criada".

Veio só código? Peça uma vez: `Mostre o protótipo funcionando aqui na conversa.` Continuou? Confira a opção de Settings > Capabilities e siga no notebook do vizinho.

Pronto quando: o formulário aparece na conversa, aceita digitação, dá erro vazio e mostra "Conta criada".

### 4. Brinque com o formulário (até 18h48)

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

O Thiago manda no telão, para o Claude que só vê a imagem:

```
Olhando só a imagem: qual é a cor exata, em hexadecimal, do texto 'Leva menos de um minuto'? Esse texto passa no contraste AA? O campo nome é preenchido ou só tem contorno? Responda em 3 linhas.
```

Quer mandar na sua conversa também? Só se ainda tiver folga de mensagens: a correção do passo 6 vale mais.

A sala chuta também. Depois o Thiago abre o arquivo pela conexão entre o Claude Desktop e o Figma, no telão, e o arquivo responde. Em seguida, a sala escolhe uma camada e um valor que não está em material nenhum, e o Claude lê do arquivo enquanto vocês comparam com o painel do Figma.

A imagem mostra como a tela parece. O arquivo mostra do que ela é feita.

<details>
<summary>A resposta do arquivo (abra depois do telão)</summary>

- **Texto "Leva menos de um minuto":** `#A29B93` sobre branco, contraste de 2,75 para 1. O AA pede 4,5. A cor certa é o token `color/text-muted`, `#6C665F` (cerca de 5,7 para 1).
- **Campo nome:** só contorno. O padrão do sistema, como no campo de e-mail, é preenchido com `color/surface-alt`, `#F5F3F0`.
- **Botão "Continuar":** `#C8352B`, igual ao token `color/brand-primary`, mas digitado direto, sem ligação. Se a marca mudar, esse botão fica para trás. A imagem não tem como mostrar isso.

</details>

### 6. Corrija com o valor do arquivo (até 19h20)

Escolha uma correção e mande na mesma conversa. Não precisa de conexão: o valor você já tem.

Texto de apoio:

```
No protótipo, troque a cor do texto 'Leva menos de um minuto' para #6C665F (é o token color/text-muted do arquivo). Não mude mais nada.
```

Campo nome:

```
No protótipo, deixe o campo nome igual ao campo de e-mail: preenchido com #F5F3F0 (token color/surface-alt), sem contorno diferente. Não mude mais nada.
```

Compare antes e depois. Mudou mais do que você pediu? Mande uma vez: `Desfaça o resto. Só a mudança que eu pedi.`

Pronto quando: o ponto escolhido mudou, o resto ficou igual, e erro e "Conta criada" continuam funcionando.

É um valor copiado do arquivo agora. O protótipo não fica ligado ao Figma: se o token mudar amanhã, ele não muda sozinho.

### 7. Galeria (até 19h32)

Três ou quatro pessoas mostram o formulário e dizem qual correção fizeram e por quê.

Pronto quando: você sabe dizer em uma frase por que escolheu a sua.

### No fim

- O protótipo serve para testar a ideia e conversar com o time. Não é produto pronto.
- Imagem serve para conversar sobre como a tela parece. Para cor, medida e ligação com o design system, vá ao arquivo.
- O arquivo só diz o que existe nele: valor digitado direto volta solto, como o botão de hoje.
- O seu formulário fica no histórico do Claude. Para guardar o arquivo, procure no painel do protótipo a opção de baixar ou copiar o código.

**Às 20h, com o Mateus:** leve a pasta `handoff` da Área de Trabalho. Ela tem um Card e os tokens de design. O seu formulário fica com você, no Claude.


## Quando dá errado

| Sintoma | O que fazer |
|---|---|
| Não acho o Export | Clique no nome do frame, em cima da tela. O Export fica no fim do painel da direita |
| O Claude não aceita a imagem | Confira se é PNG e arraste para a caixa de mensagem |
| O protótipo veio só como código | Peça uma vez para mostrar funcionando. Depois confira Settings > Capabilities |
| Bateu no limite da conta | Junte com o vizinho e siga no notebook dele. Em casa, use os prompts deste guia |
| Não tenho a pasta `handoff` | Chame um voluntário: ele copia do pendrive |


---

# Bônus para casa: o Claude lendo o seu Figma

É o que o Thiago mostrou no telão: o Claude Desktop lendo o arquivo do Figma, em vez de olhar uma imagem. Faça em casa, com calma: uns 30 minutos. Os passos têm as diferenças do Windows indicadas, mas foram ensaiados só no Mac. Notebook da empresa que não deixa instalar programa não serve.

**1. Instale três programas.**

- **Figma Desktop:** https://www.figma.com/downloads/
- **Claude Desktop:** https://claude.com/download
- **Node.js** versão LTS: https://nodejs.org/en/download . Ele só roda o instalador e a conexão. Confira no Terminal (Mac) ou no PowerShell (Windows) com `node -v`: tem que aparecer v18 ou maior.

**2. Rode o instalador.** Com o Figma Desktop e o Claude Desktop abertos e logados, cole no Terminal e aperte Enter:

Mac:

```
npx -y https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza-v2.tar.gz
```

Windows (com `.cmd`, que evita o bloqueio de scripts do PowerShell):

```
npx.cmd -y https://github.com/thiagoxikota/figma-to-code-tdc-2026/archive/refs/tags/fortaleza-v2.tar.gz
```

O comando não baixou? Na pasta do ZIP, rode `node scripts/instalar.mjs`. Faz a mesma coisa.

O instalador abre as configurações do Figma para você criar a **chave do Figma** (o Figma chama de personal access token): **Security > Personal access tokens > Generate new token**, validade de **7 dias** e só leitura em **File content**. Ela começa com `figd_` e aparece uma vez só: copie e cole no campo do instalador. A chave é sua: não mande para ninguém. Ela lê qualquer arquivo que a sua conta abre, por isso a conta pessoal.

Se ele avisar que já existe uma conexão com o mesmo nome, ele só substitui se você digitar `sim`. Na dúvida, aperte Enter: nada muda. No fim ele mostra o caminho do plugin e deixa copiado.

**3. Ligue o plugin e teste.**

1. Feche o Claude Desktop por completo e abra de novo (Mac: Cmd+Q; Windows: saia também pelo ícone perto do relógio).
2. No Figma Desktop, abra a sua cópia do arquivo. Menu **Plugins > Development > Import plugin from manifest** e aponte o `manifest.json` do caminho que o instalador mostrou. No Mac, na janela de escolher arquivo, aperte Cmd+Shift+G e cole o caminho. No Windows, cole no campo **Nome do arquivo** e clique em **Abrir**.
3. Rode o plugin **Figma Desktop Bridge** e deixe a janela dele aberta.
4. No Claude Desktop, conversa nova:

```
Verifique o status da conexão com o Figma
```

Pronto quando: o Claude diz o nome do arquivo aberto no Figma. Não disse? Confira se o plugin está rodando (ele cai se o Figma dormir) e desligue a VPN.

**4. Repita o jogo.**

```
Leia no Figma conectado o frame "Tela demo" da página "01 Comece aqui". Qual é a cor do texto "Leva menos de um minuto" e o contraste dela com o fundo? O campo nome é preenchido ou só tem contorno, comparado ao campo de e-mail?
```

Depois, troque pela sua tela. Antes, confira se as cores e os espaços dela estão ligados a variáveis: o que estiver digitado direto volta solto. Evite tela de cliente com dado sensível.

**5. Revogue a chave quando terminar.** No Figma: **Settings > Security > Personal access tokens**, clique em **Revoke** em todas as chaves que você criou para isso e confirme. Pronto quando: nenhuma delas aparece mais na lista. Se quiser, desligue também a conexão nas configurações do Claude Desktop.
