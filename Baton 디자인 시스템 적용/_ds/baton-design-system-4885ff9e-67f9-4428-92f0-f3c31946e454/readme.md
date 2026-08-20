# Baton Design System

Baton is a **CRM workspace** — a single-screen sales cockpit where a rep sees today's
schedule, incoming leads, and the day's tasks, and runs calls without leaving the page.
The product's personality is *calm grey paper with one loud lime*: soft grey canvas, big
rounded floating cards, black pill controls, and a neon-lime accent that marks exactly
one thing at a time — what is happening *now*.

## Sources given

| Source | What it is | Notes |
| --- | --- | --- |
| `uploads/20c32c7a4a04e0a26a0ea26ae1a6b8e0.jpg` | One high-fidelity mock of the Workspace dashboard | The **only** source material provided |
| `assets/reference/*.png` | Upscaled crops of that image (full window + header/lead/task zooms) | Derived by this project for reference |

No codebase, Figma file, font binaries, logo files, icon set, photography, or written
brand/copy guidelines were provided. Everything below is derived from the single reference
image; anything inferred is flagged in place. **The reference image carries a third-party
product logo in its top-left corner; that mark is not part of Baton and was not copied.**

### Not available / needs the user
- **No logo asset.** The brand appears wherever a mark would go as the word `BATON` set in
  the display face with a lime dot accent (`Wordmark`). No mark was drawn or reconstructed.
- **Fonts are substituted.** The reference face is a geometric grotesque; **Outfit**
  (Google Fonts) is the closest match, with **DM Mono** for figures. Send the real font
  files and `tokens/fonts.css` is a one-file swap.
- **Icons are substituted.** Lucide (CDN, ~1.75px outline, rounded caps) stands in for the
  reference's own glyph set.
- **No photography.** Avatars fall back to initials; document tiles to captioned placeholders.
- Only one product surface exists in the source, so there is one UI kit.

## Index

- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `shadows.css`,
  `motion.css`, `fonts.css`, `base.css`.
- `guidelines/` — 20 specimen cards (Colors, Type, Spacing, Brand groups).
- `components/` — reusable primitives, grouped below.
- `ui_kits/workspace/` — the Workspace dashboard recreation (`README.md` inside).
- `assets/reference/` — reference crops of the source mock.
- `thumbnail.html`, `SKILL.md`.

### Components

| Group | Components |
| --- | --- |
| `components/core/` | **Button**, **IconButton**, **Icon**, **Card**, **Avatar**, **AvatarStack** |
| `components/forms/` | **FilterChip**, **FilterBar**, **SelectPill**, **SearchInput** |
| `components/data/` | **MetricStat**, **DeltaBadge**, **SourceTag**, **InterestRamp**, **DocThumb** |
| `components/navigation/` | **SectionHeader**, **IconRail**, **ScheduleBar** |
| `components/patterns/` | **LeadCard**, **TaskCard**, **CallTile**, **SummaryPanel**, **TimelineRail** |
| `components/brand/` | **Wordmark** |

**Intentional additions** (no direct counterpart in the source, added because the system
cannot work without them): **Icon** (a glyph wrapper — the source has icons everywhere but
no named set), **Wordmark** (the brand needs a lockup and no logo file exists),
**SearchInput** (the source shows a search disc only; a text field is required once it opens),
**TimelineRail** (the time gutter beside the call overlay, read off the reference).

## Content fundamentals

Copy in Baton is **short, literal, and lower-pressure**. Labels name the thing and stop.

- **Sentence case everywhere**, except the page wordmark, which is uppercase and wide-tracked
  (`WORKSPACE`). No ALL-CAPS micro-labels.
- **Nouns for sections, verbs for actions.** Sections: "New Leads", "Your Days Tasks".
  Actions: "New Task", "Send Proposal", "Mark as won".
- **Second person, possessive.** The product speaks about the user's things: "Your Schedule",
  "Your Days Tasks". It never says "I" and rarely says "we". No greetings, no "Let's…".
- **Field captions are single grey words**: `Source`, `Status`, `Amount`, `Goal:`,
  `Documents:`. Panel captions in the dark AI panel keep their colon; card captions don't.
- **Counts are exposed, not narrated**: "7 Leads", "16 Tasks", "34 Deals", "20 won", "3 lost".
  The noun after a figure is lowercase when it is an outcome (`won`, `lost`) and title case
  when it is an entity (`Deals`, `Leads`, `Tasks`).
- **Status values read as states, not instructions**: "Call scheduled", "Waiting Proposal".
- **Dates are terse and numeric**: `28.03.2023 at 2 pm`, `2:00 pm`, `36 min`. Lowercase am/pm.
  Money uses a space after the symbol and dot thousands: `$ 20.000`.
- **Machine-written copy** (the AI summary panel) is the only place with full sentences:
  "Reduce the number of security incidents by 50%. This goal is quantitative and measurable."
  Emphasis inside it is bolded inline; it stays factual and never uses exclamation marks.
- **No emoji, ever.** No exclamation marks. No marketing adjectives inside the product.
- Voice test: if a label could be a column header in a spreadsheet, it's right.

## Visual foundations

**Canvas.** Every screen sits on a soft grey radial wash (`--canvas-wash`, #f6f6f6 → #e2e2e2,
light from the top-left), never pure white. Content floats on it; there is no page chrome,
no header bar, no visible grid. The left navigation is a column of free-floating discs, not a
sidebar panel.

