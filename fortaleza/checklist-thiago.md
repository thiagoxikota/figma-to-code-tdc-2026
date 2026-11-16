# Checklist do Thiago (v9.1)

Workshop de quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota, com mesa de instalação às 17h30. Título: "Seu primeiro site, do Figma ao ar". Público: designers. Decisões: `.critica/spec-v9.md`, seção v9.1 (substitui a v7 e a v8).


## Pendente e só seu

### 1. Publicar a atualização do arquivo na Community

O guia manda duplicar o arquivo e procurar a página "Portfólio", frame "Meu portfólio". Sem a atualização publicada, o passo 1 da sala não existe.

- Frame de 1280 de largura, com Auto Layout e as variáveis da coleção Workshop Tokens: foto, nome, uma linha de bio, 2 cards de projeto (imagem, título, uma linha) e o botão "Fale comigo".
- As duas inconsistências plantadas: a bio com `#A29B93` digitado direto (em vez de `color/text-muted`) e o botão com `#C8352B` digitado direto (sem ligação com `color/brand-primary`).
- Publicar a atualização no link atual da Community e conferir, numa conta sem acesso de editor, que a cópia nova traz a página.
- Avisar no grupo que quem duplicou antes precisa duplicar de novo.

### 2. Ensaio completo no Claude gratuito, com cronômetro (pendência número um)

Nada da v9.1 foi rodado no Claude gratuito contra o arquivo real. Sem este ensaio, a grade é estimativa.

1. **Preparo inteiro, como participante,** cronometrado: partes 1, 2 e 3 do guia, pela tag `fortaleza-v4`. Conferir se o que o guia diz que aparece na tela bate com a tela real.
2. **Os passos da sala,** na conta gratuita, com os prompts do guia. Conferir:
   - se o alô responde o arquivo e o tamanho da fonte do nome em uma linha, e se o número bate com o painel do Figma (48);
   - se dá para anexar o `DESIGN.md` no Claude Desktop gratuito;
   - se o prompt 1 acha as duas inconsistências, com o valor atual e o valor certo, sem gerar código;
   - se o prompt 2 entrega um `index.html` único, até 150 linhas, sem bibliotecas, sem gradiente, sombra genérica, pílula ou emoji, com a bio em `color/text-muted` e o botão ligado a `color/brand-primary`;
   - **o download do HTML:** o nome real do botão de baixar no Claude Desktop gratuito (o guia está marcado `[VERIFICAR no ensaio]`) e o nome com que o arquivo baixa;
   - **o plano B:** TextEdit em texto simples, salvo como `index.html`, abrindo no navegador;
   - **o plano C:** o `meu-site-kit/reserva/index.html`, com os textos trocados, abrindo no navegador e publicando no Drop;
   - o que acontece com a foto e as imagens dos projetos no `index.html`;
   - **o Netlify Drop:** arrastar a pasta `meu-site`, tempo até o link, o link abrindo numa janela anônima e no celular, e se arrastar de novo atualiza o mesmo site ou cria outro (o guia está marcado `[VERIFICAR no ensaio]`);
   - anotar quantas mensagens o fluxo usou e onde o limite bateu.
   Guardar a leitura do prompt 1 e o site como saída de ensaio para o palco.
3. **Cronometrar a grade:** 15, 30, 10, 15, 10, 10 e 10 minutos (mapa, conectar, regras, gerar, conferir e corrigir, publicar, galeria e próximos passos). Mudou: atualizar roteiro, prompter, guia, voluntários, deck e este checklist juntos.
4. **Versão da conexão no Mac do palco: fica a `figma-console-mcp@1.35.0`.** Troca só com ensaio.
5. Revogar as chaves do ensaio.

### 3. Ensaio no Windows

Nunca foi feito, e o guia diz isso. Instalador com `npx.cmd`, plugin pelo campo "Nome do arquivo", alô, salvar o `index.html` (download e plano B no Bloco de Notas com "Todos os arquivos") e Netlify Drop. Se um voluntário com Windows testar, conta como ensaio.

### 4. Conta no Netlify e teste do Drop

Criar a conta gratuita e arrastar uma pasta `meu-site` com um `index.html` em https://app.netlify.com/drop . Anotar o caminho para trocar o nome do site, se quiser mostrar. Conferir que o Drop abre na rede da sala.

### 5. Preparar a demo GitHub+Netlify (slide 14, 2 minutos)

Um repositório com um `index.html`, ligado ao Netlify, publicando sozinho a cada mudança. Ensaiar: pedir um ajuste ao agente, a mudança ir para o GitHub e o site atualizar. Cronometrar o tempo até o site mudar. Se passar de 2 minutos, a demo mostra o pedido e volta ao link no fim da galeria.

### 6. Codex (seção "Usa Codex?" do guia)

O guia mostra o bloco `[mcp_servers.figma-console]` com `npx -y figma-console-mcp@1.35.0` e o `env` copiados de `scripts/instalar.mjs`. O seu Mac roda o Codex por um script próprio, com `@latest`. Conferir que o bloco do guia funciona numa máquina limpa, ou manter o `[VERIFICAR no ensaio]` e dizer na sala que é alternativa.


## Material

