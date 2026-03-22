# Personal Website with Astro

This project is a mostly static Astro site deployed to GitHub Pages. Pages render to HTML at build time, with small client-side scripts only for theme persistence, the location widget, and the image viewer on the now page.

Install dependencies:

```bash
bun install
```

Start local development:

```bash
bun run dev
```

Create deployable static assets in `dist/`:

```bash
bun run build
```

Code quality:

```bash
# Check lint errors
bun run lint

# Auto-fix lint issues
bun run lint:fix

# Format everything with Prettier
bun run format
```

## Content

Structured content lives in `src/constants/`. The Astro pages import these constants directly, so editing the CV, now page, or wishlist usually means changing only those files.
