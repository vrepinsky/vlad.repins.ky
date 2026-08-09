import { head } from "@/layout/head";
import { bundle } from "@/site/assets";
import { html, toHtml, type Raw } from "@/site/html";
import type { Route } from "@/site/routes";

const edgeBlur = (direction: "top" | "bottom") => html`
  <div class="edge-blur edge-blur--${direction}" aria-hidden="true">
    ${Array.from({ length: 8 }, () => html`<div class="edge-blur__layer"></div>`)}
  </div>
`;

export const document = (route: Route, content: Raw): string => {
  const { js } = bundle();

  return `<!doctype html>
${toHtml(html`
  <html lang="en">
    <head>
      ${head(route)}
    </head>
    <body>
      <div class="app">
        ${edgeBlur("top")}

        <button
          type="button"
          id="theme-toggle"
          class="theme-toggle emoji-button"
          aria-label="Toggle colour theme"
        >
          🌞
        </button>

        <main class="content" id="content">${content}</main>

        ${edgeBlur("bottom")}
      </div>

      <script type="module" src="${js}"></script>
    </body>
  </html>
`)}
`;
};
