# Checklist do Thiago (v10)

Workshop de quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota, com mesa de instalação às 17h30. Título: "Figma + IA, na prática", subtítulo "do seu Figma ao primeiro site". Público: designers. Decisões: `.critica/spec-v9.md`, seção v10 (o agente edita o Figma da pessoa).


## Pendente e só seu

### 1. O arquivo na Community

O molde já está montado no arquivo: página "Minha hero" (a primeira), frame "Minha hero" (1440 por 860, Auto Layout, variáveis Workshop Tokens) e, ao lado, "Exemplo pronto: Thiago". Falta:

- Conferir que a atualização está publicada no link atual da Community, numa conta sem acesso de editor, e que a cópia nova traz a página "Minha hero" [VERIFICAR].
- Avisar no grupo que quem duplicou antes precisa duplicar de novo.

### 2. Ensaio completo no Claude gratuito, com cronômetro (pendência número um)

Nada da v10 foi rodado no Claude gratuito contra o arquivo real. Sem este ensaio, a grade é estimativa.

1. **Preparo inteiro, como participante,** cronometrado: partes 1 e 2 do guia, pela tag `fortaleza-v5`, com o `meus-dados.txt` preenchido. Conferir se o que o guia diz que aparece na tela bate com a tela real, incluindo "Local · ready" no plugin.
2. **O custo da lista de ferramentas no Claude gratuito.** O servidor expõe muitas ferramentas no modo local (121 na contagem da spec) e a lista vai junto em toda mensagem. Medir quanto do limite ela come e se cabem o alô, o prompt 1, o prompt 2 e um ajuste na mesma conversa [VERIFICAR no ensaio]. Se não couber: decidir entre cortar o alô da sala (quem testou em casa já fez) ou abrir conversa nova para o prompt 2.
3. **O prompt 1 escrevendo no Figma no plano gratuito,** com a chave só de leitura em File content. Conferir:
   - se ele troca os textos das cinco camadas sem criar camadas nem desfazer o Auto Layout;
   - se muda o valor de `color/brand-primary` com hex e com nome de cor ("azul petróleo");
   - o caso do fundo escuro: `color/surface`, `color/surface-alt`, `color/text` e `color/text-muted` com os valores do guia, botão e link legíveis;
   - se o Claude Desktop pede permissão para as ferramentas e como é essa tela;
   - se ele obedece "Não faça perguntas" e resume em até 5 linhas;
   - o tempo até terminar.
4. **O alô:** responde o arquivo e 104 em uma linha, e o painel do Figma mostra 104.
5. **O prompt 2:** anexar o `DESIGN.md` no Claude Desktop gratuito; o `index.html` fiel ao frame, com as variáveis em CSS, Sora e Inter, responsivo, sem gradiente, sombra genérica, pílula ou emoji; os links do `meus-dados.txt`; o caso com foto (`foto.jpg`).
6. **O download do HTML:** o nome real do botão de baixar no Claude Desktop gratuito (o guia está marcado `[VERIFICAR no ensaio]`) e o nome com que o arquivo baixa. **Plano B** no TextEdit e **plano C** (`meu-site-kit/reserva/index.html`, com os `TROQUE` trocados).
7. **Netlify Drop** (opcional na sala): a pasta `meu-site`, o link numa janela anônima e no celular.
8. **Cronometrar a grade:** 10, 25, 20, 10, 15, 10 e 10 minutos (abertura, setup guiado, sua hero pelo agente, possibilidades, do Figma ao HTML, conferir, próximos passos e fecho). Mudou: atualizar roteiro, prompter, guia, voluntários, deck e este checklist juntos.
9. **Versão da conexão no Mac do palco: fica a `figma-console-mcp@1.35.0`.** Troca só com ensaio.
10. Devolver o frame "Minha hero" do palco ao molde depois de cada ensaio (textos e valores das variáveis). Revogar as chaves do ensaio.

### 3. Ensaio no Mac e no Windows

O Mac do ensaio é o seu; o ideal é repetir numa conta de usuário limpa. O Windows nunca foi ensaiado, e o guia diz isso: instalador com `npx.cmd`, plugin pelo campo "Nome do arquivo", "Local · ready", alô, prompt 1 escrevendo no Figma, salvar o `index.html` (download e plano B no Bloco de Notas com "Todos os arquivos"). Se um voluntário com Windows testar, conta como ensaio.

### 4. Capturas reais do setup para os slides 5 e 6

- Slide 5, "você deve ver isto": o instalador terminando bem, no Terminal [VERIFICAR: captura real].
- Slide 6: a janelinha do Figma Desktop Bridge com "Local · ready" [VERIFICAR: captura real].

Sem chave visível em nenhuma captura.

### 5. As demos

- **Slide 2, 1 minuto:** o agente personalizando a hero no canvas. Decidir: ao vivo num arquivo de demo separado ou gravação acelerada [VERIFICAR no ensaio]. Não gastar o frame nem o prompt 1 do palco.
- **Slide 11, comentário lido e aplicado, e handoff curto:** ensaiar ao vivo e **gravar a reserva**. Conferir o escopo de chave que ler comentário pede no seu Mac [VERIFICAR no ensaio]; a sala não faz esta parte.

### 6. Codex (seção "Usa Codex?" do guia)

O guia mostra o bloco `[mcp_servers.figma-console]` com `npx -y figma-console-mcp@1.35.0` e o `env` copiados de `scripts/instalar.mjs`. O seu Mac roda o Codex por um script próprio, com `@latest`. Conferir que o bloco do guia funciona numa máquina limpa, ou manter o `[VERIFICAR no ensaio]` e dizer na sala que é alternativa.


