# Hospedagem da onboarding (decisão + runbook)

Decidido 16/07. A onboarding (`onboarding/index.html`) é a página do QR e a página que abre nas máquinas do evento.

## Decisão

- **URL curta final:** `https://thiagoxikota.com/tdc`. Já era a URL comunicada aos inscritos (mensagem via Thamie, 15/07) e é a que aparece em todos os materiais (deck, README, roteiro). Não muda.
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
- [x] QR (SVG + PNG) regenerado pra essa URL (16/07). O QR real também está inline nos slides 5 e 7 do deck (antes era um QR decorativo que não codificava nada).
- [x] Arquivo standalone verificado offline (0 recursos externos) e mobile/desktop no Playwright.
- [x] **Deploy em produção FEITO (16/07):** `https://thiagoxikota.com/tdc` responde 200, noindex, servido pela CDN. Passou pelos gates do portfólio (guard, lint-staged, tsc, build, Proxy) e pelos 5 checks do netlify-pre-deploy.
- [ ] Teste de scan do QR no celular e, principalmente, PROJETADO e de longe: o QR agora só existe no telão (slides 5 e 7), porque o cartão impresso foi cancelado em 16/07.
- [ ] Cópia do `onboarding/index.html` na área de trabalho da máquina de PALCO e das 3 reservas (contingência offline). As ~40 máquinas do evento vêm cruas e não passam por nós: nelas a rede é a única via, e por isso o kit e a onboarding ficam também no GitHub público como plano B.

## Depois de qualquer edição na onboarding

O arquivo canônico é `onboarding/index.html` deste repo. Toda mudança exige recopiar e redeployar:

```
cp ~/xikota-os/02_Projects/figma-to-code-tdc-2026/onboarding/index.html \
   ~/xikota-os/02_Projects/portfolio/public/tdc/index.html
# no portfólio: commit + push (o hook roda o build; a Netlify publica)
```

Conferir depois: `curl -s -o /dev/null -w "%{http_code}" -L https://thiagoxikota.com/tdc` deve dar 200.
