export const SITE_TITLE = "vlad.repins.ky";
export const SITE_DESCRIPTION =
  "Personal site of Vlad Repinskiy — a product engineer.";

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/vladrepinskiy",
    label: "GitHub",
  },
  {
    href: "https://x.com/vladrepinsky",
    label: "Twitter",
  },
  {
    href: "https://www.linkedin.com/in/vladrepinsky/",
    label: "LinkedIn",
  },
  {
    href: "mailto:vladrepinsky@gmail.com",
    label: "Email",
  },
  {
    href: "https://cal.com/vladrepinsky",
    label: "Book a call",
  },
] as const;

export const NAV_ITEMS = [
  {
    href: "/",
    keybinding: "h",
    label: "Home",
  },
  {
    href: "/cv/",
    keybinding: "c",
    label: "CV",
  },
  {
    href: "/now/",
    keybinding: "n",
    label: "Now",
  },
  {
    href: "/links/",
    keybinding: "l",
    label: "Links",
  },
  {
    href: "/about/",
    keybinding: "a",
    label: "About",
  },
] as const;
