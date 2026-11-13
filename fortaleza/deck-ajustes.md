# Deck de Fortaleza: o que está no PDF, slide a slide

Este arquivo descreve o deck **como ele está** em `fortaleza/deck-fortaleza.pdf`, exportado em 13/11 da cópia Fortaleza no Google Slides. São 24 slides. O deck do TDC original não foi tocado.

**Cópia Fortaleza:** https://docs.google.com/presentation/d/1BCULdnIibjQC0t571Nh77tcL1wnz-PRLkp0gWYTLyhU/edit

Mudou algo no Slides? Exporte o PDF de novo para `fortaleza/deck-fortaleza.pdf` e atualize a tabela abaixo no mesmo commit.


## Regras de todo slide

- Slide de tarefa tem **verbo de tarefa** e **"Deu certo quando..."**. A imagem do resultado entra onde existe uma imagem real (ver "Capturas que faltam").
- Prompt inteiro só no guia. No slide, no máximo a primeira linha.
- Corpo de 24 pt ou mais no PDF de 960 x 540. Rótulo e barra de etapas em 18 pt. Contraste AA.
- Sem chips de palco no slide. FALA, SALA FAZ, DEMO e ESPERA ficam nas notas do orador, junto com os horários.
- A barra de etapas destaca a etapa atual. Parte A: A1 Exportar · A2 Revisar · A3 Decidir · A4 Protótipo · A5 Testar. Parte B: B1 Ler · B2 Decidir · B3 Gerar · B4 Conferir · B5 Salvar · B6 Revogar.
- Nada de React, TypeScript, WebSocket ou servidor. MCP aparece uma vez (slide 14), como "a ligação local entre o Claude e o Figma".
- "Chave do Figma" é o personal access token. "Tokens de design" são os valores com nome. As duas coisas nunca aparecem só como "token".
- Nunca chamar `#C8352B` de cor errada. O valor é igual ao do token; o que falta é o vínculo.


## A sequência

| # | Horário | Slide | Na tela | Imagem |
|---|---|---|---|---|
| 1 | 18h00 | Capa | Título, "Design com IA, do arquivo ao protótipo que funciona", nome e cargo do Thiago | sem imagem |
| 2 | 18h00 | Duas saídas, e as duas valem | 1. O protótipo: nasce da imagem, fica com você. 2. A pasta, com Card e tokens: nasce do arquivo, segue com o Mateus. Definição de tokens de design e a pasta de exemplo | real: `tela-demo.png` e `card-gerado.png` |
| 3 | 18h00 | Duas rotas, a mesma Tela demo | Parte A todo mundo; Parte B sozinho; Parte B em dupla, com papel para quem acompanha | sem imagem |
| 4 | 18h00 | Abra o guia na sua máquina | Endereço do guia em três linhas e o QR | QR |
| 5 | 18h05 | A1. Exporte a Tela demo | Clicar no nome do frame; Export, +, PNG, 2x | real: a Tela demo exportada. Falta a captura do painel Export |
| 6 | 18h10 | A2. Peça a revisão de dev | Primeira linha do prompt; visto e suposto | falta a captura da lista |
| 7 | 18h17 | A3. Você decide quais pontos aceita | Exemplo de decisão; anotar números e uma frase por recusa | sem imagem (é papel) |
| 8 | 18h21 | A4. Gere o protótipo | Primeira linha do prompt; o que fazer se vier só código | falta a captura do protótipo na conversa |
| 9 | 18h30 | A5. Teste e anote uma diferença | Erro, sucesso e uma diferença guardada | falta a captura dos dois estados |
| 10 | 18h35 | A tese | "A imagem mostra como a tela parece. O arquivo mostra do que ela é feita." | real: `tela-demo.png` |
| 11 | 18h35 | Botão Continuar: valor igual, vínculo nenhum | Na imagem, um vermelho. No arquivo, `#C8352B` digitado direto, sem variável e fora do componente Button | real: `figma-botao.png`. Falta a captura do painel do Figma |
| 12 | 18h35 | O que a imagem deixa estimar, o arquivo diz | Texto de apoio: 2,75:1 contra 4,5:1. Campo nome: com borda, fora do padrão `color/surface-alt` | real: `figma-texto-apoio.png` e `figma-campos.png` |
| 13 | 18h35 | A prova é a cadeia, do Figma ao resultado | Variável no Figma, valor lido, linha do `Card.css`, botão na tela | real: `card-gerado-botao.png` |
| 14 | 18h41 | Confira a conexão | Só quem instalou em casa; uma tentativa e depois dupla | falta a captura da resposta com o nome do arquivo |
| 15 | 18h48 | B1. Leia a Tela demo pelo arquivo | As três perguntas da ponte; o que fazer se voltar vazio | falta a captura da resposta |
| 16 | 18h53 | B2. Decida uma correção e leve ao protótipo | Exemplo de correção escrita; prompt B2 na conversa da Parte A | falta a captura (depende do ensaio) |
| 17 | 18h58 | B3. Gere o Card com os tokens | "É a passagem para o Mateus. Não substitui o seu protótipo." | real: `card-gerado.png`, marcado como exemplo |
| 18 | 19h06 | B4. Confira três linhas do CSS no Figma | Três linhas do `Card.css` e os três valores | falta a captura das variáveis no Figma |
| 19 | 19h10 | B5. Salve os três arquivos | Colar, salvar como texto puro, achar os três valores no JSON | real: `card-sem-tokens.png`. Falta a captura da pasta |
| 20 | 19h25 | 19h25: corte. Use a pasta de exemplo | Sem arquivo ou em dupla; faltou um; chegou sem o ZIP | sem imagem |
| 21 | 19h28 | B6. Revogue a chave do Figma | Caminho, confirmação e "é uma chave só" | falta a captura da lista, sem a chave visível |
| 22 | 19h33 | Qual ponto você recusou, e por quê? | A pergunta do fecho | sem imagem |
| 23 | 19h33 | Os limites | Três limites | sem imagem |
| 24 | 19h33 | Às 20h, o Mateus continua a sua pasta | "Os tokens e o Card, não o formulário." As duas origens | sem imagem |

