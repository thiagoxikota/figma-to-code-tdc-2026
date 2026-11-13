# Checklist do Thiago

Workshop de quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota.


## Até segunda, 16/11 (antes de a mensagem sair)

1. **Ensaio completo, ao vivo, no seu Mac.** Claude Desktop com conta gratuita, `figma-console-mcp@1.35.0`, arquivo da Community duplicado. Rodar os passos 1 a 8 do `guia-participante.md` de ponta a ponta. O passo 7 é novo e nunca foi rodado: confirmar que o 7a devolve 23 tokens com `px` nas medidas e que o 7b devolve os dois blocos com as classes pedidas.
2. **Converter a sua saída do 7a** com `npx style-dictionary build` (configuração em `para-o-mateus.md`) e abrir o `Card.html` do 7b no navegador. Tem que ficar igual ao `handoff/Card.html`.
3. **Cronometrar o passo 7** na conta gratuita. Se passar de 10 min, encurtar: só o 7a ao vivo e o Card vem do `handoff/`.
4. **Deck:** decidir os itens de "Falta decidir" em `deck-ajustes.md` (slide 3, mentoria e formulário, rótulo Xikota.ai) e aplicar na cópia. Exportar o PDF para `fortaleza/deck-fortaleza.pdf`.
5. **Mandar as perguntas para a Gi** (`perguntas-gi.md`).
6. **Mandar `para-o-mateus.md` ao Mateus**, para ele confirmar formato de token e nome de pasta. Se ele pedir mudança, ajustar o prompt 7a ou 7b e o `handoff/`.
7. **Se quiser, testar no Windows.** O caminho Claude Desktop em Windows foi testado no TDC, mas não com o passo 7.
8. Revogar o token do ensaio.


## Terça, 17/11

1. Não gere o token do palco ainda: validade de 1 dia não cobre de terça para quarta. Ele sai na quarta de manhã.
2. Baixar `fortaleza/deck-fortaleza.pdf` e a pasta `outputs-prebaked/` no Mac, para o caso de a rede cair.
3. Carregar o Mac e separar o adaptador do projetor [VERIFICAR com a Gi a entrada].


## Quarta, 18/11

### De manhã

1. Gerar o token do palco (1 dia) e colocar no config do Claude Desktop. Fechar por completo e reabrir.
2. "Verifique o status da conexão com o Figma" e leitura da Tela demo. Tem que voltar "Criar sua conta".

### Na sala, antes das 18h00 [VERIFICAR com a Gi o horário de chegada]

1. Carregador ligado. Ajustes > Tela > nunca dormir, ou `caffeinate -dis` num terminal escondido.
2. Fechar tudo que não é palco. 8 GB de RAM: só o PDF do deck, Claude Desktop e Figma Desktop.
3. Não Perturbe ligado.
4. Figma Desktop no arquivo da demo, página "01 Comece aqui", plugin Bridge rodando com a janela aberta.
5. Teste de conexão e de leitura da Tela demo na rede da sala.
6. Deck em tela cheia, telão espelhado (não estendido). Space 1 deck, Space 2 Claude e Figma lado a lado, Ctrl+seta para trocar.
7. Escanear o QR do slide 14 do fundo da sala.
8. Com os voluntários: cinco minutos sobre `guia-voluntarios.md`. Quem cobre o lado Figma, quem cobre o lado Claude, quem guarda o relógio.

### Durante

| Relógio | Você |
|---|---|
| 18h00 | Tese. Slides 1 a 5 |
| 18h07 | Demo: status, leitura, geração (slides 9 a 11) |
| 18h17 | Slide 14: guia no notebook |
| 18h41 | Corte de dupla |
| 18h47 | "A prática começa agora", mesmo com gente sem terminar |
| 19h07 | Passo 7: "Agora vocês levam pro código" |
| 19h17 | Revogar |
| 19h28 | Perguntas |
| 19h33 | Síntese e passagem para o Mateus |
| 19h38 | Encerrar |

### No fim

1. Revogar o seu token do palco.
2. Cinco minutos com o Mateus no coffee: como a sala saiu (quantos com arquivo próprio, quantos com `handoff/`, se o JSON veio com algum desvio).


## O que só você pode fazer

- O ensaio ao vivo no Figma (item 1 de segunda). Nenhum dos prompts do passo 7 foi rodado no Claude Desktop contra o arquivo real; o que está testado é o `handoff/` e a conversão com Style Dictionary.
- As decisões do deck.
- Mandar as perguntas à Gi e o documento ao Mateus.
