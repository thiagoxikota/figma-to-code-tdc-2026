# Checklist do Thiago

Workshop de quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota. Título: "Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona". Público: designers.


## Pendente e só seu: os ensaios na conta gratuita

Nada da Parte A nem da Parte B nova foi rodado ainda no Claude gratuito contra o arquivo real. O que está testado: o `handoff/`, a conversão com Style Dictionary (inclusive com o `config.json` das pastas) e o instalador no Mac em modo de teste. Sem estes ensaios, a grade é estimativa e nenhum resultado abaixo pode ser prometido à sala.

1. **Preparação de todo mundo, conta gratuita.** Seguir a seção 1 do guia como participante: ZIP, pasta-modelo, e o teste "Crie um botão vermelho em HTML". Confirmar o nome da opção em Settings > Capabilities na conta gratuita (o guia cita "Cloud code execution and file creation" e "Create and edit files", conforme a ajuda da Anthropic lida em 13/11).
2. **Ensaio da Parte A, conta gratuita, com cronômetro.** Exportar a Tela demo em PNG 2x e seguir A1 a A5 do `guia-participante.md`. Cronometrar:
   - A1 exportar (meta 5 min), A2 revisão (7), A3 decidir (4), A4 protótipo (9), A5 testar (5);
   - quantas mensagens a A gasta e quanto limite sobra para a B;
   - se o protótipo aparece na conversa sem pedir de novo, no navegador e no app;
   - se o protótipo faz erro com campo vazio e "Conta criada" com os dois preenchidos.
   Guardar a revisão e o protótipo: é a saída de ensaio para mostrar se a geração falhar no palco.
3. **Ensaio da Parte B, conta gratuita, no Mac, com cronômetro.** Instalação pelo comando, chave só com leitura em File content e validade de 7 dias, arquivo da Community duplicado. Cronometrar:
   - a instalação inteira em casa (o guia promete 30 min);
   - conferir a conexão (meta 7 min para a sala);
   - B1 (5), B2 (5), B3 (8), B4 (4), B5 salvar e conferir (15 até o corte) e B6 revogar (5).
   Confirmar, sem inventar:
   - o B1 devolve as 3 propriedades (`#C8352B` sem variável, `#A29B93`, campo nome com borda);
   - **o B2 funciona como o guia descreve:** a conversa da Parte A aparece no Claude Desktop, a ligação com o Figma responde dentro dela e o protótipo muda só no ponto pedido. Se não funcionar, o B2 fica só com a decisão escrita, e o guia, o roteiro e o slide 16 mudam juntos;
   - o B3 devolve os dois blocos com as classes, e o `Card.css` tem as três linhas do B4 (`var(--color-brand-primary)`, `var(--font-size-heading)`, `var(--space-3)`);
   - o caminho das variáveis no Figma atual: Variables ou Local variables no painel da direita, e a busca de ações (Cmd+K);
   - o B5 devolve JSON válido no jsonlint, com 23 tokens, `px` nas medidas e os três valores (`#C8352B`, `20px`, `24px`).
4. **Converter a sua saída do B5** dentro da `fora-do-frame`, com `npx style-dictionary build --config config.json`, e abrir o `Card.html` do B3. Tem que ficar parecido com o `handoff/Card.html`. Contar o resultado ao Mateus.
5. **Ensaio no Windows,** numa máquina real (sua ou de um voluntário): `npx.cmd`, o plano B `node scripts/instalar.mjs`, a importação do plugin colando o caminho no campo "Nome do arquivo", o Claude Desktop subindo a ligação com a configuração gravada (`cmd /c npx`, padrão ainda não ensaiado) e o salvamento no Bloco de Notas sem virar `.txt`.
6. **Versão da ligação.** O instalador fixa `figma-console-mcp@1.35.0`, a versão dos ensaios do TDC. Existe a 1.38.2, que o mantenedor diz corrigir desconexão. Trocar só depois de ensaiar com ela; sem ensaio, fica a 1.35.0.
7. **Ajustar a grade** com os tempos medidos e, se mudar, atualizar roteiro, guia, voluntários, deck e este checklist juntos.
8. Revogar as chaves do ensaio.


## Capturas do ensaio que entram no deck

O deck já mostra o que existe de verdade: a Tela demo exportada, os recortes dela e o Card renderizado do `handoff/` (imagens em `fortaleza/telao/`). O que depende do seu ensaio não foi simulado. Capture durante o ensaio e troque no slide indicado (`deck-ajustes.md` tem a lista com o lugar de cada uma):

1. Figma com o frame Tela demo selecionado e o painel Export aberto (slide 5).
2. A lista da revisão, com "visto" e "suposto" (slide 6).
3. O protótipo aberto na conversa do Claude (slide 8) e os dois estados, erro e "Conta criada" (slide 9).
4. O botão "Continuar" selecionado no Figma, com o fill sem variável, e o `color/brand-primary` nas variáveis (slide 11).
5. A resposta do Claude com o nome do arquivo e a janela do Bridge (slide 14).
6. A resposta do B1 (slide 15) e a do B2 (slide 16).
7. As variáveis do Figma com os três valores (slide 18).
8. A pasta final com os arquivos, e o jsonlint dizendo válido (slide 19).
9. A lista de Personal access tokens antes e depois do Revoke, **sem a chave visível** (slide 21).


