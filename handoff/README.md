# handoff: a pasta de exemplo da edição Fortaleza

Para quem não terminou a Parte B até o corte das 19h25 (passo B5, Salvar), bateu no limite da conta gratuita, fez a B em dupla ou quer conferir o próprio resultado. Baixe o ZIP do repositório **antes de quarta**: esta pasta vem dentro dele e funciona sem internet.

Copie a pasta inteira para a área de trabalho com o nome `handoff`, para você e o Mateus saberem que é o exemplo. Se faltou só um arquivo, copie só ele para a sua `fora-do-frame` e anote o nome num `veio-do-exemplo.txt`.

| Arquivo | O que é |
|---|---|
| `tokens.json` | Os tokens de design no formato W3C Design Tokens (DTCG): as 23 variáveis da coleção Workshop Tokens mais `font.body`, derivada do estilo de texto. Gerado de `src/tokens.css` por `npm run handoff:tokens` |
| `tokens.css` | A saída do Style Dictionary a partir de `tokens.json`. Testado com Style Dictionary 5.8.0 e 4.4.0: as 24 variáveis batem com `src/tokens.css` |
| `config.json` | A configuração do Style Dictionary que o Mateus usa às 20h. A mesma que vem na `fortaleza/pasta-modelo` |
| `Card.html` | O Card em HTML puro, com os estados normal e desabilitado |
| `Card.css` | O CSS do Card. Cor, espaçamento, raio e tipografia vêm de variável com o nome do token. Três valores são fixos de propósito: a largura máxima do card (`360px`), o peso do texto do botão (`600`) e a opacidade do estado desabilitado (`0.7`) |

Abra o `Card.html` no navegador para ver o card. Para converter os tokens você mesmo, rode `npx style-dictionary build --config config.json` dentro da pasta (detalhes em `fortaleza/para-o-mateus.md`).
