# Para o Mateus: o que a sala tem em mãos às 19h40

Mateus, este é o ponto de entrega entre o meu workshop (18h00 às 19h40) e o seu (20h). Nada aqui muda o seu plano; é só para você saber exatamente de onde a galera parte.

**O público é de designers.** O workshop se chama "Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona". Conte com gente que nunca abriu o Terminal. Todo mundo trabalha na mesma tela, a "Tela demo" (formulário "Criar sua conta") do arquivo do exercício. Cada pessoa sai com duas coisas:

- **O próprio formulário, corrigido.** Na Parte A, a Tela demo vira PNG, o Claude revisa, a pessoa escolhe quais pontos aceita e gera um protótipo do formulário. Na Parte B, ela aplica nele uma correção com um valor conferido no Figma. Esse protótipo fica na conversa do Claude e **não entra no seu workshop**.
- **A pasta `handoff`, conferida.** É a pasta de exemplo do repositório, que todo mundo baixa no ZIP antes de quarta. Na sala, das 19h12 às 19h23, cada pessoa confere três coisas: o `Card.html` abre com cor; `#C8352B`, `20px` e `24px` estão no `tokens.json`; e os mesmos três valores estão nas variáveis do Figma. Enquanto isso eu gero um Card no telão a partir do arquivo, pelo `figma-console-mcp@1.35.0`, para a sala ver de onde a pasta veio.

Na sala eu digo com estas palavras: "O Card não é a continuação do formulário de vocês. É o material da próxima sessão. Às 20h, levem a pasta `handoff` aberta: o Mateus abre o `tokens.json` e o `Card.html` dela." O botão do Card ("Ver detalhes") não faz nada no HTML estático, e ninguém na sala ouviu o contrário.

**Mudou em relação ao que eu tinha te falado:** gerar o próprio Card e o próprio `tokens.json` saiu do percurso da sala. Não cabia em 100 minutos para quem nunca salvou um arquivo de código. Virou extensão, para quem terminar antes.


## A pasta: quase todo mundo com `handoff`

| Origem | Nome da pasta | Quem tem | O que tem | Tokens |
|---|---|---|---|---|
| **Exemplo** do repositório, conferido na sala | `handoff` | Todo mundo. Quem chegar sem o ZIP recebe por pendrive às 19h23 | `tokens.json`, `tokens.css`, `Card.html`, `Card.css` e `config.json`, prontos e testados | 24, com `font.body` |
| **Gerada** na extensão | `fora-do-frame` | Poucas pessoas: só quem terminou antes e está com a ligação funcionando | `tokens.json`, `Card.html`, `Card.css`, colados da conversa, mais o `config.json` que já vem na pasta | 23, sem `font.body` |

Planeje para a `handoff`. Quem tiver a `fora-do-frame` leva as duas e te diz. Essa pessoa foi orientada a conferir a própria pasta com `node scripts/conferir-pasta.mjs` (nomes dos arquivos, JSON válido e as 23 variáveis com nome, tipo e valor) ou, sem isso, a deixar um `nao-conferida.txt` dentro dela.

As duas origens trazem o mesmo `config.json` do Style Dictionary (mostrado abaixo). Ninguém precisa criar esse arquivo às 20h.

Eu te conto no coffee quantas pastas geradas apareceram.

### Por que 23 contra 24

Confira em `handoff/tokens.json`. A coleção **Workshop Tokens** do Figma tem 23 variáveis: 10 cores (`color/*`) e 13 numéricas (`space/1..4`, `radius/md`, `border/width`, `focus/ring-width`, `tap-target/min`, `size/icon`, `font-size/body`, `font-size/heading`, `font-weight/heading`, `line-height/body`).

O `handoff/` tem um token a mais: `font.body`, com `$type` `fontFamily` e a pilha `-apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif`. Ele não é variável no Figma: família de fonte vive no estilo de texto, e o próprio token traz um `$description` dizendo isso. O prompt da extensão pede só as variáveis da coleção, então o JSON gerado chega sem ele.

### Como tratar 23 e 24 às 20h

Não precisa tratar: as duas contagens passam no mesmo build, com o mesmo `config.json`. A única diferença visível é a fonte, descrita abaixo. Se você quiser todo mundo igual, o caminho curto é pedir a quem tem 23 que acrescente o bloco `font` mostrado a seguir.

### O que muda para você em cada origem

