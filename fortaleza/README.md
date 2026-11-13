# Edição Fortaleza

"Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona". Workshop para designers no Fora do Frame, uma experiência UXFor (3º dia, workshops presenciais). Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota, Fortaleza.

Todo mundo trabalha na mesma Tela demo ("Criar sua conta"). Garantido para todos: uma decisão de design escrita e a pasta `handoff/`, conferida. Depende do Claude gratuito de cada pessoa: o próprio formulário, corrigido. Parte A: a tela vira imagem no Claude gratuito, com uma revisão, a decisão do designer sobre quais pontos aceitar e um protótipo do formulário. Parte B: a mesma tela é lida do arquivo, pela conexão entre o Claude Desktop e o Figma que alguns preparam em casa (`scripts/instalar.mjs`); cada pessoa confere um valor no próprio Figma, aplica a correção no próprio protótipo e abre a `handoff/`. O workshop do Mateus Villain, às 20h, parte da `handoff/`: os tokens e o Card, não o formulário. Gerar a própria pasta é extensão, fora do percurso da sala.

O resto do repositório é o TDC Florianópolis, mantido como histórico. Os prompts de Fortaleza estão só no `guia-participante.md`; `prompts/prompts.md` é do TDC.

| Arquivo | Para quem | O que é |
|---|---|---|
| `guia-participante.md` | Participantes | Preparação em casa (para todos e para a Parte B conectada), Parte A, ponte, Parte B com os prompts, conferência da pasta, revogação e a extensão, cada etapa com "deu certo quando" |
| `guia-voluntarios.md` | Voluntários | Papel na sala, marcas de relógio com o critério de cada etapa, o B1 no telão e a contagem das máquinas, o pendrive com responsável, contingências |
| `roteiro.md` | Thiago | Tese, grade de 18h00 a 19h40, o que tem prioridade quando atrasar e o que dizer em cada bloco |
| `checklist-thiago.md` | Thiago | Ensaios pendentes na conta gratuita, capturas que entram no deck, o que fazer até segunda, na terça e no dia |
| `para-o-mateus.md` | Mateus Villain | O que a sala leva às 20h (a `handoff` conferida), a pasta gerada na extensão, os tokens (24 ou 23), o `config.json` e a conversão testada |
| `deck-ajustes.md` | Thiago | O deck slide a slide, como está no PDF, e as capturas que só o ensaio dá |
| `deck-fortaleza.pdf` | Thiago | O deck exportado, para projetar sem internet |
| `perguntas-gi.md` | Gi | Perguntas sobre a sala, prontas para copiar |
| `pasta-modelo/` | Quem faz a extensão | A pasta `fora-do-frame` de partida: três arquivos vazios com o nome certo e o `config.json` pronto |
| `telao/` | Deck e participantes | As imagens dos slides. Reais: a Tela demo exportada (`tela-demo.png`, que também é a imagem pronta para quem não duplicou o arquivo), os recortes dela e o Card do `handoff/` renderizado. Exemplos do material: `formulario-exemplo.html` e as imagens `exemplo-*.png` renderizadas dele |
| `demo-card-sem-cor/` | Mateus Villain | Cópia de demonstração da `handoff` sem o `tokens.css`, para mostrar o Card ganhando cor sem ninguém apagar arquivo da própria pasta |
| `qr-guia.svg`, `qr-guia.png` | Deck | QR para o `guia-participante.md` na tag `fortaleza`, a mesma do ZIP |

Verificador local de pasta: `scripts/conferir-pasta.mjs` (nomes, JSON válido e as 23 variáveis). Pasta de exemplo: `handoff/`, na raiz do repositório, gerada de `src/tokens.css` por `npm run handoff:tokens`.
