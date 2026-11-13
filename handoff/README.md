# handoff: rede de segurança da edição Fortaleza

Para quem fez só a Parte A, não terminou a Parte B (passo B6, Exportar) do workshop, bateu no limite da conta gratuita ou quer conferir o próprio resultado. Copie os arquivos desta pasta para a sua `fora-do-frame`.

| Arquivo | O que é |
|---|---|
| `tokens.json` | Os tokens do mini design system no formato W3C Design Tokens (DTCG): as 23 variáveis da coleção Workshop Tokens mais `font.body`, derivada do estilo de texto. Gerado de `src/tokens.css` por `npm run handoff:tokens` |
| `tokens.css` | A saída do Style Dictionary a partir de `tokens.json`. Testado com Style Dictionary 5.8.0 e 4.4.0: as 24 variáveis batem com `src/tokens.css` |
| `Card.html` | O Card em HTML puro, com os estados normal e disabled |
| `Card.css` | O CSS do Card, só com variáveis de token. Equivale a `src/components/Card.css` mais a base de `src/index.css` |

Abra o `Card.html` no navegador para ver o card. Para converter os tokens você mesmo, veja `fortaleza/para-o-mateus.md`.
