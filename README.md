# Jiggs Ranch (Private Family Site)

A small, rustic + photographic **static website** for family and friends, hosted on **Cloudflare Pages** and protected via **Cloudflare Access** (configured separately; no auth code inside the site).

## What’s in this repo

- `SITE_SPEC.md` — the master specification (structure, design direction, requirements)
- `COPY.md` — editable copy pack (all text in one place)
- `index.html` — homepage (Jiggs Ranch)
- `jiggs-ranch-reunion/index.html` — event page (Jiggs Ranch Reunion)
- `assets/css/styles.css` — global styles
- `assets/js/main.js` — optional JS (only if needed)
- `assets/ics/naked-man-2026.ics` — calendar file for April 11, 2026
- `assets/img/` — drop ranch photos here later


## Cloudflare Pages deploy (no build step)

1. Push this repo to GitHub.
2. In Cloudflare Pages: **Create a project** → connect the repo.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** (leave blank / none)
   - **Build output directory:** `/` (repo root)

Cloudflare Pages should serve `index.html` at the site root automatically.

## Notes

- Keep this site private. Avoid content that would be awkward if shared publicly.
- If you later add a custom domain, update Cloudflare Access to protect the new hostname too.
