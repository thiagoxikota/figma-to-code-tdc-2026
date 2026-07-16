# Prompts standalone (nível A, na sala do TDC)

Material do bloco mão na máquina. Roda direto no Claude Desktop, sem MCP, sem terminal, sem arquivo aberto. Cola o prompt na conversa e o artifact do Claude renderiza o componente na sua tela.

Pra este exercício você não precisa do Figma nem deste repositório. O caminho completo (a IA lendo o arquivo de Figma de verdade via MCP) está no QR do kit, pra rodar em casa.

## Passo a passo

1. Abra o Claude Desktop e entre com a sua conta (a gratuita serve).
2. Abra uma conversa nova.
3. Cole o prompt raso abaixo. Rode. Guarde o que saiu.
4. Cole o prompt especificado. Rode. Compare os dois.

## Prompt raso

```
gera um card de produto em React
```

O que observar: sem contrato, o modelo preenche as lacunas com o default dele. Cor genérica, sem estados, sem acessibilidade. É a convergência estrutural acontecendo na sua tela.

## Prompt especificado

Este traz os tokens inline. No exercício da sala não tem arquivo pra ler, então o contexto vai dentro do próprio prompt.

```
Gere um componente Card em React + TypeScript, function component.

Use SOMENTE estes tokens. Não invente valor, não use hex cru fora desta lista:
- superfície: #FFFFFF
- texto: #1F1C1A
- texto secundário: #6C665F
- marca (primária): #C8352B
- marca (hover): #A82A22
- borda: #E2DDD6
- foco: #1D4ED8
- espaçamento: múltiplos de 8px (8, 16, 24, 32)
- raio de canto: 8px
- fonte do corpo: system-ui, 16px, altura de linha 1.5
- título: 20px, peso 700
- anel de foco: 2px
- alvo de toque mínimo: 44px

Props tipadas: title: string, description: string, imageUrl?: string, onClick?: () => void.
Cubra os estados default, hover, focus-visible e disabled.
Acessibilidade: elemento article, heading pela prop title, foco visível de 2px, alvo mínimo de 44px, contraste mínimo AA. Sem libs externas.
Devolva só o componente Card, pronto pra renderizar como artifact.
```

O que observar: a mesma IA, a mesma tarefa, a mesma conta. A diferença inteira entre o primeiro e o segundo output foi o que você especificou. Especificar não é burocracia. Virou o trabalho.

## Como especificar junto (as rodadas)

Depois do par acima, a sala adiciona uma restrição por vez ao prompt especificado e roda de novo. Sugestões pra ditar:

- framework e linguagem (React, TypeScript)
- tokens nomeados no lugar de valor cru
- estados: hover, foco visível, desabilitado, erro
- acessibilidade: aria-label, foco visível, alvo de 44px, contraste AA
- semântica: article, heading, button de verdade

Cada restrição que entra aproxima o output do que passa num code review de verdade.

## Sem conta?

Acompanhe pela dupla do lado, ou abra o QR no navegador: o preview e todos os prompts estão no kit.
