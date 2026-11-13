# Roteiro: Figma MCP em Fortaleza

Fora do Frame, uma experiência UXFor, 3º dia (workshops presenciais). Quarta, 18/11/2026, Digital College Aldeota, Av. Santos Dumont, 1510, 1º andar, Fortaleza.

Janela do Thiago: 18h00 às 19h40 (100 min). Às 19h40 entra o coffee; às 20h, o workshop do Mateus Villain.

Base: o workshop do TDC Florianópolis (23/07/2026), com o mesmo cliente na sala (Claude Desktop, conta gratuita) e o mesmo MCP (`figma-console-mcp@1.35.0`, token e plugin Desktop Bridge). Fonte técnica: `docs/pipeline-facts.md`.


## O que muda em relação ao TDC

- O conteúdo do TDC ocupava 87 min. Os 13 que sobram viram cinco minutos a mais de setup, um passo novo de exportação (tokens em JSON e Card em HTML/CSS, a ponte para o Mateus) e uma margem de dois minutos no fim.
- O exercício passa de 7 para 8 passos: Ler, Tokens, Auditar, Gerar, Inspecionar, Corrigir, **Exportar**, Revogar. Exportar vem antes de Revogar porque ainda lê o Figma.
- Não há máquina do evento nem máquina reserva. Cada pessoa usa o próprio notebook [VERIFICAR com a Gi]. A saída para quem trava é a dupla.
- O guia do participante é `fortaleza/guia-participante.md`, não `thiagoxikota.com/tdc`. A página do TDC ensina o mesmo setup, mas oferece a rota de máquina reserva e não tem o passo de exportação.
- Fechamento com passagem explícita para o Mateus.


## Grade

| Horário | Bloco | Min | Slides (cópia Fortaleza do deck, 34 slides) |
|---|---|---|---|
| 18h00 a 18h03 | Problema e promessa | 3 | 1 a 5 |
| 18h03 a 18h07 | Como o fluxo funciona | 4 | 6 e 7 |
| 18h07 a 18h17 | Demo compacta no telão | 10 | 8 a 13 |
| 18h17 a 18h47 | Setup guiado | 30 | 14 a 19 |
| 18h47 a 19h07 | Exercício, passos 1 a 6 | 20 | 20 a 25 |
| 19h07 a 19h17 | Passo 7, Exportar | 10 | 26 (novo) |
| 19h17 a 19h20 | Passo 8, Revogar | 3 | 27 |
| 19h20 a 19h28 | Validação e limites | 8 | 28 a 30 |
| 19h28 a 19h33 | Perguntas | 5 | 31 |
| 19h33 a 19h38 | Síntese e passagem para o Mateus | 5 | 32, 33 (novo), 34 se ficar |
| 19h38 a 19h40 | Margem | 2 | |

Os números de slide são os da cópia Fortaleza do deck (link em `deck-ajustes.md`); de 1 a 25 coincidem com o deck do TDC.

Soma: 100 min. Em relação ao TDC, validação perdeu 2 min, perguntas e síntese perderam 1 cada.


## Bloco a bloco

### 18h00 a 18h03. Problema e promessa

Abre com a tese: a IA não lê a sua tela, ela lê o que você conseguiu especificar. O resto ela inventa.

Slide 3 apresenta quem está na sala hoje (ver `deck-ajustes.md`). Slide 4 traz a promessa: você sai com o pipeline rodando e com os arquivos na mão.

### 18h03 a 18h07. Como o fluxo funciona

Quatro peças, um cliente só: Figma Desktop, plugin Bridge, MCP, Claude Desktop. Sem bifurcação na sala. Claude Code só para quem já usa, e o guia cobre.

### 18h07 a 18h17. Demo compacta

Na máquina do Thiago, telão espelhado. Três idas ao Claude: status da conexão (slide 9), leitura da Tela demo (10), geração do Card (11). Depois o par Take A e Take B (12) e a frase da prova (13).

Se a demo travar: resultado do ensaio, de `outputs-prebaked/`, dito como ensaio.

### 18h17 a 18h47. Setup guiado

Slide 14 mostra o link e o QR do guia. Depois um passo por slide: Abrir (15), Token (16), Conectar (17), Ligar e testar (18). Slide 19 é a espera da reta final.

