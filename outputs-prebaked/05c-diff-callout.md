# Prebaked: code toggle do UAU 2 (10:52-55, camada 2)

Os 3 pares de linha que Bruno narra em 15 segundos no MOMENTO UAU 2. Nunca o TSX inteiro (designer nao parseia codigo no telao): so os 3 pares que provam a tese no eixo que o dev julga.

Este arquivo e a rede de seguranca do beat: sobrevive a Plano B (sem Figma) e a versao espremida, porque e texto, nao depende de interacao viva nem de chamada de IA.

## Os 3 pares

| # | Raso (`gera esse card em React`) | Especificado (contrato 5b) | O que o par prova |
|---|---|---|---|
| 1 | `<div onClick={...}>` | `<button type="button" onClick={...}>` | semantica: um pega foco de teclado e leitor de tela, o outro nao existe pra quem nao usa mouse |
| 2 | `backgroundColor: '#4A90D9'` (hex cru) | `background: var(--color-brand-primary)` | token: um chuta uma cor, o outro puxa a cor da marca da fonte de verdade |
| 3 | (nao existe) | `.card__action:focus-visible { outline: 2px }` + `:hover` + `:disabled` | estados: o raso e uma foto, o especificado tem os 4 estados que um componente de produto precisa |

## Fala de cobertura (Bruno, 15s)

> "Pro dev que quer a prova de verdade: a esquerda e uma div com onClick e a cor cravada na mao. A direita e um button de verdade, com a cor puxada do token e os estados. O render mente. A diferenca mora aqui, e ela e o workshop inteiro."

## Fonte

Espelha `src/components/CardRaso.tsx` (raso) e `src/components/Card.tsx` + `src/components/Card.css` (especificado). Se a geracao ao vivo mudar o codigo, conferir que os 3 pares continuam validos antes de projetar.
