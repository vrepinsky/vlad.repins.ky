import { html } from "@/site/html";

// Clock/weather spans are filled by client JS; without JS the line still reads fine.
export const location = () => html`
  <p class="subtitle location">
    <span>Based in Amsterdam, Noord-Holland</span>
    <span class="location__part" data-clock hidden></span>
    <span class="location__part" data-weather hidden></span>
  </p>
`;
