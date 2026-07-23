# Verification Report

Artifact:
- `onboarding/index.html`
- Google Slides `13QjroG0DwuAVNH1J5j557DC2_L-J0PcmMt6kGBvmXRw`
- Figma `aV212CPkZcQVFr7Sa97BAr`, page `32:9`, canonical journey `55:4`
- Portfolio copy `public/tdc/index.html`

Claimed ready state:
Local implementation, external source synchronization, production publication
and cache-busted readback verified.

Checks run:
- Build/typecheck: source `npm run validate:workshop` and `npm run build`; portfolio
  `npx tsc --noEmit` and `npm run build`.
- Lint/test: portfolio `npm run lint`; CI passed 95 Jest tests and 26 Playwright
  tests, including the 3 dedicated TDC tests.
- Desktop render: independent scan of 17 states in light and dark modes; no
  horizontal overflow or runtime errors.
- Mobile render: 375 px scan of 17 states in light and dark modes; both cover
  choices remain above the fold and every visible target is at least 44 px.
- Keyboard/focus: modal receives initial focus, traps focus in both directions,
  closes on Escape and restores focus to its trigger.
- Accessibility basics: 68 axe scans, zero violations; manual contrast minimum
  4.56:1 in light mode and 5.68:1 in dark mode.
- State coverage: setup 3, setup 4 and practice 5 gate progression; switching OS
  invalidates checks; a fresh `#pronto` redirects to the first incomplete step;
  token never enters localStorage.
- Source/claim check: canonical contract passes 4 setup plus 5 practice; Slides
  have 30 pages and aligned presenter notes; Figma has one active 5-step journey,
  one Card instance and zero legacy step 6 or "cor do botão" strings.
- Copy/humanizer: no desk input, support form, "Chamar apoio" action, em dash or
  fabricated completion remains in the rendered interface.
- Production deploy: Netlify deploy `6a61af0f19834c6c70e003c9`, branch `main`,
  context `production`, published from the detached worktree at merge
  `ebbebf8d15539515deb55f3e0b8bdf9677bb82e2`.
- Production HTTP: `/tdc` returns 301 to `/tdc/`; `/tdc/` returns 200 without
  redirect; `/pt/tdc` returns 301 to the canonical route and preserves query.
- Production parity: cache-busted response is byte-identical to the source,
  121216 bytes, SHA-256
  `ba1535f18c26866c9b18a92dc8d4746661de86c070eb29c8a8831334305c2c3d`.
- Production browser: mobile and desktop return 200 with zero console errors,
  zero overflow, zero undersized targets, no desk input or support action;
  modal focus, Escape restoration, pair and reserve routes passed.
- Production accessibility: 4 axe scans across mobile and desktop, light and
  dark modes, returned zero violations.
- Production Lighthouse: three mobile runs returned 100 performance with
  LCP under 1 second, TBT 0 and CLS 0; desktop returned 100. Accessibility,
  best practices and SEO returned 100 in both presets.

Evidence:
- Commands: `npm run validate:workshop`, `npm run build`, `npm run lint`,
  `npx tsc --noEmit`, `npm test -- --runInBand`,
  `npx playwright test tests/e2e/tdc-tutorial.spec.ts --project=chrome`,
  `npm run audit:fast`, explicit mobile and desktop quality audit with five axe
  modes, `cmp` and SHA-256.
- Screenshots or node-ids: Figma `55:4` final journey, `57:8` component library,
  `32:10` archived prior journey; Slides `s_st1`, `s_st2`, `p7`, `s_st4`,
  `s_corte`, `p10`, `p11`, `p12`.
- Command manifest: `verification-commands.json`.
- Links: `https://thiagoxikota.com/tdc/`,
  `https://www.figma.com/design/aV212CPkZcQVFr7Sa97BAr`,
  `https://docs.google.com/presentation/d/13QjroG0DwuAVNH1J5j557DC2_L-J0PcmMt6kGBvmXRw`.
- Files: `evidence/web-v3-independent/`, `evidence/figma-after/journey-final.png`,
  `evidence/figma-after/components-library.png`, `evidence/slides-after/`,
  `evidence/production/production-cover-mobile.png`,
  `evidence/production/production-cover-desktop.png` and
  `evidence/production/production-help-desktop.png`.

Findings:
- Blockers: none.
- Warnings: the anonymous PageSpeed Insights API exhausted its daily quota with
  HTTP 429. The same production URL was measured with local Lighthouse 12.8.2
  instead; three mobile runs and one desktop run passed at 100.
- Accepted tradeoffs: long prompts use progressive disclosure on the website and
  remain fully visible in the workshop source artifacts.

Decision:
PASS for local implementation, accessibility, behavior, cross-source
consistency, production deploy and live readback.

Remaining human review:
Visual preference review remains optional; no technical or UX blocker remains.