Marcas de relógio (minuto do setup):

| Relógio | Min | Marca esperada |
|---|---|---|
| 18h22 | 5 | Todo mundo logado no Figma e no Claude, arquivo duplicado aberto |
| 18h27 | 10 | Maioria com token gerado |
| 18h33 | 16 | Maioria com config salvo e Claude reaberto |
| 18h38 | 21 | Maioria com o Bridge importado e rodando |
| 18h41 | 24 | **Corte de dupla:** quem está travado senta com quem já conectou, em 2 minutos |
| 18h43 | 26 | Maioria testou a conexão e leu a Tela demo. Slide 19 no telão |
| 18h47 | 30 | **A prática começa**, com gente sem terminar |

O Thiago chama um passo, a sala faz, só então vem o próximo. Fila crescendo no mesmo ponto: o Thiago resolve no telão para todos. Ele não desce do palco para depurar máquina; quem vai até a pessoa é o voluntário.

### 18h47 a 19h07. Exercício, passos 1 a 6

| Relógio | Passo | Min | Slide |
|---|---|---|---|
| 18h47 | 1. Ler | 3 | 20 |
| 18h50 | 2. Tokens | 3 | 21 |
| 18h53 | 3. Auditar | 3 | 22 |
| 18h56 | 4. Gerar | 5 | 23 |
| 19h01 | 5. Inspecionar | 3 | 24 |
| 19h04 | 6. Corrigir | 3 | 25 |

Prompts canônicos, palavra por palavra, em `fortaleza/guia-participante.md` e `docs/tutorial-canonical.json`. Durante o 5, opcional: dois minutos no telão mostrando a própria inspeção.

### 19h07 a 19h17. Passo 7, Exportar

O passo que liga este workshop ao do Mateus. Dois prompts e um momento de copiar e colar.

| Relógio | O quê |
|---|---|
| 19h07 | 7a, tokens em JSON (formato DTCG) lidos do Figma via MCP |
| 19h11 | 7b, o Card corrigido convertido para HTML e CSS |
| 19h14 | 7c, copiar os três blocos para `tokens.json`, `Card.html` e `Card.css` na pasta `fora-do-frame` |
| 19h17 | Quem não terminou pega a pasta `handoff/` do repositório. Ninguém fica sem arquivo |

Fala de abertura do bloco (sugestão): "Até aqui tudo ficou dentro da conversa. Agora vocês levam pro código. Às 20h o Mateus parte exatamente desses três arquivos."

Por que JSON no formato DTCG: ver `fortaleza/para-o-mateus.md`.

### 19h17 a 19h20. Passo 8, Revogar

Slide 27. Figma > Settings > Security > Personal access tokens > Revoke. Não é opcional e não tem corte. Voluntários conferem bancada por bancada.

### 19h20 a 19h28. Validação e limites

Slide 28: o que divergiu na sala? Pode não ter divergido nada. Slides 29 e 30: limites e boas práticas.

### 19h28 a 19h33. Perguntas

Corta pergunta que vira consultoria individual: "me procura no coffee".

### 19h33 a 19h38. Síntese e passagem

Slide 32: ferramentas mudam, princípios permanecem. Depois o slide 33, de passagem: o que cada um tem na pasta, e que o Mateus começa às 20h com Style Dictionary, Storybook e auditoria de acessibilidade a partir daí. Se o slide do formulário ficar (decisão do Thiago, ver `deck-ajustes.md`), ele fecha.

### 19h38 a 19h40. Margem

Fecha no horário. O coffee é das 19h40 às 20h.


## Contingências de sala

- **Rede cai para muita gente:** o Thiago roda no telão o par de prompts sem MCP de `prompts/standalone.md`, e o pipeline completo fica para casa com o guia. Para o Mateus, todo mundo usa `handoff/`.
- **Limite da conta gratuita em massa:** dupla com quem ainda tem uso; no passo 7, `handoff/`.
- **Demo do palco trava:** `outputs-prebaked/`, dito como ensaio. Nunca vender pré-gerado como ao vivo.
- **Atraso acumulado no setup:** o corte das 18h47 não se move. Se o exercício atrasar, o passo 7 encurta para "pegue o `handoff/`" e o Revogar continua inteiro.
