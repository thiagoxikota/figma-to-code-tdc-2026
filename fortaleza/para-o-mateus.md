# Para o Mateus: o que a sala tem em mãos às 19h40

Mateus, este é o ponto de entrega entre o meu workshop (18h00 às 19h40) e o seu (20h). Nada aqui muda o seu plano; é só para você saber exatamente de onde a galera parte.

**O público é de designers.** O workshop se chama "Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona". Conte com gente que nunca abriu o Terminal. Todo mundo trabalha na mesma tela, a "Tela demo" (formulário "Criar sua conta") do arquivo do exercício. São duas entregas:

- **Parte A, todo mundo.** A Tela demo vira PNG, o Claude revisa, a pessoa escolhe quais pontos aceita e sai com um protótipo HTML navegável. Esse protótipo fica na conversa do Claude, não vira arquivo e **não é base para o seu workshop**: as cores e medidas dele são estimadas da imagem.
- **Parte B.** O Claude lê a mesma Tela demo no arquivo (pelo `figma-console-mcp@1.35.0`, gratuito), audita, gera um Card em HTML e CSS com os tokens e exporta os tokens em JSON. Só faz sozinho quem instalou a ligação em casa; o resto faz em dupla. É daqui que sai a pasta abaixo.

Na sala eu digo com estas palavras: "O Card não é o protótipo da Parte A. É o ponto de partida do Mateus às 20h."


## A pasta tem uma de duas origens

Ninguém chega com a mesma coisa. A sala sai com uma destas:

| Origem | Nome da pasta | O que tem | Tokens |
|---|---|---|---|
| **Gerada** na sala | `fora-do-frame` | `tokens.json`, `Card.html`, `Card.css`, colados da conversa | 23, sem `font.body` |
| **Exemplo** do repositório | `handoff` | `tokens.json`, `tokens.css`, `Card.html`, `Card.css`, prontos e testados | 24, com `font.body` |

E um caso misto: quem perdeu só um arquivo copia esse do `handoff/` para a `fora-do-frame` e deixa um `veio-do-exemplo.txt` dizendo qual. O corte para isso é às 19h20, então espere uma parte grande da sala com `handoff`.

Como eu ainda não ensaiei a sala na conta gratuita, não sei a proporção. Eu te conto no coffee quantos saíram com cada uma.

### Por que 23 contra 24

Confira em `handoff/tokens.json`. A coleção **Workshop Tokens** do Figma tem 23 variáveis: 10 cores (`color/*`) e 13 numéricas (`space/1..4`, `radius/md`, `border/width`, `focus/ring-width`, `tap-target/min`, `size/icon`, `font-size/body`, `font-size/heading`, `font-weight/heading`, `line-height/body`).

O `handoff/` tem um token a mais: `font.body`, com `$type` `fontFamily` e a pilha `-apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif`. Ele não é variável no Figma: família de fonte vive no estilo de texto, e o próprio token traz um `$description` dizendo isso. O prompt da sala pede só as variáveis da coleção, então o JSON gerado chega sem ele.

### O que muda para você em cada origem

- **`handoff`:** já tem `tokens.css`. O card aparece com cor no navegador antes do build. Rodar o Style Dictionary gera o mesmo `tokens.css` de novo (testado, abaixo).
- **`fora-do-frame`:** não tem `tokens.css`. O `Card.html` abre sem cor e sem espaçamento até o primeiro build. É o momento bom do seu workshop: o card "acende".
- **A fonte na `fora-do-frame`:** o prompt do Card pede `font-family: var(--font-body, system-ui, sans-serif)`. Sem o token, cai em `system-ui`, sem quebrar. Se quiser igualar ao `handoff`, é acrescentar ao `tokens.json`:

```json
"font": {
  "body": {
    "$value": ["-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
    "$type": "fontFamily"
  }
}
```

Repositório: https://github.com/thiagoxikota/figma-to-code-tdc-2026 (público, MIT, pode usar como base à vontade).


