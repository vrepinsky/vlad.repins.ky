import { ROUTES, SITE } from "@/site/routes";

export const renderSitemap = (): string => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.filter((route) => route.indexable !== false).map(
    (route) => `  <url>
    <loc>${SITE.origin}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq ?? "monthly"}</changefreq>
    <priority>${(route.priority ?? 0.6).toFixed(1)}</priority>
  </url>`,
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
};
