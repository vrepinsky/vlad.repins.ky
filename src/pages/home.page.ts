import { location } from "@/components/location";
import { footerLinks } from "@/layout/nav";
import { html } from "@/site/html";

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
    <p class="body">
      Read about my experience in more detail
      <a class="link" href="/cv/">here</a>.
    </p>
  </div>
`;

export const home = () => html`
  <div class="page page--hero">
    <div class="page__content page__content--hero">
      ${hero()}
      ${footerLinks()}
    </div>
  </div>
`;
