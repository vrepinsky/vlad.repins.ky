import { cvEntryList } from "@/components/cv-entry";
import { EDUCATION, WORK_EXPERIENCE } from "@/constants/cv.constant";
import { backToHome, footerLinks } from "@/layout/nav";
import { html } from "@/site/html";

export const cv = () => html`
  <div class="page">
    <div class="page__content">
      <section class="section">
        <div class="section__title section__title--with-back">
          ${backToHome()}
          <h1 class="title">Work</h1>
        </div>
        ${cvEntryList(WORK_EXPERIENCE)}
      </section>

      <section class="section">
        <div class="section__title"><h1 class="title">Education</h1></div>
        ${cvEntryList(EDUCATION)}
      </section>

      ${footerLinks()}
    </div>
  </div>
`;
