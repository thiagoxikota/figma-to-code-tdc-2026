# Deck de Fortaleza: o que está no PDF, slide a slide

Este arquivo descreve o deck **como ele está** em `fortaleza/deck-fortaleza.pdf`, exportado em 13/11 da cópia Fortaleza no Google Slides. São 21 slides. O deck do TDC original não foi tocado.

**Cópia Fortaleza:** https://docs.google.com/presentation/d/1BCULdnIibjQC0t571Nh77tcL1wnz-PRLkp0gWYTLyhU/edit

**A apresentação é pelo Google Slides, com as notas do apresentador.** O PDF é reserva e não mostra as notas.

Mudou algo no Slides? Exporte o PDF de novo para `fortaleza/deck-fortaleza.pdf` e atualize a tabela abaixo no mesmo commit.


## Regras de todo slide

- Slide de passo traz, no canto de cima à direita, um marcador e, logo abaixo, o horário do corte ("até 18h11"). São quatro marcadores: **FAÇA AGORA** (a sala age), **OLHE O TELÃO** (o Thiago demonstra), **1. OLHE 2. FAÇA** (o Thiago mostra e a sala repete: slides 5, 6, 13 e 18) e **PERGUNTA PARA A SALA** (slide 12).
- Slide de tarefa tem **verbo de tarefa** e **"Deu certo quando..."**.
- Prompt inteiro só no guia. No slide, no máximo a primeira linha.
- Corpo de 24 pt ou mais no PDF de 960 x 540. Rótulo, barra de etapas e legenda em 18 pt. Contraste AA.
- FALA, SALA FAZ, DEMO e ESPERA ficam nas notas do orador, junto com os horários.
- A barra de etapas destaca a etapa atual. Parte A: A1 Exportar · A2 Revisar · A3 Decidir · A4 Protótipo · A5 Testar. Parte B: B1 Ler · B2 Corrigir · B3 Abrir a pasta · B4 Revogar.
- Nada de React, TypeScript, WebSocket, servidor ou MCP no slide. No palco é "a conexão com o Figma", e o aplicativo é "Claude Desktop".
- "Chave do Figma" é o personal access token. "Tokens de design" são os valores com nome. As duas coisas nunca aparecem só como "token".
- Nunca chamar `#C8352B` de cor errada. O valor é igual ao do token; o que falta é o vínculo.
- A palavra "prova" não aparece em slide nenhum. O slide 12 se chama "Uma leitura que não está no guia".
- O slide 2 não traz valor nenhum da Tela demo: a decisão aparece como modelo, "Vou corrigir [ponto] porque [evidência]".
- Texto de apoio e campo nome não aparecem antes do B1. O slide 14 mostra só as perguntas; os valores estão no slide 15, "Confira", que entra depois da resposta.
- A promessa tem duas partes e o slide 2 separa as duas: garantido (a decisão escrita e a pasta `handoff/` conferida) e o que depende da conta gratuita do Claude (o formulário corrigido). A origem do valor da decisão tem três estados, escritos no slide 2: "conferido no meu Figma", "visto no Figma do telão" ou "comparação pendente".
- O B1 é no telão, para todo mundo. Nenhum slide manda formar grupo nem mudar de lugar.
- A correção do B2 é "um valor copiado do Figma". Nenhum slide diz que o protótipo ficou ligado ao Figma.
- Imagem que não saiu de uma execução real leva a legenda "Exemplo do material". Nenhuma legenda diz "ao vivo".


## A sequência

