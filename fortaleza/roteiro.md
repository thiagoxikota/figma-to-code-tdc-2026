# Roteiro: Seu Figma vira produto (Fortaleza)

**Título:** Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona.

Fora do Frame, uma experiência UXFor, 3º dia (workshops presenciais). Quarta, 18/11/2026, Digital College Aldeota, Av. Santos Dumont, 1510, 1º andar, Fortaleza.

Janela do Thiago: 18h00 às 19h40 (100 min). Às 19h40 entra o coffee; às 20h, o workshop do Mateus Villain (tokens e componente para código, Style Dictionary).

**Público: designers.** Nada de linguagem de dev no palco. A ligação técnica (MCP) aparece uma vez, como "a ligação local entre o Claude e o Figma". A chave de acesso do Figma se chama "chave do Figma"; "token" fica só para os tokens de design.

Fonte única das decisões: `.critica/spec-v2.md` (local, fora do Git). Fonte técnica: `docs/pipeline-facts.md`. Prompts palavra por palavra: `guia-participante.md`.


## A tese

"A imagem mostra como a tela parece. O arquivo mostra do que ela é feita."

Prova com a **mesma** Tela demo nas duas partes e três propriedades verificáveis (`outputs-prebaked/04-auditoria.md`, defeitos 1, 3 e 4):

1. **Botão "Continuar":** na imagem, um vermelho. No arquivo, `#C8352B` cru, desacoplado do componente Button. O valor é igual ao do token `color/brand-primary`, mas não está ligado a ele: se a marca mudar, esse botão não muda.
2. **Texto "Leva menos de um minuto":** `#A29B93` sobre `#FFFFFF`, contraste de cerca de 2,75 para 1 (AA pede 4,5 para 1). A imagem deixa estimar; o arquivo dá o valor exato.
3. **Campo "nome":** estilo com borda onde o padrão do sistema é preenchido (`color/surface-alt`). Na imagem parece escolha; o arquivo mostra que saiu do padrão.

Nunca dizer que o vermelho do botão é uma cor errada: o valor está certo, o vínculo é que falta. E `var(--token)` sozinho não prova leitura do Figma. A prova é a cadeia, e ela vai para o telão com imagem (slides 12 a 14): a variável no Figma, o token, o valor e o resultado gerado.

É um exercício controlado, e isso é dito na abertura: a tela tem seis problemas colocados de propósito.


## As duas saídas (dizer no palco, com estas palavras)

1. **O protótipo:** o formulário "Criar sua conta" funcionando, feito da imagem na Parte A. Na Parte B, cada pessoa corrige um ponto dele com um valor lido do arquivo. Fica na conversa do Claude e segue com a pessoa.
2. **A pasta para o Mateus:** um Card e os tokens de design em arquivo, gerados do arquivo na Parte B.

"O Mateus continua os tokens e o Card, não o formulário. O que passa da Parte A para a Parte B é a tela e as decisões de vocês sobre ela."

Quem não termina a B sai com a pasta de exemplo (`handoff/`), identificada como exemplo. Ela vem no ZIP que todo mundo baixa antes; quem chegou sem ela recebe dos voluntários por pendrive.


## As rotas

- **Parte A:** todo mundo. Conta e navegador.
- **Parte B sozinho:** só quem instalou em casa, antes de quarta, com o teste "o Claude disse o nome do arquivo". Na sala só se confere a conexão.
- **Parte B em dupla:** quem não instalou. Um conduz, o outro lê, confere no próprio Figma e decide junto. Ninguém depura máquina no palco.


## Grade

