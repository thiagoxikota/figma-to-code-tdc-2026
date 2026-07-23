# Palco: uma máquina, um apresentador (decisão do dono, 22/07 à noite)

Decisão: o workshop inteiro roda na máquina do Thiago (MacBook Air M1, 8 GB), com o telão ESPELHADO. Sem beats operacionais do Bruno: Thiago apresenta, roda a demo, guarda o relógio (pelos chips do deck) e decide contingência. Bruno e Lourena são apresentados no slide 3 e ajudam livre na sala. Esta folha substitui, para o palco, a divisão de papéis do `operadores.md`; o resto do runbook (cronograma, checkpoints, segurança do token, dispositivos) continua valendo.

## Layout de Spaces (macOS, telão espelhado)

- Space 1: deck em tela cheia. Fonte primária: `slides/deck.pdf` no Preview (offline, leve; setas mudam de página). O Google Slides no navegador é só para edição de última hora (re-exportar o PDF depois).
- Space 2: a demo. Claude Desktop e Figma Desktop LADO A LADO (Split View), arquivo "TDC 2026 - Do Figma ao codigo - DEMO" aberto na página "01 Comece aqui", plugin Bridge rodando e com a janela aberta.
- Navegação: Ctrl+seta direita (deck -> demo) e Ctrl+seta esquerda (demo -> deck). É a ÚNICA mecânica de troca do workshop inteiro; decorar.

Telão espelhado, não estendido: o que você vê é o que a sala vê. O deck É o teleprompter; as speaker notes são material de ensaio, não de palco.

## Coreografia linear (31 slides, uma pessoa)

| Relógio | Slides | Telão | Você faz |
|---|---|---|---|
| 10:15-10:22 | 1-8 | Deck | abertura, fluxo, slide da ponte, intro da demo |
| 10:23-10:29 | 9, 10, 11 | Deck -> demo -> deck, por beat | lê o slide do beat, Ctrl+direita, roda no Claude (conexão / leitura / geração), Ctrl+esquerda no slide seguinte |
| 10:29-10:32 | 12-13 | Deck | revela os pares Take A vs B e a frase da prova |
| 10:32 | 14 | Deck | sala pega o celular, abre thiagoxikota.com/tdc (o tutorial NUNCA vai pro telão; é celular-first) |
| 10:32-10:57 | 15-18 | Deck | chama um passo por vez; linha "Até HH:MM" no slide dá o pacing pra sala |
| 10:54-10:57 | 19 | Deck | espera no palco; às 10:57 corta e fala "Deu 10:57. A prática começa agora." |
| 10:57-11:20 | 20-25 | Deck | um passo da prática por slide (Ler, Auditar o uau, Gerar, Inspecionar, Corrigir, Revogar); sala copia prompts do guia |
| ~11:12 | durante 23 | demo (opcional, 2 min) | mostra a SUA verificação das 3 propriedades e volta |
| 11:20-11:24 | 26 | Deck (demo opcional se sala tímida) | leitura das divergências; preview de palco só se sobrar tempo |
| 11:24-11:42 | 27-31 | Deck até o fim | limites, boas práticas, perguntas, síntese, formulário + surpresa |

Total de idas ao Space da demo: 3 obrigatórias (slides 9, 10, 11) + 2 opcionais (23, 26).

## Checklist da manhã (na sala, antes de abrir)

1. Energia: carregador ligado. Ajustes > Tela > nunca dormir (ou `caffeinate -dis` num terminal que fica aberto).
2. Fechar TUDO que não é palco: Antigravity, Chrome com abas extras, Slack, WhatsApp. 8 GB de RAM: só Preview, Claude Desktop, Figma Desktop (e um terminal escondido).
3. Foco/Não Perturbe LIGADO (notificação no telão é o pior bug do dia).
4. Figma Desktop: logar, abrir o arquivo DEMO na "01 Comece aqui", rodar o plugin "Figma Desktop Bridge" e deixar a janela aberta.
5. Claude Desktop: já está com `figma-console@1.35.0` no config (feito 22/07 à noite, token do Keychain validado). Conversa nova: "Verifique o status da conexão com o Figma" e depois pedir pra ler a "Tela demo". Sucesso = dado específico do arquivo voltando.
6. Preview: abrir `slides/deck.pdf`, tela cheia, testar setas (e o clicker, se houver).
7. Montar o Split View do Space 2 (Claude | Figma) e ensaiar Ctrl+direita / Ctrl+esquerda duas vezes.
8. Espelhar o telão (não estender). Conferir que a fonte do slide 1 está legível do fundo da sala.

## Fallbacks

- Wi-Fi caiu: nada muda no deck (PDF é local). Demo depende só de Figma + Bridge locais; a geração precisa de rede (Claude). Sem rede no Claude: resultado do ensaio, dito como ensaio (prebaked em `outputs-prebaked/`).
- Demo travou: fala de cobertura do slide 12 + `05c-diff-callout.md`. Nunca fingir que o pré-gerado é ao vivo.
- Máquina de palco morreu: `deck.pdf` está no repo e no Drive (deck Google Slides). Qualquer laptop reserva apresenta o PDF; a demo migra pro prebaked.