## Material

1. **Tag `fortaleza-v5`.** O guia, o ZIP, o `meu-site-kit` e o comando do instalador apontam para ela. Ela precisa existir antes de a mensagem sair. As tags `fortaleza` a `fortaleza-v4` já circularam e não são movidas.
2. **QR.** `fortaleza/qr-guia.svg` e `qr-guia.png` não apontam para a `fortaleza-v5`. Refazer para o guia na tag nova e ler do celular depois de a tag existir. Link curto no slide [VERIFICAR: encurtador; sem domínio novo sem a sua ordem].
3. **Deck v10,** 16 slides, na ordem do `roteiro.md`: Xikota System com Apple, logos no lugar de caixas de texto, superfícies arredondadas sem traço, cinza suave, mais imagem, sem horário no canto. Inspiração: deck da DevFest POA. O `deck-fortaleza.pdf` atual é antigo. Exportar o PDF novo e colocar as notas a partir de `roteiro-prompter.txt`.
4. **Mensagem do grupo:** o rascunho fica fora deste repositório, em `~/xikota-os/_inbox/secretario-2026-11-13/preparo/workshop-fortaleza-mensagem.md`. Atualizar para a v10: título novo, preparo obrigatório com a conexão e o `meus-dados.txt`, duplicar o arquivo de novo, mesa às 17h30, links da tag `fortaleza-v5`, Netlify opcional. Nada é enviado antes de você ver a versão.
5. **Voluntários:** mandar o `guia-voluntarios.md` da v10 [VERIFICAR com a Gi quem são].
6. **Perguntas para a Gi** (`perguntas-gi.md`): chegada antes das 17h30, espaço para a mesa e rede. **`para-o-mateus.md` ao Mateus** [VERIFICAR: se já foram].
7. **Pendrive:** `handoff`, `meu-site-kit` e o guia. Cobrar o voluntário que leva. Sem confirmação, o pendrive é seu.


## Terça, 17/11

1. Chave do palco: criada a partir de 12/11 (validade de 7 dias). Revogar depois do workshop, fora do telão.
2. No Mac, para o caso de a rede cair: o deck do Google Slides offline, o PDF de reserva, as notas, o ZIP, as gravações das demos e as saídas do ensaio.
3. **Pendrive com três coisas:** a pasta `handoff`, a pasta `fortaleza/meu-site-kit` e `fortaleza/guia-participante.md`. USB comum e USB-C. Testar com o wifi desligado.
4. Carregar o Mac e separar o adaptador do projetor [VERIFICAR com a Gi a entrada].


## Quarta, 18/11

### De manhã

1. Figma Desktop com o arquivo do exercício, plugin Bridge em "Local · ready", Claude Desktop: o alô diz o nome do arquivo e 104, e o painel do Figma mostra o mesmo número.
2. Frame "Minha hero" do palco no estado de molde, variáveis nos valores originais, `meus-dados.txt` do palco preenchido.
3. `meu-site-kit` e `handoff` na Área de Trabalho do Mac.

### Na sala, antes das 17h30 [VERIFICAR com a Gi o horário de chegada]

1. Mesa de instalação montada com os voluntários. Você fica no palco, não na mesa. Ela fecha às 18h00.
2. Carregador ligado, tela sem dormir (`caffeinate -dis`), Não Perturbe.
3. 8 GB de RAM: só o deck, Claude Desktop, Figma Desktop e o navegador.
4. Alô na rede da sala.
5. Deck no modo apresentador, notas na tela do Mac; se o projetor só espelhar, notas no papel.
6. QR lido do fundo da sala abre o guia na tag `fortaleza-v5`.
7. Canvas e painéis do Figma legíveis do fundo; se não, aumentar o zoom da interface.
8. Cinco minutos com os voluntários sobre `guia-voluntarios.md`: a mesa e quando desistir, metades da sala, relógio, pendrive, revogar só a chave do workshop.

### Durante

| Relógio | Você |
|---|---|
| 18h00 | Abertura (slides 1 a 3): capa com a hero, demo de 1 minuto, as peças com logos (cabo USB-C) |
| 18h10 | Setup guiado (4 a 7): guia e QR, instale e confira, "Local · ready", o alô com 104 conferido no painel. Mãos de quem não conectou |
| 18h35 | Sua hero pelo agente (8 a 10): prompt 1 no telão com os seus dados, conferir camadas editáveis e a variável, o exemplo que mudou de cor |
| 18h55 | Possibilidades (11 e 12): comentário lido e aplicado, handoff, harness e `DESIGN.md`, chat x Claude Code |
| 19h05 | Do Figma ao HTML (13): prompt 2 com o `DESIGN.md`, baixar, abrir. Plano B e plano C à mão |
| 19h20 | Confira como designer (14): site ao lado do frame, janela estreita, um ajuste |
| 19h30 | Próximos passos e fecho (15 e 16): bento, galeria, revogar a chave do workshop, "Levem a `handoff`." Fim às 19h40 |

Atrasou: a galeria encolhe primeiro, depois os próximos passos, depois a demo do comentário vira gravação. O alô, o prompt 1, o prompt 2, a conferência e revogar não são cortados.

### No fim

1. Revogar a chave do palco, fora do telão.
2. Cinco minutos com o Mateus no coffee: quantos chegaram com a `handoff`.
