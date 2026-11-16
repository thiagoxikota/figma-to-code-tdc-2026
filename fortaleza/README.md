# Edição Fortaleza

"Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona". Workshop para designers no Fora do Frame, uma experiência UXFor (3º dia, workshops presenciais). Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota, Fortaleza.

Versão v8 (16/11), decisões em `.critica/spec-v7.md`, seção final "v8". Todo mundo trabalha na mesma Tela demo ("Criar sua conta") e cada pessoa conecta o Figma ao Claude Desktop na própria máquina, sem dupla, no preparo obrigatório em casa (30 a 45 minutos). Quem não conseguiu chega às 17h30, na mesa de instalação com os voluntários; depois das 18h ninguém mexe em máquina na sala. No Claude gratuito, a tela vira imagem, recebe uma revisão que o designer aceita ou recusa, vira um formulário que funciona e ganha até 2 ajustes. No jogo "Chuta o valor", o Claude chuta pela imagem e cada um pergunta ao próprio arquivo pela conexão, com a revelação no telão junto. Cada pessoa corrige o próprio formulário com o valor que o seu Claude leu, o workshop fecha numa galeria e todo mundo revoga a chave do Figma. O workshop do Mateus Villain, às 20h, parte da pasta `handoff/`, que cada pessoa leva no preparo.

Links públicos pela tag `fortaleza-v3`. As tags `fortaleza` (v6) e `fortaleza-v2` (v7) já circularam e não são movidas.

O resto do repositório é o TDC Florianópolis, mantido como histórico. Os prompts de Fortaleza estão só no `guia-participante.md`; `prompts/prompts.md` é do TDC.

| Arquivo | Para quem | O que é |
|---|---|---|
| `guia-participante.md` | Participantes | O que você leva, preparo obrigatório (contas, arquivo, `handoff` e a conexão passo a passo, com o que aparece na tela), o teste da conexão, os 7 passos com os prompts e "Pronto quando", a revogação da chave e "Quando dá errado" |
| `guia-voluntarios.md` | Voluntários | Mesa de instalação às 17h30 (o que conferir e quando desistir), relógio com o critério de cada passo, pendrive e contingências |
| `roteiro.md` | Thiago | Tese, grade v8, prioridade quando atrasar, fala de cada bloco e contingências |
| `roteiro-prompter.txt` | Thiago | A fala slide a slide, em linhas curtas para o notch prompter |
| `checklist-thiago.md` | Thiago | Ensaio no Claude gratuito (pendência número um), material a refazer, terça e o dia |
| `checklist-dia-18-11.md` | Thiago | O checklist enxuto do dia |
| `para-o-mateus.md` | Mateus Villain | O que a sala leva às 20h (a `handoff`), os tokens, o `config.json` e a conversão testada |
| `deck-ajustes.md` | Thiago | O deck v8 a montar, 17 slides, e de onde vem cada imagem |
| `deck-fortaleza.pdf` | Thiago | O deck da v8, 17 slides, exportado em 16/11. Reserva do Google Slides |
| `perguntas-gi.md` | Gi | Perguntas sobre a sala, prontas para copiar |
| `pasta-modelo/` | Histórico | A pasta `fora-do-frame` de partida da extensão da v6, que saiu do guia na v7 |
| `telao/` | Deck e participantes | As imagens dos slides. Reais: a Tela demo exportada (`tela-demo.png`, que também é a imagem pronta para quem não duplicou o arquivo), os recortes dela e o Card do `handoff/` renderizado. Exemplos do material: `formulario-exemplo.html` e as imagens `exemplo-*.png` renderizadas dele |
| `demo-card-sem-cor/` | Mateus Villain | Cópia de demonstração da `handoff` sem o `tokens.css`, para mostrar o Card ganhando cor sem ninguém apagar arquivo da própria pasta |
| `qr-guia.svg`, `qr-guia.png` | Deck | QR para o guia na tag `fortaleza-v3` (refeito em 16/11) |

Instalador da conexão, que o guia chama pela tag `fortaleza-v3`: `scripts/instalar.mjs` (grava a conexão no Claude Desktop, pede a chave do Figma e prepara o plugin Figma Desktop Bridge). Verificador local de pasta: `scripts/conferir-pasta.mjs` (nomes, JSON válido e as 23 variáveis). Pasta de exemplo: `handoff/`, na raiz do repositório, gerada de `src/tokens.css` por `npm run handoff:tokens`.
