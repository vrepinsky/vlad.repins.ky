import { link } from "@/components/link";
import { footerLinks } from "@/layout/nav";
import { bundle } from "@/site/assets";
import { html } from "@/site/html";

const kb = (bytes: number) => `${(bytes / 1024).toFixed(2)} KB`;

const bundleSize = () => {
  const { sizes } = bundle();

  return kb(sizes.css + sizes.js);
};

export const about = () => html`
  <div class="page">
    <div class="page__content">
      <section class="section">
        <div class="section__title"><h1 class="title">About This Site</h1></div>

        <section class="section--about">
          <h3 class="heading">Bundle Size</h3>
          <p class="body">${bundleSize()} gzipped.</p>
        </section>

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
      </section>

      ${footerLinks([{ label: "Home", href: "/" }])}
    </div>
  </div>
`;
