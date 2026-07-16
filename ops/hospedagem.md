# Hospedagem da onboarding (decisão + runbook)

Decidido 16/07. A onboarding (`onboarding/index.html`) é a página do QR e a página que abre nas máquinas do evento.

## Decisão

- **URL curta final:** `https://thiagoxikota.com/tdc`. Já era a URL comunicada aos inscritos (mensagem via Thamie, 15/07) e é a que aparece em todos os materiais (deck, README, roteiro, cartão de bancada). Não muda.
- **Como é servida:** arquivo estático em `public/tdc/index.html` no repo do portfólio (thiagoxikota.com, site Netlify). A CDN da Netlify serve arquivos de `public/` direto, sem passar pelo runtime Next e sem o `proxy.ts`. A página é `noindex` (já tem a meta tag).
- **Fonte da verdade:** o arquivo canônico é `onboarding/index.html` NESTE repo. O `public/tdc/index.html` do portfólio é uma cópia byte a byte; qualquer mudança sai daqui.
- **Contingência offline:** o MESMO arquivo é 100% self-contained (zero recurso externo, verificado no Playwright: 0 requests externos). Ele roda por `file://` na área de trabalho de cada máquina do evento e reserva. Se o wifi da sala cair, o assistente continua abrindo local. Essa é a razão de ser standalone e não uma rota React do portfólio.

## Por que standalone e não uma rota do portfólio (A vs B)

- O maior risco do dia é infra de sala (firewall, wifi). Uma rota React do portfólio só carrega com o deploy no ar e a rede boa; o standalone abre por `file://` mesmo sem rede. A garantia de offline decide.
- O portfólio tem gates pesados (Lighthouse 100 x 5 locales x ~180 páginas, paridade i18n). Uma página de evento, noindex, de um dia, não paga esse blast radius.
- Servir como arquivo estático em `public/tdc/` pega o melhor dos dois: a URL curta sob o domínio da autoridade (thiagoxikota.com), CDN rápida, e o mesmo arquivo que roda offline na sala.

## Runbook de deploy (turnkey, alvo 19/07 pelo command-center)

Do repo do portfólio (`~/xikota-os/02_Projects/portfolio`):

```
# 1. copia o arquivo canônico pra pasta pública do portfólio
mkdir -p public/tdc
cp ~/xikota-os/02_Projects/figma-to-code-tdc-2026/onboarding/index.html public/tdc/index.html

# 2. gates do portfólio (a skill git-operator-portfolio + netlify-pre-deploy cuidam disso)
npx eslint src/            # não toca o HTML estático, mas roda no commit
npx tsc --noEmit
npx next build --webpack   # confirma que o build segue verde

# 3. commit e push (dispara o deploy Netlify de thiagoxikota.com)
git add public/tdc/index.html
git commit -m "tdc: onboarding estática em /tdc (workshop TDC 2026)"
git push origin main
```

Depois do deploy: abrir `https://thiagoxikota.com/tdc` e conferir que carrega, que é `noindex`, e refazer o teste de scan do QR apontando pra ela.

Notas:
- A Netlify serve `public/tdc/index.html` em `/tdc/`. Se `/tdc` (sem barra) não redirecionar sozinho, adicionar um redirect 301 `/tdc -> /tdc/` no `netlify.toml` do portfólio.
- Manter o `public/tdc/index.html` sincronizado com este repo: toda edição da onboarding aqui exige recopiar e redeployar.
- Este passo é o único que publica em produção no site pessoal. Fazer na janela pré-evento (com a mensagem D-2), não no dia.

## Estado atual

- [x] URL final decidida e travada: `thiagoxikota.com/tdc`.
- [x] QR (SVG + PNG) regenerado pra essa URL (16/07).
- [x] Arquivo standalone verificado offline (0 recursos externos) e mobile/desktop no Playwright.
- [ ] Deploy em produção (`public/tdc/index.html` no portfólio): passo humano/ratificado, alvo 19/07.
- [ ] Teste de scan do QR no celular e no projetor, de longe, antes de imprimir os cartões.
- [ ] Cópia do `onboarding/index.html` na área de trabalho de cada máquina do evento e reserva (contingência offline).
