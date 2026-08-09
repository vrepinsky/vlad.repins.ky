import { resolve } from "node:path";
import { gzipSync } from "node:zlib";
import type { Plugin, ViteDevServer } from "vite";

const CLIENT_ENTRY = "/src/client/app.ts";
// Render-blocking in <head> during dev so the first paint isn't unstyled.
const STYLES_ENTRY = "/src/styles/app.css";

const gzipSize = (bytes: Uint8Array) => gzipSync(bytes).byteLength;

type SiteModules = {
  setManifest: (m: {
    js: string;
    css: string;
    sizes: { js: number; css: number };
  }) => void;
  renderPage: (route: { path: string }) => string;
  routeFor: (pathname: string) => { path: string } | undefined;
  NOT_FOUND: { path: string };
  renderSitemap: () => string;
};

const loadSite = async (server: ViteDevServer): Promise<SiteModules> => {
  const assets = await server.ssrLoadModule("/src/site/assets.ts");
  const render = await server.ssrLoadModule("/src/site/render.ts");
  const routes = await server.ssrLoadModule("/src/site/routes.ts");
  const sitemap = await server.ssrLoadModule("/src/site/sitemap.ts");

  return {
    setManifest: assets.setManifest,
    renderPage: render.renderPage,
    routeFor: routes.routeFor,
    NOT_FOUND: routes.NOT_FOUND,
    renderSitemap: sitemap.renderSitemap,
  };
};

// Vite plugin: render TS page functions for each route during `vite dev`.
export const siteDevPlugin = (): Plugin => {
  let sizes = { js: 0, css: 0 };
  let sizesReady: Promise<void> | null = null;

  const ensureSizes = (server: ViteDevServer) =>
    (sizesReady ??= (async () => {
      const { build } = await import("vite");
      const result = await build({
        configFile: false,
        root: server.config.root,
        resolve: { alias: server.config.resolve.alias },
        build: {
          write: false,
          manifest: false,
          assetsInlineLimit: 0,
          rollupOptions: {
            input: resolve(server.config.root, "src/client/app.ts"),
          },
        },
        logLevel: "error",
      });
      const outputs = Array.isArray(result) ? result : [result];
      let js = 0;
      let css = 0;
      for (const output of outputs) {
        if (!("output" in output)) continue;
        for (const chunk of output.output) {
          const source =
            chunk.type === "asset"
              ? typeof chunk.source === "string"
                ? new TextEncoder().encode(chunk.source)
                : new Uint8Array(chunk.source)
              : new TextEncoder().encode(chunk.code);
          const gz = gzipSize(source);
          if (chunk.fileName.endsWith(".js")) js += gz;
          if (chunk.fileName.endsWith(".css")) css += gz;
        }
      }
      sizes = { js, css };
    })());

  return {
    name: "site-dev",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        void (async () => {
          const pathname = new URL(req.url ?? "/", "http://localhost").pathname;

          // Module graph, Vite internals, and files with extensions → Vite.
          if (
            pathname !== "/sitemap.xml" &&
            (pathname.startsWith("/src/") ||
              pathname.startsWith("/@") ||
              pathname.startsWith("/node_modules/") ||
              pathname.includes("."))
          ) {
            next();

            return;
          }

          await ensureSizes(server);
          const site = await loadSite(server);
          site.setManifest({
            js: CLIENT_ENTRY,
            css: STYLES_ENTRY,
            sizes,
          });

          if (pathname === "/sitemap.xml") {
            res.setHeader("content-type", "application/xml");
            res.end(site.renderSitemap());

            return;
          }

          const route = site.routeFor(pathname);
          const body = await server.transformIndexHtml(
            pathname,
            site.renderPage(route ?? site.NOT_FOUND),
          );
          res.statusCode = route ? 200 : 404;
          res.setHeader("content-type", "text/html; charset=utf-8");
          res.end(body);
        })().catch(next);
      });
    },
  };
};
