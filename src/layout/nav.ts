import { html, raw } from "@/site/html";
import { navRoutes, type Route } from "@/site/routes";

const ARIA_CURRENT = raw('aria-current="page"');
const NEW_TAB = raw('target="_blank" rel="noopener noreferrer"');

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/vladrepinskiy" },
  { label: "Twitter", href: "https://x.com/vladrepinsky" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vladrepinsky/" },
  { label: "Email", href: "mailto:vladrepinsky@gmail.com" },
  { label: "Book a call", href: "https://cal.com/vladrepinsky" },
];

export const nav = (current: Route) => html`
  <ul id="nav" class="nav">
    ${navRoutes().map((route) => {
      const isCurrent = route.path === current.path;

      return html`
        <li class="nav__item">
          <a class="nav__link" href="${route.path}" ${isCurrent && ARIA_CURRENT}
            >${route.navLabel}</a
          >
        </li>
      `;
    })}
  </ul>
`;

export const socialLinks = () => html`
  <div class="social">
    ${SOCIAL_LINKS.map(
      (item) => html`
        <a class="social__link" href="${item.href}" ${!item.href.startsWith("mailto:") && NEW_TAB}
          >${item.label}</a
        >
      `,
    )}
  </div>
`;
