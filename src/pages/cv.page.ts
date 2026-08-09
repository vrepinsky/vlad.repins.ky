import { cvEntryList } from "@/components/cv-entry";
import { EDUCATION, WORK_EXPERIENCE } from "@/constants/cv.constant";
import { html } from "@/site/html";

export const cv = () => html`
  <div class="page">
    <div class="page__content">
      <section class="section" id="work-experience">
        <div class="section__title"><h1 class="title">Work</h1></div>
        ${cvEntryList(WORK_EXPERIENCE)}
      </section>

      <section class="section" id="education">
        <div class="section__title"><h1 class="title">Education</h1></div>
        ${cvEntryList(EDUCATION)}
      </section>
    </div>
  </div>
`;
