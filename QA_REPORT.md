# QA Report — Northern Lights Dental

**Date:** 2026-11-18
**Target:** `build/northernlightsdental_dentist_11`
**Harness:** `bash .agents/qa/run-qa.sh northernlightsdental_dentist_11`
**Result:** ✅ **PASS** — 33/33 tests, harness exit `0`

## Gate summary

| Gate | Result | Evidence |
| --- | --- | --- |
| L0 — TypeScript | ✅ | `npx tsc --noEmit` exits `0` |
| L0 — ESLint | ✅ | `npx eslint .` exits `0` (see lint note below) |
| L1 — Production build | ✅ | `npm run build` compiles successfully and emits 16 route entries |
| L2 — Smoke (10 routes + links) | ✅ | 11/11 Playwright smoke tests pass |
| L3 — Internal links | ✅ | Every `a[href^="/"]` responds `< 400` |
| L4 — Content parity | ✅ | 2/2 parity tests pass: all 10 manifest routes and all 17 fact values render |
| L5 — Accessibility | ✅ | 10/10 axe runs pass with 0 serious/critical WCAG 2 A/AA violations |
| L6 — Visual / responsive | ✅ | 10/10 visual runs pass at 360, 768 and 1440 px; 30 captures generated |

Final Playwright stats (`../.agents/qa/artifacts/results.json`):

```json
{
  "expected": 33,
  "skipped": 0,
  "unexpected": 0,
  "flaky": 0,
  "duration": 182117.544
}
```

## Evidence by gate

### L0 — Static analysis

- TypeScript strict mode passes.
- ESLint passes with the flat config in `eslint.config.mjs`.
- Note: the harness first tries `next lint`, which Next 16 interprets as a directory argument and exits non-zero; the harness then runs its documented fallback, `npx eslint .`, which passes. This is a compatibility message from the immutable harness, not an application failure.

### L1 — Build and serve

- `npm run build` exits `0`.
- The App Router output includes all 10 manifest routes, the dynamic doctor route, 404, `robots.txt` and `sitemap.xml`.
- The QA web server served the production bundle on port 3111 for the full run.

### L2 — Smoke

All 10 routes pass:

- HTTP status `< 400`
- No browser console errors or page errors
- No failed network requests
- No broken images after a full-page scroll
- A visible `h1` on every route
- No placeholder text (`TODO`, `FIXME`, `undefined`, `NaN`, etc.)
- Horizontal overflow `<= 1px`

`smoke /` initially exposed lazy-image timing; this was fixed by eagerly loading all content imagery (see “Fixes applied”).

### L3 — Internal links

Every internal link found across the 10 routes resolves successfully. External references (Facebook, Instagram, YouTube, patient forms, payment portal, Virtual Tour and the three original article URLs) are preserved from the source content.

### L4 — Content parity

The immutable parity oracle confirms:

- 10/10 routes from `content-manifest.json` render their route content.
- 17/17 fact values are present: phone, email, address, hours, three doctor names, tagline, ages 1–101+, Fargo ND 58103, and all seven services.
- All 12 manifest assets exist in both `assets/images/` and `public/assets/images/`.

### L5 — Accessibility

Axe was run on all 10 routes with tags `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`.

- 0 serious/critical violations on every route.
- Keyboard-reachable skip link, labelled navigation landmarks, labelled mobile menu dialog, visible focus rings, semantic headings and `aria-current` navigation state.
- Reduced-motion support is implemented globally in `app/globals.css`.

### L6 — Visual and design review

Screenshots were captured at mobile (360×800), tablet (768×1024) and desktop (1440×900):

- `../.agents/qa/artifacts/screens/` — 30 full-page PNGs
- All web fonts load without error (`document.fonts` assertion).
- No horizontal overflow at any viewport on any route.
- No blank or failed page captures; all captures contain the expected cream, ice and navy surfaces.

Design review against the “aurora care” direction:

- **Palette:** dominant captures confirm cream `#f8f4ea`, ice `#ecf8f4`, night `#061826` and pine/teal accents, with aurora mint/violet used as highlights.
- **Typography:** Fraunces display headings paired with Manrope body copy; consistent hierarchy from hero to footer.
- **Layout:** responsive grids at all three breakpoints, sticky desktop header, full-screen mobile dialog menu, and consistent section spacing.
- **Signature components:** aurora hero, service directory with category filtering, FAQ accordion, gallery lightbox, doctor cards/profiles, news cards, appointment form and CTA band.
- **State coverage:** focus-visible styles, hover transitions, active navigation, form validation, success confirmation and reduced-motion fallbacks.

## Fixes applied during QA

1. **Logo accessible name** — `components/logo.tsx:61`
   Removed an `aria-label` that omitted the visual separation of the split wordmark. The link now takes its accessible name directly from the visible “Northern Lights Dental” text, clearing `label-content-name-mismatch` on every route.

2. **Services number contrast** — `components/service-directory.tsx:85`
   Changed the `01–07` numerals from `text-slate/45` (1.94:1) to full `text-slate` (5.68:1), clearing all seven `/services` color-contrast failures.

3. **Image loading** — `app/page.tsx`, `app/services/page.tsx`, `app/about/page.tsx`, `app/doctors/[slug]/page.tsx`, `app/new-patients/page.tsx`, `components/doctor-card.tsx`, `components/news-card.tsx`, `components/gallery.tsx`, `components/logo.tsx`
   Added `loading="eager"` to all content imagery (hero and page heroes already used `priority`). This removes the race where the QA scroller reached the end of the page before lazy images had started loading.

## Deployment notes

- The appointment form is a validated, client-side request flow. It intentionally states that it does not book a confirmed time and directs patients to call the office. Before collecting real patient information, connect the submit handler to the practice’s email/CRM endpoint and review HIPAA requirements.
- No analytics, tracking scripts or third-party embeds are loaded.
- `content-manifest.json`, `assets/` and `progressTracker.md` are preserved at the site root as required.
