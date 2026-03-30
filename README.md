# Academic Portfolio — al-folio inspired

A clean, minimal academic personal website for GitHub Pages.
No build tools, no Jekyll, no dependencies — pure HTML/CSS/JS.

## File Structure

```
/
├── index.html           ← About / home page
├── publications.html    ← Full publication list with filters
├── projects.html        ← Research projects grid
├── cv.html              ← Curriculum vitae
├── blog.html            ← Blog post listing
└── assets/
    ├── css/
    │   └── main.css     ← All styles + light/dark theme
    ├── js/
    │   └── main.js      ← Theme toggle, abstract toggles, filter
    ├── img/
    │   └── profile.jpg  ← Your profile photo (replace this)
    └── pdf/
        └── cv.pdf       ← Your CV PDF (replace this)
```

## Quick Start

### Option A — GitHub Pages (recommended)

1. Fork or upload this folder to a GitHub repository named `yourusername.github.io`
2. Go to **Settings → Pages** and set source to `/ (root)` on `main` branch
3. Your site will be live at `https://yourusername.github.io`

### Option B — Any static host (Netlify, Vercel, etc.)

Just drag and drop the folder — no build step needed.

### Option C — Local preview

```bash
# Python 3
python -m http.server 8000
# Then open http://localhost:8000
```

## Customization Checklist

### 1. Personal info (index.html)
- [ ] Replace `Jane Doe` with your name everywhere
- [ ] Update position, affiliation, and links
- [ ] Update bio paragraphs
- [ ] Update interests and education
- [ ] Replace social links (email, GitHub, Scholar, Twitter, LinkedIn)
- [ ] Update news items

### 2. Profile photo
- [ ] Add your photo as `assets/img/profile.jpg`
  - Recommended: square crop, at least 300×300px

### 3. CV PDF
- [ ] Add your CV as `assets/pdf/cv.pdf`

### 4. Publications (publications.html)
- [ ] Replace all sample publications with your own
- [ ] Each `.pub-item` has a `data-type` attribute: `conference`, `journal`, `workshop`, or `preprint`
  - This powers the filter buttons at the top

### 5. Projects (projects.html)
- [ ] Replace sample projects with your own
- [ ] Optionally replace emoji placeholders with real project images

### 6. CV (cv.html)
- [ ] Fill in your actual education, positions, awards, teaching, service

### 7. Blog (blog.html)
- [ ] Add your blog posts or remove this page entirely
- [ ] To add a full blog post, create a new HTML file and link to it

### 8. Branding
- In `main.css`, the accent color is `--accent: #4361ee` (blue)
- Change this one variable to re-theme the entire site

## Features

- ✅ Light / dark mode (auto-detects system preference, persisted in localStorage)
- ✅ Abstract expand/collapse on publication items
- ✅ Publication type filter (All / Conference / Journal / Workshop / Preprint)
- ✅ Responsive for mobile
- ✅ Smooth fade-in animations
- ✅ No build step, no npm, no Jekyll required
- ✅ Google Fonts: Newsreader (serif headings) + Outfit (body) + DM Mono (dates/code)
- ✅ Font Awesome 6 icons

## Tips

- The navbar highlights the active page automatically via JS
- To add more pages, copy any existing HTML file and update the `<nav>` links
- All styles are in a single `main.css` with clear section comments
- CSS custom properties (`--accent`, `--bg`, etc.) make theming straightforward
