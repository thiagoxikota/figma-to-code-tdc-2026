# Checklist do Thiago (v8)

Workshop de quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota, com mesa de instalação às 17h30. Título: "Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona". Público: designers. Decisões: `.critica/spec-v7.md`, seção final "v8".


## Pendente e só seu

### 1. Ensaio no Claude gratuito, com cronômetro (pendência número um)

Nada dos passos foi rodado no Claude gratuito contra o arquivo real. Sem este ensaio, a grade é estimativa e nada pode ser prometido à sala.

1. **Preparo inteiro, como participante,** cronometrado. Parte 1: contas, arquivo duplicado, a opção de Settings > Capabilities, o teste do botão vermelho, o ZIP da tag `fortaleza-v3` e a `handoff` na Área de Trabalho. Parte 2: Node, o instalador pela tag `fortaleza-v3`, a chave com validade de 7 dias e só leitura em File content, o plugin e o teste "Qual arquivo está aberto no Figma agora? Responda só o nome." A spec estima 30 a 45 minutos. Conferir se o que o guia diz que aparece na tela bate com a tela real. Confirmar o nome da opção de Capabilities na conta gratuita (o guia cita "Cloud code execution and file creation" e "Create and edit files", conforme a ajuda da Anthropic lida em 13/11), também no Claude Desktop.
2. **Os passos, na conta gratuita,** com os prompts do guia. Conferir:
   - se a revisão respeita o limite de 3 sugestões;
   - se o protótipo aparece na conversa sem pedir de novo, no navegador e no Claude Desktop, e faz erro vazio e "Conta criada";
   - se, no Claude Desktop com a conexão ligada, a conversa da imagem fica só na imagem (sem o Claude ir ler o Figma por conta própria na revisão e no protótipo);
   - se aplica só as sugestões aceitas;
   - se os ajustes do menu mudam só o que foi pedido;
   - se a leitura do passo 5 volta em 3 linhas com os valores;
   - se as duas correções mudam só o ponto pedido; no campo nome, se os dois campos ficam iguais;
   - **quantas mensagens cabem:** a v8 conta com cerca de 7 (teste, revisão, protótipo, 2 ajustes, leitura, correção). O chute pela imagem e a repetição da leitura inédita ficam fora dessa conta. Anotar onde o limite bateu;
   - como guardar o protótipo: se o painel tem a opção de baixar ou de copiar o código. O guia cita as duas sem afirmar qual existe; ajustar com o nome real.
   Guardar a revisão, o protótipo, um ajuste, a leitura e a correção: é a saída de ensaio para o palco.
3. **Ensaio no Windows.** Nunca foi feito, e o guia diz isso. Instalador com `npx.cmd`, plugin pelo campo "Nome do arquivo", teste do nome do arquivo. Se um voluntário com Windows testar, conta como ensaio.
4. **O passo 5 no Mac,** com a conexão: o chute pela imagem, a leitura (`#A29B93` com 2,75 para 1, campo nome só contorno, `#F5F3F0`, o botão `#C8352B` sem ligação) e **a leitura inédita**: escolher um valor da Tela demo que não está no material, perguntar ao Claude Desktop e conferir que dá para abrir, na resposta, o pedido feito ao Figma e o retorno. Anotar como se abre isso. Se não der para mostrar, a leitura inédita muda.
5. **Cronometrar a grade:** 5, 5, 4, 7, 14, 12, 18, 15, 10, 5 e 5 minutos. Mudou: atualizar roteiro, prompter, guia, voluntários, deck e este checklist juntos.
6. **Versão da conexão no Mac do palco: fica a `figma-console-mcp@1.35.0`.** Troca só com ensaio.
7. Revogar as chaves do ensaio.

### 2. Material

