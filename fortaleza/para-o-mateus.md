# Para o Mateus: o que a sala tem em mãos às 19h40

Mateus, este é o ponto de entrega entre o meu workshop (18h00 às 19h40) e o seu (20h). Nada aqui muda o seu plano; é só para você saber exatamente de onde a galera parte.

**O público é de designers.** O workshop agora se chama "Figma + IA, na prática" (do seu Figma ao primeiro site). Conte com gente que nunca abriu o Terminal.

**Mudou em relação à versão anterior:** o formulário saiu, e o foco agora é o agente mexendo no Figma. Cada pessoa conecta o Figma ao agente (Claude Desktop; Codex como alternativa) na própria máquina, no preparo obrigatório de casa, com mesa de instalação às 17h30 para quem travou. O preparo inclui instalar o Node. Na sala, cada pessoa parte de uma hero section pronta no Figma, com Auto Layout e as variáveis da coleção Workshop Tokens. Primeiro o agente lê uma propriedade do frame e a pessoa confere no painel. Depois o agente escreve no Figma dela: troca os textos e muda o valor da variável `color/brand-primary` para a cor que ela escolheu, com as camadas continuando editáveis. Por fim, com as regras num `DESIGN.md`, o agente gera um `index.html` da hero, que a pessoa confere ao lado do frame. Publicar no Netlify é opcional. Quem bater no limite do Claude gratuito edita à mão e usa um site reserva do kit. No fim, todo mundo revoga a chave do Figma criada para o workshop.

Isso conversa com a sua sessão: a sala acabou de ver, na prática, uma cor mudar no arquivo inteiro porque estava ligada à variável. Você pode partir daí para tokens.

O que a sala leva:

- **A pasta `handoff`. É o que chega a você.** É a pasta de exemplo do repositório. Cada pessoa baixa o ZIP da tag `v1` do `figma-ia-na-pratica` no preparo de casa e copia a `handoff` para a Área de Trabalho. Na sala ela não é aberta: no fim eu digo "às 20h, levem a pasta `handoff`". Quem chegar sem recebe por pendrive, durante a sala ou no coffee.
- **A própria hero, no Figma e em `index.html`,** e a pasta `meu-site-kit` com o `DESIGN.md`. **Não entram no seu workshop.**

Eu não gero Card no telão. Na passagem eu digo: "Ela tem um Card e os tokens de design: é dela que o Mateus parte."

Como a sala não abre a pasta na minha sessão, conte com gente vendo a `handoff` pela primeira vez às 20h. O `Card.html` dela já abre com cor, porque ela traz o `tokens.css` pronto. O botão "Ver detalhes" não faz nada no HTML estático.


## A pasta `handoff`

`tokens.json`, `tokens.css`, `Card.html`, `Card.css` e `config.json`, prontos e testados. 24 tokens.

### Por que 24, se o Figma tem 23 variáveis

Confira em `handoff/tokens.json`. A coleção **Workshop Tokens** do Figma tem 23 variáveis: 10 cores (`color/*`) e 13 numéricas (`space/1..4`, `radius/md`, `border/width`, `focus/ring-width`, `tap-target/min`, `size/icon`, `font-size/body`, `font-size/heading`, `font-weight/heading`, `line-height/body`).

O `handoff/` tem um token a mais: `font.body`, com `$type` `fontFamily` e a pilha `-apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif`. Ele não é variável no Figma: família de fonte vive no estilo de texto, e o próprio token traz um `$description` dizendo isso.

### O momento em que o card "acende"

**Ninguém da sala precisa apagar arquivo da própria pasta.** Se você quiser mostrar o card ganhando cor, use `fortaleza/demo-card-sem-cor/`, no repositório e no ZIP. É uma cópia de demonstração da `handoff` sem o `tokens.css`: o `Card.html` abre sem cor e sem espaçamento e ganha cor depois de `npx style-dictionary build --config config.json` dentro dela. Dá para fazer no telão, ou pedir que a sala copie essa pasta, sem tocar na `handoff`.

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

- É o formato do W3C Design Tokens Community Group, então o JSON não fica preso a uma ferramenta.
- O Style Dictionary 4 e 5 leem DTCG direto, sem configuração extra (reconhecem `$value` e `$type`).
- O `$type` explícito deixa o `tokens.json` mais fácil de conferir: cada valor com tipo.

Medidas vão como texto com unidade (`"24px"`), a forma que funciona igual no Style Dictionary 4 e 5.


## Conversão testada

Testei o `handoff/tokens.json` em 13/11/2026, num diretório temporário, com `npx` e sem instalar nada global:

- Style Dictionary **5.8.0** (pede Node 22 ou maior): build ok.
- Style Dictionary **4.4.0** (Node 18 ou maior): build ok.
- Nos dois, as 24 variáveis de `build/tokens.css` batem uma a uma com `src/tokens.css` do repositório (só a caixa do hex muda: o SD devolve minúsculo).

Em 13/11 rodei de novo, agora com o `config.json` que vai dentro da pasta: `npx style-dictionary@4 build --config config.json` sobre o `handoff/tokens.json` gerou um `tokens.css` com as mesmas 24 variáveis do `handoff/tokens.css`.

O `config.json` já está na `handoff/`. Com `buildPath` na própria pasta, o `tokens.css` cai onde o `Card.html` espera:

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

Atenção ao Node: **a sala agora tem Node.** A conexão com o Figma pede o Node instalado, e o instalador só roda com 18 ou maior, então quem conectou chega com 18 ou maior. O guia pede a versão LTS e recomenda 22 ou maior a quem vai no seu workshop, mas não dá para garantir que todos seguiram. Style Dictionary 5 pede 22 ou maior; com 18 ou 20, `npx style-dictionary@4` resolve. Quem não conseguiu conectar pode ter chegado sem Node.


## O componente

O mesmo Card do repositório, gerado direto em HTML e CSS:

- `<article class="card">` com `card__body`, título `h3.card__title`, `p.card__description` e `button.card__action` ("Ver detalhes").
- Estados: hover, foco visível (anel de 2px em `--color-focus`), desabilitado (`card--disabled` mais `disabled` no botão).
- Alvo mínimo de 44px no botão (`--tap-target-min`).
- Nem tudo é token: a largura máxima do card (`360px`), o peso do texto do botão (`600`) e a opacidade do desabilitado (`0.7`) são valores fixos no `handoff/`.

Pontos que a sua auditoria de acessibilidade pode levantar:

- O nível do título é fixo em `h3`.
- No `handoff/`, o estado desabilitado usa `opacity: 0.7` no card inteiro, além das cores de desabilitado no botão.
- A ação é um `button` sem destino. No HTML estático ele não faz nada.


## O que eu ainda te devo

- A sua confirmação de que parte da `handoff` já colorida, ou de que prefere a `demo-card-sem-cor` para o começo.
- Quantos chegaram com a `handoff`, que eu te conto no coffee.
