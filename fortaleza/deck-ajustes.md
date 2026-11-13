# Deck de Fortaleza: o que está no PDF, slide a slide

Este arquivo descreve o deck **como ele está** em `fortaleza/deck-fortaleza.pdf`, exportado em 13/11 da cópia Fortaleza no Google Slides. São 22 slides. O deck do TDC original não foi tocado.

**Cópia Fortaleza:** https://docs.google.com/presentation/d/1BCULdnIibjQC0t571Nh77tcL1wnz-PRLkp0gWYTLyhU/edit

Mudou algo no Slides? Exporte o PDF de novo para `fortaleza/deck-fortaleza.pdf` e atualize a tabela abaixo no mesmo commit.


## Regras de todo slide

- Slide de passo traz, no canto de cima à direita, **FAÇA AGORA** (a sala age) ou **OLHE O TELÃO** (o Thiago demonstra).
- Slide de tarefa tem **verbo de tarefa** e **"Deu certo quando..."**.
- Prompt inteiro só no guia. No slide, no máximo a primeira linha.
- Corpo de 24 pt ou mais no PDF de 960 x 540. Rótulo, barra de etapas e legenda em 18 pt. Contraste AA.
- FALA, SALA FAZ, DEMO e ESPERA ficam nas notas do orador, junto com os horários.
- A barra de etapas destaca a etapa atual. Parte A: A1 Exportar · A2 Revisar · A3 Decidir · A4 Protótipo · A5 Testar. Parte B: B1 Ler · B2 Corrigir · B3 Conferir a pasta · B4 Revogar.
- Nada de React, TypeScript, WebSocket, servidor ou MCP no slide. No palco é "a conexão com o Figma".
- "Chave do Figma" é o personal access token. "Tokens de design" são os valores com nome. As duas coisas nunca aparecem só como "token".
- Nunca chamar `#C8352B` de cor errada. O valor é igual ao do token; o que falta é o vínculo.
- A palavra "prova" aparece uma vez, no slide 13, e aponta para a leitura ao vivo. O slide em si mostra o caminho de um valor e não é a prova.
- A correção do B2 é "um valor copiado do Figma". Nenhum slide diz que o protótipo ficou ligado ao Figma.


## A sequência

