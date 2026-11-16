# Edição Fortaleza

"Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona". Workshop para designers no Fora do Frame, uma experiência UXFor (3º dia, workshops presenciais). Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota, Fortaleza.

Versão v7 (16/11), decisões em `.critica/spec-v7.md`. Todo mundo trabalha na mesma Tela demo ("Criar sua conta") e ninguém instala nada. Em 7 passos no Claude gratuito, a tela vira imagem, recebe uma revisão que o designer aceita ou recusa, vira um formulário que funciona e ganha até 2 ajustes. No jogo "Chuta o valor", a sala e o Claude chutam pela imagem e o arquivo responde no telão, pela conexão entre o Claude Desktop e o Figma que só o Thiago usa. Cada pessoa corrige o próprio formulário com o valor do arquivo e o workshop fecha numa galeria. A conexão fica como "Bônus para casa" no fim do guia. O workshop do Mateus Villain, às 20h, parte da pasta `handoff/`, que cada pessoa leva no preparo.

Links públicos pela tag `fortaleza-v2`. A tag `fortaleza` (v6) já foi divulgada aos organizadores e não é movida.

O resto do repositório é o TDC Florianópolis, mantido como histórico. Os prompts de Fortaleza estão só no `guia-participante.md`; `prompts/prompts.md` é do TDC.

| Arquivo | Para quem | O que é |
|---|---|---|
| `guia-participante.md` | Participantes | O que você leva, preparo de 15 minutos, os 7 passos com os prompts e "Pronto quando", ideias para brincar e o bônus para casa (conexão, chave do Figma e revogação) |
| `guia-voluntarios.md` | Voluntários | Papel na sala, relógio com o critério de cada passo, regra do vizinho, pendrive e contingências |
| `roteiro.md` | Thiago | Tese, grade v7, prioridade quando atrasar, fala de cada bloco e contingências |
| `roteiro-prompter.txt` | Thiago | A fala slide a slide, em linhas curtas para o notch prompter |
| `checklist-thiago.md` | Thiago | Ensaio no Claude gratuito (pendência número um), material a refazer, terça e o dia |
| `checklist-dia-18-11.md` | Thiago | O checklist enxuto do dia |
| `para-o-mateus.md` | Mateus Villain | O que a sala leva às 20h (a `handoff`), os tokens, o `config.json` e a conversão testada |
| `deck-ajustes.md` | Thiago | O deck v7 a montar, 15 slides, e de onde vem cada imagem |
| `deck-fortaleza.pdf` | Thiago | O deck da v6, exportado em 13/11. Histórico até o PDF da v7 substituir |
| `perguntas-gi.md` | Gi | Perguntas sobre a sala, prontas para copiar |
| `pasta-modelo/` | Histórico | A pasta `fora-do-frame` de partida da extensão da v6, que saiu do guia na v7 |
| `telao/` | Deck e participantes | As imagens dos slides. Reais: a Tela demo exportada (`tela-demo.png`, que também é a imagem pronta para quem não duplicou o arquivo), os recortes dela e o Card do `handoff/` renderizado. Exemplos do material: `formulario-exemplo.html` e as imagens `exemplo-*.png` renderizadas dele |
| `demo-card-sem-cor/` | Mateus Villain | Cópia de demonstração da `handoff` sem o `tokens.css`, para mostrar o Card ganhando cor sem ninguém apagar arquivo da própria pasta |
| `qr-guia.svg`, `qr-guia.png` | Deck | QR para o guia. Ainda aponta para a tag `fortaleza` (v6); refazer para `fortaleza-v2` |

Verificador local de pasta: `scripts/conferir-pasta.mjs` (nomes, JSON válido e as 23 variáveis). Pasta de exemplo: `handoff/`, na raiz do repositório, gerada de `src/tokens.css` por `npm run handoff:tokens`.
