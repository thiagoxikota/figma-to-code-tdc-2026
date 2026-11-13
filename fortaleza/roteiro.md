# Roteiro: Seu Figma vira produto (Fortaleza)

**Título:** Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona.

Fora do Frame, uma experiência UXFor, 3º dia (workshops presenciais). Quarta, 18/11/2026, Digital College Aldeota, Av. Santos Dumont, 1510, 1º andar, Fortaleza.

Janela do Thiago: 18h00 às 19h40 (100 min). Às 19h40 entra o coffee; às 20h, o workshop do Mateus Villain (tokens e componente para código, Style Dictionary).

**Público: designers.** Nada de linguagem de dev no palco. A ligação técnica (MCP) aparece uma vez, como "a ligação local entre o Claude e o Figma".

Fonte única das decisões: `.critica/spec-v2.md` (local, fora do Git). Fonte técnica: `docs/pipeline-facts.md`. Prompts palavra por palavra: `guia-participante.md`.


## A tese

"A imagem mostra como a tela parece. O arquivo mostra do que ela é feita."

Prova com a **mesma** Tela demo nas duas partes e três propriedades verificáveis (`outputs-prebaked/04-auditoria.md`, defeitos 1, 3 e 4):

1. **Botão "Continuar":** na imagem, um vermelho. No arquivo, `#C8352B` cru, desacoplado do componente Button. O valor é igual ao token `color/brand-primary`, mas não está ligado a ele: se a marca mudar, esse botão não muda.
2. **Texto "Leva menos de um minuto":** `#A29B93` sobre `#FFFFFF`, contraste de cerca de 2,75 para 1 (AA pede 4,5 para 1). A imagem deixa estimar; o arquivo dá o valor exato.
3. **Campo "nome":** estilo com borda onde o padrão do sistema é preenchido (`color/surface-alt`). Na imagem parece escolha; o arquivo mostra que saiu do padrão.

Nunca dizer que o vermelho do botão é uma cor errada ou inventada: o valor está certo, o vínculo é que falta. E `var(--token)` sozinho não prova leitura do Figma. A prova é a cadeia: propriedade no Figma, token, valor, código gerado.


## As duas entregas (dizer no palco, com estas palavras)

1. **Parte A:** um protótipo navegável da Tela demo, feito a partir da imagem.
2. **Parte B:** a mesma Tela demo lida do arquivo, mais o componente Card e os tokens em arquivo para o Mateus.

"O Card não é o protótipo da Parte A. É o ponto de partida do Mateus às 20h."

Quem não termina a B sai com a pasta de exemplo (`handoff/`), identificada como exemplo.


## As rotas

- **Parte A:** todo mundo. Conta e navegador.
- **Parte B sozinho:** só quem instalou em casa, antes de quarta, com o teste "o Claude disse o nome do arquivo". Na sala só se confere a conexão.
- **Parte B em dupla:** quem não instalou. Ninguém depura máquina no palco.


## Grade

| Horário | Bloco | Min |
|---|---|---|
| 18h00 a 18h08 | Abertura: título, o que cada um leva (A, B, pasta de exemplo), as duas rotas, QR do guia | 8 |
| 18h08 a 18h33 | Parte A com a Tela demo: A1 exportar (4), A2 revisão de dev (7), A3 você decide quais pontos aceita (3), A4 protótipo (9), A5 testar e anotar 1 diferença (2) | 25 |
| 18h33 a 18h38 | A ponte: as 3 propriedades no Figma, na mesma tela | 5 |
| 18h38 a 18h48 | Conferir a conexão (só quem instalou em casa); os outros formam duplas | 10 |
| 18h48 a 19h10 | Parte B: B1 ler as 3 propriedades (5), B2 auditar (5), B3 gerar o Card (7), B4 conferir 3 valores no Figma (5) | 22 |
| 19h10 a 19h22 | B5 salvar: tokens em JSON e os 3 arquivos na pasta. Às 19h20, corte: quem não terminou copia `handoff/` e sabe que é exemplo | 12 |
| 19h22 a 19h26 | B6 revogar o token, com a confirmação no telão | 4 |
| 19h26 a 19h34 | Limites e passagem para o Mateus (duas origens da pasta) | 8 |
| 19h34 a 19h40 | Margem e perguntas rápidas | 6 |

