# Source Audit

Task:
Redesenhar o tutorial do workshop TDC 2026 e sincronizar a mesma jornada no site, no Google Slides e na página "01 Comece aqui" do Figma.

Current source of truth:
- Figma: arquivo `aV212CPkZcQVFr7Sa97BAr`, página `32:9` ("01 Comece aqui"). O frame atual `32:10` ainda descreve um fluxo antigo de 6 passos. Metadados e screenshot foram lidos em 2026-07-23.
- Code: `onboarding/index.html` é a fonte canônica do tutorial. `portfolio/public/tdc/index.html` deve ser uma cópia byte a byte.
- Storybook or preview: o tutorial é um HTML estático, offline e sem dependências externas. A verificação usa servidor HTTP local e Playwright.
- Docs: `README.md`, `docs/pipeline-facts.md`, `ops/hospedagem.md`, `slides/README.md` e os runbooks em `ops/`.
- Production: `https://thiagoxikota.com/tdc/`, arquivo estático servido pelo portfólio na Netlify.
- Research/source links: Google Slides `13QjroG0DwuAVNH1J5j557DC2_L-J0PcmMt6kGBvmXRw`, revisão `COBFBEDWWIk5zA`, 30 slides; Figma node `32:9`; imagem de crítica fornecida pelo dono.

Reusable assets:
- Components: shell, progresso, opções de rota, blocos de instrução, código copiável, checklist, sheet de troubleshooting e tela de reserva já existem no HTML.
- Tokens: identidade Xikota em vermilion; no Figma, coleção `Workshop Tokens` com 23 variáveis; no tutorial, tokens CSS locais e CSP offline.
- Routes: `#capa`, `#sistema`, `#linux`, `#antes`, `#setup/1..4`, `#pratica/1..5`, `#pronto`, `#reserva`.
- Prompts: conexão, leitura, geração, inspeção e correção já estão alinhados entre o tutorial e os slides 9, 10, 11, 12 e 23 do deck.
- Repo rules: zero travessão, zero emoji, token nunca persistido, HTML funciona offline, fonte canônica no repo do workshop, cópia byte a byte no portfólio.
- Tests or gates: `npm run validate:workshop`; validação de HTML/JS; comparação byte a byte; Playwright desktop e mobile; auditoria de teclado, foco, contraste e touch targets; gates do portfólio antes do deploy.

Unknowns:
- Product: nenhum. O dono definiu que todas as fontes devem usar uma única jornada e que o botão de chamar apoio e o campo de mesa devem sair.
- Design: a aprovação subjetiva final do refinamento visual continua sendo do dono, apoiada por screenshots reais.
- Engineering: a leitura `get_design_context` do Figma falhou por ausência de seleção, mas `get_metadata` e `get_screenshot` funcionaram. A escrita será incremental e validada por screenshot.
- Accessibility: contraste exato e comportamento em 200 por cento de texto ainda precisam ser verificados na implementação final.
- Source rights: o dono forneceu e autorizou a edição do site, do deck e do arquivo Figma.

Human-review boundaries:
- Product: a jornada canônica é 4 passos de setup e 5 passos de prática. A tela de conclusão não conta como passo.
- Brand: vermilion institucional, linguagem direta e sem hype, sem travessão e sem emoji.
- Private/paid source material: nenhum material privado ou pago entra no tutorial. Token real nunca é lido, salvo, enviado ou mostrado.
- Accessibility or compliance: checks automatizados não substituem inspeção visual, teclado e foco em navegador real.

Verification evidence required:
- Build/typecheck: validação do workshop, parse do HTML e JavaScript, gates do portfólio e build Next.
- Screenshots: desktop 1440x900, mobile 375x667, dark mode, texto 200 por cento e estados principais de troubleshooting.
- Keyboard/focus: navegação completa sem mouse, foco visível, trap da sheet, Escape e retorno de foco.
- State coverage: todas as hashes, três sistemas, dois contextos de máquina, checklists, cópia, reset, reserva, problemas relacionados e problema não listado.
- Claim/source check: verificador cruzado para ordem, labels, prompts e critérios entre HTML, Google Slides, Figma e docs canônicos.
- Public-copy review: PT-BR natural, sem travessão, sem emoji e sem ação de "chamar apoio".
