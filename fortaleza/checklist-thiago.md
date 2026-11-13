# Checklist do Thiago

Workshop de quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota. Título: "Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona". Público: designers.


## Pendente e só seu: os ensaios na conta gratuita

Nada da Parte A nem da Parte B foi rodado ainda no Claude gratuito contra o arquivo real. O que está testado: o `handoff/` (inclusive com `scripts/conferir-pasta.mjs`), a conversão com Style Dictionary e o instalador no Mac em modo de teste, com ambiente limpo e chave falsa. Sem estes ensaios, a grade é estimativa e nenhum resultado abaixo pode ser prometido à sala.

1. **Preparação de todo mundo, conta gratuita.** Seguir a seção 1 do guia como participante: o ZIP pela tag, a `handoff` na área de trabalho e o teste "Crie um botão vermelho em HTML". Cronometrar: o guia pede "reserve meia hora". Confirmar o nome da opção em Settings > Capabilities na conta gratuita (o guia cita "Cloud code execution and file creation" e "Create and edit files", conforme a ajuda da Anthropic lida em 13/11).
2. **Ensaio da Parte A, conta gratuita, com cronômetro.** Exportar a Tela demo em PNG 2x e seguir A1 a A5 do `guia-participante.md`. Cronometrar:
   - A1 exportar (meta 5 min), A2 revisão (7), A3 decidir (4), A4 e A5 juntos (14);
   - quantas mensagens a A gasta e quanto limite sobra para a B;
   - se o protótipo aparece na conversa sem pedir de novo, no navegador e no app;
   - se o protótipo faz erro com campo vazio e "Conta criada" com os dois preenchidos.
   Guardar a revisão e o protótipo: é a saída de ensaio para mostrar se a geração falhar no palco.
3. **Ensaio da Parte B, conta gratuita, no Mac, com cronômetro.** Instalação pelo comando, chave só com leitura em File content e validade de 7 dias, arquivo da Community duplicado. Cronometrar:
   - a instalação inteira em casa (o guia pede mais meia hora);
   - conferir a conexão (meta 7 min para a sala);
   - B1 (10), B2 (12), B3 (11) e B4 revogar (6).
   Confirmar, sem inventar:
   - **a prova ao vivo da ponte:** escolher uma propriedade da Tela demo que não está no guia nem nos slides, perguntar ao Claude e conferir que dá para abrir, na resposta, o pedido feito ao Figma e o retorno. Anotar como se abre isso no Claude Desktop gratuito. Se não der para mostrar o pedido e o retorno, a ponte muda e a palavra "prova" sai do roteiro;
   - o B1 devolve as quatro respostas (`#C8352B` sem variável, `#A29B93` com cerca de 2,75 para 1, campo nome com borda, `#6C665F` e `#F5F3F0`);
   - **o B2 funciona como o guia descreve,** com os dois prompts: na conversa da Parte A, o protótipo muda só no ponto pedido, e erro e sucesso continuam funcionando. Testar no navegador e no app. Anotar se o Claude mexe em mais coisa do que foi pedido;
   - **como guardar o protótipo:** se o painel do protótipo, na conta gratuita, tem a opção de baixar ou de copiar o código. O guia cita as duas sem afirmar qual existe; ajustar o texto com o nome real;
   - **o caminho das variáveis no seu Figma:** a ajuda do Figma (HTML lido em 13/11) diz "click Variables from the navigation bar on the left". Conferir no Figma Desktop e no navegador, na conta gratuita. O guia traz também o caminho anterior e a busca de ações (Cmd+K), para o caso de a sala ter versões diferentes;
   - o B3 no telão: o prompt E1 devolve os dois blocos a tempo (meta: antes de 19h20).