| # | Horário | Slide | Na tela | Imagem |
|---|---|---|---|---|
| 1 | 18h00 | Capa | Título, evento, nome e cargo | sem imagem |
| 2 | 18h00 | O que você leva hoje | 1. O seu formulário, corrigido. 2. A pasta handoff/, conferida | Tela demo e Card do `handoff/`, grandes (reais) |
| 3 | 18h00 | Parte A para todos. Parte B de dois jeitos | Conectado, em grupo, e "ninguém instala nada aqui" | sem imagem |
| 4 | 18h00 | Abra o guia na sua máquina | QR, endereço do repositório e o nome do arquivo | QR |
| 5 | 18h05 | A1. Exporte a Tela demo | FAÇA AGORA | Tela demo (real). Legenda "Ao vivo: o painel Export" |
| 6 | 18h10 | A2. Peça a revisão da tela | FAÇA AGORA | espaço reservado: a lista com VIU e SUPONDO |
| 7 | 18h17 | A3. Você decide quais pontos aceita | FAÇA AGORA. Exemplo rotulado: recusa de uma suposição, com motivo | sem imagem |
| 8 | 18h21 | A4. Gere o protótipo | FAÇA AGORA | espaço reservado: o protótipo aberto na conversa |
| 9 | até 18h35 | A5. Teste e anote uma diferença | FAÇA AGORA | espaço reservado: o erro e a tela "Conta criada" |
| 10 | 18h35 | A tese | OLHE O TELÃO. "A imagem mostra como a tela parece. O arquivo mostra do que ela é feita." | Tela demo (real) |
| 11 | 18h35 | Botão Continuar: valor igual, vínculo nenhum | OLHE O TELÃO. É o exemplo do Thiago | recorte do botão (real). Legenda "Ao vivo no Figma: o fill sem variável ligada" |
| 12 | 18h35 | O que a imagem deixa estimar, o arquivo diz | OLHE O TELÃO. Texto de apoio e campo nome: as duas correções do B2 | recortes da Tela demo (reais) |
| 13 | 18h38 | Um valor, do Figma à tela | OLHE O TELÃO. Variável, valor, linha do CSS, botão. A faixa manda para a leitura ao vivo | botão do Card (real) |
| 14 | 18h43 | Confira a conexão e forme o grupo | FAÇA AGORA | espaço reservado: o Claude diz o nome do arquivo |
| 15 | 18h50 | B1. Leia o arquivo e escolha uma correção | FAÇA AGORA. Os três achados e o caminho Variables | sem imagem |
| 16 | 19h00 | B2. Aplique a correção no seu formulário | FAÇA AGORA | o texto de apoio nas duas cores, com o contraste (feito no slide com os valores reais) |
| 17 | 19h12 | B3. Confira a sua pasta handoff/ | FAÇA AGORA. Os três valores a achar | sem imagem |
| 18 | 19h23 | 19h23: todo mundo com a pasta | FAÇA AGORA. Pendrive e origem da pasta | sem imagem |
| 19 | 19h28 | B4. Revogue todas as chaves do workshop | FAÇA AGORA | espaço reservado: o Revoke e a lista depois |
| 20 | 19h34 | Qual ponto você recusou, e por quê? | Pergunta para a sala | sem imagem |
| 21 | 19h36 | Os limites | Três limites; o terceiro é uma ação: ligar cores e espaços a variáveis antes de pedir | sem imagem |
| 22 | 19h38 | Às 20h, leve a pasta handoff/ aberta | O Mateus abre o `tokens.json` e o `Card.html` dela | sem imagem |


## Capturas que faltam

Nenhuma captura foi inventada. O que está no deck como imagem é real: a Tela demo exportada, os recortes dela e o Card do `handoff/` aberto no navegador (arquivos em `fortaleza/telao/`). O resto só o ensaio do Thiago dá.

**Com espaço reservado no slide** (retângulo tracejado com a legenda "Ao vivo: ..."). A captura entra por cima do retângulo, no mesmo tamanho. Sem a captura, o slide continua valendo, porque a legenda diz o que o Thiago mostra ao vivo naquele momento:

| Slide | Captura do ensaio |
|---|---|
| 6 | A lista da revisão, com VIU e SUPONDO |
| 8 | O protótipo aberto na conversa do Claude |
| 9 | Os dois estados: o erro e "Conta criada" |
| 14 | A resposta do Claude com o nome do arquivo |
| 19 | A lista de chaves antes e depois do Revoke, **sem a chave visível** |

**Com legenda "Ao vivo", ao lado de uma imagem real** (a captura é opcional e troca a legenda):

| Slide | Captura do ensaio |
|---|---|
| 5 | O frame Tela demo selecionado e o painel Export aberto |
| 11 | O botão Continuar selecionado, com o fill sem variável |

**Sem espaço reservado** (o slide está completo sem elas; se entrarem, viram slide extra logo depois, com a legenda "Captura do ensaio"):

| Slide | Captura do ensaio |
|---|---|
| 13 | O painel do Figma, o pedido do Claude ao Figma e o retorno. Entra dita como ensaio e só é usada se a ligação falhar no dia |
| 15 | A resposta do B1 e a vista Variables com a coleção Workshop Tokens |
| 16 | O formulário antes e depois da correção |
| 17 | A pasta `handoff` aberta, com os arquivos |


## Notas do orador

Cada slide tem nas notas o horário, a marcação (FALA, SALA FAZ, DEMO, ESPERA) e a fala. O slide 13 traz os cinco passos da prova ao vivo e a saída se a ligação falhar. As notas seguem `roteiro.md`; mudou o roteiro, mude as notas.
