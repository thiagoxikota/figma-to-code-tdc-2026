# Edição Fortaleza

"Figma + IA, na prática", do seu Figma ao primeiro site. Workshop para designers no Fora do Frame, uma experiência UXFor (3º dia, workshops presenciais). Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota, Fortaleza.

Versão v10 (16/11), decisões em `.critica/spec-v9.md` (seção v10). O foco é o Figma ligado ao agente pelo servidor Figma Console MCP e o plugin Desktop Bridge, a rota gratuita (o MCP oficial do Figma é outra rota, não um passo). Cada designer conecta o Figma ao próprio agente (Claude Desktop; Codex como alternativa) no preparo obrigatório em casa, e preenche o `meus-dados.txt` (nome, título, bio, botão e link, cor, fundo). Quem não conectou chega às 17h30, na mesa de instalação com os voluntários. Na sala, cada pessoa parte do frame "Minha hero" (primeira página do arquivo da Community, 1440 por 860, Auto Layout e variáveis Workshop Tokens). Primeiro o alô: a IA diz o tamanho da fonte do "Nome" e a pessoa confere no painel. Depois o prompt 1: o agente escreve no Figma dela, troca os textos e muda o valor de `color/brand-primary`, com as camadas ainda editáveis. O Thiago mostra as possibilidades no telão (comentário lido e aplicado, handoff, `DESIGN.md` e harness, chat do Claude Desktop x Claude Code). Com o `DESIGN.md` anexado, o prompt 2 gera um `index.html` da hero, que a pessoa confere ao lado do frame. Próximos passos opcionais: Netlify Drop, GitHub, PageSpeed Insights, React Bits, Mobbin MCP. Sem número de mensagens prometido: quem bater no limite edita à mão e usa o site reserva do kit (`meu-site-kit/reserva/index.html`, plano C). Todo mundo revoga a chave do Figma criada para o workshop. O workshop do Mateus Villain, às 20h, parte da pasta `handoff/`, que cada pessoa leva no preparo.

Links públicos pela tag `fortaleza-v5`. As tags `fortaleza` (v6), `fortaleza-v2` (v7), `fortaleza-v3` (v8) e `fortaleza-v4` (v9.1) já circularam e não são movidas.

O resto do repositório é o TDC Florianópolis, mantido como histórico. Os prompts de Fortaleza estão só no `guia-participante.md`; `prompts/prompts.md` é do TDC.

| Arquivo | Para quem | O que é |
|---|---|---|
| `guia-participante.md` | Participantes | O que você leva, o mapa das peças, preparo obrigatório (contas, arquivo, pastas, `meus-dados.txt`, a conexão passo a passo e o Netlify opcional), "Usa Codex?", os passos da sala com os prompts e "Pronto quando", regras escritas e harness, próximos passos, revogar a chave do workshop e "Quando dá errado" |
| `meu-site-kit/` | Participantes | O kit que vai no ZIP: `meus-dados.txt` (os 6 dados, preenchidos em casa), `DESIGN.md` (as regras da hero), `LEIA.md`, a pasta `reserva/` (o `index.html` do plano C, só a hero) e a pasta `meu-site/`, vazia, onde entra o `index.html` |
| `img/` | Deck e guia | `hero-molde.png` (o frame "Minha hero"), `hero-exemplo-thiago.png` (o exemplo personalizado) e `site-reserva.png` (o site reserva renderizado a 1440 de largura) |
| `guia-voluntarios.md` | Voluntários | Mesa de instalação às 17h30 (o que conferir e quando desistir), relógio com o critério de cada bloco, pendrive e contingências |
| `roteiro.md` | Thiago | Tese, grade v10 em 7 blocos, prioridade quando atrasar, fala dos 16 slides e contingências |
| `roteiro-prompter.txt` | Thiago | A fala dos 16 slides, em linhas curtas para o notch prompter |
| `checklist-thiago.md` | Thiago | Pendências (arquivo na Community, ensaio no Claude gratuito, Mac e Windows, capturas do setup, demos), material, terça e o dia |
| `checklist-dia-18-11.md` | Thiago | O checklist enxuto do dia |
| `para-o-mateus.md` | Mateus Villain | O que a sala leva às 20h (a `handoff`), os tokens, o `config.json` e a conversão testada |
| `deck-ajustes.md` | Thiago | O deck da v9.1 descrito. A v10 segue o `roteiro.md` |
| `deck-fortaleza.pdf` | Thiago | Deck antigo, exportado em 16/11. Substituir pelo PDF da v10 |
| `perguntas-gi.md` | Gi | Perguntas sobre a sala, prontas para copiar |
| `pasta-modelo/` | Histórico | A pasta `fora-do-frame` de partida da extensão da v6, que saiu do guia na v7 |
| `telao/` | Histórico | Imagens da v8 (Tela demo, recortes, exemplos do formulário). Não entram no deck v10 |
| `demo-card-sem-cor/` | Mateus Villain | Cópia de demonstração da `handoff` sem o `tokens.css`, para mostrar o Card ganhando cor sem ninguém apagar arquivo da própria pasta |
| `qr-guia.svg`, `qr-guia.png` | Deck | QR para o guia. Refazer para a tag `fortaleza-v5` |

Instalador da conexão, que o guia chama pela tag `fortaleza-v5`: `scripts/instalar.mjs` (grava a conexão no Claude Desktop, pede a chave do Figma e prepara o plugin Figma Desktop Bridge). Verificador local de pasta: `scripts/conferir-pasta.mjs` (nomes, JSON válido e as 23 variáveis). Pasta de exemplo: `handoff/`, na raiz do repositório, gerada de `src/tokens.css` por `npm run handoff:tokens`.
