import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://vlad.repins.ky",
  output: "static",
  integrations: [sitemap()],
});