- **`handoff`:** já tem `tokens.css`. O card aparece com cor no navegador antes do build, e a sala já viu isso. Rodar o Style Dictionary gera o mesmo `tokens.css` de novo (testado, abaixo). Se você quiser o momento em que o card "acende", peça para apagarem o `tokens.css` antes do primeiro build: o `Card.html` fica sem cor e sem espaçamento e volta depois do comando.
- **`fora-do-frame`:** não tem `tokens.css`. O `Card.html` abre sem cor e sem espaçamento até o primeiro build.
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

- **Medida sem `px`. É o desvio que mais engana.** Se o Claude devolver `"$value": 8` com `"$type": "dimension"`, o transform `size/rem` do grupo `css` gera `--space-1: 8rem` (testado no 5.8.0), e o card estoura. Se vier `"$type": "number"`, sai `16` sem unidade. O build passa nos dois casos, sem aviso. Quem fez a extensão é orientado a conferir a pasta com o verificador local, que acusa medida sem `px`, mas confira: todo token de espaço, raio, borda e tamanho tem que ter `px`.
- **Ordem das chaves** pode mudar. Não afeta nada.
- **JSON inválido** por colagem quebrada: troca pelo do `handoff/`.


## Conversão testada

Testei o `handoff/tokens.json` em 13/11/2026, num diretório temporário, com `npx` e sem instalar nada global:

- Style Dictionary **5.8.0** (pede Node 22 ou maior): build ok.
- Style Dictionary **4.4.0** (Node 18 ou maior): build ok.
- Nos dois, as 24 variáveis de `build/tokens.css` batem uma a uma com `src/tokens.css` do repositório (só a caixa do hex muda: o SD devolve minúsculo).

Em 13/11 rodei de novo, agora com o `config.json` que vai dentro das pastas: `npx style-dictionary@4 build --config config.json` sobre o `handoff/tokens.json` gerou um `tokens.css` com as mesmas 24 variáveis do `handoff/tokens.css`.

**Pendente:** a pasta gerada na extensão (23 tokens) ainda não foi convertida. Depende do meu ensaio na conta gratuita. Eu te aviso do resultado antes de quarta.

O `config.json` que já está nas duas pastas (`handoff/` e `fora-do-frame`, que nasce de `fortaleza/pasta-modelo`). Com `buildPath` na própria pasta, o `tokens.css` cai onde o `Card.html` espera:

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

Atenção ao Node: quem não instalou a ligação em casa pode chegar **sem Node nenhum**, porque a rota em grupo não pede. Quem instalou tem 18 ou maior. Recomendei 22 ou maior para quem vai no seu workshop, mas alguém pode chegar com 18 ou 20. Nesse caso, `npx style-dictionary@4` resolve.


## O componente

O mesmo Card do repositório, gerado direto em HTML e CSS:

- `<article class="card">` com `card__body`, título `h3.card__title`, `p.card__description` e `button.card__action` ("Ver detalhes").
- Estados: hover, foco visível (anel de 2px em `--color-focus`), desabilitado (`card--disabled` mais `disabled` no botão).
- Alvo mínimo de 44px no botão (`--tap-target-min`).
- O prompt da extensão fixa as classes, então o HTML gerado e o do `handoff/` têm a mesma forma.
- O `Card.css` gerado na extensão traz, ao lado de cada `var(--token)`, um comentário com o valor do Figma. Não atrapalha o build.
- Nem tudo é token: a largura máxima do card (`360px`), o peso do texto do botão (`600`) e a opacidade do desabilitado (`0.7`) são valores fixos no `handoff/`. O prompt da extensão permite os mesmos três, e só eles.

Pontos que a sua auditoria de acessibilidade pode levantar:

- O nível do título é fixo em `h3`.
- No `handoff/`, o estado desabilitado usa `opacity: 0.7` no card inteiro, além das cores de desabilitado no botão. O da pasta gerada pode variar, porque o Claude escreve o CSS.
- A ação é um `button` sem destino. No HTML estático ele não faz nada.


## O que eu ainda te devo

- O resultado do ensaio na conta gratuita: se a pasta gerada na extensão converte sem ajuste.
- Quantas pastas `fora-do-frame` apareceram, que eu te conto no coffee.


## Se quiser combinar algo

Se você preferir outro formato de token, outro nome de arquivo ou outra estrutura de pasta, me fala até segunda (16/11), que é quando o material vai para o grupo. Eu ajusto o `handoff/` e os prompts da extensão.
