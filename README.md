# vlad.repins.ky

Personal site. Static HTML pages, built from TypeScript. htmx soft-navigates
between them. A little client JS handles theme, clock, and weather.

```bash
bun install
bun run dev        # http://localhost:3000
bun run build      # writes dist/
bun run preview    # serve dist/ like GitHub Pages
bun run typecheck
bun run lint
bun run format
```

## Layout

| Path | What |
| --- | --- |
| `src/site/routes.ts` | URLs, titles, nav, sitemap |
| `src/pages/` | One function per page (main content) |
| `src/components/` | Shared bits (CV entry, wishlist row, …) |
| `src/layout/` | Document shell, head, sidebar |
| `src/styles/` | CSS (`app.css` pulls the rest in) |
| `src/client/app.ts` | Theme, clock, weather |
| `src/fonts/` | Karrik; Vite hashes via CSS `url(...)` |
| `public/` | Copied as-is (`CNAME`, `robots.txt`, htmx) |
| `scripts/build.ts` | After Vite: write HTML + sitemap |

Add a route → add it to `ROUTES` and a page function. Nav, meta, and sitemap follow.

## Build

1. Vite bundles JS/CSS/fonts into `dist/assets/` and copies `public/`.
2. `scripts/build.ts` reads the Vite manifest, runs the page functions, writes HTML.

`bun run dev` uses the same page functions via a Vite plugin (live reload / HMR).

## In the browser

htmx swaps `#content` (and refreshes the nav) so the sidebar stays put. Without
JS, links are normal full page loads.