| Horário | Bloco | Min |
|---|---|---|
| 18h00 a 18h05 | Abertura: as duas saídas, as rotas, o guia pelo QR | 5 |
| 18h05 a 18h35 | Parte A com a Tela demo: A1 exportar (5), A2 revisão de dev (7), A3 você decide (4), A4 protótipo (9), A5 testar e anotar 1 diferença (5) | 30 |
| 18h35 a 18h41 | A ponte: as 3 propriedades no Figma e a cadeia no telão | 6 |
| 18h41 a 18h48 | Conferir a conexão (só quem instalou em casa); os outros formam duplas | 7 |
| 18h48 a 19h10 | Parte B: B1 ler as 3 propriedades (5), B2 decidir uma correção e levar para o protótipo (5), B3 gerar o Card (8), B4 conferir 3 linhas do CSS no Figma (4) | 22 |
| 19h10 a 19h28 | B5 salvar: JSON, três arquivos na pasta, quatro conferências. Às 19h25, corte: quem não terminou usa `handoff/` | 18 |
| 19h28 a 19h33 | B6 revogar a chave do Figma, com a confirmação no telão | 5 |
| 19h33 a 19h40 | Fecho: uma pergunta, os limites e a passagem para o Mateus | 7 |

Soma: 100 min. Os tempos são estimativa até o ensaio cronometrado (`checklist-thiago.md`). A auditoria completa de seis itens saiu da grade: o tempo dela foi para o salvamento, que agora tem 15 minutos até o corte.

### O que tem prioridade quando atrasar

A sala vai atrasar em algum ponto. A regra, nesta ordem:

1. **Os horários de 18h35, 19h10 e 19h28 não se movem.** A ponte, o salvamento e a revogação começam na hora, com quem estiver.
2. **Na Parte A, a prioridade é a decisão (A3) e o teste (A5), não a geração.** Quem ainda está gerando às 18h35 acompanha a ponte e testa depois: o protótipo continua na conversa.
3. **Na Parte B, o primeiro a encolher é o B2 no protótipo:** vira só a decisão escrita, e o Thiago faz a correção no telão. Depois o B4: o Thiago confere no telão e a sala acompanha.
4. **O B3 precisa estar pedido até 19h02.** Quem não pediu até aí vai para a pasta de exemplo no corte, sem culpa.
5. **O B6 nunca é cortado.** Se faltar tempo, sai a pergunta do fecho.


## Bloco a bloco

### 18h00 a 18h05. Abertura

1. Título, nome e as duas saídas, com as palavras acima (slides 1 e 2). O Thiago se apresenta em uma frase, na capa, sem slide próprio.
2. As rotas (slide 3): "Quem instalou em casa faz a B sozinho. Quem não instalou faz a B em dupla. Ninguém instala nada aqui."
3. QR do guia (slide 4): "Siga pelo guia na sua máquina. O telão mostra a ação e quando deu certo; o texto para copiar está no guia."

Sem pergunta de abertura para a sala: come tempo e não muda nada.

### 18h05 a 18h35. Parte A

| Relógio | Passo | Min | Deu certo quando |
|---|---|---|---|
| 18h05 | A1. Exportar a Tela demo, PNG 2x | 5 | PNG do formulário inteiro salvo |
| 18h10 | A2. Revisão de dev | 7 | Lista numerada, cada ponto "visto" ou "suposto" |
| 18h17 | A3. Você decide quais pontos aceita | 4 | Números anotados, com o porquê das recusas |
| 18h21 | A4. Protótipo com só os pontos aceitos | 9 | Formulário aparece na conversa e aceita digitação |
| 18h30 | A5. Testar e anotar 1 diferença | 5 | Erro e "Conta criada" testados; uma diferença anotada |

O Thiago faz junto no telão, com a Tela demo. No A1, projetar ao vivo a seleção do frame pelo nome e o painel de Export; o slide traz a tela e o caminho, o painel é mostrado no Figma.

No A2, se alguém perguntar como o Claude mediu contraste numa imagem: "Ele estimou. Por isso o prompt pede para separar o que viu do que supôs. Na Parte B a gente lê o valor."

No A3, a fala: "A IA aponta. Quem decide é você. Anotem quais pontos aceitam antes de pedir o protótipo. Sem tempo de ler tudo, decidam pelo menos um." É o momento mais importante da A.

