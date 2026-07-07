# Do Figma ao código sem handoff

Kit do workshop apresentado no The Developer's Conference Florianópolis 2026 (23/07), por Thiago Xikota e Bruno Bach, com IxDA Florianópolis e Friends of Figma Florianópolis.

A tese em uma frase: a IA não lê a sua tela, ela lê o que você conseguiu especificar. O resto ela inventa.

## O que tem aqui

O arco completo da demo, reproduzível na sua máquina: a IA lê um arquivo de Figma via MCP, audita o design contra os próprios tokens, gera um componente React de dois jeitos (com e sem especificação) e o resultado é validado como um PR de verdade.

```
prompts/prompts.md      Os 10 prompts do workshop, prontos pra copiar
kit/setup-10min.md      Setup completo do Figma Console MCP (o que não fizemos no palco)
app/                    (raiz deste repo) Preview em Vite com os dois slots: raso vs especificado
src/tokens.css          A fonte de verdade dos tokens do mini design system
outputs-prebaked/       Outputs de referência gerados nos ensaios
screenshots/            Comparações design vs código
dist/                   Build estático: abre sem instalar nada
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

[Link do arquivo público duplicável: publicar antes do evento]

## Honestidade sobre o setup

O setup do MCP leva uns 10 minutos e está inteiro em `kit/setup-10min.md`, incluindo o troubleshooting de quando dá errado (token que some, plugin que desconecta, firewall, Node antigo). Existem dois caminhos, o gratuito da comunidade e o oficial pago da Figma; a comparação honesta está no kit.

## Licença

MIT. Use, adapte, ensine.

O método por trás do workshop vem da pesquisa sobre convergência estrutural e letramento de especificação (AIMEDIA 2026, IARIA). A conversa continua na newsletter Notas de Produto e em [thiagoxikota.com](https://thiagoxikota.com).

Levo esse método pra times de produto. Se fizer sentido pro seu, fala comigo por lá.
