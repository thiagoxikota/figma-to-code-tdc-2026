# Checklist do Thiago

Workshop de quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota. Título: "Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona". Público: designers.


## Pendente e só seu: os ensaios na conta gratuita

Nada da Parte A nem da Parte B nova foi rodado ainda no Claude gratuito contra o arquivo real. O que está testado é o `handoff/` e a conversão com Style Dictionary. Sem estes ensaios, a grade é estimativa.

1. **Ensaio da Parte A, conta gratuita, com cronômetro.** Exportar a Tela demo em PNG 2x e seguir A1 a A5 do `guia-participante.md`. Cronometrar:
   - A1 exportar (meta 4 min), A2 revisão (7), A3 decidir (3), A4 protótipo (9), A5 testar (2);
   - quantas mensagens a A gasta e quanto limite sobra para a B;
   - se o protótipo aparece na conversa sem pedir de novo, no navegador e no app;
   - se o protótipo faz erro com campo vazio e "Conta criada" com os dois preenchidos.
   Guardar a revisão e o protótipo: é a saída de ensaio para mostrar se a geração falhar no palco.
2. **Ensaio da Parte B, conta gratuita, no Mac, com cronômetro.** Instalação pelo comando, token só com leitura em File content, arquivo da Community duplicado. Cronometrar:
   - a instalação inteira em casa (o guia promete 30 min);
   - rodar o comando pela segunda vez para trocar o token (o guia manda fazer isso na quarta): quanto tempo leva e se troca mesmo;
   - conferir a conexão (meta 10 min para a sala);
   - B1 (5), B2 (5), B3 (7), B4 (5) e B5 salvar e conferir (10 até o corte);
   - B6 revogar (4).
   Confirmar: o B1 devolve as 3 propriedades (`#C8352B` sem variável, `#A29B93`, campo nome com borda); o B3 devolve os dois blocos com as classes; o B5 devolve JSON válido no jsonlint, com 23 tokens e `px` nas medidas.
3. **Converter a sua saída do B5** com `npx style-dictionary build` (configuração em `para-o-mateus.md`) e abrir o `Card.html` do B3. Tem que ficar parecido com o `handoff/Card.html`.
4. **Ensaio no Windows,** se conseguir uma máquina: `npx.cmd`, o plano B `node scripts/instalar.mjs` e o salvamento no Bloco de Notas sem virar `.txt`.
5. **Ajustar a grade** com os tempos medidos e, se mudar, atualizar roteiro, guia, voluntários e este checklist juntos.
6. Revogar os tokens do ensaio.


## Até segunda, 16/11 (antes de a mensagem sair)

1. Os ensaios acima.
2. **Deck:** conferir a cópia Fortaleza aplicada (`deck-ajustes.md`), exportar o PDF para `fortaleza/deck-fortaleza.pdf` e ler o PDF inteiro: corpo de no mínimo 24 pt, rótulo nunca abaixo de 18, contraste AA, nenhum prompt inteiro no slide, nada de chips de palco.
3. **Mandar as perguntas para a Gi** (`perguntas-gi.md`).
4. **Mandar `para-o-mateus.md` ao Mateus.** Se ele pedir mudança, ajustar os prompts B3 ou B5 e o `handoff/`.
5. **Revisar e mandar a mensagem do grupo** (`_inbox/secretario-2026-11-13/preparo/workshop-fortaleza-mensagem.md`). Ela pede a instalação em casa, então precisa sair cedo.


## Terça, 17/11

1. Token do palco já gerado com validade de 7 dias (o mesmo que a sala usa); revogar no B6 ao vivo.
2. Baixar no Mac `fortaleza/deck-fortaleza.pdf`, o ZIP do repositório (com `handoff/`) e a saída do seu ensaio da Parte A e da B, para o caso de a rede cair.
3. Uma cópia de `handoff/` num pendrive para quem chegar sem o ZIP [VERIFICAR com a Gi se faz sentido na sala].
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
8. Cinco minutos com os voluntários sobre `guia-voluntarios.md`: quem cobre a conexão, quem cobre a Parte A e as duplas, quem guarda o relógio, onde está o `handoff/`.

### Durante

| Relógio | Você |
|---|---|
| 18h00 | Título, as duas entregas, as rotas, QR. "Ninguém instala nada aqui" |
| 18h08 | Parte A no telão com a Tela demo: A1 exportar |
| 18h12 | A2 revisão |
| 18h19 | A3: "A IA aponta, quem decide é você" |
| 18h22 | A4 protótipo, só com os pontos aceitos |
| 18h31 | A5 testar e anotar uma diferença |
| 18h33 | A ponte: botão, texto de apoio, campo nome, no Figma |
| 18h38 | Conferir a conexão; duplas para quem não instalou |
| 18h48 | B1 ler as 3 propriedades |
| 18h53 | B2 auditar |
| 18h58 | B3 gerar o Card: "não é o protótipo, é o ponto de partida do Mateus" |
| 19h05 | B4 conferir 3 valores no painel de variáveis |
| 19h10 | B5 salvar: mostrar a pasta final, o Card aberto e o JSON validado |
| 19h20 | Corte: "quem não terminou, copia a `handoff`" |
| 19h22 | B6 revogar, com a confirmação no telão |
| 19h26 | Limites e passagem: as duas origens da pasta |
| 19h34 | Margem e perguntas rápidas, fim às 19h40 |

### No fim

1. Revogar o seu token do palco.
2. Cinco minutos com o Mateus no coffee: quantos saíram com `fora-do-frame` gerada, quantos com `handoff`, e se algum JSON veio sem `px`.
