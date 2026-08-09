import { asset, bundle } from "@/site/assets";
import { html, raw } from "@/site/html";
import { SITE, type Route } from "@/site/routes";

const FAVICON =
  "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>";

/**
 * Old hash links (/#/cv) predate real routes. Dead routes land on "/" rather
 * than a 404. location.replace leaves no history entry, and running this first
 * means htmx never fires a request for the page we're about to leave.
 */
const HASH_REDIRECT = raw(`
<script>(function(){var h=location.hash;if(h.charAt(1)!=="/")return;var p=h.slice(1).replace(/\\/?$/,"/");
if(p==="/now/"||p==="/lab/")p="/";location.replace(p);})();</script>`);

/**
 * Theme must be resolved before first paint or dark-mode visitors get a white
 * flash. JSON.parse is required: the old React app persisted via
 * JSON.stringify, so the stored value is `"dark"` with quotes, and every
 * returning visitor still has that in localStorage.
 */
const THEME_BOOTSTRAP = raw(`
<script>try{var t=localStorage.getItem("theme");
document.documentElement.dataset.theme=(t?JSON.parse(t):null)||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");}catch(e){}</script>`);

/**
 * @font-face is emitted inline rather than imported into app.css on purpose:
 * Bun's CSS bundler unconditionally base64-inlines woff2, which turned a 1.4 KB
 * stylesheet into a 76 KB render-blocking one. Keeping the fonts out of Bun's
 * graph makes them separately cacheable and non-blocking.
 */
const fonts = () => {
  const regular = asset("fonts/Karrik-Regular.woff2");
  const italic = asset("fonts/Karrik-Italic.woff2");

  return html`
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="preload" as="font" type="font/woff2" crossorigin href="${regular}" />
    <style>
      @font-face {
        font-family: "Karrik";
        src: url("${raw(regular)}") format("woff2");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "Karrik";
        src: url("${raw(italic)}") format("woff2");
        font-weight: 400;
        font-style: italic;
        font-display: swap;
      }
    </style>
  `;
};

export const head = (route: Route) => {
  const canonical = `${SITE.origin}${route.path}`;
  const indexable = route.indexable !== false;

  return html`
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    ${HASH_REDIRECT} ${THEME_BOOTSTRAP}

    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    ${indexable
      ? html`<link rel="canonical" href="${canonical}" />`
      : html`<meta name="robots" content="noindex, nofollow" />`}

    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />

    <link rel="icon" href="${FAVICON}" />
    <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
    <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />

    ${fonts()}
    <link rel="stylesheet" href="${bundle().css}" />
  `;
};