## Até segunda, 16/11 (antes de a mensagem sair)

1. Os ensaios acima.
2. **Deck:** ler `fortaleza/deck-fortaleza.pdf` inteiro e trocar as capturas. Corpo de no mínimo 24 pt, rótulo nunca abaixo de 18, contraste AA, nenhum prompt inteiro no slide.
3. **Mandar as perguntas para a Gi** (`perguntas-gi.md`).
4. **Mandar `para-o-mateus.md` ao Mateus.** Se ele pedir mudança, ajustar os prompts B3 ou B5 e o `handoff/`.
5. **Revisar e mandar a mensagem do grupo.** O rascunho fica fora deste repositório, no xikota-os: `~/xikota-os/_inbox/secretario-2026-11-13/preparo/workshop-fortaleza-mensagem.md`. Ela pede a preparação em casa a todo mundo, então precisa sair cedo.
6. **Cobrar duas confirmações da mensagem:** a Gi dizendo que repassou aos inscritos, e um voluntário com Windows dizendo que testou.


## Terça, 17/11

1. Chave do palco: a mesma do ensaio, se criada a partir de 12/11 (validade de 7 dias). Revogar no B6 ao vivo.
2. Baixar no Mac `fortaleza/deck-fortaleza.pdf`, o ZIP do repositório (com `handoff/`) e a saída do seu ensaio da Parte A e da B, para o caso de a rede cair.
3. **Pendrive com o ZIP descompactado,** para quem chegar sem a pasta de exemplo. Testar com o wifi desligado: `handoff/Card.html` abre com cor direto do pendrive. Combinar com os voluntários que cada um traga o seu [VERIFICAR com a Gi quantos são].
4. Carregar o Mac e separar o adaptador do projetor [VERIFICAR com a Gi a entrada].


## Quarta, 18/11

### De manhã

1. Abrir Figma Desktop com o arquivo do exercício, rodar o plugin Bridge e abrir o Claude Desktop.
2. "Verifique o status da conexão com o Figma": o Claude diz o nome do arquivo. Rodar o B1: voltam as 3 propriedades.
3. Exportar o PNG da Tela demo e deixar na área de trabalho, para a Parte A no telão.

### Na sala, antes das 18h00 [VERIFICAR com a Gi o horário de chegada]

1. Carregador ligado. Ajustes > Tela > nunca dormir, ou `caffeinate -dis` num terminal escondido.
2. Fechar tudo que não é palco. 8 GB de RAM: só o PDF do deck, Claude Desktop, Figma Desktop e o navegador.
3. Não Perturbe ligado.
4. Figma Desktop no arquivo da demo, página "01 Comece aqui", plugin Figma Desktop Bridge rodando.
5. Teste de conexão e B1 na rede da sala.
6. Deck em tela cheia, telão espelhado. Space 1 deck, Space 2 Claude e Figma lado a lado.
7. Escanear o QR do guia do fundo da sala.
8. Conferir do fundo da sala se os painéis do Figma ficam legíveis no projetor; se não, aumentar o zoom da interface.
9. Cinco minutos com os voluntários sobre `guia-voluntarios.md`: quem cobre a conexão, quem cobre a Parte A e as duplas, quem guarda o relógio, quem está com pendrive.

### Durante

| Relógio | Você |
|---|---|
| 18h00 | Título, as duas saídas, as rotas, QR. "Ninguém instala nada aqui" |
| 18h05 | Parte A no telão com a Tela demo: A1 exportar |
| 18h10 | A2 revisão |
| 18h17 | A3: "A IA aponta, quem decide é você" |
| 18h21 | A4 protótipo, só com os pontos aceitos |
| 18h30 | A5 testar e anotar uma diferença |
| 18h35 | A ponte, sem esperar: botão, texto de apoio, campo nome, no Figma. Depois a cadeia |
| 18h41 | Conferir a conexão; duplas para quem não instalou |
| 18h48 | B1 ler as 3 propriedades |
| 18h53 | B2: cada um decide uma correção e leva para o protótipo |
| 18h58 | B3 gerar o Card: "é a passagem para o Mateus, não substitui o protótipo" |
| 19h02 | Aviso: quem ainda não pediu o Card vai de pasta de exemplo |
| 19h06 | B4 conferir 3 linhas do CSS nas variáveis do Figma |
| 19h10 | B5 salvar, sem esperar: pedir o JSON |
| 19h13 | Copiar e colar os três arquivos |
| 19h19 | Conferir: nomes, Card aberto, JSON validado, três valores |
| 19h25 | Corte: "quem não terminou, a `handoff` vai para a área de trabalho" |
| 19h28 | B6 revogar, com a confirmação no telão |
| 19h33 | Uma pergunta, limites e a passagem: as duas origens da pasta. Fim às 19h40 |

Atrasou? A regra de prioridade está no `roteiro.md`: 18h35, 19h10 e 19h28 não se movem; o B2 no protótipo é o primeiro a encolher; o B6 nunca sai.

### No fim

1. Revogar a sua chave do palco.
2. Cinco minutos com o Mateus no coffee: quantos saíram com `fora-do-frame` gerada, quantos com `handoff`, e se algum JSON veio sem `px` ou sem validar.
