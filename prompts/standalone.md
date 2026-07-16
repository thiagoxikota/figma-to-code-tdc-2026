# Prompts standalone (fallback e treino de casa)

Este material NÃO é o exercício principal da sala. Na sala, o exercício principal é o pipeline real com MCP: Claude Desktop lê um frame de verdade do Figma (Claude Desktop > Figma Console MCP > plugin Desktop Bridge > Figma Desktop), gera o componente, você compara com o Figma e corrige uma falha. Isso está em `prompts/prompts.md` e no kit do QR.

O que você tem aqui é o par raso vs especificado rodando SEM MCP, direto no Claude do navegador (claude.ai). Ele existe para dois casos:

- **Fallback coletivo**: se a rede ou o login travar em massa na sala e o pipeline real não subir na hora, a gente roda este par junto, no telão, para ninguém ficar parado.
- **Treino de casa**: para você praticar sozinho a competência de especificar, sem depender de instalar nada.

## O que este exercício treina (e o que ele não faz)

O pipeline real tem duas metades. A FONTE (o Figma lido via MCP) é o que tira o output da média, e isso a gente prova no palco com o MCP ligado. A outra metade é escrever a especificação boa. Aqui, sem Figma e sem MCP, você treina só essa segunda metade: escrever o contrato à mão e validar o que voltou.

Seja honesto sobre o limite: isto não é "do Figma ao código". Não tem arquivo de Figma nenhum sendo lido. O contexto que no pipeline real vem do frame, aqui você digita na mão dentro do prompt. É um simulador da especificação, não o pipeline.

## Passo a passo

1. Abra o Claude no navegador (claude.ai) numa janela anônima e entre com a sua conta (a gratuita serve).
2. Abra uma conversa nova.
3. Cole o prompt raso abaixo. Rode. Guarde o que saiu.
4. Cole o prompt especificado. Rode. Compare os dois.

## Prompt raso

```
gera um card de produto em React
```

O que observar: sem contrato, o modelo preenche as lacunas com o default dele. Cor genérica, sem estados, sem acessibilidade. É a convergência estrutural acontecendo na sua tela.

## Prompt especificado

Este traz os tokens inline. Como não tem arquivo pra ler, o contexto vai dentro do próprio prompt.

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

O que observar: a mesma IA, a mesma tarefa, a mesma conta. A diferença inteira entre o primeiro e o segundo output foi o que você especificou. Especificar não é burocracia. É o trabalho.

## Como especificar junto (as rodadas)

Depois do par acima, adiciona uma restrição por vez ao prompt especificado e roda de novo. Sugestões pra ditar:

- framework e linguagem (React, TypeScript)
- tokens nomeados no lugar de valor cru
- estados: hover, foco visível, desabilitado, erro
- acessibilidade: aria-label, foco visível, alvo de 44px, contraste AA
- semântica: article, heading, button de verdade

Cada restrição que entra aproxima o output do que passa num code review de verdade.

## Como isto se liga ao pipeline real

No pipeline com MCP você não digita esses tokens na mão: o Claude lê o frame "Tela demo" do Figma e o contrato vem de lá, com os valores reais do arquivo. É por isso que a FONTE importa. Um arquivo bem construído entrega um contexto limpo; um arquivo bagunçado entrega contexto bagunçado. Quando você quiser fazer o caminho completo em casa, abra o QR do kit e siga `prompts/prompts.md`.

## Sem conta?

Acompanhe pela dupla do lado, ou abra o QR no navegador: o preview e todos os prompts estão no kit.
