# Deck de Fortaleza: a nova sequência, slide a slide

Registro do deck para designers, conforme `.critica/spec-v2.md` (local, fora do Git). O deck do TDC original **não é tocado**; tudo acontece na cópia Fortaleza:

**Cópia Fortaleza:** https://docs.google.com/presentation/d/1BCULdnIibjQC0t571Nh77tcL1wnz-PRLkp0gWYTLyhU/edit

**Estado em 13/11:** a aplicação desta sequência no Google Slides está sendo feita por outra sessão, em paralelo. Este arquivo descreve a sequência pela spec, não o que foi conferido no Slides. Antes de usar: exportar o PDF para `fortaleza/deck-fortaleza.pdf` e ler o PDF inteiro contra as regras abaixo (`checklist-thiago.md`, Até segunda, item 2).


## Regras de todo slide

- Cada slide de tarefa tem: **verbo de tarefa**, **"deu certo quando..."** e uma **imagem** do resultado esperado.
- Prompt inteiro só no guia. No slide, no máximo a primeira linha do prompt, em fonte grande.
- Corpo de no mínimo 24 pt no PDF de 960 x 540. Rótulo nunca abaixo de 18 pt. Contraste AA (4,5 para 1), inclusive na barra de etapas.
- Sem chips de palco (FALA, ESPERA, DEMO NO CLAUDE, SALA FAZ) no slide: vão para as notas do orador.
- A barra de etapas destaca a etapa atual. Parte A: Exportar · Revisar · Decidir · Prototipar · Testar. Parte B: Ler · Auditar · Gerar · Conferir · Salvar · Revogar.
- Nada de React, TypeScript, WebSocket ou servidor. MCP aparece uma vez (slide 4), como "a ligação local entre o Claude e o Figma".
- Nunca chamar `#C8352B` de "cor errada" ou de valor que a IA criou. O valor é igual ao token; o que falta é o vínculo.
- Rodapé: "Fora do Frame · uma experiência UXFor · Fortaleza". Sem "Xikota.ai, em construção".
- Horários só nas notas do orador, na grade nova.


## A sequência