1. **Tag `fortaleza-v3`.** O guia, o ZIP e o comando do instalador apontam para ela. Ela precisa existir antes de a mensagem sair. As tags `fortaleza` e `fortaleza-v2` já circularam e não são movidas.
2. **QR.** `fortaleza/qr-guia.svg` e `qr-guia.png` já foram refeitos para o guia na tag `fortaleza-v3` (16/11). Ler do celular depois de a tag existir.
3. **Deck v8,** 17 slides, descrito em `deck-ajustes.md`. O PDF de 17 slides já foi exportado em 16/11; conferir contra a tabela e colocar as notas do apresentador a partir de `roteiro-prompter.txt`.
4. **Mensagem do grupo:** o rascunho fica fora deste repositório, em `~/xikota-os/_inbox/secretario-2026-11-13/preparo/workshop-fortaleza-mensagem.md`. Atualizar para a v8: preparo obrigatório de 30 a 45 minutos, com a conexão; mesa de instalação às 17h30; links da tag `fortaleza-v3`. Se a mensagem da v7 já saiu, a nova corrige: a conexão voltou a ser de todo mundo. Nada é enviado antes de você ver a versão.
5. **Voluntários:** avisar da mesa às 17h30 e mandar `guia-voluntarios.md` [VERIFICAR com a Gi quem são].
6. **Perguntas para a Gi** (`perguntas-gi.md`): incluir chegada antes das 17h30 e espaço para a mesa. **`para-o-mateus.md` ao Mateus** [VERIFICAR: se já foram].
7. **Pendrive:** cobrar o voluntário que leva. Sem confirmação, o pendrive é seu.


## Terça, 17/11

1. Chave do palco: criada a partir de 12/11 (validade de 7 dias). Revogar depois do workshop, fora do telão.
2. No Mac, para o caso de a rede cair: o deck do Google Slides offline, o PDF de reserva, as notas, o ZIP e as saídas do ensaio.
3. **Pendrive com três coisas:** a pasta `handoff`, `fortaleza/telao/tela-demo.png` e `fortaleza/guia-participante.md`. USB comum e USB-C. Testar com o wifi desligado.
4. Carregar o Mac e separar o adaptador do projetor [VERIFICAR com a Gi a entrada].


## Quarta, 18/11

### De manhã

1. Figma Desktop com o arquivo do exercício, plugin Bridge rodando, Claude Desktop: "Qual arquivo está aberto no Figma agora? Responda só o nome." diz o nome do arquivo. Rodar o passo 5 inteiro.
2. PNG da Tela demo na Área de Trabalho; conversa do protótipo do ensaio pronta.
3. `handoff` na Área de Trabalho do Mac.

### Na sala, antes das 17h30 [VERIFICAR com a Gi o horário de chegada]

1. Mesa de instalação montada com os voluntários. Você fica no palco, não na mesa. Ela fecha às 18h00.
2. Carregador ligado, tela sem dormir (`caffeinate -dis`), Não Perturbe.
3. 8 GB de RAM: só o deck, Claude Desktop, Figma Desktop e o navegador.
4. Conexão e passo 5 na rede da sala.
5. Deck no modo apresentador, notas na tela do Mac; se o projetor só espelhar, notas no papel.
6. QR lido do fundo da sala abre o guia na tag `fortaleza-v3`.
7. Painéis do Figma legíveis do fundo; se não, aumentar o zoom da interface.
8. Cinco minutos com os voluntários sobre `guia-voluntarios.md`: a mesa e quando desistir, metades da sala, relógio, pendrive.

### Durante

| Relógio | Você |
|---|---|
| 18h00 | Promessa, problemas de propósito, limite de umas 7 mensagens, guia no notebook |
| 18h05 | Teste da conexão no telão. MCP uma vez, explicado. Mãos de quem não conectou: segue pelo telão |
| 18h10 | 1. Exporte, com o painel Export no telão |
| 18h14 | 2. Revisão na conversa da imagem: "A IA aponta, quem conhece a tela é você" |
| 18h21 | 3. Protótipo, teste vazio e preenchido |
| 18h35 | 4. Brinque: um ajuste no telão |
| 18h47 | 5. Chute pela imagem, cada um pergunta ao arquivo, revelação junto, o botão, a leitura inédita que cada um repete |
| 19h05 | 6. Correção do texto de apoio no telão, antes e depois. "É um valor copiado" |
| 19h20 | 7. Galeria: 3 ou 4 pessoas |
| 19h30 | Revogar a chave, todo mundo. Nunca cortado |
| 19h35 | Limites, imagem ou arquivo, "levem a `handoff`." Fim às 19h40 |

Atrasou: o passo 4 encolhe primeiro, depois a galeria. Teste da conexão, jogo, correção e revogação não são cortados.

### No fim

1. Revogar a chave do palco, fora do telão.
2. Cinco minutos com o Mateus no coffee: quantos chegaram com a `handoff`.
