# Jiggs Ranch (Private Family Site)

A small, rustic + photographic **static website** for family and friends, hosted on **Cloudflare Pages** and protected via **Cloudflare Access** (configured separately; no auth code inside the site).

## What’s in this repo

- `SITE_SPEC.md` — the master specification (structure, design direction, requirements)
- `COPY.md` — editable copy pack (all text in one place)
- `index.html` — homepage (Jiggs Ranch)
- `naked-man/index.html` — event page (Naked Man — 100th year)
- `assets/css/styles.css` — global styles
- `assets/js/main.js` — optional JS (only if needed)
- `assets/ics/naked-man-2026.ics` — calendar file for April 11, 2026
- `assets/img/` — drop ranch photos here later

## Local preview (no build step)

From the repo root:

```bash
python3 -m http.server 8080
```

Then open:
- http://localhost:8080/

## Cloudflare Pages deploy (no build step)

1. Push this repo to GitHub.
2. In Cloudflare Pages: **Create a project** → connect the repo.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** (leave blank / none)
   - **Build output directory:** `/` (repo root)

Cloudflare Pages should serve `index.html` at the site root automatically.

## Cloudflare Access (privacy gate)

This repo intentionally contains **no password or auth logic**.

To restrict access:
- Set up Cloudflare Access (Zero Trust) to protect the site hostname.
- Allow only specific family/friend emails.
- Use the PDF guide: `Jiggs_Ranch_Cloudflare_Access_Setup_Guide.pdf` (kept outside the repo or stored in `/docs` if you prefer).

## Editing content

- Update wording in `COPY.md` first, then paste into the HTML pages.
- Replace photo placeholders by adding images to `assets/img/` and updating `<img src="...">` paths.
- The “Add to Calendar” button should link to:
  - `/assets/ics/naked-man-2026.ics`

## Working with Codex

Recommended workflow:
1. Ask Codex to read `SITE_SPEC.md` and `COPY.md` first.
2. Then generate or update:
   - `index.html`
   - `naked-man/index.html`
   - `assets/css/styles.css`
   - (optional) `assets/js/main.js`

Example Codex task prompt:

> Read `SITE_SPEC.md` and `COPY.md`. Generate the full static site (HTML/CSS, minimal JS only if necessary) following the specified structure, rustic photographic style, accessibility, and Cloudflare Pages constraints. Include the “Add to Calendar” link to `/assets/ics/naked-man-2026.ics`. Keep placeholders and comments where family photos will be added later.

## Notes

- Keep this site private. Avoid content that would be awkward if shared publicly.
- If you later add a custom domain, update Cloudflare Access to protect the new hostname too.
