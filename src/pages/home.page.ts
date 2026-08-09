import { cvEntryList } from "@/components/cv-entry";
import { link } from "@/components/link";
import { location } from "@/components/location";
import { EDUCATION, WORK_EXPERIENCE } from "@/constants/cv.constant";
import { footerLinks } from "@/layout/nav";
import { bundle } from "@/site/assets";
import { html } from "@/site/html";

const kb = (bytes: number) => `${(bytes / 1024).toFixed(2)} KB`;

const bundleSize = () => {
  const { sizes } = bundle();

  return kb(sizes.css + sizes.js);
};

const hero = () => html`
  <div class="hero">
    <div class="hero__title">
      <h1 class="title">Welcome Stranger!</h1>
    </div>

    <p class="subtitle">
      Влад Репинский &nbsp; <span class="dim">[vlæd rɛpɪnskɪy]</span>
    </p>
    <p class="subtitle">est. 1998 in Saint Petersburg, Russia</p>
    ${location()}

    <p class="body">
      I'm a product engineer with a track record from across the industry - from pure computer
      science research to self-managed startup projects. Strong engineering culture with a Master of
      Engineering degree from one of the leading European universities. Love working on
      relationships, processes and documentation. Since recently, addicted to shipping things.
    </p>
  </div>
`;

export const home = () => html`
  <div class="page">
    <div class="page__content">
      <section class="section">${hero()}</section>

      <section class="section">
        <div class="section__title"><h1 class="title">Work</h1></div>
        ${cvEntryList(WORK_EXPERIENCE)}
      </section>

      <section class="section">
        <div class="section__title"><h1 class="title">Education</h1></div>
        ${cvEntryList(EDUCATION)}
      </section>

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

      ${footerLinks()}
    </div>
  </div>
`;
