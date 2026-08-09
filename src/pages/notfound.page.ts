import { html } from "@/site/html";

export const notFound = () => html`
  <div class="page">
    <div class="page__content">
      <div class="section__title"><h1 class="title">404</h1></div>
      <p class="body">Nothing here. This page either never existed or has been retired.</p>
      <p class="body"><a class="link" href="/">Go home →</a></p>
    </div>
  </div>
`;
