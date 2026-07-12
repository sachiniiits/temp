# Sachin Kumar — Portfolio

A single-page portfolio built in the **Luxury / Editorial** design system defined in `../design.txt`.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview
```

## Stack

React 19 · Vite · Tailwind CSS v4 · Framer Motion · lucide-react

## Where things live

| Path | Purpose |
| --- | --- |
| `src/index.css` | **Design tokens.** Every colour, font and easing resolves here — no hex values are hard-coded elsewhere. |
| `src/lib/content.js` | **All copy.** Edit the site's words without touching layout. |
| `src/components/` | Primitives: `Button` (gold slide-in), `Plate` (the SVG artwork), `Chrome` (noise + gridlines), `Typo` (overlines, headlines, scroll reveals), `Nav`. |
| `src/sections/` | Hero, About, Experience, Work, Skills, Contact. |
| `public/` | The certificate of experience, linked from the Experience section. |

## Design notes

- **Plates instead of photographs.** There are no photos of this work — it is a pipeline, a statistical
  result and an architecture. So `Plate.jsx` draws each one as inert SVG: the SOM role clusters, the
  five-agent pipeline, and the Janartham architecture. They follow the same rules a photograph would
  (portrait aspect, inner border, grayscale that resolves to colour over 2000ms on hover).
- **Dark sections use `variant="inverse"` buttons.** A `primary` button is charcoal, which vanishes on
  a charcoal ground.
- **Motion respects `prefers-reduced-motion`** — colour is kept, transforms are dropped.

## Content provenance

Copy is drawn from the two resume drafts, the certificate of experience, the Janartham codebase, and
the two project repositories. Two points worth knowing:

- **Internship dates** are taken from the certificate (20 May – 19 June 2026), which conflicts with
  resume draft 1 (May–June 2025).
- **The CS2 project** is described from the current repository README (Self-Organizing Maps, and a
  *null* result on prior consistency), which supersedes the KMeans/GMM/HDBSCAN description in the
  resumes.
