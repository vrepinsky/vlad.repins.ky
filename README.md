# vlad.repins.ky

A static personal site. Every route is a complete HTML page rendered at build
time from typed TypeScript; htmx handles navigation. No framework, no
client-side router, no CSS-in-JS.

```bash
bun install
bun run dev        # http://localhost:3000, templates re-render per request
bun run build      # writes dist/
bun run preview    # build, then serve dist/ with GitHub Pages semantics
bun run typecheck
bun run lint
bun run format
```

## How it fits together

| Path              | Role                                                          |
| ----------------- | ------------------------------------------------------------- |
| `src/site/routes.ts` | Single source of truth: nav, page meta, sitemap, dev routing |
| `src/site/html.ts`   | Auto-escaping `html\`\`` tag; use `raw()` to opt out         |
| `src/layout/`     | Document shell, `<head>`, sidebar nav                         |
| `src/pages/`      | One function per route, returning the `#content` fragment     |
| `src/components/` | Shared fragments (CV entry, wishlist item, link, location)    |
| `src/styles/`     | Plain CSS; `app.css` imports the rest                         |
| `src/client/app.ts` | The only runtime JS: theme toggle, clock, weather           |
| `scripts/`        | `build.ts`, `dev.ts`, `serve-dist.ts`                         |
| `public/`         | Content-hashed into `dist/assets/`                            |
| `static/`         | Copied verbatim to `dist/` (stable URLs: `robots.txt`, `CNAME`) |

Adding a route means adding one entry to `ROUTES` and one page function. The
nav, sitemap, `<title>`/meta and dev server all follow from it.

## Two Bun gotchas this build works around

`scripts/build.ts` deliberately does **not** use Bun's HTML entrypoint:

1. Bun's HTML loader hard-fails on root-absolute asset references
   (`<link href="/x.css">`), so there is no way to hand-write a tag it should
   leave alone.
2. Bun's CSS bundler base64-inlines `woff2` unconditionally, and the `loader`
   option does not override it. Importing the fonts into `app.css` turned a
   1.4 KB stylesheet into a 76 KB render-blocking one.

So JS and CSS are bundled first, `public/` is hashed by the build script, and
HTML is written last with every URL already resolved. `@font-face` is emitted
inline in `<head>` — **never `@import` a font stylesheet into `src/styles/`.**

## htmx

`hx-boost` on `<body>` intercepts nav clicks, fetches the target page and swaps
only `#content`, with `hx-select-oob="#nav"` re-rendering the nav (and its
`aria-current`) from the server. The sidebar — including the running clock —
is never re-created. With JavaScript disabled every link is still an ordinary
`<a href>` to a real page.

Page transitions are CSS View Transitions scoped to `#content`; the CV "Stack"
accordion is a native `<details>`; the mobile layout is media queries only.