## Os tokens

Os nomes do Figma usam barra, e a primeira parte vira o grupo do JSON, então o Style Dictionary devolve exatamente o nome que o componente já usa:

```
Figma: color/brand-primary   JSON: color > brand-primary   CSS: --color-brand-primary
Figma: space/3               JSON: space > 3               CSS: --space-3
Figma: font-size/heading     JSON: font-size > heading     CSS: --font-size-heading
```

Trecho:

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

- É o formato do W3C Design Tokens Community Group, então o JSON da sala não fica preso a uma ferramenta.
- O Style Dictionary 4 e 5 leem DTCG direto, sem configuração extra (reconhecem `$value` e `$type`).
- O `$type` explícito deixa o `tokens.json` mais auditável, que é o fio do meu workshop: cada valor com tipo e origem.

Medidas vão como texto com unidade (`"24px"`), a forma que funciona igual no Style Dictionary 4 e 5.

### Desvios possíveis na pasta gerada

O JSON de cada um vem do Claude, então pode variar:

- **Medida sem `px`. É o desvio que mais engana.** Se o Claude devolver `"$value": 8` com `"$type": "dimension"`, o transform `size/rem` do grupo `css` gera `--space-1: 8rem` (testado no 5.8.0), e o card estoura. Se vier `"$type": "number"`, sai `16` sem unidade. O build passa nos dois casos, sem aviso. A sala é orientada a conferir os `px` e validar o JSON no jsonlint antes de sair, mas confira: todo token de espaço, raio, borda e tamanho tem que ter `px`.
- **Ordem das chaves** pode mudar. Não afeta nada.
- **JSON inválido** por colagem quebrada: troca pelo do `handoff/`.


## Conversão testada

Testei o `handoff/tokens.json` em 13/11/2026, num diretório temporário, com `npx` e sem instalar nada global:

- Style Dictionary **5.8.0** (pede Node 22 ou maior): build ok.
- Style Dictionary **4.4.0** (Node 18 ou maior): build ok.
- Nos dois, as 24 variáveis de `build/tokens.css` batem uma a uma com `src/tokens.css` do repositório (só a caixa do hex muda: o SD devolve minúsculo).

A saída da sala (pasta gerada) ainda não foi convertida: depende do meu ensaio na conta gratuita, que está pendente.

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

Atenção ao Node: o guia da sala pede Node 18 ou maior. Recomendei 22 ou maior para quem vai no seu workshop, mas alguém pode chegar com 18 ou 20. Nesse caso, `npx style-dictionary@4` resolve.


## O componente

O mesmo Card do repositório, gerado direto em HTML e CSS:

- `<article class="card">` com `card__body`, título `h3.card__title`, `p.card__description` e `button.card__action` ("Ver detalhes").
- Estados: hover, foco visível (anel de 2px em `--color-focus`), desabilitado (`card--disabled` mais `disabled` no botão).
- Alvo mínimo de 44px no botão (`--tap-target-min`).
- O prompt fixa as classes, então o HTML da sala e o do `handoff/` têm a mesma forma.
- O `Card.css` da sala traz, ao lado de cada `var(--token)`, um comentário com o valor do Figma. É o que a pessoa usou para conferir três valores no painel de variáveis (`color/brand-primary`, `font-size/heading`, `space/3`). Não atrapalha o build.

Pontos que a sua auditoria de acessibilidade pode levantar:

- O nível do título é fixo em `h3`.
- No `handoff/`, o estado desabilitado usa `opacity: 0.7` no card inteiro, além das cores de desabilitado no botão. O da sala pode variar, porque o Claude escreve o CSS.
- A ação é um `button` sem destino. No HTML estático ele não faz nada.


## Se quiser combinar algo

Se você preferir outro formato de token, outro nome de arquivo ou outra estrutura de pasta, me fala até segunda (16/11), que é quando o material vai para o grupo. Eu ajusto os prompts B3 e B5 e o `handoff/`.
