# PythonBootcamp

A Vite + React landing page demo for the CodeSnap concept.

## Scripts

- `npm run dev` – start local development server.
- `npm run build` – create production build.
- `npm run preview` – preview production build locally.

## Feature-based structure

This project now uses a feature-first folder layout with explicit boundaries:

- `src/app/` → app shell/composition layer.
- `src/features/landing/data/` → landing-page domain data.
- `src/features/landing/ui/` → landing-page UI components.
- `src/shared/lib/` → cross-feature utilities.

The app entrypoint (`src/main.jsx`) can import from `app`, while features consume only their own `data/ui` plus `shared` utilities.
