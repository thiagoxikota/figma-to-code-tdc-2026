# Cartão de bancada: APOSENTADO (16/07)

**Não vai ser impresso.** Decisão do dono em 16/07: nada de gráfica, o conteúdo vive nos slides.

Além disso, o texto que estava aqui tinha virado mentira. Ele dizia "o script de configuração já está na área de trabalho" e "as duas já estão instaladas nesta máquina, por isso o passo 1 é entrar nas contas, não instalar nada". Isso valia quando o plano era pré-provisionar as ~40 máquinas. A TI confirmou em 16/07 que elas vêm cruas (só Node, Figma Desktop e Claude Desktop), sem script, sem plugin importado, sem projeto.

## Por que ele existia e por que não precisa mais

O cartão era o jeito de dar instrução por bancada sem roubar tempo de palco: papel na mesa, 1 por máquina. Hoje o trabalho dele está coberto, melhor, por duas superfícies que já existem:

1. **A onboarding do QR (`thiagoxikota.com/tdc`).** É a instrução por pessoa, na tela dela: roteia por dispositivo, guarda o progresso, traz o JSON com o campo de token que preenche ao vivo e o passo a passo do caminho manual (o que a máquina crua exige). Papel nunca faria isso. Abre no celular e no computador, e roda até offline.
2. **Os slides.** O slide 5 (QR) e o slide 7 (passo do setup) ficam no telão durante os 25 min: QR, URL, passo atual e o "travou? mão pra cima". É o cartão, projetado, e sempre no passo certo.

Papel seria uma terceira cópia da mesma coisa, com o pior defeito: congela na impressão. Se um passo mudar na véspera, o papel mente. Foi exatamente o que aconteceu com este arquivo.

## Onde o conteúdo vive agora

| O que o cartão trazia | Onde está |
|---|---|
| QR + URL curta | Slide 5 do deck; slide 7 durante o setup |
| Os 4 passos do setup | Slide do setup + a onboarding, passo a passo |
| Prompt de teste da conexão | Onboarding, passo "Teste a conexão de verdade" |
| Comandos npm | Onboarding (passo opcional do preview) e `README.md`. Na sala quase não são usados: o exercício roda no Claude, sem terminal |
| "Travou? Mão pra cima" | Slide 7 e o botão de ajuda da onboarding (que ainda monta o resumo por mesa) |

## Se um dia voltar a imprimir

O conteúdo canônico é a onboarding. Qualquer cartão futuro é uma redução dela, nunca uma fonte paralela: duas fontes divergem, e a de papel sempre perde.