1. **Tag `fortaleza-v4`.** O guia, o ZIP, o `meu-site-kit` e o comando do instalador apontam para ela. Ela precisa existir antes de a mensagem sair. As tags `fortaleza`, `fortaleza-v2` e `fortaleza-v3` não são movidas.
2. **QR.** `fortaleza/qr-guia.svg` e `qr-guia.png` ainda apontam para a tag `fortaleza-v3`. Refazer para o guia na `fortaleza-v4` e ler do celular depois de a tag existir.
3. **Deck v9.1,** 16 slides, descrito em `deck-ajustes.md`, com os três diagramas (mapa das peças, a ponte em 4 passos, pasta, GitHub e Netlify) e a tabela do harness. O `deck-fortaleza.pdf` atual é da v8. Exportar o PDF novo e colocar as notas a partir de `roteiro-prompter.txt`.
4. **Mensagem do grupo:** o rascunho fica fora deste repositório, em `~/xikota-os/_inbox/secretario-2026-11-13/preparo/workshop-fortaleza-mensagem.md`. Atualizar para a v9.1: preparo obrigatório com a conexão e a conta do Netlify, `meu-site-kit` na Área de Trabalho, duplicar o arquivo de novo, mesa às 17h30, links da tag `fortaleza-v4`. Nada é enviado antes de você ver a versão.
5. **Voluntários:** mandar o `guia-voluntarios.md` da v9.1 [VERIFICAR com a Gi quem são].
6. **Perguntas para a Gi** (`perguntas-gi.md`): chegada antes das 17h30, espaço para a mesa e rede que aceite o Netlify. **`para-o-mateus.md` ao Mateus** [VERIFICAR: se já foram].
7. **Pendrive:** `handoff`, `meu-site-kit` e o guia. Cobrar o voluntário que leva. Sem confirmação, o pendrive é seu.


## Terça, 17/11

1. Chave do palco: criada a partir de 12/11 (validade de 7 dias). Revogar depois do workshop, fora do telão.
2. No Mac, para o caso de a rede cair: o deck do Google Slides offline, o PDF de reserva, as notas, o ZIP e as saídas do ensaio.
3. **Pendrive com três coisas:** a pasta `handoff`, a pasta `fortaleza/meu-site-kit` e `fortaleza/guia-participante.md`. USB comum e USB-C. Testar com o wifi desligado.
4. Carregar o Mac e separar o adaptador do projetor [VERIFICAR com a Gi a entrada].


## Quarta, 18/11

### De manhã

1. Figma Desktop com o arquivo do exercício, plugin Bridge rodando, Claude Desktop: o alô diz o nome do arquivo e o tamanho da fonte do nome, e o painel do Figma mostra o mesmo número. Rodar o prompt 1.
2. Logado no Netlify. O site da demo GitHub+Netlify no ar.
3. `meu-site-kit` e `handoff` na Área de Trabalho do Mac.

### Na sala, antes das 17h30 [VERIFICAR com a Gi o horário de chegada]

1. Mesa de instalação montada com os voluntários. Você fica no palco, não na mesa. Ela fecha às 18h00.
2. Carregador ligado, tela sem dormir (`caffeinate -dis`), Não Perturbe.
3. 8 GB de RAM: só o deck, Claude Desktop, Figma Desktop e o navegador.
4. Alô, prompt 1 e Netlify Drop na rede da sala, com o link aberto numa janela anônima e no celular.
5. Deck no modo apresentador, notas na tela do Mac; se o projetor só espelhar, notas no papel.
6. QR lido do fundo da sala abre o guia na tag `fortaleza-v4`.
7. Painéis do Figma legíveis do fundo; se não, aumentar o zoom da interface.
8. Cinco minutos com os voluntários sobre `guia-voluntarios.md`: a mesa e quando desistir, metades da sala, relógio, pendrive.

### Durante

| Relógio | Você |
|---|---|
| 18h00 | Mapa (slides 1 a 3): capa e promessa, print x arquivo, as peças com o nome certo (cabo USB-C) |
| 18h15 | Conectar (4 a 6): guia e QR, a ponte em 4 passos no telão, o alô: o tamanho da fonte do nome conferido no painel. Mãos de quem não conectou |
| 18h45 | Regras (7 e 8): o harness em tabela ("designer não precisa programar, precisa dar regra"), molde em 2 minutos |
| 18h55 | Gerar (9 e 10): prompt 1 com o `DESIGN.md`, os dois erros no painel; prompt 2, o `index.html` baixado e aberto. Plano B e plano C à mão |
| 19h10 | Conferir e corrigir (11): site ao lado do frame, um ajuste |
| 19h20 | Publicar (12 e 13): pasta, GitHub e Netlify; Netlify Drop no telão, link na janela anônima e no celular |
| 19h30 | Galeria e próximos passos (14 a 16): demo GitHub+Netlify, galeria de 3 links, revogar a chave, "Levem a `handoff`." Fim às 19h40 |

Atrasou: a galeria encolhe primeiro, depois a demo do GitHub. Conectar, gerar, conferir, publicar e revogar não são cortados.

### No fim

1. Revogar a chave do palco, fora do telão.
2. Cinco minutos com o Mateus no coffee: quantos chegaram com a `handoff`.
