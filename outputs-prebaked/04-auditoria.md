# Prebaked: auditoria (prompt 4)

Output de referência do prompt 4 contra o arquivo congelado. Os 6 defeitos plantados, com elemento, regra violada e severidade. Fallback do momento uau 1.

## Achados

| # | Elemento | O que está errado | Token / regra violada | Severidade |
|---|---|---|---|---|
| 1 | Botao continuar | Cor de fundo por hex cru `#C8352B` e instância desacoplada do componente Button | `color/brand-primary` não aplicado; instância deve ficar acoplada | Quebra consistência |
| 2 | Tela demo (container) | Padding de 20px, fora do grid de 8 | `space/3` = 24 (grid 8px) | Quebra consistência |
| 3 | Caption "Leva menos de um minuto" | Texto `#A29B93` sobre `#FFFFFF`, contraste ~2.75:1 | WCAG 2.1 AA exige >=4.5:1 para texto normal | Bloqueia acessibilidade |
| 4 | Input nome | Estilo outline (sem preenchimento) onde o padrão do sistema é filled | Variante fora do padrão (`color/surface-alt`) | Quebra consistência |
| 5 | Ícone do opt-in | 20px | `size/icon` = 24 | Cosmético |
| 6 | Grupo "fields" | Gap de 12px | `space/2` = 16 | Quebra consistência |

## Nota de contraste (defeito 3)

`#A29B93` sobre `#FFFFFF` resolve em aproximadamente 2.75 para 1. O mínimo AA para texto normal é 4.5 para 1. Reprova, e é praticamente invisível a olho nu: estava na tela o tempo todo.

## Fronteira humana

A auditoria acha os 6. Ela não decide quais desses importam pro produto: isso continua sendo trabalho humano. O defeito 3 bloqueia (acessibilidade), os defeitos 1, 2, 4 e 6 quebram consistência, e o 5 é cosmético. A ordem de correção é uma decisão de time, não da IA.
