import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { siteDevPlugin } from "./scripts/vite-site-plugin.ts";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  appType: "custom",
  plugins: [siteDevPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    manifest: true,
    assetsInlineLimit: 0,
    sourcemap: true,
    rollupOptions: {
      input: fileURLToPath(new URL("./src/client/app.ts", import.meta.url)),
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  server: {
    port: 3000,
  },
  root,
});
