# Deck de Fortaleza v8: slide a slide

Este arquivo descreve o deck v8, com 17 slides seguindo a grade da seção "v8" de `.critica/spec-v7.md`. O PDF `fortaleza/deck-fortaleza.pdf` já tem os 17 slides da v8 (exportado em 16/11, às 14h57); conferir contra esta tabela antes do commit.

**Cópia Fortaleza no Google Slides:** https://docs.google.com/presentation/d/1BCULdnIibjQC0t571Nh77tcL1wnz-PRLkp0gWYTLyhU/edit

**A apresentação é pelo Google Slides, com as notas do apresentador.** O PDF é reserva e não mostra as notas. Mudou algo no Slides? Exporte o PDF de novo para `fortaleza/deck-fortaleza.pdf` e atualize a tabela abaixo no mesmo commit.


## Regras de todo slide

- Horário só como "até 18h21", no canto do slide. Sem marcadores de modo (nada de "Faça agora", "Olhe o telão", "1. Olhe 2. Faça") e sem "Deu certo quando" no slide.
- Linguagem de designer. Nada de "propriedade", "estado", "origem do valor", "rota", "comparação pendente", VIU ou SUPÔS.
- A parte técnica é "a conexão" ou "conectar o Figma ao Claude". A sigla MCP aparece uma vez, no slide 4, explicada: "MCP, o jeito de o Claude conversar com o Figma". "Chave do Figma" só no slide 16.
- Prompt inteiro só no guia. No slide, no máximo a primeira linha.
- Corpo de 24 pt ou mais no PDF de 960 x 540. Legenda em 18 pt. Contraste AA.
- Nunca chamar `#C8352B` de cor errada. O valor é igual ao do token; o que falta é a ligação.
- Os valores do texto de apoio e do campo nome só aparecem no slide 11, depois dos chutes e da leitura de cada um.
- A correção é "um valor copiado do arquivo". Nenhum slide diz que o protótipo ficou ligado ao Figma.
- Imagem que não saiu de uma execução real leva a legenda "Exemplo do material". Nenhuma legenda diz "ao vivo".
- FALA, SALA FAZ, DEMO e as falas ficam nas notas do orador, que seguem `roteiro-prompter.txt`.


## A sequência

