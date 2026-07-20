# QR do kit

`kit-dark-on-light.svg` e `kit.png` apontam para a URL curta do onboarding.

URL final (decidida 16/07): `https://thiagoxikota.com/tdc`. Hospedagem documentada em `ops/hospedagem.md` (arquivo estatico servido pela CDN da Netlify, mesmo arquivo do `onboarding/index.html`). Os dois QR ja foram regerados para essa URL em 16/07. Falta so o teste humano de scan (celular, de longe, no projetor) antes do evento.

## Como regerar se a URL mudar

```
npx -y qrcode -t svg -o qr/kit-dark-on-light.svg "https://SUA_URL_FINAL"
npx -y qrcode -o qr/kit.png -w 1024 -m 2 "https://SUA_URL_FINAL"
```

## Uso

- Slide do QR: use o `kit-dark-on-light.svg` (modulos pretos sobre branco, o que mais escaneia).
- Em slide de fundo escuro, coloque o QR dentro de uma caixa branca com margem (o deck ja faz isso na `.qrbox`).
- Sempre testar o scan com o proprio celular, de longe e no projetor, antes do evento.
- A URL legivel tem que aparecer embaixo do QR: nem todo mundo escaneia.

## QR escola (slide 16)

`escola-dark-on-light.svg` e `escola.png` apontam para `https://thiagoxikota.com/ai` (redirect 301 pra xikota.ai, UTMs preservados). Gerados em 19/07 pro CTA final do deck (slide 16, escola em construcao).

## Destino

A URL curta serve o assistente interativo (`onboarding/index.html`): rota por dispositivo, checkpoints de setup, prompts da pratica e ajuda. Ele funciona ate offline (via file://), entao pode ficar tambem na area de trabalho de cada maquina do evento como plano de contingencia.
