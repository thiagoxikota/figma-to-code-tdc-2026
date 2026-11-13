# Edição Fortaleza

"Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona". Workshop para designers no Fora do Frame, uma experiência UXFor (3º dia, workshops presenciais). Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota, Fortaleza.

Todo mundo trabalha na mesma Tela demo ("Criar sua conta"). Parte A: a tela vira imagem no Claude gratuito, com revisão de dev, a decisão do designer sobre quais pontos aceitar e um protótipo navegável. Parte B: a mesma tela lida do arquivo, pela ligação local entre o Claude e o Figma, que a pessoa instala em casa (`scripts/instalar.mjs`). Termina com o Card e os tokens em arquivo, de onde o workshop do Mateus Villain parte às 20h. Quem não termina sai com a pasta de exemplo `handoff/`.

O resto do repositório é o TDC Florianópolis, mantido como histórico.

| Arquivo | Para quem | O que é |
|---|---|---|
| `guia-participante.md` | Participantes | Preparação em casa, Parte A, ponte, Parte B com os prompts, salvamento e revogação, cada etapa com "deu certo quando" |
| `guia-voluntarios.md` | Voluntários | Papel na sala, marcas de relógio com o critério de cada etapa, regra de dupla, contingências |
| `roteiro.md` | Thiago | Tese, grade de 18h00 a 19h40 e o que dizer em cada bloco |
| `checklist-thiago.md` | Thiago | Ensaios pendentes na conta gratuita, o que fazer até segunda, na terça e no dia |
| `para-o-mateus.md` | Mateus Villain | As duas origens da pasta às 19h40, os tokens (23 ou 24) e a conversão testada |
| `deck-ajustes.md` | Thiago | A nova sequência do deck, slide a slide |
| `perguntas-gi.md` | Gi | Perguntas sobre a sala, prontas para copiar |
| `pasta-modelo/` | Participantes | Os três arquivos vazios do salvamento (passo B5) |
| `qr-guia.svg`, `qr-guia.png` | Deck | QR para o `guia-participante.md` no GitHub |

Pasta de exemplo da Parte B: `handoff/`, na raiz do repositório, gerada de `src/tokens.css` por `npm run handoff:tokens`.
