# Landing feature

## Boundaries

- `data/` contains static content models.
- `ui/components/` contains reusable feature-local UI blocks.
- `ui/sections/` contains page sections composed into the feature root.
- `ui/LandingPage.jsx` is the only public entrypoint for this feature.

## Import rules

- `landing/ui/*` may import from `landing/data/*` and `shared/*`.
- `landing/data/*` must remain framework-agnostic.
- External callers should import the feature only through `ui/LandingPage.jsx`.