No A4, quem recebe só código manda o pedido de novo **uma vez**. Não resolveu: a opção de artefatos está desligada (preparação, passo 5); segue com o vizinho, sem gastar limite.

Se a geração do A4 falhar no telão: mostrar a saída do ensaio, dita como ensaio.

Às 18h35 o Thiago vai para a ponte, mesmo com gente terminando.

### 18h35 a 18h41. A ponte

Slide 11, a tese. Depois, no Figma, na mesma Tela demo, selecionar uma a uma (os slides 12 e 13 trazem os recortes reais da tela, para o caso de o telão do Figma falhar):

1. O botão "Continuar": mostrar o fill `#C8352B` sem a pílula de variável e a camada fora do componente Button. Abrir as variáveis e mostrar `color/brand-primary` com o mesmo valor. "O valor é igual. O vínculo não existe. Se a marca mudar, esse botão fica para trás. A imagem não tem como mostrar isso."
2. O texto "Leva menos de um minuto": `#A29B93` sobre `#FFFFFF`, cerca de 2,75 para 1 contra 4,5 do AA.
3. O campo "nome" ao lado do campo de e-mail: borda contra preenchido (`color/surface-alt`).

Slide 14, a cadeia: a variável no componente Button, o token `color/brand-primary`, o valor `#C8352B` e o resultado gerado, com a linha do `Card.css` e o botão do Card renderizado. "Isso é ler o arquivo: dá para seguir o valor de ponta a ponta. O botão da Tela demo tem o mesmo vermelho e está fora dessa cadeia."

Gancho para a B: "Agora vocês vão ler essas três coisas no próprio arquivo, decidir uma correção e conferir com o olho de vocês."

### 18h41 a 18h48. Conferir a conexão

Só para quem instalou em casa. No telão: Figma Desktop com o arquivo, plugin Figma Desktop Bridge rodando, e a resposta do Claude com o nome do arquivo. "Deu certo quando o Claude disse o nome do arquivo."

Quem não instalou forma dupla nesse mesmo momento, com voluntário apontando, e deixa a própria `handoff/` à mão. Uma tentativa de ajuda por pessoa; não resolveu, dupla. O Thiago não desce do palco para depurar. Fila no mesmo ponto: o Thiago resolve no telão uma vez.

### 18h48 a 19h10. Parte B

| Relógio | Passo | Min | Deu certo quando |
|---|---|---|---|
| 18h48 | B1. Ler a Tela demo e as 3 propriedades | 5 | `#C8352B` sem variável, `#A29B93` com cerca de 2,75 para 1, campo nome com borda |
| 18h53 | B2. Decidir uma correção e levar para o protótipo | 5 | Correção escrita com o motivo; a resposta traz o token e o valor lido, e o protótipo mudou só ali |
| 18h58 | B3. Gerar o Card com os tokens | 8 | Dois blocos: `Card.html` e `Card.css` |
| 19h06 | B4. Conferir 3 linhas do CSS no Figma | 4 | `var(--color-brand-primary)`, `var(--font-size-heading)` e `var(--space-3)` no CSS; `#C8352B`, 20 e 24 nas variáveis do Figma |

No B1, se voltar vazio: não é para repetir no escuro. Primeiro perguntar qual arquivo o Claude está lendo, depois conferir se o plugin está rodando. Só então repetir.

No B2, a fala: "De novo é com vocês. Três divergências, vocês escolhem uma e escrevem a correção com o motivo. Depois levam para o protótipo." Valores esperados: `color/brand-primary` `#C8352B`, `color/text-muted` `#6C665F` (cerca de 5,7 para 1), `color/surface-alt` `#F5F3F0`. Quem não acha a conversa da Parte A no Claude Desktop, ou está em dupla, fica com a decisão escrita. O Thiago faz uma correção no telão.

