import { html, raw } from "@/site/html";

const NEW_TAB = raw('target="_blank" rel="noopener noreferrer"');

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const SOCIAL_LINKS: FooterLink[] = [
  { label: "GitHub", href: "https://github.com/vrepinsky", external: true },
  { label: "Twitter", href: "https://x.com/vladrepinsky", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vladrepinsky/", external: true },
  { label: "Email", href: "mailto:vladrepinsky@gmail.com" },
  { label: "Book a call", href: "https://cal.com/vladrepinsky", external: true },
];

export const footerLinks = (leading: FooterLink[] = []) => html`
  <nav class="footer-links" aria-label="Links">
    ${[...leading, ...SOCIAL_LINKS].map(
      (item) => html`
        <a class="footer-links__link" href="${item.href}" ${item.external && NEW_TAB}
          >${item.label}</a
        >
      `,
    )}
  </nav>
`;
