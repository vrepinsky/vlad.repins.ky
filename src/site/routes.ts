import { about } from "@/pages/about.page";
import { cv } from "@/pages/cv.page";
import { home } from "@/pages/home.page";
import { notFound } from "@/pages/notfound.page";
import { wishlist } from "@/pages/wishlist.page";
import type { Raw } from "@/site/html";

export const SITE = {
  origin: "https://vlad.repins.ky",
  brand: "vlad.repins.ky — Vlad Repinskiy",
  description: "Personal site of Vlad Repinskiy — a product engineer.",
} as const;

export type Route = {
  path: string; // Canonical URL path; trailing slash except for "/".
  out: string; // Path under dist/ for the written HTML file.
  navLabel?: string; // Missing → hidden from the sidebar.
  title: string;
  description: string;
  indexable?: boolean; // Defaults to true; false → noindex and omit from sitemap.
  priority?: number;
  changefreq?: "weekly" | "monthly" | "yearly";
  render: () => Raw;
};

export const ROUTES: Route[] = [
  {
    path: "/",
    out: "index.html",
    navLabel: "Home",
    title: SITE.brand,
    description: SITE.description,
    priority: 1.0,
    changefreq: "monthly",
    render: home,
  },
  {
    path: "/cv/",
    out: "cv/index.html",
    navLabel: "CV",
    title: `CV — ${SITE.brand}`,
    description:
      "Work experience and education of Vlad Repinskiy, a product engineer based in Amsterdam.",
    priority: 0.9,
    changefreq: "monthly",
    render: cv,
  },
  {
    path: "/about/",
    out: "about/index.html",
    navLabel: "About",
    title: `About — ${SITE.brand}`,
    description: "How this site is built: bundle size, dependencies, fonts and credits.",
    priority: 0.5,
    changefreq: "yearly",
    render: about,
  },
  {
    path: "/wishlist/",
    out: "wishlist/index.html",
    title: `Wishlist — ${SITE.brand}`,
    description: "Things Vlad Repinskiy would like to own, sorted by price.",
    indexable: false,
    render: wishlist,
  },
  {
    path: "/404",
    out: "404.html",
    title: `Not found — ${SITE.brand}`,
    description: "",
    indexable: false,
    render: notFound,
  },
];

export const NOT_FOUND = ROUTES.find((route) => route.path === "/404")!;

export const navRoutes = () => ROUTES.filter((route) => route.navLabel);

export const routeFor = (pathname: string): Route | undefined => {
  const normalised = pathname.endsWith("/") ? pathname : `${pathname}/`;

  return ROUTES.find((route) => route.path === normalised);
};
