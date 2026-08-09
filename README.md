# vlad.repins.ky

A static personal site. Every route is a complete HTML page rendered at build
time from typed TypeScript; htmx handles navigation. No framework, no
client-side router, no CSS-in-JS.

```bash
bun install
bun run dev        # http://localhost:3000
bun run build      # writes dist/
bun run preview    # build, then serve dist/ with GitHub Pages semantics
bun run typecheck
bun run lint
bun run format
```

## How it fits together

| Path                 | Role                                                             |
| -------------------- | ---------------------------------------------------------------- |
| `src/site/routes.ts` | Single source of truth: nav, page meta, sitemap, routing         |
| `src/site/html.ts`   | Auto-escaping `html\`\`` tag; use `raw()` to opt out             |
| `src/layout/`        | Document shell, `<head>`, sidebar nav                            |
| `src/pages/`         | One function per route, returning the `#content` fragment        |
| `src/components/`    | Shared fragments (CV entry, wishlist item, link, location)       |
| `src/styles/`        | Plain CSS; `app.css` imports the rest (including `@font-face`)   |
| `src/client/app.ts`  | Runtime JS: theme toggle, clock, weather (imports the CSS)       |
| `src/fonts/`         | Karrik woff2 files, hashed by Vite via CSS `url(...)`            |
| `vite.config.ts`     | Vite bundles assets; a small plugin serves HTML in `dev`         |
| `scripts/build.ts`   | After Vite: read the manifest, render routes + sitemap into dist |
| `public/`            | Copied as-is (`robots.txt`, `CNAME`, `htmx.min.js`)              |

Adding a route means adding one entry to `ROUTES` and one page function. The
nav, sitemap, `<title>`/meta and dev server all follow from it.

## Build

1. **Vite** bundles `src/client/app.ts` (+ CSS/fonts) into hashed files under
   `dist/assets/`, and copies `public/` into `dist/`.
2. **`scripts/build.ts`** reads Vite's manifest, fills in script/link URLs, runs
   each page function, and writes the HTML files plus `sitemap.xml`.

Dev is the same page functions, served by a Vite middleware plugin so template
edits show up on refresh and CSS/JS get HMR.

## htmx

`hx-boost` on `<body>` intercepts nav clicks, fetches the target page and swaps
only `#content`, with `hx-select-oob="#nav"` re-rendering the nav (and its
`aria-current`) from the server. The sidebar — including the running clock —
is never re-created. With JavaScript disabled every link is still an ordinary
`<a href>` to a real page.

Page transitions are CSS View Transitions scoped to `#content`; the CV "Stack"
accordion is a native `<details>`; the mobile layout is media queries only.
