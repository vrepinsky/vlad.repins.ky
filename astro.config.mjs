import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://vlad.repins.ky",
  output: "static",
  build: {
    inlineStyleSheets: "always",
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Karrik",
      cssVariable: "--font-karrik",
      display: "swap",
      options: {
        variants: [
          {
            src: ["./src/fonts/Karrik-Regular.woff2"],
            weight: "400",
            style: "normal",
          },
          {
            src: ["./src/fonts/Karrik-Italic.woff2"],
            weight: "400",
            style: "italic",
          },
        ],
      },
    },
  ],
  integrations: [sitemap()],
});
