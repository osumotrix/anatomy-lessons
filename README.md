# Anatomy Lessons

An interactive, multilingual 3D human anatomy explorer built with React,
Three.js, Next.js, and vinext.

## Features

- Nine interactive 3D organ models with labelled hotspots
- Rotate, zoom, isolate, cross-section, layer, compare, and reset tools
- Organ facts, clinical notes, quizzes, lessons, and learning cards
- Responsive desktop and mobile layouts
- Thirteen locales, with Igbo as the default, plus English, Spanish, Hindi,
  Chinese, Arabic, French, German, Japanese, Russian, Indonesian, Korean, and Portuguese

## Requirements

- Node.js 22.13 or newer
- npm

## Run locally

```bash
npm ci
npm run dev
```

Open the local URL printed by vinext (normally `http://localhost:3000/en`).

## Verify

```bash
npm run lint
npm test
```

`npm test` creates a production build and checks server-rendered English and
Spanish pages. Use `npm run dev` for a local browser preview; the production
worker expects its hosting platform's static-asset binding.

## Project map

- `app/components/AnatomyApp.tsx` — application UI and interactions
- `app/components/OrganViewer.tsx` — React integration for the 3D viewer
- `app/lib/three/` — rendering, loading, hotspots, materials, and cleanup
- `app/lib/anatomy-data.ts` — organ metadata and 3D configuration
- `app/i18n/` — UI and organ translations
- `public/models/` — GLB organ models
- `public/anatomy/` — thumbnails and educational artwork