| # | Horário | Slide | Na tela | Imagem |
|---|---|---|---|---|
| 1 | 18h00 | Capa | Título, evento, nome e cargo | sem imagem |
| 2 | 18h00 | O que você leva hoje | Garantido: 1. a sua decisão, escrita, com o modelo sem valores e os três estados da origem do valor; 2. a pasta handoff/, conferida. Depende da sua conta: 3. o seu formulário, corrigido | Card do `handoff/` (real) e o formulário com o texto de apoio corrigido (exemplo do material) |
| 3 | 18h00 | Parte A para todos. Parte B de dois jeitos | Parte B no telão para todo mundo, conectado em paralelo, e "ninguém instala nada nem muda de lugar" | sem imagem |
| 4 | 18h00 | Abra o guia no notebook | Link da mensagem do grupo, endereço completo do guia na tag `fortaleza` e QR para o celular | QR do guia na tag |
| 5 | até 18h11 | A1. Exporte a Tela demo | 1. OLHE 2. FAÇA. A legenda avisa do PNG pronto para quem não duplicou o arquivo | Tela demo (real) |
| 6 | até 18h18 | A2. Revise como designer | 1. OLHE 2. FAÇA. Até três sugestões, com VIU ou SUPÔS | espaço reservado: a lista da revisão |
| 7 | até 18h22 | A3. Você decide o que aceita | FAÇA AGORA. Exemplo rotulado: recusa com base no contexto que o prompt dá | sem imagem |
| 8 | até 18h34 | A4. Gere o protótipo | FAÇA AGORA. "O mínimo, mais só o que você aceitou" | formulário preenchido (exemplo do material) |
| 9 | 18h34 até 18h40 | A5. Teste e olhe dois pontos | FAÇA AGORA. Os dois pontos são o texto de apoio e o campo nome, sem valor | o erro e a tela "Conta criada" (exemplos do material) |
| 10 | 18h40 | A tese | OLHE O TELÃO. "A imagem mostra como a tela parece. O arquivo mostra do que ela é feita." | Tela demo (real) |
| 11 | 18h40 | Botão Continuar: valor igual, vínculo nenhum | OLHE O TELÃO. A propriedade conhecida | recorte do botão (real) |
| 12 | 18h44 | Uma leitura que não está no guia | PERGUNTA PARA A SALA. Os cinco passos, começando por "Que propriedade vocês escolhem?" | espaço reservado: o painel do Figma, o pedido e a resposta |
| 13 | 18h51 a 18h59 | Confira a conexão | 1. OLHE 2. FAÇA. No Claude Desktop, uma tentativa. Rodapé: o B1 é no telão, e quem conectou repete na própria máquina e lê para os vizinhos | espaço reservado: o Claude Desktop diz o nome do arquivo |
| 14 | até 19h08 | B1. Leia o arquivo e escolha uma correção | FAÇA AGORA. As três perguntas, sem os valores. "Deu certo quando as três respostas chegaram" | sem imagem |
| 15 | até 19h08 | Confira: o que o arquivo disse | FAÇA AGORA. Os valores, os dois tokens e o pedido da decisão escrita | recortes da Tela demo (reais) |
| 16 | até 19h21 | B2. Aplique a correção no seu formulário | FAÇA AGORA. As duas correções, antes e depois. Rodapé: se o protótipo já estava com o valor do arquivo, o deu certo é "confirmei que já estava" | texto de apoio nas duas cores (feito no slide com os valores reais) e campos antes e depois (exemplo do material) |
| 17 | até 19h30 | B3. Abra a sua pasta handoff/ | FAÇA AGORA. Os três valores a achar; rodapé com a comparação que pede rede e o pendrive | Card do `handoff/` (real), com a legenda "amostra estática, o botão não faz nada" |
| 18 | até 19h36 | B4. Revogue todas as chaves do workshop | 1. OLHE 2. FAÇA | espaço reservado: o Revoke e a lista depois |
| 19 | 19h36 | O antes e o depois | "Qual correção você escolheu, e por quê?" e "Olhe o seu, se gerou" | recorte ampliado só da linha do texto de apoio, antes e depois (exemplo do material) |
| 20 | 19h37 | Os limites | Três limites; o terceiro: o arquivo só diz o que existe nele, e valor digitado direto volta solto | sem imagem |
| 21 | 19h38 | Você sai com a sua decisão, escrita | "Se gerou, também com o formulário corrigido." Às 20h, a pasta handoff/ aberta | formulário com o texto de apoio corrigido (exemplo do material) |


## De onde vem cada imagem

Nenhuma captura foi inventada. As imagens são de três tipos, e a legenda do slide diz qual.

**Reais** (arquivos em `fortaleza/telao/`): a Tela demo exportada do Figma, os recortes dela (botão, texto de apoio, campos) e o Card do `handoff/` aberto no navegador.

**Exemplo do material:** o formulário renderizado de `fortaleza/telao/formulario-exemplo.html`, uma página feita com as medidas e as cores da Tela demo. Não é saída do Claude. Serve para a sala saber o que procurar. São os arquivos `exemplo-form-*.png`, `exemplo-campos-*.png` e `exemplo-texto-*.png`, usados nos slides 2, 8, 9, 16, 19 e 21.

**Espaço reservado** (retângulo tracejado com a legenda "Primeiro, no telão: ..." ou "No telão: ..."). Depende do Figma ou do Claude do Thiago, então só o ensaio dá. A captura entra por cima do retângulo, no mesmo tamanho. Sem ela, o slide continua valendo, porque a legenda diz o que o Thiago mostra naquele momento:

| Slide | Captura do ensaio |
|---|---|
| 6 | A lista da revisão, com VIU ou SUPÔS |
| 12 | O painel do Figma com a propriedade escolhida, o pedido do Claude ao Figma e o retorno. Entra dita como ensaio; o que vale é a leitura feita na sala |
| 13 | A resposta do Claude Desktop com o nome do arquivo |
| 18 | A lista de chaves antes e depois do Revoke, **sem a chave visível** |

**Capturas opcionais,** que trocam uma imagem de exemplo ou entram ao lado de uma real:

| Slide | Captura do ensaio |
|---|---|
| 5 | O frame Tela demo selecionado e o painel Export aberto |
| 8 e 9 | O protótipo do Thiago na conversa, com o erro e a tela "Conta criada" |
| 11 | O botão Continuar selecionado, com o fill sem variável |
| 14 e 15 | A resposta do B1 e a vista Variables com a coleção Workshop Tokens |
| 16 e 19 | O formulário do Thiago antes e depois da correção |
| 17 | A pasta `handoff` aberta no Finder, com os arquivos |


## Notas do orador

Cada slide tem nas notas o horário, a marcação (FALA, SALA FAZ, DEMO, ESPERA) e a fala. O slide 12 traz os cinco passos da leitura e a saída se a conexão falhar. O slide 13 traz a contagem das 18h55, que é só informação, e a fala do B1 no telão. As notas seguem `roteiro.md`; mudou o roteiro, mude as notas.
