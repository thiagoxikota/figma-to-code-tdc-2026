# Edição Fortaleza

"Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona". Workshop para designers no Fora do Frame, uma experiência UXFor (3º dia, workshops presenciais). Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota, Fortaleza.

Todo mundo trabalha na mesma Tela demo ("Criar sua conta"), e sai com duas saídas diferentes. Parte A: a tela vira imagem no Claude gratuito, com revisão de dev, a decisão do designer sobre quais pontos aceitar e um protótipo navegável do formulário. Parte B: a mesma tela lida do arquivo, pela ligação local entre o Claude e o Figma, que a pessoa instala em casa (`scripts/instalar.mjs`); ela decide uma correção, leva para o protótipo e gera o Card e os tokens em arquivo. O workshop do Mateus Villain, às 20h, continua os tokens e o Card, não o formulário. Quem não termina sai com a pasta de exemplo `handoff/`, que todo mundo baixa no ZIP antes de quarta.

O resto do repositório é o TDC Florianópolis, mantido como histórico. Os prompts de Fortaleza estão só no `guia-participante.md`; `prompts/prompts.md` é do TDC.

| Arquivo | Para quem | O que é |
|---|---|---|
| `guia-participante.md` | Participantes | Preparação em casa (para todos e para a Parte B), Parte A, ponte, Parte B com os prompts, salvamento e revogação, cada etapa com "deu certo quando" |
| `guia-voluntarios.md` | Voluntários | Papel na sala, marcas de relógio com o critério de cada etapa, regra de dupla, pendrive com a pasta de exemplo, contingências |
| `roteiro.md` | Thiago | Tese, grade de 18h00 a 19h40, o que tem prioridade quando atrasar e o que dizer em cada bloco |
| `checklist-thiago.md` | Thiago | Ensaios pendentes na conta gratuita, capturas que entram no deck, o que fazer até segunda, na terça e no dia |
| `para-o-mateus.md` | Mateus Villain | As duas origens da pasta às 19h40, os tokens (23 ou 24), o `config.json` e a conversão testada |
| `deck-ajustes.md` | Thiago | O deck slide a slide, como está no PDF, e as capturas que faltam |
| `deck-fortaleza.pdf` | Thiago | O deck exportado, para projetar sem internet |
| `perguntas-gi.md` | Gi | Perguntas sobre a sala, prontas para copiar |
| `pasta-modelo/` | Participantes | A pasta `fora-do-frame` de partida: três arquivos vazios com o nome certo e o `config.json` pronto |
| `telao/` | Deck | As imagens reais usadas nos slides: a Tela demo exportada, os recortes dela e o Card do `handoff/` renderizado |
| `qr-guia.svg`, `qr-guia.png` | Deck | QR para o `guia-participante.md` no GitHub |

Pasta de exemplo da Parte B: `handoff/`, na raiz do repositório, gerada de `src/tokens.css` por `npm run handoff:tokens`.
