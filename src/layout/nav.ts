import { html, raw } from "@/site/html";

const NEW_TAB = raw('target="_blank" rel="noopener noreferrer"');

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/vladrepinskiy" },
  { label: "Twitter", href: "https://x.com/vladrepinsky" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vladrepinsky/" },
  { label: "Email", href: "mailto:vladrepinsky@gmail.com" },
  { label: "Book a call", href: "https://cal.com/vladrepinsky" },
];

export const footerLinks = () => html`
  <nav class="footer-links" aria-label="Links">
    ${SOCIAL_LINKS.map(
      (item) => html`
        <a
          class="footer-links__link"
          href="${item.href}"
          ${!item.href.startsWith("mailto:") && NEW_TAB}
          >${item.label}</a
        >
      `,
    )}
  </nav>
`;
