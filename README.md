# Do Figma ao código sem handoff

Kit do workshop apresentado no The Developer's Conference Florianópolis 2026 (23/07), por Thiago Xikota e Bruno Bach, com IxDA Florianópolis e Friends of Figma Florianópolis.

A tese em uma frase: a IA não lê a sua tela, ela lê o que você conseguiu especificar. O resto ela inventa.

## Dois caminhos, escolha o seu

### Na sala do TDC (sem instalar nada)

Roda no Claude Desktop com a sua conta. Sem MCP, sem terminal, sem arquivo.

1. Abra o Claude Desktop e entre com a sua conta (a gratuita serve).
2. Cole o par de prompts de [`prompts/standalone.md`](prompts/standalone.md): um raso, um especificado.
3. O artifact do Claude renderiza o componente na sua tela. A sala especifica junto e o output muda na sua frente.

Sem conta? Abra `dist/index.html` no navegador e acompanhe o preview.

### Em casa (o pipeline completo com MCP)

A IA lê o arquivo de Figma de verdade via MCP: ela audita o design contra os próprios tokens e gera o componente a partir da estrutura, não de um print. Setup único de uns 10 minutos em [`kit/setup-10min.md`](kit/setup-10min.md).

## O que tem aqui

```
prompts/prompts.md       Os 10 prompts do workshop, prontos pra copiar
prompts/standalone.md    O par raso vs especificado pro exercício da sala (Claude Desktop, sem setup)
kit/setup-10min.md       Setup completo do Figma Console MCP (o que não fizemos no palco)
kit/cartao-de-bancada.md Cartão impresso, 1 por máquina na sala
kit/feedback-form.md     As 3 perguntas de feedback
app/                     (raiz deste repo) Preview em Vite com os dois slots: raso vs especificado
src/tokens.css           A fonte de verdade dos tokens do mini design system
outputs-prebaked/        Outputs de referência dos ensaios + o diff-callout do code toggle (05c)
screenshots/             Comparações design vs código
dist/                    Build estático: abre sem instalar nada
```

## Como rodar o preview

**Sem instalar nada:** baixe o repositório e abra `dist/index.html` no navegador.

**Com hot reload (pra rodar a geração ao vivo):**

```
npm install
npm run dev
```

## O fluxo em 4 movimentos

1. **Ler.** A IA lê estrutura, componentes e tokens do arquivo, não pixels (prompt 1).
2. **Auditar.** Ela varre a tela contra o design system e acha o que o olho não pega; você decide o que importa (prompt 4).
3. **Gerar.** O prompt raso (5a) devolve o genérico. O especificado (5b) devolve o componente fiel aos tokens. A diferença é o contrato, não a ferramenta.
4. **Validar.** Fidelidade contra o Figma (prompt 9) e revisão de código como PR (prompt 10). A IA gera, o humano responde.

## Arquivo Figma da demo

Arquivo público, duplicável na Community: https://www.figma.com/community/file/1659374868260259462

Duplique pra sua conta e rode os prompts contra ele. É o mesmo arquivo da demo do palco: um mini design system com tokens, três componentes e uma tela com seis inconsistências plantadas.

## Honestidade sobre o setup

O setup do MCP leva uns 10 minutos e está inteiro em `kit/setup-10min.md`, incluindo o troubleshooting de quando dá errado (token que some, plugin que desconecta, firewall, Node antigo). Existem dois caminhos, o gratuito da comunidade e o oficial pago da Figma; a comparação honesta está no kit.

## Licença

MIT. Use, adapte, ensine.

O método por trás do workshop vem da pesquisa sobre convergência estrutural e letramento de especificação (AIMEDIA 2026, IARIA). A conversa continua na newsletter Notas de Produto e em [thiagoxikota.com](https://thiagoxikota.com).

Levo esse método pra times de produto. Se fizer sentido pro seu, fala comigo por lá.