Soma: 100 min. Os tempos são estimativa até o ensaio cronometrado (`checklist-thiago.md`, item 1). O corte das 19h20 e a pasta de exemplo são parte normal da condução, não exceção.


## Bloco a bloco

### 18h00 a 18h08. Abertura

1. Título e as duas entregas, com as palavras acima.
2. As rotas: "Quem instalou em casa faz a B sozinho. Quem não instalou faz a B em dupla. Ninguém instala nada aqui."
3. QR do guia. "Siga pelo guia na sua máquina. O telão mostra a ação e quando deu certo; o texto para copiar está no guia."

Sem pergunta de abertura para a sala: come tempo e não muda nada.

### 18h08 a 18h33. Parte A

| Relógio | Passo | Min | Deu certo quando |
|---|---|---|---|
| 18h08 | A1. Exportar a Tela demo, PNG 2x | 4 | PNG do formulário inteiro salvo |
| 18h12 | A2. Revisão de dev | 7 | Lista numerada, cada ponto "visto" ou "suposto" |
| 18h19 | A3. Você decide quais pontos aceita | 3 | Números anotados, com o porquê das recusas |
| 18h22 | A4. Protótipo com só os pontos aceitos | 9 | Protótipo aparece na conversa |
| 18h31 | A5. Testar e anotar 1 diferença | 2 | Erro e "Conta criada" testados; uma diferença anotada |

O Thiago faz junto no telão, com a Tela demo. No A1, projetar a seleção do frame pelo nome e o painel de Export, não só falar "exporte".

No A2, se alguém perguntar como o Claude mediu contraste numa imagem: "Ele estimou. Por isso o prompt pede para separar o que viu do que supôs. Na Parte B a gente lê o valor."

No A3, a fala: "A IA aponta. Quem decide é você. Anotem quais pontos aceitam antes de pedir o protótipo." É o único momento sem prompt, e é o mais importante da A.

Se a geração do A4 falhar no telão: mostrar a saída do ensaio, dita como ensaio.

### 18h33 a 18h38. A ponte

No Figma, na mesma Tela demo, selecionar uma a uma:

1. O botão "Continuar": mostrar o fill `#C8352B` sem a pílula de variável e a camada fora do componente Button. Abrir o painel de variáveis e mostrar `color/brand-primary` com o mesmo valor. "O valor é igual. O vínculo não existe. Se a marca mudar, esse botão fica para trás. A imagem não tem como mostrar isso."
2. O texto "Leva menos de um minuto": `#A29B93` sobre `#FFFFFF`, cerca de 2,75 para 1 contra 4,5 do AA.
3. O campo "nome" ao lado do campo de e-mail: borda contra preenchido (`color/surface-alt`).

Frase-âncora: "A imagem mostra como a tela parece. O arquivo mostra do que ela é feita."

Gancho para a B: "Agora vocês vão ler essas três coisas no próprio arquivo, e conferir com o olho de vocês."

### 18h38 a 18h48. Conferir a conexão

Só para quem instalou em casa. No telão: Figma Desktop com o arquivo, plugin Figma Desktop Bridge rodando, e a resposta do Claude com o nome do arquivo. "Deu certo quando o Claude disse o nome do arquivo."

Quem não instalou forma dupla nesse mesmo momento, com voluntário apontando. Uma tentativa de ajuda por pessoa; não resolveu, dupla. O Thiago não desce do palco para depurar. Fila no mesmo ponto: o Thiago resolve no telão uma vez.

