# EMMA-DEV — Portfolio

A production React implementation of the Stitch export ("Kinetic Editorial" design system) — a two-page engineering portfolio: a full-scroll homepage and a dedicated project-inquiry page.

Built with **React 18 · TypeScript · Vite · Tailwind CSS · React Router · Framer Motion · Lucide React**.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

```bash
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build locally
npm run lint        # eslint
```

## Routes

| Route             | Page                                              |
| ------------------ | -------------------------------------------------- |
| `/`                | Homepage — hero, work, expertise, process, philosophy, connect |
| `/contact`         | Start a Project / inquiry form (Design 2)          |
| `/start-project`   | Redirects to `/contact`                            |

**Contact flow**, as specified:
Hero → "Contact Me" smooth-scrolls to the homepage's `#connect` section (works from any route — it navigates home first, then scrolls) → visitor reviews the 5 contact options (Start a Project, Send an Email, LinkedIn, GitHub, Resume) → "Start a Project" routes to `/contact` → visitor fills out and submits the inquiry form.

## Project structure

```
src/
  components/
    layout/     Navbar, Footer, Layout (shared shell across all routes)
    ui/         Container, Button, GlassCard, Reveal, Chip, Badge
    home/       One component per homepage section (Hero, About, FeaturedWork, ...)
    contact/    ContactHero, InquiryForm, Blueprints
  pages/        Home.tsx, Contact.tsx, NotFound.tsx
  data/         portfolio.ts — all copy/content in one place
  hooks/        useScrollToSection, useScrollSpy, usePageTitle
  App.tsx       Route definitions
  index.css     Design tokens as CSS (glass-card, form-input, scrollbar, etc.)
tailwind.config.ts   Color/spacing/type-scale tokens lifted directly from the Stitch DESIGN.md files
```

## Swapping in your real content

Everything editable lives in **`src/data/portfolio.ts`** — projects, tech stack, timeline, process steps, testimonials, FAQs, and all contact-page copy. Update the values there; no component code needs to change.

A few things intentionally use placeholders and are worth replacing:

- **Logo** — `Navbar.tsx` / `Footer.tsx` currently render an "A" monogram badge instead of a hotlinked placeholder image. Drop a real logo file in `public/` and swap it in.
- **Resume** — `site.resumeHref` points to `/resume.pdf`. Add your actual resume PDF to `public/resume.pdf`.
- **Social links** — GitHub/LinkedIn/Read.cv links in `connectOptions`, `footerLinks`, and `contactPage.waysToConnect` are `#` placeholders from the Stitch export; point them at your real profiles.
- **Project/testimonial images** — currently reference the Stitch mockup's placeholder image URLs; swap for real screenshots.
- **Form submission** — `InquiryForm.tsx` simulates a send (matching the original design's mocked JS). Wire the `handleSubmit` function up to your real email/API endpoint.

## Design fidelity notes

- Colors, spacing, border-radius, and the full type scale in `tailwind.config.ts` are taken directly from both Stitch exports' `DESIGN.md` / inline Tailwind config — same values, just centralized in one config instead of two.
- `.glass-card`, `.glass-panel`, `.form-input`, `.selection-tag`, custom scrollbar, and hero gradient are ported 1:1 from the exported CSS.
- The vanilla-JS scroll-reveal (`.reveal` / `IntersectionObserver`) is replaced with Framer Motion's `whileInView`, and the mocked GitHub heatmap / form-submission JS are reimplemented as React state — same visual behavior, idiomatic React.
- Material Symbols icons in the export are mapped 1:1 to Lucide equivalents (e.g. `expand_more` → `ChevronDown`, `verified` → `BadgeCheck`) per the required tech stack.
- One shared `Navbar`/`Footer` is used on both routes, built from Design 1; Design 2's duplicate header/footer were not implemented separately, per the brief.