4. **Ensaio da extensão (seção 8 do guia).** E1 a E5, incluindo: o TextEdit abrindo `.html` como código depois do ajuste (confirmar o nome exato da opção em Ajustes > Abrir e Salvar e corrigir o guia), a busca por `"$value"` dando 23 e `node scripts/conferir-pasta.mjs` dizendo "Pasta conferida".
5. **Converter a pasta gerada na extensão** com `npx style-dictionary build --config config.json` e abrir o `Card.html`. Tem que ficar parecido com o `handoff/Card.html`. Contar o resultado ao Mateus.
6. **Ensaio no Windows,** numa máquina real (sua ou de um voluntário): `npx.cmd`, o plano B `node scripts/instalar.mjs`, a importação do plugin colando o caminho no campo "Nome do arquivo" e o Claude Desktop subindo a ligação com a configuração gravada (`cmd /c npx`, padrão ainda não ensaiado).
7. **Versão da ligação.** O instalador fixa `figma-console-mcp@1.35.0`, a versão dos ensaios do TDC. Existe a 1.38.2, que o mantenedor diz corrigir desconexão. Trocar só depois de ensaiar com ela; sem ensaio, fica a 1.35.0.
8. **Ajustar a grade** com os tempos medidos e, se mudar, atualizar roteiro, guia, voluntários, deck e este checklist juntos.
9. Revogar as chaves do ensaio.


## Capturas do ensaio que entram no deck

O deck mostra o que existe de verdade: a Tela demo exportada, os recortes dela, o Card do `handoff/` aberto no navegador e as duas cores do texto de apoio (imagens em `fortaleza/telao/`). Onde só o ensaio dá a imagem, o slide tem um espaço reservado com a legenda "Ao vivo: ...", que vale também se a captura não entrar, porque o roteiro manda mostrar aquilo ao vivo. Capture durante o ensaio e troque no slide (`deck-ajustes.md` tem a lista com o lugar de cada uma):

1. Figma com o frame Tela demo selecionado e o painel Export aberto (slide 5).
2. A lista da revisão, com "visto" e "suposto" (slide 6).
3. O protótipo aberto na conversa do Claude (slide 8) e os dois estados, erro e "Conta criada" (slide 9).
4. O botão "Continuar" selecionado no Figma, com o fill sem variável (slide 11).
5. **A prova ao vivo:** o painel do Figma com a propriedade escolhida, o pedido do Claude ao Figma e o retorno (slide 13). É captura de ensaio e entra dita como ensaio; a prova de verdade é a do dia.
6. A resposta do Claude com o nome do arquivo e a janela do Bridge (slide 14).
7. A resposta do B1 e a vista Variables com a coleção Workshop Tokens (slide 15).
8. O formulário antes e depois da correção do texto de apoio (slide 16).
9. A pasta `handoff` aberta, com os arquivos (slide 17).
10. A lista de Personal access tokens antes e depois do Revoke, **sem a chave visível** (slide 19).


## Até segunda, 16/11 (antes de a mensagem sair)

1. Os ensaios acima.
2. **Tag `fortaleza`.** O comando do instalador e o link do ZIP apontam para a tag `fortaleza`, que fixa o material ensaiado. Ela precisa existir antes de a mensagem sair, e precisa ser movida se o material mudar depois do ensaio.
3. **Deck:** ler `fortaleza/deck-fortaleza.pdf` inteiro e trocar as capturas. Corpo de no mínimo 24 pt, rótulo nunca abaixo de 18, contraste AA, nenhum prompt inteiro no slide.
4. **Mandar as perguntas para a Gi** (`perguntas-gi.md`).
5. **Mandar `para-o-mateus.md` ao Mateus.** Mudou: a sala chega com `handoff`, e a pasta gerada virou extensão.
6. **Revisar e mandar a mensagem do grupo.** O rascunho fica fora deste repositório, no xikota-os: `~/xikota-os/_inbox/secretario-2026-11-13/preparo/workshop-fortaleza-mensagem.md`. Ela pede a preparação em casa a todo mundo, então precisa sair cedo.
7. **Cobrar três confirmações da mensagem:** a Gi dizendo que repassou aos inscritos; um voluntário com Windows dizendo que testou; e **um voluntário dizendo que leva o pendrive testado**. Sem a terceira, o pendrive é seu.


## Terça, 17/11

