import { link } from "@/components/link";
import { bundle } from "@/site/assets";
import { html } from "@/site/html";
import packageJson from "../../package.json";

const kb = (bytes: number) => `${(bytes / 1024).toFixed(2)} KB`;

/**
 * Measured from the real build output rather than the hardcoded figures the
 * React version shipped. htmx is listed separately because it dominates the
 * total, and quoting the app bundle alone would flatter the number.
 */
const bundleStats = () => {
  const { sizes } = bundle();
  const total = sizes.css + sizes.js + sizes.htmx;

  return html`
    <h3 class="heading">Bundle Statistics</h3>
    <div class="stats">
      <div class="stats__item">
        <span class="stats__label">CSS:</span>
        <span class="stats__value">${kb(sizes.css)}</span>
      </div>
      <div class="stats__item">
        <span class="stats__label">App JS:</span>
        <span class="stats__value">${kb(sizes.js)}</span>
      </div>
      <div class="stats__item">
        <span class="stats__label">htmx:</span>
        <span class="stats__value">${kb(sizes.htmx)}</span>
      </div>
    </div>
    <p class="subtitle stats__note">
      Gzipped, measured at build time. ${kb(total)} total — the React version this replaced shipped
      189.12 KB.
    </p>
  `;
};

const dependencies = () => html`
  <h3 class="heading">Dependencies</h3>
  <div class="chips">
    ${Object.keys(packageJson.dependencies).map((pkg) => html`<span class="chip">${pkg}</span>`)}
  </div>
`;

export const about = () => html`
  <div class="page">
    <div class="page__content">
      <div class="section__title"><h1 class="title">About This Site</h1></div>

      <section class="section--about">${bundleStats()}</section>
      <section class="section--about">${dependencies()}</section>

      <section class="section--about">
        <h3 class="heading">Credits &amp; Thanks</h3>
        <p class="body">
          Karrik by Jean-Baptiste Morizot, Lucas Le Bihan. Distributed by
          ${link("https://velvetyne.fr")}
        </p>
      </section>

      <section class="section--about">
        <p class="subtitle">
          Built and designed with ¯\\(ツ)/¯ in Amsterdam Slotervaart © Vlad Repinskiy
          ${new Date().getFullYear()}
        </p>
      </section>
    </div>
  </div>
`;
