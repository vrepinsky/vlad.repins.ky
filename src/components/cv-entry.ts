import { link } from "@/components/link";
import { html } from "@/site/html";
import type { CVEntry } from "@/types/cv.types";

/**
 * The "Stack" accordion is a native <details> — what used to be Collapsible.tsx
 * plus its useState. The triangle and open/close animation are pure CSS.
 */
const stack = (items: string[]) => html`
  <details class="stack">
    <summary class="stack__toggle">
      <span>Stack</span><span class="stack__triangle">▶</span>
    </summary>
    <div class="stack__list">${items.map((item) => html`<span class="chip">${item}</span>`)}</div>
  </details>
`;

export const cvEntry = (entry: CVEntry) => html`
  <article class="cv-entry">
    <h3 class="heading">${entry.title}, ${entry.company}</h3>
    <p class="subtitle">${entry.startDate} - ${entry.endDate} • ${entry.location}</p>
    ${entry.description.map((paragraph) => html`<p class="body">${paragraph}</p>`)}
    ${entry.link && link(entry.link)} ${entry.stack && entry.stack.length > 0 && stack(entry.stack)}
  </article>
`;

export const cvEntryList = (entries: CVEntry[]) => html`
  <div class="cv-entry-list">${entries.map(cvEntry)}</div>
`;