### 18h48 a 19h10. Parte B

| Relógio | Passo | Min | Deu certo quando |
|---|---|---|---|
| 18h48 | B1. Ler a Tela demo e as 3 propriedades | 5 | `#C8352B` sem variável, `#A29B93` com cerca de 2,75 para 1, campo nome com borda |
| 18h53 | B2. Auditar | 5 | Cada achado com nome de token ou regra |
| 18h58 | B3. Gerar o Card com os tokens | 7 | Dois blocos e as 3 linhas do fim |
| 19h05 | B4. Conferir 3 valores no Figma | 5 | `color/brand-primary` `#C8352B`, `font-size/heading` 20, `space/3` 24 batem no painel de variáveis |

No B1, se voltar vazio: não é para repetir no escuro. Primeiro perguntar qual arquivo o Claude está lendo, depois conferir se o plugin está rodando. Só então repetir.

No B2, o gancho é a lista da Parte A: os mesmos problemas, agora com o nome do token.

No B3, dizer de novo: "O Card é outro objeto. É o componente que o Mateus continua às 20h, montado com os tokens desta tela."

No B4, o Thiago mostra no telão o painel de variáveis e um valor comparado de verdade. Pode não haver divergência, e está certo.

### 19h10 a 19h22. Salvar

Fala de abertura: "Até aqui tudo ficou dentro da conversa. Agora vocês levam três arquivos."

No telão: o estado final da pasta com os três nomes certos, o `Card.html` aberto no navegador (dois cards sem cor, esperado) e o `tokens.json` validado no jsonlint. "Deu certo quando os três arquivos abrem com o nome certo." Contar tokens não valida o JSON; abrir e validar, sim.

**19h20, corte.** "Quem não terminou: copie a pasta `handoff/` do ZIP para a área de trabalho, com o nome `handoff`. É o exemplo, e o Mateus sabe disso." Quem só perdeu um arquivo copia esse e anota em `veio-do-exemplo.txt`.

### 19h22 a 19h26. Revogar

No telão: Settings > Security > Personal access tokens > Revoke, a confirmação e o token sumindo da lista. "Deu certo quando o token sumiu da lista." Revogar também o de casa. Sem corte. Voluntários passam pelas fileiras perguntando.

### 19h26 a 19h34. Limites e passagem

Limites, curtos: o protótipo da imagem é aproximação; código gerado é ponto de partida; a ligação lê o design system que existe, não cria um.

Pergunta para a sala, uma só: "Qual ponto da revisão vocês recusaram, e por quê?" Funciona para quem fez só a A.

Passagem: "Às 20h o Mateus parte da pasta de vocês. Ela tem uma de duas origens: `fora-do-frame`, gerada por vocês, ou `handoff`, o exemplo. As duas servem. Quem gerou vê o próprio card acender quando o Style Dictionary criar o `tokens.css`." Detalhes em `para-o-mateus.md`.

### 19h34 a 19h40. Margem e perguntas rápidas

Pergunta que vira consultoria individual: "me procura no coffee". Fecha no horário.


## Contingências de sala

- **Rede cai para muita gente:** a Parte A depende do Claude e para; o Thiago mostra no telão a saída do ensaio, dita como ensaio. A Parte B vira demonstração no telão, e todo mundo usa a `handoff/` do ZIP baixado em casa.
- **Conexão falha para muita gente às 18h38:** dupla. Não há instalação na sala.
- **Limite da conta gratuita em massa:** dupla com quem ainda tem uso; na Parte B, `handoff/`.
- **Demo do palco trava:** saída do ensaio, dita como ensaio. Nunca vender pré-gerado como ao vivo.
- **Atraso acumulado:** o corte das 19h20 não se move. O B6 (revogar) nunca é cortado.
- **Máquinas, rede, tomadas, projetor:** [VERIFICAR com a Gi] (`perguntas-gi.md`).
