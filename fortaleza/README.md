# Edição Fortaleza

"Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona". Workshop para designers no Fora do Frame, uma experiência UXFor (3º dia, workshops presenciais). Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota, Fortaleza.

Duas partes. Parte A, sem instalar nada: a tela vira imagem no Claude gratuito, com revisão de dev e protótipo navegável. Parte B, com o Figma conectado pelo comando único (`scripts/instalar.mjs`): a mesma base técnica do TDC Florianópolis (o resto do repositório, mantido como histórico), terminando com os tokens em JSON e o Card em HTML e CSS, que é de onde o workshop do Mateus Villain parte às 20h.

| Arquivo | Para quem | O que é |
|---|---|---|
| `guia-participante.md` | Participantes | Antes de quarta, instalação por um comando, Parte A e Parte B com os prompts, alternativa Claude Code |
| `guia-voluntarios.md` | Voluntários | Papel na sala, marcas de relógio, regra de dupla, contingências das duas partes |
| `roteiro.md` | Thiago | Grade de 18h00 a 19h40, bloco a bloco, com os slides |
| `checklist-thiago.md` | Thiago | O que fazer até segunda, na terça e no dia |
| `para-o-mateus.md` | Mateus Villain | O que a sala tem em mãos às 19h40, formato e conversão testada |
| `deck-ajustes.md` | Thiago | O que mudou na cópia do deck e o que falta decidir |
| `perguntas-gi.md` | Gi | Perguntas sobre a sala, prontas para copiar |
| `pasta-modelo/` | Participantes | Os três arquivos vazios do passo B6 |
| `qr-guia.svg`, `qr-guia.png` | Deck | QR para o `guia-participante.md` no GitHub |

Rede de segurança da Parte B: `handoff/`, na raiz do repositório, gerada de `src/tokens.css` por `npm run handoff:tokens`.
