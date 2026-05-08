# DESIGN.md — Cave Run Muskie Guide Service

## 1. Aesthetic Direction
**`warm-organic` (Mountain-Country variant)** — committed in full.

Why: This is a 30-year-old family operation in the Daniel Boone National Forest, not a Wisconsin tech-bro muskie outfit. The brand should feel like a hand-painted sign at the end of a gravel road — warm, weathered, lived-in, trustworthy. Earthy materials, not polished metal. Hand-set type, not a corporate sans-serif. Cream, moss, clay, and a single hot accent.

Avoided: bright digital blues, "deep lake" gradients, nautical clichés, generic outdoors-brand stock-photo grid layouts.

## 2. Typography
- **Display: `Fraunces`** — A modern serif with optional softness, cut from old-style display traditions. Excellent for big headlines like "Trophy Muskie. Mountain Country." Carries weight without feeling stuffy.
- **Body: `Plus Jakarta Sans`** — A geometric sans with rounded warmth, designed to pair with serifs. Renders beautifully at body sizes.
- **Script (sparingly): `Yesteryear`** — A throwback nod to the original site's masthead, used only for one or two signature flourishes (e.g., guide signatures, the lodge sign).

Banned: Inter, Roboto, Arial, Helvetica, Open Sans, Lato, Space Grotesk.

## 3. Color Palette
```css
--color-primary:   #3c4c28   /* forest-700  — moss/forest, primary brand */
--color-secondary: #cf914a   /* clay-400    — warm clay/sun */
--color-accent:    #bb7733   /* clay-500    — burnt orange CTA */
--color-surface:   #fbfaf6   /* bone-50     — paper-white card */
--color-text:      #1d2616   /* forest-900  — near-black text */
```
Supporting: `forest-50` (#f4f6f1) for soft section backgrounds, `clay-100` (#f4e7cc) for warm callouts.

These pull straight from the lake at dawn and the forest floor in autumn — no generic SaaS palette.

## 4. Motion Strategy
- **Entry**: section headlines fade-up 28px, body copy fade-in offset 120ms, card grids stagger at 60ms intervals.
- **Hero**: slow Ken-Burns-style zoom (`slow-zoom` keyframe, 18s) on the hero photo — implies time on the water.
- **Hover**: card lift (4px translate-y, ring border slowly grows from `clay-300`), CTA button gets a subtle "ink-pool" effect via the accent flooding from left to right.
- **Underline-grow** on nav links — a Swiss-style draw under the active item.
- **Scroll-triggered**: stat counters count up (years guiding, fish caught, top-10 ranking, state record lbs).
- **Page transitions**: simple opacity fade — never a full slide.

Motion library: `framer-motion`. All `whileInView` with `once: true` to keep things calm.

## 5. Layout Signature
**The "split-bedrock" hero** — homepage hero is a full-bleed photograph of a trophy muskie at the boat, but the bottom 35% of the viewport is split horizontally into two equal panels: left = "MUSKIE" (state-record fish, packages CTA), right = "CRAPPIE & MORE" (multi-species guide Tim Newsome, packages CTA). One visual statement that immediately communicates the two-product strategy without needing a single nav click.

This split-bedrock motif is reused on the Lodge page as left = "The Lodge" / right = "The Muskie Shack", and on the Cave Run Lake page as left = "The Lake" / right = "The Forest".

Combined with: oversized Roman-numeral year-in-business counter ("EST. MMV"), and a sticky `Book a Trip` button on every screen.

## 6. The Brand in One Sentence
**"The finest guides and lodging on Cave Run — Kentucky's mountain-country muskie water — for thirty years and counting."**
