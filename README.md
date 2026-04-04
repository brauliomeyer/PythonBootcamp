# PythonBootcamp

A Vite + React landing page demo for the CodeSnap concept.

## Scripts

- `npm run dev` – start local development server.
- `npm run build` – create production build.
- `npm run preview` – preview production build locally.

## Production-style architecture

The codebase follows a feature-first, boundary-driven structure:

- `src/app/` → application composition/root wiring.
- `src/features/<feature>/` → isolated feature modules.
  - `data/` → framework-agnostic domain/config content.
  - `ui/components/` → reusable feature-local components.
  - `ui/sections/` → route/page sections.
  - `ui/<FeaturePage>.jsx` → feature public UI entrypoint.
- `src/shared/` → cross-feature utilities and generic UI primitives.

This keeps the app scalable by avoiding global "components/", "utils/", or type-based folder sprawl.
