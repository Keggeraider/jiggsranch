# Jiggs Ranch — Private Family Website
Static website hosted on Cloudflare Pages (Free)

---

## 1. Project Overview

**Site Name:** Jiggs Ranch  
**Purpose:**  
A private, modern-but-rustic website for family and friends documenting a South Texas family ranch and its long-standing traditions.

**Audience:**  
Family and close friends only. Not intended for public sharing or indexing.

**Hosting:**  
Cloudflare Pages (Free plan)

**Access Control:**  
Protected using Cloudflare Access (Zero Trust).  
Up to 50 approved users via email authentication.  
No access logic should be implemented in site code.

---

## 2. Technical Constraints

- Static site only
- HTML + CSS (can use tailwind.css)
- Minimal vanilla JavaScript only if necessary
- No frameworks (no React, Next, Vue, etc.)
- No build step
- Relative links only
- Cloudflare Pages-compatible routing
- Clean, semantic, accessible markup

---

## 3. Site Structure

```
/
├── index.html
├── naked-man/
│   └── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js (optional)
│   ├── img/
│   │   └── (family photos added later)
│   └── ics/
│       └── naked-man-2026.ics
```

---

## 4. Global Layout Elements

### Header / Navigation
- Site title: Jiggs Ranch
- Navigation links:
  - Home
  - Naked Man
- Simple, understated design
- Mobile-friendly hamburger menu

### Footer
- Text: “Jiggs Ranch”
- Small note indicating this is a private family site
- No social media links

---

## 5. Design Direction

### Overall Vibe
- Rustic, photographic, timeless
- Feels like a family photo album or archival journal
- Calm, grounded, and unpolished (in a good way)
- Avoid glossy, trendy, or tech-forward aesthetics

### Color Palette
- Warm sand / bone: #f4efe8
- Sunbaked clay: #c26b4a
- Mesquite green: #4f6b57
- Dusk blue: #2f3e46
- Off-black text: #1f1f1f

### Typography
- Headings: serif or slab-serif (heritage feel)
- Body text: clean, readable sans-serif
- System font fallback required

### Imagery
- Large, full-width images
- Natural light
- South Texas ranch visuals:
  - Pasture and sky
  - Fence lines
  - Boots, hats, porches
  - Long tables at dusk
- Use placeholders with clear comments indicating where real photos will go

---

## 6. Page: Home (`/index.html`)

### Hero Section
- Headline:  
  **Jiggs Ranch**
- Subhead:  
  *A South Texas place for family, stories, and wide-open skies.*
- Background: full-width photo placeholder
- Gentle overlay for text readability

### Section: About the Ranch
Short paragraph, warm and understated.  
Focus on place, continuity, and family—not promotion.

### Section: What We Love Here
Grid of 3–6 cards:
- Sunrise coffee
- Mesquite and pasture
- Family meals
- Quiet mornings
- Open sky
- Time slowing down

Each card:
- Image placeholder
- Short caption-style text

### Section: Plan a Visit
Friendly, informal tone.
No logistics or booking.
Example sentiment:  
“Jiggs Ranch is a working place and a lived-in one. If you’re coming out, just let us know ahead of time.”

### Optional Section: Photo Highlights
6 image placeholders in a simple grid.

### Private Site Disclaimer (Visible After Login)
Place near bottom of page:

> This site is a private space created for family and close friends of Jiggs Ranch.  
> The stories and photos shared here are part of our family history.

---

## 7. Page: Naked Man (`/naked-man/index.html`)

### Page Purpose
Document a long-running annual family gathering known as “Naked Man.”
Tone should be respectful, warm, and matter-of-fact.
Assume a private audience that already understands the name.

---

### Hero Section
- Title: **Naked Man**
- Subhead:  
  *An annual family gathering, passed down through generations.*

---

### Section: Event Overview
Short paragraph explaining:
- This is a family tradition
- The name is part of long-standing family lore
- The gathering is about connection, not spectacle

---

### Section: 100th Year Celebration (Prominent Callout)
Highlight box or card with:
- **100th Year**
- **Date:** April 11, 2026
- **Location:** Jiggs Ranch, South Texas

---

### Section: Event Schedule (Editable Placeholder)
Simple timeline layout:
- Morning
- Afternoon
- Evening

Text should be placeholder-friendly so family can update it later.

---

### Section: Traditions & Notes
Bullet list, respectful and playful:
- Things people look forward to
- Long-standing habits
- Gentle reminders (e.g., respect the land, each other)

---

### Add to Calendar
Button labeled:
**Add to Calendar**

Downloads static file:
```
/assets/ics/naked-man-2026.ics
```

ICS details:
- Event name: Naked Man — 100th Year
- Date: April 11, 2026
- Location: Jiggs Ranch, South Texas
- All-day event

---

### Privacy Note
Small text at bottom reinforcing private audience.

---

## 8. Accessibility & SEO

- Semantic HTML5 elements
- Alt text for all images/placeholders
- Proper heading hierarchy
- Reasonable color contrast
- Visible focus states
- Respect prefers-reduced-motion

### Meta
Each page should include:
- Unique title
- Short description
- No indexing assumed (Access will block crawlers)

---

## 9. Deployment Notes

- Push repo to GitHub
- Connect to Cloudflare Pages
- Build command: none
- Output directory: root

Cloudflare Access will be configured separately and should not affect site code.

---

## 10. Tone Guardrails (Important)

- This is a private family site
- Avoid anything that could embarrass or sensationalize
- No marketing language
- No jokes at the expense of people or traditions
- Calm, respectful, timeless
