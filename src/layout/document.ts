import { head } from "@/layout/head";
import { nav, socialLinks } from "@/layout/nav";
import { bundle } from "@/site/assets";
import { html, toHtml, type Raw } from "@/site/html";
import type { Route } from "@/site/routes";

/**
 * The signature progressive blur: eight stacked backdrop-filter layers, each
 * masked by an overlapping gradient. Used to be generated in JSX from an array
 * of blur/mask values; now it is eight empty divs plus :nth-child() rules.
 */
const edgeBlur = (direction: "top" | "bottom") => html`
  <div class="edge-blur edge-blur--${direction}" aria-hidden="true">
    ${Array.from({ length: 8 }, () => html`<div class="edge-blur__layer"></div>`)}
  </div>
`;

export const document = (route: Route, content: Raw): string => {
  const { js, htmx } = bundle();

  return `<!doctype html>
${toHtml(html`
  <html lang="en">
    <head>
      ${head(route)}
    </head>
    <body
      hx-boost="true"
      hx-target="#content"
      hx-select="#content"
      hx-swap="outerHTML transition:true"
      hx-select-oob="#nav"
    >
      <div class="app">
        ${edgeBlur("top")}

        <nav class="sidebar">
          <div class="sidebar__top">${nav(route)} ${socialLinks()}</div>
          <!-- Outside #nav so the out-of-band nav swap never restarts the clock. -->
          <div class="sidebar__bottom" id="sidebar-controls">
            <button
              type="button"
              id="theme-toggle"
              class="emoji-button"
              aria-label="Toggle colour theme"
            >
              🌞
            </button>
          </div>
        </nav>

        <main class="content" id="content">${content}</main>

        ${edgeBlur("bottom")}
      </div>

      <script defer src="${htmx}"></script>
      <script type="module" src="${js}"></script>
    </body>
  </html>
`)}
`;
};