No B3, dizer de novo: "O Card é outro objeto, um exercício de passagem técnica. É o componente que o Mateus continua às 20h, montado com os tokens desta tela. O protótipo continua sendo de vocês."

No B4, o Thiago mostra no telão a linha do `Card.css` e o valor nas variáveis do Figma, comparados de verdade. "As três linhas que o Claude escreve no fim são o resumo dele. O que vale é o CSS." Pode não haver divergência, e está certo.

### 19h10 a 19h28. Salvar

Fala de abertura: "Até aqui tudo ficou dentro da conversa. Agora vocês levam arquivos."

| Relógio | O que a sala faz |
|---|---|
| 19h10 | Pede o JSON dos tokens |
| 19h13 | Copia os três blocos e cola nos arquivos da `fora-do-frame` |
| 19h19 | Confere: nomes, `Card.html` aberto, JSON validado e os três valores dentro do JSON |
| 19h25 | **Corte** |

No telão: a pasta final com os nomes certos, o `Card.html` aberto no navegador (dois cards sem cor, esperado; o slide 20 mostra essa imagem), o `tokens.json` validado no jsonlint e os três valores achados dentro dele. "JSON válido não quer dizer JSON certo: procurem `#C8352B`, `20px` e `24px`."

**19h25, corte.** "Quem não terminou: a pasta `handoff` que vocês baixaram em casa vai para a área de trabalho, com esse nome. É o exemplo, e o Mateus sabe disso. Chegou sem ela? Levanta a mão, o voluntário copia do pendrive." Quem só perdeu um arquivo copia esse e anota em `veio-do-exemplo.txt`. Em dupla, quem acompanhou usa a própria `handoff`.

### 19h28 a 19h33. Revogar

No telão: Settings > Security > Personal access tokens > Revoke, a confirmação e a chave sumindo da lista. "Deu certo quando a chave sumiu da lista. É uma chave só: a de casa é a de hoje." Sem corte. Voluntários passam pelas fileiras perguntando.

### 19h33 a 19h40. Fecho

Uma pergunta para a sala (slide 23), duas ou três respostas curtas: "Qual ponto vocês recusaram, ou qual correção escolheram, e por quê?" Funciona para quem fez só a A.

Limites, curtos (slide 24): o protótipo não é produto pronto; código gerado é ponto de partida; a ligação lê o design system que existe, não cria um.

Passagem (slide 25, o último): "Às 20h o Mateus parte da pasta de vocês: os tokens e o Card, não o formulário. Ela tem uma de duas origens: `fora-do-frame`, gerada por vocês, ou `handoff`, o exemplo. As duas servem e as duas já trazem o `config.json`. Quem gerou vê o próprio card acender quando o Style Dictionary criar o `tokens.css`." Detalhes em `para-o-mateus.md`.

Pergunta que vira consultoria individual: "me procura no coffee". Fecha no horário.


## Contingências de sala

- **Rede cai para muita gente:** a Parte A depende do Claude e para; o Thiago mostra no telão a saída do ensaio, dita como ensaio. A Parte B vira demonstração no telão, e todo mundo usa a `handoff/` que já está na máquina (ou a do pendrive dos voluntários). Nada disso depende de internet.
- **Conexão falha para muita gente às 18h41:** dupla. Não há instalação na sala.
- **Faltam pessoas com a ligação para formar duplas:** trios, ou a Parte B inteira no telão, com a sala conferindo os valores no próprio Figma (B1 e B4 funcionam assim) e todo mundo saindo com `handoff/`.
- **Limite da conta gratuita em massa:** dupla com quem ainda tem uso; na Parte B, `handoff/`.
- **Demo do palco trava:** saída do ensaio, dita como ensaio. Nunca vender pré-gerado como ao vivo.
- **Atraso acumulado:** a regra de prioridade acima. O corte das 19h25 não se move. O B6 (revogar) nunca é cortado.
- **Máquinas, rede, tomadas, projetor, número de voluntários:** [VERIFICAR com a Gi] (`perguntas-gi.md`).