| # | Bloco | Slide | Na tela | Deu certo quando / nota |
|---|---|---|---|---|
| 1 | Abertura, 18h00 | Capa | "Seu Figma vira produto" e "Design com IA, do arquivo ao protótipo que funciona". Data e local | Sem MCP na capa |
| 2 | Abertura | Quem fala com vocês hoje | Só o Thiago, foto e uma linha | Bruno e Lourena saem do slide e das notas |
| 3 | Abertura | O que você leva | Parte A: protótipo navegável da Tela demo, a partir da imagem. Parte B: a mesma Tela demo lida do arquivo, o Card e os tokens para o Mateus. Não terminou: a pasta de exemplo | Nota: "O Card não é o protótipo da A. É o ponto de partida do Mateus às 20h" |
| 4 | Abertura | As rotas | Parte A: todo mundo, conta e navegador. Parte B sozinho: quem instalou em casa. Parte B em dupla: quem não instalou. "Ninguém instala nada aqui." Uma linha: a Parte B usa a ligação local entre o Claude e o Figma | Única menção ao MCP |
| 5 | Abertura | Guia | QR para `fortaleza/guia-participante.md` no GitHub, URL visível igual à do QR | Testar o QR do fundo da sala |
| 6 | Parte A, 18h08 | Exporte a Tela demo | Print do frame selecionado e do painel Export, PNG 2x | Você tem o PNG do formulário inteiro |
| 7 | Parte A, 18h12 | Peça a revisão de dev | Primeira linha do prompt A2, grande. Print de uma lista de exemplo | Lista numerada, cada ponto "visto" ou "suposto" |
| 8 | Parte A, 18h19 | Você decide quais pontos aceita | "A IA aponta. Quem decide é você." Exemplo: "Aceito 1, 3 e 4. Recuso o 2 porque..." | Números anotados, antes de gerar |
| 9 | Parte A, 18h22 | Gere o protótipo | Primeira linha do prompt A4. Print do protótipo na conversa | O protótipo aparece na conversa, com só os pontos aceitos |
| 10 | Parte A, 18h31 | Teste e anote uma diferença | Print do erro com campo vazio e da tela "Conta criada" | Erro e sucesso testados, uma diferença anotada |
| 11 | Ponte, 18h33 | A tese | "A imagem mostra como a tela parece. O arquivo mostra do que ela é feita." | |
| 12 | Ponte | Botão "Continuar" | Lado a lado: o vermelho na imagem; no Figma, `#C8352B` sem variável e fora do componente Button; o token `color/brand-primary` com o mesmo valor | "O valor é igual. O vínculo não existe. Se a marca mudar, o botão fica para trás" |
| 13 | Ponte | Texto "Leva menos de um minuto" | `#A29B93` sobre `#FFFFFF`, cerca de 2,75 para 1, contra 4,5 do AA | A imagem deixa estimar; o arquivo dá o valor |
| 14 | Ponte | Campo "nome" | Campo nome com borda ao lado do campo e-mail preenchido (`color/surface-alt`) | Parece escolha; o arquivo mostra que saiu do padrão |
| 15 | Ponte | A cadeia | Propriedade no Figma, token, valor, código gerado | `var(--token)` sozinho não prova leitura |
| 16 | Conexão, 18h38 | Confira a conexão | Print da resposta do Claude com o nome do arquivo. "Não instalou? Forme dupla agora" | O Claude disse o nome do arquivo |
| 17 | Parte B, 18h48 | Leia as três propriedades | Primeira linha do prompt B1. Print da resposta | `#C8352B` sem variável, `#A29B93`, campo nome com borda. Vazio: confira arquivo e plugin antes de repetir |
| 18 | Parte B, 18h53 | Audite | Primeira linha do prompt B2. Print da Tela demo ao lado de um achado | Cada achado com nome de token ou regra |
| 19 | Parte B, 18h58 | Gere o Card | Primeira linha do prompt B3. Print do Card | Dois blocos e 3 linhas no fim. "Não é o protótipo: é o ponto de partida do Mateus" |
| 20 | Parte B, 19h05 | Confira três valores no Figma | Tabela: `color/brand-primary` `#C8352B`, `font-size/heading` 20, `space/3` 24. Print do painel de variáveis | Os três batem no painel |
| 21 | Salvar, 19h10 | Salve os três arquivos | Print da pasta final com `tokens.json`, `Card.html`, `Card.css`; do Card aberto no navegador sem cor; do jsonlint dizendo válido | Três arquivos com o nome certo, abertos |
| 22 | Salvar, 19h20 | Corte | "Não terminou? Copie a pasta `handoff` do ZIP. É o exemplo, e o Mateus sabe" | Pasta de exemplo copiada e identificada |
| 23 | Revogar, 19h22 | Revogue o token | Print de Settings > Security > Personal access tokens, o Revoke e a confirmação | O token sumiu da lista. Revogue também o de casa |
| 24 | Fecho, 19h26 | Limites | Protótipo da imagem é aproximação. Código gerado é ponto de partida. A ligação lê o sistema que existe | Um slide só |
| 25 | Fecho | Uma pergunta | "Qual ponto da revisão você recusou, e por quê?" | Funciona para quem fez só a A |
| 26 | Fecho | Às 20h, o Mateus | Duas origens da pasta: `fora-do-frame` (gerada por você) ou `handoff` (o exemplo). As duas servem | Último slide. Sem formulário, sem mentoria |


## De onde vem cada slide da cópia antiga (34 slides)

| Antigo | Destino |
|---|---|
| 1 | Novo 1, capa reescrita |
| 2, "quem é de código?" | Sai |
| 3, três pessoas | Novo 2, só o Thiago, título "Quem fala com vocês hoje" |
| 4, promessa técnica | Novo 3, reescrito com as duas entregas |
| 5, "surpresa" | Sai (sem mentoria) |
| 6 e 7, arquitetura | Saem. A ligação vira uma linha no novo 4 |
| 8 a 11, demo de abertura | Saem |
| 12 e 13, Take A e Take B | Saem. A ponte nova (11 a 15) usa a mesma Tela demo e as 3 propriedades |
| 14, QR | Novo 5 |
| 15 a 19, instalação na sala | Saem. A instalação é tarefa de casa e vive só no guia |
| 20 a 27, passos | Substituídos pelos novos 16 a 23, sem prompt inteiro |
| 28 a 30, validação e limites | Novo 24, um slide |
| 31, pergunta genérica | Novo 25, pergunta sobre a decisão |
| 32, fechamento abstrato | Sai |
| 33, passagem | Novo 26, com as duas origens |
| 34, formulário e mentoria | Sai, com o rodapé "Xikota.ai, em construção" |


## Notas do orador

Cada slide leva na nota o horário da grade nova (`roteiro.md`), a fala sugerida e as instruções de palco que saíram do slide (o que antes era FALA, ESPERA, DEMO NO CLAUDE, SALA FAZ).


## Já aplicado antes desta versão

Continuam valendo: rodapé de Fortaleza no lugar das comunidades de Florianópolis; acento corrigido no slide do QR; QR apontando para o guia no GitHub, lido de volta com `zbarimg`. Falta o teste do QR com o celular, de longe, no projetor.
