# Deck de Fortaleza v7: slide a slide

Este arquivo descreve o deck v7, montado em 16/11 no Google Slides, com 15 slides seguindo a grade de `.critica/spec-v7.md`. O PDF atual, `fortaleza/deck-fortaleza.pdf` (21 slides, exportado em 13/11), é da v6 e fica só como histórico até ser substituído.

**Cópia Fortaleza no Google Slides:** https://docs.google.com/presentation/d/1BCULdnIibjQC0t571Nh77tcL1wnz-PRLkp0gWYTLyhU/edit

**A apresentação é pelo Google Slides, com as notas do apresentador.** O PDF é reserva e não mostra as notas. Mudou algo no Slides? Exporte o PDF de novo para `fortaleza/deck-fortaleza.pdf` e atualize a tabela abaixo no mesmo commit.


## Regras de todo slide

- Horário só como "até 18h18", no canto do slide. Sem marcadores de modo (nada de "Faça agora", "Olhe o telão", "1. Olhe 2. Faça") e sem "Deu certo quando" no slide.
- Linguagem de designer. Nada de "propriedade", "estado", "origem do valor", "rota", "comparação pendente", VIU ou SUPÔS.
- A sigla MCP não aparece. No palco é "a conexão entre o Claude Desktop e o Figma". "Chave do Figma" só no slide 13, citando o bônus.
- Prompt inteiro só no guia. No slide, no máximo a primeira linha.
- Corpo de 24 pt ou mais no PDF de 960 x 540. Legenda em 18 pt. Contraste AA.
- Nunca chamar `#C8352B` de cor errada. O valor é igual ao do token; o que falta é a ligação.
- Os valores do texto de apoio e do campo nome só aparecem no slide 9, depois dos chutes.
- A correção é "um valor copiado do arquivo". Nenhum slide diz que o protótipo ficou ligado ao Figma.
- Imagem que não saiu de uma execução real leva a legenda "Exemplo do material". Nenhuma legenda diz "ao vivo".
- FALA, SALA FAZ, DEMO e as falas ficam nas notas do orador, que seguem `roteiro-prompter.txt`.


## A sequência

| # | Canto | Slide | Na tela | Imagem |
|---|---|---|---|---|
| 1 | 18h00 | Capa | Título, evento, nome e cargo | sem imagem |
| 2 | até 18h05 | O que você leva | "Você sai com o seu formulário funcionando, corrigido com um valor que veio do arquivo, e sabendo o que a imagem não mostra." Abaixo: a tela tem problemas de propósito; umas 5 mensagens no Claude gratuito; bateu no limite, junta com o vizinho | formulário com o texto de apoio corrigido (exemplo do material, `exemplo-form-texto-corrigido.png`) |
| 3 | até 18h05 | Abra o guia no notebook | Link da mensagem do grupo, endereço do guia na tag `fortaleza-v2` e QR | QR do guia na tag `fortaleza-v2` (a gerar) |
| 4 | até 18h10 | 1. Exporte a tela | Clique no nome Tela demo, Export, PNG 2x. Legenda: imagem pronta no guia | `tela-demo.png` (real) |
| 5 | até 18h18 | 2. O Claude revisa, você decide | "Até 3 sugestões. Anote quais aceita e por que recusa." Exemplo: recusar o campo de senha, porque esta etapa não pede senha | espaço reservado: a lista da revisão |
| 6 | até 18h33 | 3. A tela vira formulário | O mínimo: digitar, erro com campo vazio, "Conta criada", mais só as sugestões aceitas | `exemplo-form-preenchido.png`, `exemplo-form-erro.png`, `exemplo-form-sucesso.png` (exemplos do material) |
| 7 | até 18h48 | 4. Brinque com o formulário | Até 2 ajustes. O menu: versão escura, mais respiro, erro mais gentil, botão desabilitado até preencher, animação no "Conta criada", trocar o vermelho da marca. "Mostre ao vizinho" | sem imagem, ou captura do ajuste do ensaio |
| 8 | até 19h05 | 5. Chuta o valor | "Qual é a cor de 'Leva menos de um minuto'? Passa no AA? O campo nome é preenchido ou só contorno?" Sem nenhum valor | `tela-demo.png` (real), com o texto de apoio e o campo nome marcados |
| 9 | até 19h05 | O arquivo responde | Texto de apoio `#A29B93`, 2,75 para 1 (AA pede 4,5), token certo `color/text-muted` `#6C665F`. Campo nome só contorno, padrão `color/surface-alt` `#F5F3F0`. Botão `#C8352B` igual a `color/brand-primary`, digitado direto: "Se a marca mudar, esse botão fica para trás." Rodapé: a tese | `figma-texto-apoio.png`, `figma-campos.png`, `figma-botao.png` (reais) |
| 10 | até 19h05 | Uma leitura que não está no guia | "Escolham uma camada e um valor." Os cinco passos em uma linha cada | espaço reservado: o painel do Figma, o pedido e a resposta |
| 11 | até 19h20 | 6. Corrija com o valor do arquivo | Texto de apoio ou campo nome. "É um valor copiado do arquivo agora." | `exemplo-texto-antes.png` e `exemplo-texto-depois.png`, `exemplo-campos-antes.png` e `exemplo-campos-depois.png` (exemplos do material) |
| 12 | até 19h32 | 7. Galeria | "Qual correção você fez, e por quê?" | sem imagem |
| 13 | até 19h37 | Imagem ou arquivo | Imagem para como a tela parece; arquivo para cor, medida e ligação com o design system. Três limites em uma linha cada. QR do bônus | QR do guia na tag `fortaleza-v2` (o bônus fica no fim do guia) |
| 14 | até 19h40 | Às 20h, com o Mateus | "Levem a pasta `handoff`." O formulário fica com vocês, no Claude | Card do `handoff/` (real) |

A tese, "A imagem mostra como a tela parece. O arquivo mostra do que ela é feita.", entra no rodapé do slide 9 e é dita no fim do slide 10.


## De onde vem cada imagem

Nenhuma captura é inventada. A legenda do slide diz o tipo.

**Reais** (em `fortaleza/telao/`): `tela-demo.png`, os recortes `figma-botao.png`, `figma-texto-apoio.png` e `figma-campos.png`, e o Card do `handoff/` aberto no navegador.

**Exemplo do material:** renderizados de `fortaleza/telao/formulario-exemplo.html`, feito com as medidas e as cores da Tela demo. Não é saída do Claude. São os `exemplo-*.png`, usados nos slides 2, 6 e 11.

**A gerar:** o QR dos slides 3 e 13. O `qr-guia.svg` e o `qr-guia.png` atuais apontam para a tag `fortaleza` (v6) e precisam ser refeitos para o guia na tag `fortaleza-v2`.

**Espaço reservado,** que só o ensaio preenche:

| Slide | Captura do ensaio |
|---|---|
| 5 | A lista da revisão, com até 3 sugestões |
| 10 | O painel do Figma com o valor escolhido, o pedido do Claude ao Figma e o retorno. Entra dito como ensaio; o que vale é a leitura feita na sala |

**Capturas opcionais:**

| Slide | Captura do ensaio |
|---|---|
| 4 | O frame Tela demo selecionado e o painel Export aberto |
| 6 | O protótipo do Thiago na conversa |
| 7 | Um ajuste do menu aplicado ao protótipo |
| 8 | O chute do Claude pela imagem |
| 11 | O formulário do Thiago antes e depois da correção |
