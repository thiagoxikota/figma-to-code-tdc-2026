# Prebaked: leitura do frame (prompt 1)

Output de referência do prompt 1 rodado contra o arquivo congelado, no frame "Tela demo". Fallback pra quando a leitura ao vivo vier lenta ou a bridge cair.

## Árvore de camadas

```
Tela demo  (Frame, 400px, auto-layout vertical, gap 24, padding 20)
├─ "Criar sua conta"            Text · heading (20 / 700) · color/text
├─ "Leva menos de um minuto"    Text · 14 / 400 · #A29B93 (valor cru, sem token)
├─ fields                       Frame · auto-layout vertical · gap 12
│  ├─ Input email               Instance de Input · filled · "seu@email.com"
│  └─ Input nome                Instance de Input · fill removido (outline) · "Seu nome"
├─ opt-in                       Frame · auto-layout horizontal · gap 8
│  ├─ icon                      Ellipse · 20 x 20 · color/brand-primary
│  └─ "Receber novidades..."    Text · 16 / 400 · color/text-muted
└─ Botao continuar              Frame · DESACOPLADO do componente Button · fill #C8352B (cru)
```

## Componentes usados

- **Button** (component set, variantes State=Default / Hover / Disabled). Na tela: 1 uso, porém DESACOPLADO (virou frame solto, perdeu o vínculo com o mestre).
- **Input** (componente, padrão filled). Na tela: 2 instâncias. Uma fiel (email), uma com o preenchimento removido (nome), fugindo do padrão.
- **Card**: não aparece nesta tela.

## Tokens aplicados

- Amarrados corretamente: `color/surface` (fundo), `color/text` (título), `color/text-muted` (label do opt-in), `font-size/heading` e `font-size/body`.
- Fora dos tokens (valores crus): fundo do botão `#C8352B`, texto do caption `#A29B93`, ícone em 20px (token `size/icon` = 24), padding da tela em 20px (fora do grid de 8), gap do grupo de campos em 12px (`space/2` = 16).

Leitura de estrutura, não de pixels: a tela parece pronta, mas cinco valores não passam pelo design system e um deles reprova acessibilidade.