| # | Canto | Slide | Na tela | Imagem |
|---|---|---|---|---|
| 1 | 18h00 | Capa | Título, evento, nome e cargo | sem imagem |
| 2 | até 18h05 | O que você leva | "Você sai com o Figma conectado ao Claude, com o seu formulário funcionando, corrigido com um valor que o seu Claude leu do seu arquivo, e sabendo o que a imagem não mostra." Abaixo: a tela tem problemas de propósito; umas 7 mensagens no Claude gratuito, cada prompt uma vez | formulário com o texto de apoio corrigido (exemplo do material, `exemplo-form-texto-corrigido.png`) |
| 3 | até 18h05 | Abra o guia no notebook | Link da mensagem do grupo, endereço do guia na tag `fortaleza-v3` e QR | `qr-guia.png` (guia na tag `fortaleza-v3`) |
| 4 | até 18h10 | Teste da conexão | "Qual arquivo está aberto no Figma agora?" O Claude diz o nome. "MCP, o jeito de o Claude conversar com o Figma." Não conectou: acompanhe a leitura pelo telão | espaço reservado: o Claude Desktop respondendo o nome do arquivo |
| 5 | até 18h14 | 1. Exporte a tela | Clique no nome Tela demo, Export, PNG 2x. Legenda: imagem pronta no guia | `tela-demo.png` (real) |
| 6 | até 18h21 | 2. O Claude revisa, você decide | "Até 3 sugestões. Anote quais aceita e por que recusa." Exemplo: recusar o campo de senha, porque esta etapa não pede senha. Conversa nova, separada da do teste | espaço reservado: a lista da revisão |
| 7 | até 18h35 | 3. A tela vira formulário | O mínimo: digitar, erro com campo vazio, "Conta criada", mais só as sugestões aceitas | `exemplo-form-preenchido.png`, `exemplo-form-erro.png`, `exemplo-form-sucesso.png` (exemplos do material) |
| 8 | até 18h47 | 4. Brinque com o formulário | Até 2 ajustes. O menu: versão escura, mais respiro, erro mais gentil, botão desabilitado até preencher, animação no "Conta criada", trocar o vermelho da marca. "Mostre ao vizinho" | sem imagem, ou captura do ajuste do ensaio |
| 9 | até 19h05 | 5. Chuta o valor | "Qual é a cor de 'Leva menos de um minuto'? Passa no AA? O campo nome é preenchido ou só contorno?" Primeiro o seu Claude chuta, olhando só a imagem; depois a sala. Sem nenhum valor | `tela-demo.png` (real), com o texto de apoio e o campo nome marcados |
| 10 | até 19h05 | Pergunte ao arquivo, na sua máquina | "Na conversa do arquivo, no Claude Desktop, mande a leitura do guia." As três perguntas em uma linha cada: texto de apoio, campo nome, botão | espaço reservado: a leitura do ensaio no Claude Desktop |
| 11 | até 19h05 | O arquivo responde | Texto de apoio `#A29B93`, 2,75 para 1 (AA pede 4,5), token certo `color/text-muted` `#6C665F`. Campo nome só contorno, padrão `color/surface-alt` `#F5F3F0`. "Confira com o que o seu Claude leu" | `figma-texto-apoio.png`, `figma-campos.png` (reais) |
| 12 | até 19h05 | E o botão? | Botão `#C8352B` igual a `color/brand-primary`, digitado direto: "Se a marca mudar, esse botão fica para trás. A imagem não tem como mostrar isso." | `figma-botao.png` (real) |
| 13 | até 19h05 | Uma leitura que não está no guia | "Escolham uma camada e um valor." Os passos em uma linha cada; depois, cada um repete na própria máquina. Rodapé: a tese | espaço reservado: o painel do Figma, o pedido e a resposta |
| 14 | até 19h20 | 6. Corrija com o valor que o seu Claude leu | Texto de apoio ou campo nome, na conversa do protótipo. "É um valor copiado do arquivo agora." | `exemplo-texto-antes.png` e `exemplo-texto-depois.png`, `exemplo-campos-antes.png` e `exemplo-campos-depois.png` (exemplos do material) |
| 15 | até 19h30 | 7. Galeria | "Qual correção você fez, e por quê?" | sem imagem |
| 16 | até 19h35 | Revogue a chave | Settings > Security > Personal access tokens > Revoke, em todas que você criou para hoje | sem imagem, ou captura da tela de revogação sem nenhuma chave visível |
| 17 | até 19h40 | Imagem ou arquivo, e às 20h com o Mateus | Imagem para como a tela parece; arquivo para cor, medida e ligação com o design system. Três limites em uma linha cada. "Levem a pasta `handoff`." O formulário fica com vocês, no Claude | Card do `handoff/` (real) |

A tese, "A imagem mostra como a tela parece. O arquivo mostra do que ela é feita.", entra no rodapé do slide 13 e é dita no fim dele.


## De onde vem cada imagem

Nenhuma captura é inventada. A legenda do slide diz o tipo.

**Reais** (em `fortaleza/telao/`): `tela-demo.png`, os recortes `figma-botao.png`, `figma-texto-apoio.png` e `figma-campos.png`, e o Card do `handoff/` aberto no navegador.

**Exemplo do material:** renderizados de `fortaleza/telao/formulario-exemplo.html`, feito com as medidas e as cores da Tela demo. Não é saída do Claude. São os `exemplo-*.png`, usados nos slides 2, 7 e 14.

**QR:** `qr-guia.svg` e `qr-guia.png` foram refeitos em 16/11 para o guia na tag `fortaleza-v3`. Só abrem depois de a tag existir.

**Espaço reservado,** que só o ensaio preenche:

| Slide | Captura do ensaio |
|---|---|
| 4 | O Claude Desktop respondendo o nome do arquivo aberto no Figma |
| 6 | A lista da revisão, com até 3 sugestões |
| 10 | A resposta da leitura, em 3 linhas, no Claude Desktop |
| 13 | O painel do Figma com o valor escolhido, o pedido do Claude ao Figma e o retorno. Entra dito como ensaio; o que vale é a leitura feita na sala |

**Capturas opcionais:**

| Slide | Captura do ensaio |
|---|---|
| 5 | O frame Tela demo selecionado e o painel Export aberto |
| 7 | O protótipo do Thiago na conversa |
| 8 | Um ajuste do menu aplicado ao protótipo |
| 9 | O chute do Claude pela imagem |
| 14 | O formulário do Thiago antes e depois da correção |
| 16 | A lista de Personal access tokens vazia, sem nenhuma chave à vista |
