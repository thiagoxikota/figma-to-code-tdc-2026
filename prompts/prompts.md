# Os 10 prompts do workshop

Prontos pra copiar. O par 5a/5b é o experimento central da demo: MESMO prompt, muda só se a IA lê o Figma ou não. Isola a variável certa (o contexto do Figma), não "prompt bom vs prompt ruim".
Cada prompt é um exemplo de especificação: formato de saída definido, escopo travado, critério de verificação embutido.

## 1. Ler o arquivo Figma

```
Leia o frame "Tela demo" deste arquivo Figma. Devolva a árvore de
camadas, os componentes usados e as variáveis (tokens) aplicadas em
cada elemento. Não descreva pixels: descreva estrutura e semântica.
```

Por que funciona: especifica o formato de saída (árvore, componentes, tokens) e o nível de abstração (semântica, não aparência). A resposta vira auditável.

## 2. Identificar componentes

```
Liste os componentes e component sets deste arquivo. Para cada um:
nome, variantes disponíveis e propriedades expostas. Marque quais
instâncias na tela demo estão desacopladas do componente mestre.
```

Por que funciona: campos exatos por componente + um critério de verificação embutido (instância detached), que já é meia auditoria.

## 3. Mapear tokens

```
Exporte as variáveis deste arquivo como tokens: nome, valor, tipo
(cor / espaçamento / tipografia) e coleção. Depois aponte quais
valores aparecem na tela demo como número cru, sem referência a token.
```

Por que funciona: junta extração com uma pergunta de conformidade (valor cru versus token), a fundação de tudo que vem depois.

Nota de palco: o arquivo tem 1 coleção (`Workshop Tokens`, 23 variáveis). Se a primeira leitura voltar sem token nenhum, é cache frio logo após reconectar; peça de novo e ele traz os 23. Não é o arquivo sem tokens.

## 4. Auditar inconsistências

```
Audite a tela demo contra o design system deste arquivo. Para cada
inconsistência: o elemento, o que está errado, qual token ou regra foi
violada, e severidade (bloqueia acessibilidade / quebra consistência /
cosmético). Onde houver texto sobre fundo, avalie o contraste.
```

Por que funciona: impõe estrutura no achado e uma escala de severidade. A IA acha, o humano prioriza.

## 5a. Gerar, SEM o contexto do Figma (Take A)

```
Gere um componente Card em React + TypeScript, function component.
Props tipadas: title: string, description: string, imageUrl?: string,
onClick?: () => void. Cubra os estados default, hover, focus-visible e
disabled. Acessibilidade: elemento article, heading por prop, foco
visível de 2px, alvo mínimo de 44px, contraste mínimo AA. Sem libs
externas. Devolva só o arquivo Card.tsx.
```

É um prompt BOM: pede estados, tipos, acessibilidade. Falta uma coisa só, de onde vem a verdade do design. Sem fonte, a IA inventa a cor e o espaçamento. Esse é o ponto.

## 5b. Gerar, COM o Figma via MCP (Take B)

O MESMO prompt de cima, só acrescentando a fonte:

```
Gere um componente Card em React + TypeScript, function component.
Props tipadas: title: string, description: string, imageUrl?: string,
onClick?: () => void. Cubra os estados default, hover, focus-visible e
disabled. Acessibilidade: elemento article, heading por prop, foco
visível de 2px, alvo mínimo de 44px, contraste mínimo AA. Sem libs
externas.
Antes de gerar, leia o frame "Tela demo" deste arquivo Figma via MCP e
use os tokens (cor, espaçamento, tipografia, raio) e a estrutura de lá.
Não invente valores; puxe do Figma. Devolva só o arquivo Card.tsx.
```

Por que funciona (e por que é o experimento certo): 5a e 5b são o MESMO pedido. A única variável que muda é a IA ler ou não o Figma. Quando o Take B sai fiel e o Take A inventa a cor, a diferença não é "prompt melhor", é a fonte, o contexto estruturado do Figma via MCP. Isso prova o título do workshop, não só que prompt detalhado ganha de prompt vago.

## 6. Melhorar acessibilidade

```
Revise o Card.tsx gerado só sob a ótica de WCAG 2.1 AA. Aponte cada
falha (contraste, foco, semântica, alvo de toque, texto alternativo)
com a linha e a correção mínima. Não reescreva o que já passa.
```

Por que funciona: escopo travado (só a11y, só o que falha, correção mínima) evita a IA reescrever tudo e introduzir regressão.

## 7. Explicar trade-offs

```
Aponte 3 decisões de implementação desse Card onde havia mais de um
caminho (article vs div, estado local vs controlado, CSS Modules vs
inline). Para cada uma: o que você escolheu, o que descartou e o
custo da escolha.
```

Por que funciona: força a IA a expor o espaço de decisão em vez de entregar como se houvesse uma única saída. Devolve ao humano o poder de discordar.

## 8. Criar plano de implementação

```
Antes de gerar qualquer código do formulário da tela, escreva um
plano: componentes a criar, ordem, tokens necessários, estados por
componente e o que exige decisão humana. Não escreva código ainda.
```

Por que funciona: separa planejar de executar. Plano é barato de corrigir antes de virar código.

## 9. Revisar como designer

```
Compare o componente renderizado no preview com o frame do Figma.
Aja como o designer do sistema: liste onde o código divergiu da
intenção de design (espaçamento, cor, tipografia, hierarquia), citando
o token correto. Ignore qualidade de código, foque em fidelidade.
```

Por que funciona: papel explícito, eixo único (fidelidade) e referência (o token). Duas revisões separadas valem mais que uma que mistura tudo.

## 10. Revisar como dev

```
Revise o Card.tsx como um dev sênior revisaria um PR: tipagem, nomes,
reatividade, acessibilidade no código, e o que você bloquearia no
merge. Seja específico com linha e severidade. Não elogie.
```

Por que funciona: o papel (dev sênior) mais o critério de merge (bloqueia ou não) transformam revisão vaga em decisão acionável.
