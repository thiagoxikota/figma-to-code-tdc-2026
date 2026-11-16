# Edição Fortaleza

"Seu primeiro site, do Figma ao ar". Workshop para designers no Fora do Frame, uma experiência UXFor (3º dia, workshops presenciais). Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota, Fortaleza.

Versão v9.1 (16/11), decisões em `.critica/spec-v9.md` (seção v9.1), que substitui a v7 e a v8. Método, não ferramenta: cada designer conecta o Figma ao próprio agente (Claude Desktop; Codex como alternativa) pelo servidor Figma Console MCP e o plugin Desktop Bridge (o MCP oficial do Figma é outra rota, não um passo), no preparo obrigatório em casa. Quem não conseguiu chega às 17h30, na mesa de instalação com os voluntários. Na sala, cada pessoa parte de um frame pronto ("Meu portfólio", página "Portfólio" do arquivo da Community), dá as regras no `DESIGN.md` (o harness contra AI slop), o agente lê o frame e aponta duas inconsistências plantadas, gera um `index.html` único e a pessoa publica no Netlify Drop, testando o link numa janela anônima e no celular. O primeiro sucesso da sala é o alô: a IA diz o tamanho da fonte do nome e a pessoa confere no painel do Figma. Sem número de mensagens prometido: quem bater no limite usa o site reserva do kit (`meu-site-kit/reserva/index.html`, plano C). GitHub é explicado e mostrado no telão, não é obrigatório. Todo mundo revoga a chave do Figma. O workshop do Mateus Villain, às 20h, parte da pasta `handoff/`, que cada pessoa leva no preparo.

Links públicos pela tag `fortaleza-v4`. As tags `fortaleza` (v6), `fortaleza-v2` (v7) e `fortaleza-v3` (v8) já circularam e não são movidas.

O resto do repositório é o TDC Florianópolis, mantido como histórico. Os prompts de Fortaleza estão só no `guia-participante.md`; `prompts/prompts.md` é do TDC.

| Arquivo | Para quem | O que é |
|---|---|---|
| `guia-participante.md` | Participantes | O que você leva, o mapa das peças, preparo obrigatório (contas, arquivo, pastas, a conexão passo a passo e a conta do Netlify), "Usa Codex?", os passos da sala com os prompts e "Pronto quando", Netlify Drop, "E o GitHub?", revogar a chave e "Quando dá errado" |
| `meu-site-kit/` | Participantes | O kit que vai no ZIP: `DESIGN.md` (as regras do site), `LEIA.md`, a pasta `reserva/` (o `index.html` do plano C) e a pasta `meu-site/`, vazia, onde entra o `index.html` e que vai para o Netlify Drop |
| `guia-voluntarios.md` | Voluntários | Mesa de instalação às 17h30 (o que conferir e quando desistir), relógio com o critério de cada bloco, pendrive e contingências |
| `roteiro.md` | Thiago | Tese, grade v9.1, prioridade quando atrasar, fala de cada bloco e contingências |
| `roteiro-prompter.txt` | Thiago | A fala dos 16 slides, em linhas curtas para o notch prompter |
| `checklist-thiago.md` | Thiago | Pendências (arquivo na Community, ensaios, Netlify, demo GitHub), material a refazer, terça e o dia |
| `checklist-dia-18-11.md` | Thiago | O checklist enxuto do dia |
| `para-o-mateus.md` | Mateus Villain | O que a sala leva às 20h (a `handoff`), os tokens, o `config.json` e a conversão testada |
| `deck-ajustes.md` | Thiago | O deck v9.1 a montar, 16 slides, com os diagramas descritos |
| `deck-fortaleza.pdf` | Thiago | O deck da v8, 17 slides, exportado em 16/11. Substituir pelo PDF da v9.1 |
| `perguntas-gi.md` | Gi | Perguntas sobre a sala, prontas para copiar |
| `pasta-modelo/` | Histórico | A pasta `fora-do-frame` de partida da extensão da v6, que saiu do guia na v7 |
| `telao/` | Histórico | Imagens da v8 (Tela demo, recortes, exemplos do formulário). Não entram no deck v9.1 |
| `demo-card-sem-cor/` | Mateus Villain | Cópia de demonstração da `handoff` sem o `tokens.css`, para mostrar o Card ganhando cor sem ninguém apagar arquivo da própria pasta |
| `qr-guia.svg`, `qr-guia.png` | Deck | QR para o guia. Ainda aponta para a tag `fortaleza-v3`; refazer para a `fortaleza-v4` |

Instalador da conexão, que o guia chama pela tag `fortaleza-v4`: `scripts/instalar.mjs` (grava a conexão no Claude Desktop, pede a chave do Figma e prepara o plugin Figma Desktop Bridge). Verificador local de pasta: `scripts/conferir-pasta.mjs` (nomes, JSON válido e as 23 variáveis). Pasta de exemplo: `handoff/`, na raiz do repositório, gerada de `src/tokens.css` por `npm run handoff:tokens`.