O slide de apresentação pessoal saiu: o nome e o cargo do Thiago estão na capa. Decisão reversível.


## Capturas que faltam

As imagens marcadas como "real" vêm de `fortaleza/telao/` e mostram o que existe: a Tela demo exportada, recortes dela e o Card de `handoff/` aberto no navegador. Tela do Figma com painel aberto e resposta do Claude não foram simuladas. Elas saem do ensaio do Thiago na conta gratuita (`checklist-thiago.md`), e cada uma entra no slide abaixo:

| Slide | Captura | Onde colocar |
|---|---|---|
| 5 | Figma com o frame Tela demo selecionado e o painel Export aberto | no lugar da imagem atual, ou ao lado dela |
| 6 | A lista da revisão, com visto e suposto | à direita do corpo |
| 8 | O protótipo aberto na conversa do Claude | à direita do corpo |
| 9 | Os dois estados: erro e "Conta criada" | à direita do corpo |
| 11 | O botão "Continuar" selecionado, com o fill sem variável | coluna "No arquivo" |
| 14 | A resposta do Claude com o nome do arquivo e a janela do Bridge | à direita do corpo |
| 15 | A resposta do B1 | à direita do corpo |
| 16 | A resposta do B2 e o protótipo corrigido | à direita do corpo |
| 18 | As variáveis do Figma com os três valores | à direita da caixa |
| 19 | A pasta final com os três arquivos e o jsonlint dizendo válido | ao lado da imagem atual |
| 21 | A lista de Personal access tokens antes e depois do Revoke, sem a chave visível | à direita do corpo |

Se o ensaio mostrar que o B2 não funciona como o guia descreve, os slides 16 e 2, o guia e o roteiro mudam juntos: o B2 fica só com a decisão escrita.


## Conferência feita em 13/11

- PDF com 24 páginas de 960 x 540.
- `pdftotext` sem React, TypeScript, WebSocket, "cor inventada", Bruno, Lourena ou Concorra.
- Nenhum texto abaixo de 18 pt; 18 pt só em rótulo e barra de etapas.
- Todas as páginas olhadas uma a uma, renderizadas com `pdftoppm -r 50`.
