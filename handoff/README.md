# handoff: a pasta que a sala leva para as 20h (edição Fortaleza)

É a pasta de exemplo do workshop. Todo mundo baixa no ZIP **antes de quarta**, copia para a Área de Trabalho com o nome `handoff` e abre na sala, no passo B3 (19h21): o `Card.html` abre com cor, e `#C8352B`, `20px` e `24px` estão no `tokens.json`. Isso funciona sem internet. Comparar os três valores com as variáveis do Figma pede rede e fica pendente para quem não tiver. É dela que o Mateus parte às 20h.

| Arquivo | O que é |
|---|---|
| `tokens.json` | Os tokens de design no formato W3C Design Tokens (DTCG): as 23 variáveis da coleção Workshop Tokens mais `font.body`, derivada do estilo de texto. Gerado de `src/tokens.css` por `npm run handoff:tokens` |
| `tokens.css` | A saída do Style Dictionary a partir de `tokens.json`. Testado com Style Dictionary 5.8.0 e 4.4.0: as 24 variáveis batem com `src/tokens.css` |
| `config.json` | A configuração do Style Dictionary que o Mateus usa às 20h. A mesma que vem na `fortaleza/pasta-modelo` |
| `Card.html` | O Card em HTML puro, com os estados normal e desabilitado |
| `Card.css` | O CSS do Card. Cor, espaçamento, raio e tipografia vêm de variável com o nome do token. Três valores são fixos de propósito: a largura máxima do card (`360px`), o peso do texto do botão (`600`) e a opacidade do estado desabilitado (`0.7`). O prompt da extensão do guia permite os mesmos três |

Abra o `Card.html` no navegador para ver o card. Para conferir os nomes dos arquivos e as 23 variáveis do `tokens.json` sem internet, rode `node scripts/conferir-pasta.mjs` seguido do caminho da pasta que você vai levar (a cópia da Área de Trabalho, não esta). O comando não olha o conteúdo do `Card.html`, do `Card.css` nem do `config.json`. Ninguém precisa apagar arquivo desta pasta às 20h: a cópia sem `tokens.css`, para demonstração, é `fortaleza/demo-card-sem-cor/`. Para converter os tokens você mesmo, rode `npx style-dictionary build --config config.json` dentro da pasta (detalhes em `fortaleza/para-o-mateus.md`).

Quem faz a extensão do guia (apêndice no fim) gera a própria pasta, `fora-do-frame`, e leva as duas.
