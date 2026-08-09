# vlad.repins.ky

Personal site. Static HTML built from TypeScript. A little client JS handles
theme, clock, and weather.

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
| `src/site/routes.ts` | URLs, titles, sitemap |
| `src/pages/` | Page functions |
| `src/components/` | Shared bits (CV entry, wishlist row, …) |
| `src/layout/` | Document shell, head, footer links |
| `src/styles/` | CSS (`app.css` pulls the rest in) |
| `src/client/app.ts` | Theme, clock, weather |
| `src/fonts/` | Karrik; Vite hashes via CSS `url(...)` |
| `public/` | Copied as-is (`CNAME`, `robots.txt`) |
| `scripts/build.ts` | After Vite: write HTML + sitemap |

- `/` — 100vh hero + links (CV linked from the bio)
- `/cv/` — work, education
- `/about/` — how the site is built

## Build

1. Vite bundles JS/CSS/fonts into `dist/assets/` and copies `public/`.
2. `scripts/build.ts` reads the Vite manifest, runs the page functions, writes HTML.

`bun run dev` uses the same page functions via a Vite plugin (live reload / HMR).
