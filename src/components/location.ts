import { html } from "@/site/html";

/**
 * Static shell for the "Based in Amsterdam" line. The clock and weather spans
 * start empty and are filled by src/client/app.ts, which also re-fills them
 * after an htmx swap. Without JS the line still reads sensibly.
 */
export const location = () => html`
  <p class="subtitle location">
    <span>Based in Amsterdam, Noord-Holland</span>
    <span class="location__part" data-clock hidden></span>
    <span class="location__part" data-weather hidden></span>
  </p>
`;
