# Para o Mateus: o que a sala tem em mãos às 19h40

Mateus, este é o ponto de entrega entre o meu workshop (18h00 às 19h40) e o seu (20h). Nada aqui muda o seu plano; é só para você saber exatamente de onde a galera parte.


## O que cada pessoa leva

Uma pasta `fora-do-frame` na área de trabalho, com três arquivos:

| Arquivo | Conteúdo | Como foi feito |
|---|---|---|
| `tokens.json` | Os tokens do mini design system, formato W3C Design Tokens (DTCG) | O Claude leu as variáveis do Figma via MCP e devolveu o JSON; a pessoa copiou e colou |
| `Card.html` | Página com o componente Card, estados normal e disabled | O Claude converteu o Card corrigido (React) para HTML puro |
| `Card.css` | Estilo do Card, só com `var(--token)` | Idem, com as mesmas variáveis do componente |

O `Card.html` carrega `tokens.css` e `Card.css`, nessa ordem. O `tokens.css` **ainda não existe** na pasta: ele nasce no seu workshop, quando o Style Dictionary converte o `tokens.json`. Ou seja, o primeiro build já faz o card "acender" no navegador.

Quem não terminou, bateu no limite da conta gratuita ou ficou com um JSON estranho usa a rede de segurança do repositório: `handoff/`, com os mesmos três arquivos prontos e mais o `tokens.css` já gerado. Então todo mundo chega do mesmo ponto.

Repositório: https://github.com/thiagoxikota/figma-to-code-tdc-2026 (público, MIT, pode usar como base à vontade).


## Os tokens

Coleção **Workshop Tokens** do arquivo da demo: 23 variáveis do Figma (10 cores, 13 numéricas). Os nomes do Figma usam barra, e a primeira parte vira o grupo do JSON, então o Style Dictionary devolve exatamente o nome que o componente já usa:

```
Figma: color/brand-primary   JSON: color > brand-primary   CSS: --color-brand-primary
Figma: space/3               JSON: space > 3               CSS: --space-3
Figma: font-size/heading     JSON: font-size > heading     CSS: --font-size-heading
```

Lista completa em `handoff/tokens.json`. Trecho:

```json
{
  "color": {
    "brand-primary": { "$value": "#C8352B", "$type": "color" }
  },
  "space": {
    "3": { "$value": "24px", "$type": "dimension" }
  },
  "font-weight": {
    "heading": { "$value": 700, "$type": "fontWeight" }
  }
}
```

Tipos usados: `color`, `dimension`, `fontWeight`, `number` e, só no `handoff/`, `fontFamily`.

### Por que DTCG e não o formato clássico do Style Dictionary

- É o formato padrão do W3C Design Tokens Community Group, então o JSON da sala não fica preso a uma ferramenta.
- O Style Dictionary 4 e 5 leem DTCG direto, sem configuração extra (reconhece `$value` e `$type`).
- O `$type` explícito deixa o `tokens.json` mais auditável, que é o fio do meu workshop inteiro: cada valor com tipo e origem.

Medidas vão como texto com unidade (`"24px"`), a forma que funciona igual no Style Dictionary 4 e 5. Não usei a forma de objeto (`{ "value": 24, "unit": "px" }`) da versão mais nova da especificação.

### Diferenças possíveis entre pessoas

O JSON de cada um vem do Claude, então pode variar um pouco:

- **`--font-body`.** A família da fonte não é variável no Figma (vem do estilo de texto). O JSON da sala tem 23 tokens e provavelmente não traz `font.body`; o do `handoff/` traz 24, com `$description` explicando. Se o card da pessoa usar `var(--font-body)` sem o token, cai na fonte padrão do navegador. Vale um minuto seu mostrando como acrescentar.
- **Medida sem `px`. Este é o desvio que mais engana.** O prompt pede medida como texto com `px`, mas se o Claude devolver `"$value": 8` com `"$type": "dimension"`, o transform `size/rem` do grupo `css` transforma em `--space-1: 8rem` (testado no 5.8.0), e o card estoura. Se vier `"$type": "number"`, sai `16` sem unidade. O build passa nos dois casos, sem aviso. Conferência rápida: todo token de espaço, raio, borda e tamanho tem que ter `px` no `$value`.
- **Ordem das chaves** pode mudar. Não afeta nada.
- **JSON inválido** por colagem quebrada: troca pelo do `handoff/`.


## Conversão testada

Testei o `handoff/tokens.json` em 13/11/2026, num diretório temporário, com `npx` e sem instalar nada global:

- Style Dictionary **5.8.0** (pede Node 22 ou maior): build ok.
- Style Dictionary **4.4.0** (Node 18 ou maior): build ok.
- Nos dois, as 24 variáveis de `build/tokens.css` batem uma a uma com `src/tokens.css` do repositório (só a caixa do hex muda: o SD devolve minúsculo).

Configuração usada (`config.json`, ao lado do `tokens.json`). Com `buildPath` na própria pasta, o `tokens.css` cai onde o `Card.html` espera:

```json
{
  "source": ["tokens.json"],
  "platforms": {
    "css": {
      "transformGroup": "css",
      "buildPath": "./",
      "files": [{ "destination": "tokens.css", "format": "css/variables" }]
    }
  }
}
```

```
npx style-dictionary build --config config.json
```

Atenção ao Node: o guia que a sala recebeu pede Node 18 ou maior, por causa do MCP. Recomendei a LTS e 22 ou maior para quem vai no seu workshop, mas alguém pode chegar com 18 ou 20. Nesse caso, `npx style-dictionary@4` resolve.


## O componente

Mesmo Card do repositório (`src/components/Card.tsx`), agora em HTML:

- `<article class="card">` com `card__body`, título `h3.card__title`, `p.card__description` e `button.card__action` ("Ver detalhes").
- Estados: hover, focus-visible (anel de 2px em `--color-focus`), disabled (`card--disabled` mais `disabled` no botão).
- Alvo mínimo de 44px no botão (`--tap-target-min`).
- O prompt fixa as classes, então o HTML da sala e o do `handoff/` têm a mesma forma, o que deve ajudar no Storybook e no Magu.

Pontos que a sua auditoria de acessibilidade pode levantar, para não serem surpresa:

- O nível do título é fixo em `h3` no HTML (no React era por prop).
- O estado disabled usa `opacity: 0.7` no card inteiro, além das cores de disabled no botão.
- A ação é um `button` sem destino. No HTML estático ele não faz nada.


## Se quiser combinar algo

Se você preferir outro formato de token, outro nome de arquivo ou outra estrutura de pasta, me fala até segunda (16/11), que é quando o material vai para o grupo. Eu ajusto o prompt do passo 7 e o `handoff/`.
