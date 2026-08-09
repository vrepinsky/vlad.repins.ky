import { cvEntryList } from "@/components/cv-entry";
import { location } from "@/components/location";
import { EDUCATION, WORK_EXPERIENCE } from "@/constants/cv.constant";
import { html } from "@/site/html";

const hero = () => html`
  <div class="hero">
    <div class="hero__title">
      <h1 class="title">Welcome Stranger!</h1>
    </div>

    <p class="body mobile-only">
      You've landed on the simplified mobile version. Scroll down for CV, but visit the desktop
      version for full experience.
    </p>

    <p class="subtitle desktop-only">
      Влад Репинский &nbsp; <span class="dim">[vlæd rɛpɪnskɪy]</span>
    </p>
    <p class="subtitle desktop-only">est. 1998 in Saint Petersburg, Russia</p>
    <div class="desktop-only">${location()}</div>

    <p class="body">
      I'm a product engineer with a track record from across the industry - from pure computer
      science research to self-managed startup projects. Strong engineering culture with a Master of
      Engineering degree from one of the leading European universities. Love working on
      relationships, processes and documentation. Since recently, addicted to shipping things.
    </p>
  </div>
`;

// Mobile also inlines the CV here; desktop hides it via .mobile-only (/cv/ is separate).
export const home = () => html`
  <div class="page">
    <div class="page__content">
      ${hero()}

      <section class="section mobile-only">
        <div class="section__title"><h1 class="title">Work</h1></div>
        ${cvEntryList(WORK_EXPERIENCE)}
      </section>

      <section class="section mobile-only">
        <div class="section__title"><h1 class="title">Education</h1></div>
        ${cvEntryList(EDUCATION)}
      </section>
    </div>
  </div>
`;