**Color.** Three families and one accent. Paper greys (#fff → #e1e1e1) carry all surfaces;
ink (#0b0b0b → #9a9a9a) carries text and the dark pills; lime (#befb71) is the accent and is
rationed hard — the in-progress schedule slot, the active/next task card, positive deltas,
focus rings, "now" dots. Signal colors appear only as small marks: flame orange for hot leads,
red for notification pips and end-call, amber/sky are reserved. **At most one lime card per
view.** Never a lime background behind a whole screen.

**Type.** One geometric grotesque (Outfit, substituting) plus mono for figures. Weights stay
light: 400 for numerals and body, 500 for names and titles; 600+ is unused. Display sizes are
big and airy (44px KPI figures, 34px wordmark), body is 14px, meta 12px, captions 11px.
Tracking is wide (.08em) only on the uppercase wordmark, tight (-0.01em) on big numerals.
Grey nouns sit next to black numbers — the contrast in *color*, not size, carries hierarchy.

**Spacing & layout.** 4px-based scale with a 6px half-step. Card interiors are 20px, rows
inside a card 12px, cards in a rail 16px, sections 32px. Rails are horizontal and overflow
off-screen edge (content is implied to continue, never a "see all" link). Lead cards ~250px,
task cards ~336px. Fixed elements: the schedule capsule at the top, the icon rail at the left,
the call overlay pinned to the right.

**Corners.** Everything is round. Cards 28px; inner blocks 16px; document tiles 12px; every
control, chip, tag, avatar and nav disc is fully round (`--r-full`). Nothing in this system
has a square corner except image crops inside a rounded mask.

**The notch.** The signature move: a card's top-right corner is cut away with a concave 22px
radius, and a circular action sits in the cut, half outside the card. Notches only work on the
canvas (the cut is painted `--surface-canvas`), so notched cards never nest.

**Borders & shadows.** No borders anywhere — separation is done with light and shadow.
Four steps: `--shadow-hairline` (an inset 1px 6%-black ring on chips/tags), `--shadow-chip`
(1px), `--shadow-card` (0 14px 30px -16px, the default card), `--shadow-float`
(0 24px 60px -20px, overlays/panels). Shadows are neutral black at low alpha — never colored.
Inset shadow is used only as a hairline ring, never as a pressed well.

**Transparency & blur.** Used in exactly two places: glass discs on video/dark surfaces
(`rgba(255,255,255,.14)` + 1px light ring) and overlay scrims (`rgba(11,11,11,.28)` +
3px blur). Ink panels use flat `--ink-800` blocks inside, not translucency. No frosted cards
on the light canvas. Text is never placed over an image without a solid or ink container —
there are no protection gradients in this system; content gets a capsule or a card instead.

**Imagery.** Photography is limited to people (round, ring-cropped) and video stills inside the
call tile. Tone is neutral-to-warm daylight, natural, no filters, no grain, no duotone. There
are no illustrations, no patterns, no textures, no gradients other than the canvas wash and the
lime→ink contrast of the schedule capsule.

**Animation.** Quiet and short. 180ms `cubic-bezier(.22,.8,.28,1)` for state changes, 260ms for
overlays appearing (fade + 4px rise). No bounce, no spring, no easing longer than 420ms, no
looping motion, no skeleton shimmer. Charts don't animate — there aren't any.

**States.** Hover: lift 1px + `brightness(1.06)` + the deeper card shadow; grey chips do not
change hue, they only lift. Press: `scale(.97)`, no color change. Selected chip: goes white
with a card shadow while unselected chips stay flat paper. Active nav disc: inverts to ink.
Focus: 3px lime ring at 55% (`--shadow-focus`), never a blue system outline. Disabled: 40%
opacity, no color swap.

## Iconography

- **Substituted set:** the source provided no icon assets, so **Lucide** (v0.428, CDN) is
  used — thin outline, rounded caps and joins, which is the closest match to the reference's
  glyphs. Swap the `CDN` constant in `components/core/Icon.jsx` if a real set arrives.
- Icons are loaded as **images from the Lucide CDN** and tinted with a small fixed tone palette
  (`ink` / `light` / `muted` / `faint` / `hot` / `danger`). Browsers block cross-origin CSS masks,
  so `currentColor` inheritance is not available — pass `tone` when an icon sits on ink or lime.
- **Sizes:** 15–16px in chips, 17–18px in pill buttons and fields, ~42% of diameter inside
  circular icon buttons (≈19px at 44px, 22px at 52px), 10px in delta pips.
- Icons are almost always **inside a circular container** (nav disc, icon button, kind disc on
  task cards). Standalone icons appear only as the flame on a "Hot Client" chip and the
  calendar in the date chip.
- **Color rule:** monochrome by default (inherits ink/white). The only colored glyphs are
  signal ones — flame orange on hot filters, white on the red end-call disc.
- **Vendor logos** (calendar/meeting providers) appear in the source as small full-color
  square marks inside cards. None were supplied; use the vendor's own asset when available and
  never redraw it. Lucide's `video` / `file-text` stand in.
- **No emoji, no unicode dingbats, no icon font glyphs as text.** Never hand-roll an SVG:
  use `<Icon name="…"/>` or copy a real asset into `assets/`.

## Using this system

```jsx
const { Card, Button, IconButton, LeadCard } = window.BatonDesignSystem_4885ff;

<Card tone="raised" interactive notch notchAction={<IconButton icon="arrow-up-right" size={52}/>}>
  …
</Card>
```

Link `styles.css` once; every component reads its values from CSS custom properties, so
theming happens in `tokens/`, not in JSX. Each component directory carries a
`<Name>.prompt.md` with a one-line "what & when" plus a usage example.
