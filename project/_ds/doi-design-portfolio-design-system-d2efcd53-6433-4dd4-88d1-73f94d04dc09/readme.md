# Doi Design Portfolio — Design System

The brand and UI system for **doidesign.co**, the personal portfolio site of **Eric Doi**, built to support job applications for **Marketing Director** and **Creative Director** roles. The site is **employer-facing only**. Every page answers one question for a hiring manager: *has this person done work like the work we need done?*

This system is deliberately separate from **doimarketingdesign.com** (Eric's client-facing side business). That site is dark, sales-oriented, and uses crimson. This one is **light, editorial, and rust-accented**. Do not mix content, tone, or structure between the two. In particular: **no pricing, no service tiers, no "book a diagnostic" or "start a project" calls to action** on this site.

## What this is for
- Generating well-branded, employer-facing portfolio pages, case studies, and supporting assets.
- Prototyping new sections in the established editorial style.
- Producing throwaway mocks or production-leaning HTML that stays on-brand.

## Sources used to build this system
- **GitHub (portfolio):** `edoi2-dev/doi-design-portfolio` — the intended home for the portfolio site. It was **empty (no commits)** when this system was built, so the brand brief below is the source of truth. Explore it for future work: https://github.com/edoi2-dev/doi-design-portfolio
- **GitHub (sibling, reference only):** `edoi2-dev/doi-marketing-design` — Eric's dark, client-facing site. Used only to (a) confirm the shared type system (Bebas Neue / Cormorant Garamond / Montserrat) and the author's spacing/easing conventions, and (b) source real portfolio assets and case-study facts (VSSL MX Series launch, headshot, brand mark). **Its dark/sales aesthetic was not carried over.** https://github.com/edoi2-dev/doi-marketing-design
- **Uploaded asset:** `uploads/Doi-Design-logo.svg` — the personal "doi" signature mark.
- **Local mount `Doi Design Code/`** — was empty/unavailable during the build.

Explore the GitHub repos to build higher-fidelity designs against the real product over time.

---

## CONTENT FUNDAMENTALS

**Voice:** Confident, factual, direct. The work makes the case; the copy just points at it. Never salesy, never humble-braggy. The reader is a hiring manager evaluating fit, not a customer being sold.

**Person & address:** First person for Eric ("I have written the copy, designed the logo, directed the video"). Second person ("you") only when addressing the hiring reader ("if you are hiring a marketing director"). The portfolio speaks as Eric; case studies can shift to neutral third-person factual reporting ("one marketing director with a part-time videographer").

**Casing:**
- Bebas display + eyebrows + labels + buttons: **UPPERCASE** (applied by CSS/components — write source copy in normal case).
- Cormorant editorial headings: **Sentence case**, with the emphasis clause in *italic*.
- Body: sentence case, generous leading.

**Punctuation rules (strict):**
- **No em dashes anywhere.** Use periods, commas, or colons. (Example: "Light and editorial. Cream backgrounds, ink text, generous white space.")
- Spell ranges with "to" or an en dash in dates only ("2019 to present").
- Short, declarative sentences. Fragments are fine for emphasis ("One person." "Twelve months.").

**No emoji. No exclamation-point hype.** Unicode is used only for typographic punctuation (curly quotes `\u201c \u201d`, middot `\u00b7`, arrows in UI).

**CTA vocabulary (the only approved set):** "Get In Touch", "View LinkedIn", "Download Resume", "View Case Study", "View Work". Never "Book a call", "Start a project", or anything with a price.

**Examples of on-brand copy:**
- Hero: *"Eric Doi builds and scales brands, hands on the work, from strategy through the final cut."*
- Case framing: *"The job of marketing was not to create demand. It was to make sure the delivery matched the anticipation."*
- Stat label: *"International email open rate, vs 21% industry average."*

---

## VISUAL FOUNDATIONS

**Overall feel:** Light, editorial, generous white space. Think a print editorial spread, not a SaaS landing page. Confidence comes from restraint and typography, not effects.

**Color** (`tokens/colors.css`):
- Canvas is **Cream `#F7F4EE`**; raised surfaces are **Paper `#FCFAF6`** (barely lighter, warm).
- Text is **Ink `#1A1A18`** (headings/primary) and **Ink Soft `#4A4A46`** (body/secondary).
- Borders/dividers are a single **Line** token, `rgba(26,26,24,0.10)`; a stronger `0.22` variant exists for hover.
- **Rust `#9B4A3A`** is the *only* accent and is used **sparingly**: the 32×1px eyebrow rule, a 2px top accent on cards (usually on hover), hover/active states, accent labels, and a single low-opacity decorative logo in the contact band. **Never as a large fill or background.** `#823A2C` is the rust hover/pressed shade.

**Type** (`tokens/typography.css`): Three families, never more than two per layout.
- **Bebas Neue** (regular, ALL CAPS, line-height 0.92–1.0) — hero headlines, display numbers, large callouts.
- **Cormorant Garamond** (weight 300, italic for emphasis words) — editorial section titles, subheads, pull quotes.
- **Montserrat** — body (300), labels + eyebrows (500), CTAs/buttons (600). Body leading is generous at 1.8.
- **Eyebrow** = 32×1px rust line + Montserrat 500, 10px, 0.22em tracking, UPPERCASE rust text.

**Spacing & layout** (`tokens/spacing.css`): 8px base scale (`--space-1`…`--space-10`). Wide section padding (`--section-pad-x: 3rem`, `--section-pad-y: 6rem`). Content max-width 1280px. Sections are separated by full-width hairline borders. 12-column work grid; 3–4 column capability/stat grids.

**Backgrounds:** Flat cream and paper only. **No gradients** except the warm image-placeholder fill (`linear-gradient(135deg, #E8E3D8 → #D8D2C4)`). No textures, no patterns, no film grain (that is the dark site's treatment).

**Imagery:** Real photography shown full-cover inside hairline frames. Where no asset exists, the `Media` component renders the warm placeholder gradient with a spec label bottom-left (e.g. "Image · 4:3 · Lifestyle"). Image vibe is warm and natural. Never invent imagery; leave a labeled placeholder.

**Corners & borders:** **Sharp edges everywhere.** `--radius-none: 0` on all cards, buttons, inputs, and frames. The only rounding is `--radius-full` for avatars and status dots. Borders are 1px hairlines; the rust accent bar is 2px.

**Elevation:** **No drop shadows. No inner shadows.** Depth comes entirely from hairline borders and white space. There is no shadow token system on this site (`--shadow-none` only).

**Motion** (`tokens/spacing.css`): Quiet and editorial. Easing `cubic-bezier(0.22, 1, 0.36, 1)`. Durations: 160ms (hover/color), 280ms (standard), 520ms (scroll reveals, image scale). Page transitions are a short fade + 10px rise. **No bounce, no spring, no infinite decorative loops.** Honors `prefers-reduced-motion`.

**Hover / press states:**
- Primary button: ink fill → **rust fill** on hover.
- Secondary button: hairline border → darker ink border on hover.
- Ghost button / links: ink text → **rust** on hover; arrows nudge 3px right.
- Cards: hairline top border → **2px rust top border** on hover; index number turns rust.
- Inputs: hairline underline → **rust underline** on focus.
- No scale-down press effect; this site uses color shifts, not squish.

**Transparency / blur:** Used only on the sticky nav, which becomes `rgba(247,244,238,0.82)` with a 12px backdrop blur after scrolling 24px (transparent over the hero). Nothing else uses blur.

**Cards:** Paper surface, 1px hairline border, sharp corners, no shadow, optional Bebas index number top-left, optional 2px rust top accent. That is the entire card vocabulary.

---

## ICONOGRAPHY

The brand is **type-led and nearly icon-free**, which is intentional for an editorial portfolio. Approach:

- **No icon font, no icon library** ships with this system, and none was present in the source. Do not introduce Lucide/Heroicons/Font Awesome unless a future need genuinely calls for it; if you must, match a **thin 1.5px stroke, square line-cap** outline style and flag the addition.
- **The only recurring glyph is an inline SVG arrow** drawn directly in components (`Button` and work-tile "View Case Study" links): a 24×24 viewBox, `stroke="currentColor"`, `stroke-width="1.5"`, `stroke-linecap="square"`, a horizontal line plus a chevron. It nudges 3px right on hover. Reuse this exact arrow rather than importing one.
- **The signature logo is the primary brand graphic** (`assets/logos/Doi-Design-logo.svg`): the cursive "doi" mark. It inherits ink via `<img>`, and can be inlined and recolored to rust (`fill: currentColor`, ~10% opacity) as a quiet decorative element in the contact band. **Never place it on a dark background here.**
- **No emoji.** **No decorative Unicode icons.** Middots (`\u00b7`) and curly quotes are used as typographic punctuation only.
- **Numbers act as iconography.** Bebas index numbers ("01"–"05") carry the visual rhythm in capability and challenge sections, in place of pictograms.

---

## Index / manifest

**Root**
- `styles.css` — design-system entry point. `@import`s the token files in order. Consumers link this one file.
- `readme.md` — this guide.
- `SKILL.md` — Agent Skills front-matter wrapper so this system can be used as a downloadable skill.

**Tokens** (`tokens/`)
- `fonts.css` — Google Fonts import for Bebas Neue, Cormorant Garamond, Montserrat.
- `colors.css` — palette + semantic aliases (cream/paper/ink/rust + placeholder fill).
- `typography.css` — families, weights, display/editorial/body scales, line-heights, tracking.
- `spacing.css` — 8px spacing scale, borders, sharp radii, motion (easing/durations), layout helpers.
- `base.css` — resets + brand utility classes (`.doi-display`, `.doi-editorial`, `.doi-eyebrow`, `.doi-placeholder`, `.doi-container`).

**Components** (`components/`) — namespace `window.DoiDesignPortfolioDesignSystem_d2efcd`
- `core/` — `Button`, `Eyebrow`, `SectionHeading`, `Badge`, `Stat`, `Card`, `Media`, `Avatar`.
- `forms/` — `Input` (text + textarea).
- Each has a `.jsx`, `.d.ts`, and `.prompt.md`; each directory has a `@dsCard` showcase HTML.

**Foundation cards** (`guidelines/`) — specimen cards rendered in the Design System tab (Colors, Type, Spacing, Brand).

**UI kit** (`ui_kits/portfolio/`) — interactive click-through recreation of doidesign.co: Home, Case Study (VSSL MX Series), About, Contact. Open `ui_kits/portfolio/index.html`.

**Assets** (`assets/`)
- `logos/Doi-Design-logo.svg` — the signature mark.
- `photos/` — real portfolio photography imported from the author's repo (VSSL launch lifestyle/site/mark/sheet, headshot, leather brand mark, website tile).

### Font substitution note
No licensed font binaries were provided and the portfolio repo was empty, so **Bebas Neue, Cormorant Garamond, and Montserrat are loaded from Google Fonts** (the canonical source for all three). If you have self-hosted/licensed binaries, replace the `@import` in `tokens/fonts.css` with local `@font-face` rules.
