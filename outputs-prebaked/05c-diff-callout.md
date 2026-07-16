# Prebaked: comparação do UAU (Take A vs Take B)

Os pontos que a Comparação (roteiro, bloco da demo) aponta item por item. O experimento isola o Figma: os DOIS takes são codigo competente (article, heading, button, estados, aria). A diferença inteira é a FONTE do design. Take A inventou; Take B leu o Figma via MCP.

Este arquivo é a rede de seguranca do beat: sobrevive a Plano B (sem Figma) e à versao espremida, porque é texto e nao depende de interacao viva.

## Os 3 pares (design fidelity, nao semantica)

| # | Take A (sem Figma) | Take B (com Figma) | O que o par prova |
|---|---|---|---|
| 1 | `background: '#4A90D9'` (hex inventado) | `background: var(--color-brand-primary)` | cor: um chutou um azul, o outro puxou o vermelho da marca do Figma |
| 2 | `padding: 20px` (fora do grid) | `padding: var(--space-3)` (grid de 8) | espacamento: inventado vs o grid real do design system |
| 3 | `font-family: Arial` (generica) | `var(--font-body)` + `var(--font-size-*)` | tipografia: default vs a do produto |

## A prova objetiva (o que o comando mostra)

`npm run validate:workshop` roda `tsc --noEmit` + `check-tokens`. O Take A falha na checagem de token (hex cru); o Take B passa (so var). Determinístico, sem depender de rede.

## Fala de cobertura (Bruno, 15s)

> "Os dois são codigo competente: os dois têm button, estado, aria. A diferença não é qualidade de codigo, é de onde veio o design. O Take A inventou a cor, o espaçamento e a fonte. O Take B leu do Figma. A checagem de token prova: um tem cor cravada na mao, o outro só usa variavel."

## Fonte

Espelha `src/components/CardRaso.tsx` (Take A) e `src/components/Card.tsx` + `src/components/Card.css` (Take B). Se a geracao ao vivo mudar o codigo, conferir que os 3 pares e o resultado do validate continuam validos antes de projetar.
