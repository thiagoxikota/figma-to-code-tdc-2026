# Checklist do Thiago

Workshop de quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota. Título: "Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona". Público: designers.


## Até segunda, 16/11 (antes de a mensagem sair)

1. **Ensaio da Parte A numa conta gratuita do Claude.** Exportar a "Tela demo" em PNG 2x, colar e mandar os prompts A2 e A3 do `guia-participante.md`. Confirmar três coisas que o material assume sem teste:
   - o protótipo do A3 aparece funcionando na conversa, na conta gratuita, sem pedir de novo;
   - os dois prompts cabem no limite da conta gratuita com folga (anotar quantas mensagens sobram);
   - o A3 funciona igual no Claude do navegador e no app.
   Se o protótipo não aparecer na conversa, ajustar o A3 e a frase "aparece no próprio Claude" no guia, no roteiro e no deck.
2. **Ensaio da Parte B, ao vivo, no seu Mac.** Claude Desktop com conta gratuita, instalação pelo comando único, arquivo da Community duplicado. Rodar B1 a B7 de ponta a ponta. O B4 (Card direto em HTML e CSS) e o B6 nunca foram rodados: confirmar que o B4 devolve os dois blocos com as classes pedidas e que o B6 devolve 23 tokens com `px` nas medidas.
3. **Converter a sua saída do B6** com `npx style-dictionary build` (configuração em `para-o-mateus.md`) e abrir o `Card.html` do B4 no navegador. Tem que ficar parecido com o `handoff/Card.html`.
4. **Cronometrar as duas partes** na conta gratuita. Parte A tem 25 min e Parte B tem 28. Se a B passar, o B6 vira "pegue o `handoff/`" ao vivo.
5. **Rodar o comando de instalação numa máquina limpa,** se conseguir uma emprestada, e medir. A grade conta com 15 min de setup.
6. **Deck:** aprovar e aplicar a lista "Nova versão para designers" em `deck-ajustes.md`, decidir os itens de "Falta decidir" (slide 3, mentoria e formulário, rótulo Xikota.ai) e exportar o PDF para `fortaleza/deck-fortaleza.pdf`.
7. **Mandar as perguntas para a Gi** (`perguntas-gi.md`).
8. **Mandar `para-o-mateus.md` ao Mateus**, para ele saber que o público agora é de designers e que boa parte da sala deve chegar com o `handoff/`. Se ele pedir mudança, ajustar os prompts B4 ou B6 e o `handoff/`.
9. **Se quiser, testar no Windows.** O caminho Claude Desktop em Windows foi testado no TDC, mas não com o comando único nem com o B6.
10. Revogar o token do ensaio.


## Terça, 17/11

1. Não gere o token do palco ainda: validade de 1 dia não cobre de terça para quarta. Ele sai na quarta de manhã.
2. Baixar `fortaleza/deck-fortaleza.pdf` e a pasta `outputs-prebaked/` no Mac, para o caso de a rede cair. Guardar também a saída do seu ensaio da Parte A (o protótipo e a revisão), para mostrar como ensaio se a rede cair.
3. Carregar o Mac e separar o adaptador do projetor [VERIFICAR com a Gi a entrada].


## Quarta, 18/11

### De manhã

1. Gerar o token do palco (1 dia) pelo comando único, como a sala vai fazer. Fechar o Claude por completo e reabrir.
2. "Verifique o status da conexão com o Figma" e leitura da Tela demo. Tem que voltar "Criar sua conta".
3. Exportar o PNG da Tela demo e deixar na área de trabalho, para a Parte A no telão.

### Na sala, antes das 18h00 [VERIFICAR com a Gi o horário de chegada]

1. Carregador ligado. Ajustes > Tela > nunca dormir, ou `caffeinate -dis` num terminal escondido.
2. Fechar tudo que não é palco. 8 GB de RAM: só o PDF do deck, Claude Desktop, Figma Desktop e o Terminal.
3. Não Perturbe ligado.
4. Figma Desktop no arquivo da demo, página "01 Comece aqui", plugin Bridge rodando com a janela aberta.
5. Teste de conexão e de leitura da Tela demo na rede da sala.
6. Deck em tela cheia, telão espelhado (não estendido). Space 1 deck, Space 2 Claude e Figma lado a lado, Ctrl+seta para trocar.
7. Escanear o QR do slide 14 do fundo da sala.
8. Com os voluntários: cinco minutos sobre `guia-voluntarios.md`. Quem cobre a instalação, quem cobre a Parte A, quem guarda o relógio.

### Durante

| Relógio | Você |
|---|---|
| 18h00 | Tese e promessa |
| 18h05 | Duas partes, QR do guia, "quem vai fazer a B, abre o Terminal" |
| 18h10 | Comando no telão, pausa por pausa |
| 18h23 | Corte: travado vai para a Parte A e faz a B em dupla |
| 18h25 | Parte A no telão com a Tela demo |
| 18h50 | A ponte: "Imagem é aproximação. O arquivo é a fonte." |
| 18h55 | Parte B |
| 19h14 | B6: "Agora vocês levam pro código" |
| 19h21 | Revogar |
| 19h23 | O que divergiu e limites |
| 19h27 | Perguntas |
| 19h32 | Síntese e passagem para o Mateus |
| 19h36 | Encerrar (margem até 19h40) |

### No fim

1. Revogar o seu token do palco.
2. Cinco minutos com o Mateus no coffee: como a sala saiu (quantos fizeram a Parte B com arquivo próprio, quantos usam o `handoff/`, se o JSON veio com algum desvio).


## O que só você pode fazer

- Os dois ensaios (itens 1 e 2 de segunda). Nenhum prompt da Parte A nem o B4 e o B6 foram rodados no Claude contra o arquivo real; o que está testado é o `handoff/` e a conversão com Style Dictionary.
- As decisões e a edição do deck.
- Mandar as perguntas à Gi e o documento ao Mateus.
