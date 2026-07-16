# QR do kit

`kit-dark-on-light.svg` e `kit.png` apontam para a URL curta do onboarding.

URL atual (placeholder ate o Thi confirmar o host): `https://thiagoxikota.com/tdc`

## Como regerar quando a URL final for definida

```
npx -y qrcode -t svg -o qr/kit-dark-on-light.svg "https://SUA_URL_FINAL"
npx -y qrcode -o qr/kit.png -w 1024 -m 2 "https://SUA_URL_FINAL"
```

## Uso

- Slide do QR e cartao de bancada: use o `kit-dark-on-light.svg` (modulos pretos sobre branco, o que mais escaneia).
- Em slide de fundo escuro, coloque o QR dentro de uma caixa branca com margem (o deck ja faz isso na `.qrbox`).
- Sempre testar o scan com o proprio celular, de longe e no projetor, antes de imprimir.
- A URL legivel tem que aparecer embaixo do QR: nem todo mundo escaneia.

## Destino

A URL curta serve o assistente interativo (`onboarding/index.html`): rota por dispositivo, checkpoints de setup, prompts da pratica e ajuda. Ele funciona ate offline (via file://), entao pode ficar tambem na area de trabalho de cada maquina do evento como plano de contingencia.