1. Chave do palco: a mesma do ensaio, se criada a partir de 12/11 (validade de 7 dias). Revogar no B4 ao vivo.
2. Baixar no Mac `fortaleza/deck-fortaleza.pdf`, o ZIP do workshop (com `handoff/`) e a saída do seu ensaio da Parte A e da B, para o caso de a rede cair.
3. **Pendrive com a pasta `handoff`,** USB comum e USB-C, mesmo que um voluntário tenha confirmado. Testar com o wifi desligado: `handoff/Card.html` abre com cor direto do pendrive.
4. Carregar o Mac e separar o adaptador do projetor [VERIFICAR com a Gi a entrada].


## Quarta, 18/11

### De manhã

1. Abrir Figma Desktop com o arquivo do exercício, rodar o plugin Bridge e abrir o Claude Desktop.
2. "Verifique o status da conexão com o Figma": o Claude diz o nome do arquivo. Rodar o B1: voltam as quatro respostas.
3. Exportar o PNG da Tela demo e deixar na área de trabalho, para a Parte A no telão.
4. Deixar pronta a conversa do protótipo do ensaio, para o B2 no telão se a geração do dia falhar.

### Na sala, antes das 18h00 [VERIFICAR com a Gi o horário de chegada]

1. Carregador ligado. Ajustes > Tela > nunca dormir, ou `caffeinate -dis` num terminal escondido.
2. Fechar tudo que não é palco. 8 GB de RAM: só o PDF do deck, Claude Desktop, Figma Desktop e o navegador.
3. Não Perturbe ligado.
4. Figma Desktop no arquivo da demo, página "01 Comece aqui", plugin Figma Desktop Bridge rodando.
5. Teste de conexão e B1 na rede da sala.
6. Deck em tela cheia, telão espelhado. Space 1 deck, Space 2 Claude e Figma lado a lado.
7. Escanear o QR do guia do fundo da sala.
8. Conferir do fundo da sala se os painéis do Figma ficam legíveis no projetor; se não, aumentar o zoom da interface.
9. Cinco minutos com os voluntários sobre `guia-voluntarios.md`: quem cobre a conexão, quem cobre a Parte A e os grupos, quem guarda o relógio, **quem está com o pendrive**.

### Durante

| Relógio | Você |
|---|---|
| 18h00 | Título, o que cada pessoa leva, as rotas, QR. "Ninguém instala nada aqui. Os horários não esperam" |
| 18h05 | A1 exportar, com o painel Export no telão |
| 18h10 | A2 revisão: "ele estima, não mede" |
| 18h17 | A3: "A IA aponta, quem decide é você" |
| 18h21 | A4 protótipo e A5 teste, até 18h35 |
| 18h35 | A ponte, sem esperar: botão, texto de apoio, campo nome, no Figma. Depois a prova ao vivo, com uma propriedade escolhida pela sala |
| 18h43 | Conferir a conexão; voluntários montam os grupos |
| 18h50 | B1: ler, conferir dois valores no próprio Figma, escolher uma correção |
| 18h58 | Sala atrasada? Ditar `#6C665F` e `#F5F3F0` |
| 19h00 | B2: cada um corrige o próprio formulário. "É um valor copiado, não uma ligação" |
| 19h12 | B3: mandar o prompt do Card no telão; a sala confere a própria `handoff` |
| 19h23 | "Quem não tem a pasta levanta a mão." De onde veio a pasta de cada um |
| 19h28 | B4 revogar todas as chaves do workshop, com a confirmação no telão |
| 19h34 | Uma pergunta, limites e a passagem: "levem a `handoff` aberta". Fim às 19h40 |

Atrasou? A regra de prioridade está no `roteiro.md`: 18h35, 19h00, 19h12 e 19h28 não se movem; a geração do Card no telão é a primeira a encolher; o B4 nunca sai.

### No fim

1. Revogar a sua chave do palco.
2. Cinco minutos com o Mateus no coffee: quantos chegaram com `handoff` e quantas pastas `fora-do-frame` apareceram.
