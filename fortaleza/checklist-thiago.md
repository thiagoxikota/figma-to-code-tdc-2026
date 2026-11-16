# Checklist do Thiago (v7)

Workshop de quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota. Título: "Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona". Público: designers. Decisões: `.critica/spec-v7.md`.


## Pendente e só seu

### 1. Ensaio no Claude gratuito, com cronômetro (pendência número um)

Nada dos 7 passos foi rodado no Claude gratuito contra o arquivo real. Sem este ensaio, a grade é estimativa e nada pode ser prometido à sala.

1. **Preparo de 15 minutos,** como participante: contas, arquivo duplicado, a opção de Settings > Capabilities, o teste do botão vermelho, o ZIP da tag `fortaleza-v2` e a `handoff` na Área de Trabalho. Cronometrar. Confirmar o nome da opção na conta gratuita (o guia cita "Cloud code execution and file creation" e "Create and edit files", conforme a ajuda da Anthropic lida em 13/11).
2. **Os passos 1 a 4 e 6, na conta gratuita,** com os prompts do guia. Conferir:
   - se a revisão respeita o limite de 3 sugestões;
   - se o protótipo aparece na conversa sem pedir de novo, no navegador e no app, e faz erro vazio e "Conta criada";
   - se aplica só as sugestões aceitas;
   - se os ajustes do menu mudam só o que foi pedido;
   - se as duas correções mudam só o ponto pedido; no campo nome, se os dois campos ficam iguais;
   - **quantas mensagens cabem:** a v7 conta com cerca de 5 por pessoa (revisão, protótipo, 2 ajustes, correção). Anotar onde o limite bateu;
   - como guardar o protótipo: se o painel tem a opção de baixar ou de copiar o código. O guia cita as duas sem afirmar qual existe; ajustar com o nome real.
   Guardar a revisão, o protótipo, um ajuste e a correção: é a saída de ensaio para o palco.
3. **O passo 5 no Mac,** com a conexão: o chute pela imagem, a resposta do arquivo (`#A29B93` com 2,75 para 1, campo nome só contorno, `#6C665F`, `#F5F3F0`, o botão `#C8352B` sem ligação) e **a leitura inédita**: escolher um valor da Tela demo que não está no material, perguntar ao Claude Desktop e conferir que dá para abrir, na resposta, o pedido feito ao Figma e o retorno. Anotar como se abre isso. Se não der para mostrar, a leitura inédita muda.
4. **Cronometrar a grade:** 5, 5, 8, 15, 15, 17, 15, 12, 5 e 3 minutos. Mudou: atualizar roteiro, prompter, guia, voluntários, deck e este checklist juntos.
5. **O bônus do guia,** em casa, no Mac: o instalador pela tag `fortaleza-v2`, a chave com validade de 7 dias e só leitura em File content, o plugin, o teste do nome do arquivo e a revogação. O Windows nunca foi ensaiado, e o guia diz isso.
6. **Versão da conexão no Mac do palco: fica a `figma-console-mcp@1.35.0`.** Troca só com ensaio.
7. Revogar as chaves do ensaio.

### 2. Material

1. **Tag `fortaleza-v2`.** O guia, o ZIP e o comando do bônus apontam para ela. Ela precisa existir antes de a mensagem sair. A tag `fortaleza` já foi divulgada aos organizadores e não é movida.
2. **QR novo.** `fortaleza/qr-guia.svg` e `qr-guia.png` ainda apontam para a tag `fortaleza`. Gerar de novo para o guia na tag `fortaleza-v2`.
3. **Deck v7,** 15 slides, descrito em `deck-ajustes.md`. Notas do apresentador a partir de `roteiro-prompter.txt`. Exportar o PDF de novo.
4. **Mensagem do grupo:** o rascunho fica fora deste repositório, em `~/xikota-os/_inbox/secretario-2026-11-13/preparo/workshop-fortaleza-mensagem.md`. Atualizar para a v7: preparo de 15 minutos, ninguém instala nada, links da tag `fortaleza-v2`. Se a mensagem da v6 já saiu, a nova corrige: a instalação virou bônus opcional.
5. **Perguntas para a Gi** (`perguntas-gi.md`) e **`para-o-mateus.md` ao Mateus** [VERIFICAR: se já foram].
6. **Pendrive:** cobrar o voluntário que leva. Sem confirmação, o pendrive é seu.


## Terça, 17/11

1. Chave do palco: criada a partir de 12/11 (validade de 7 dias). Revogar depois do workshop, fora do telão.
2. No Mac, para o caso de a rede cair: o deck do Google Slides offline, o PDF de reserva, as notas, o ZIP e as saídas do ensaio.
3. **Pendrive com três coisas:** a pasta `handoff`, `fortaleza/telao/tela-demo.png` e `fortaleza/guia-participante.md`. USB comum e USB-C. Testar com o wifi desligado.
4. Carregar o Mac e separar o adaptador do projetor [VERIFICAR com a Gi a entrada].


## Quarta, 18/11

### De manhã

1. Figma Desktop com o arquivo do exercício, plugin Bridge rodando, Claude Desktop: "Verifique o status da conexão com o Figma" diz o nome do arquivo. Rodar o passo 5 inteiro.
2. PNG da Tela demo na Área de Trabalho; conversa do protótipo do ensaio pronta.
3. `handoff` na Área de Trabalho do Mac.

### Na sala, antes das 18h00 [VERIFICAR com a Gi o horário de chegada]

1. Carregador ligado, tela sem dormir (`caffeinate -dis`), Não Perturbe.
2. 8 GB de RAM: só o deck, Claude Desktop, Figma Desktop e o navegador.
3. Conexão e passo 5 na rede da sala.
4. Deck no modo apresentador, notas na tela do Mac; se o projetor só espelhar, notas no papel.
5. QR lido do fundo da sala abre o guia na tag `fortaleza-v2`.
6. Painéis do Figma legíveis do fundo; se não, aumentar o zoom da interface.
7. Cinco minutos com os voluntários sobre `guia-voluntarios.md`: metades da sala, relógio, pendrive, regra do vizinho.

### Durante

| Relógio | Você |
|---|---|
| 18h00 | Promessa, problemas de propósito, regra do vizinho, guia no notebook. "Ninguém instala nada" |
| 18h05 | 1. Exporte, com o painel Export no telão |
| 18h10 | 2. Revisão: "A IA aponta, quem conhece a tela é você" |
| 18h18 | 3. Protótipo, teste vazio e preenchido |
| 18h33 | 4. Brinque: um ajuste no telão |
| 18h48 | 5. Chuta o valor: Claude chuta, sala chuta, arquivo responde, o botão, a leitura inédita |
| 19h05 | 6. Correção do texto de apoio no telão, antes e depois. "É um valor copiado" |
| 19h20 | 7. Galeria: 3 ou 4 pessoas |
| 19h32 | Limites, imagem ou arquivo, QR do bônus |
| 19h37 | "Levem a `handoff`." Fim às 19h40 |

Atrasou: o passo 4 encolhe primeiro, depois a galeria. O jogo e a correção não são cortados.

### No fim

1. Revogar a chave do palco.
2. Cinco minutos com o Mateus no coffee: quantos chegaram com a `handoff`.
