# Edição Fortaleza

"Figma + IA, na prática", do seu Figma ao primeiro site. Workshop para designers no Fora do Frame, uma experiência UXFor (3º dia, workshops presenciais). Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota, Fortaleza.

Versão v10 (16/11), decisões em `.critica/spec-v9.md` (seção v10). O foco é o Figma ligado ao agente pelo servidor Figma Console MCP e o plugin Desktop Bridge, a rota gratuita (o MCP oficial do Figma é outra rota, não um passo). Cada designer conecta o Figma ao próprio agente (Claude Desktop; Codex como alternativa) no preparo obrigatório em casa, e preenche o `meus-dados.txt` (nome, título, bio, botão e link, cor, fundo). Quem não conectou chega às 17h30, na mesa de instalação com os voluntários. Na sala, cada pessoa parte do frame "Minha hero" (primeira página do arquivo da Community, 1440 por 860, Auto Layout e variáveis Workshop Tokens). Primeiro o alô: a IA diz o nome do arquivo e o texto do botão ("Fale comigo"), e a pessoa confere olhando o frame. Depois o prompt 1: o agente escreve no Figma dela, troca os textos e muda o valor de `color/brand-primary`, com as camadas ainda editáveis. O Thiago mostra as possibilidades no telão (comentário lido e aplicado, handoff, `DESIGN.md` e harness, chat do Claude Desktop x Claude Code). Com o `DESIGN.md` anexado, o prompt 2 gera um `index.html` da hero, que a pessoa confere ao lado do frame. Próximos passos opcionais: Netlify Drop, GitHub, PageSpeed Insights, React Bits, Mobbin MCP. Sem número de mensagens prometido: quem bater no limite edita à mão e usa o site reserva do kit (`meu-site-kit/reserva/index.html`, plano C). O fecho é a frase de impacto e o QR do LinkedIn. A pasta `handoff/`, para o workshop seguinte, às 20h, é preparo que cada pessoa leva.

**O que o participante usa mora em https://github.com/thiagoxikota/figma-ia-na-pratica:** o guia (página inicial), o `meu-site-kit`, a `handoff` e o instalador, com testes automáticos em Windows, Mac e Linux. Esta pasta guarda só o material do palco: roteiro, prompter, deck, checklists e guia dos voluntários. As tags `fortaleza` a `fortaleza-v5` deste repositório já circularam e não são movidas.

| Arquivo | Para quem | O que é |
|---|---|---|
| `guia-participante.md` | Participantes | Aviso de que o guia mudou para o `figma-ia-na-pratica` |
| `meu-site-kit/` | Participantes | O kit que vai no ZIP: `meus-dados.txt` (os 6 dados, preenchidos em casa), `DESIGN.md` (as regras da hero), `LEIA.md`, a pasta `reserva/` (o `index.html` do plano C, só a hero) e a pasta `meu-site/`, vazia, onde entra o `index.html` |
| `img/` | Deck e guia | `hero-molde.png` (o frame "Minha hero"), `hero-exemplo-thiago.png` (o exemplo personalizado) e `site-reserva.png` (o site reserva renderizado a 1440 de largura) |
| `guia-voluntarios.md` | Voluntários | Aviso de que o guia mudou para o `figma-ia-na-pratica` (`voluntarios.md`) |
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
| `qr-guia.png` | Deck | QR para o guia, em https://github.com/thiagoxikota/figma-ia-na-pratica |

Instalador e kit: https://github.com/thiagoxikota/figma-ia-na-pratica. O `scripts/instalar.mjs` e o `meu-site-kit/` desta pasta são cópias antigas, das tags já enviadas.
