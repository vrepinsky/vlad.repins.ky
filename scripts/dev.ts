/**
 * Dev server. Pages are re-rendered on every request, so editing a template or
 * a constant shows up on refresh with no rebuild step.
 *
 * Exported as a default object rather than a top-level Bun.serve() call: under
 * `bun --hot` the module is re-evaluated in place, and a bare Bun.serve on a
 * fixed port throws EADDRINUSE the second time around.
 */

import { join } from "node:path";
import { setDevResolver, setManifest } from "@/site/assets";
import { renderPage } from "@/site/render";
import { NOT_FOUND, routeFor } from "@/site/routes";

const ROOT = new URL("..", import.meta.url).pathname;
const PUBLIC = join(ROOT, "public");
const STATIC = join(ROOT, "static");
const HTMX = join(ROOT, "node_modules/htmx.org/dist/htmx.min.js");

// Unhashed, served straight off disk.
setDevResolver((relPath) => `/@public/${relPath}`);

const DEV_MANIFEST = {
  js: "/assets/app.js",
  css: "/assets/app.css",
  htmx: "/assets/htmx.min.js",
  assets: new Map<string, string>(),
  sizes: { js: 0, css: 0, htmx: 0 },
};
setManifest(DEV_MANIFEST);

/**
 * Dev serves unminified bundles, so their sizes would misreport what /about/
 * publishes. Do one production-shaped build the first time a page is rendered
 * and reuse it, so the numbers on screen match `bun run build`.
 */
let sizesReady: Promise<void> | null = null;

const measure = async (entry: string, ext: ".js" | ".css") => {
  const out = await Bun.build({
    entrypoints: [join(ROOT, entry)],
    target: "browser",
    minify: true,
    // Match scripts/build.ts: the sourceMappingURL comment ships too. Dev
    // lands ~14 bytes under the real build, which is the length of the hashed
    // filename it can't know yet.
    sourcemap: "linked",
    throw: false,
  });
  const artifact = out.outputs.find((o) => o.path.endsWith(ext));
  if (!artifact) return 0;
  return Bun.gzipSync(new Uint8Array(await artifact.arrayBuffer())).byteLength;
};

const ensureSizes = () =>
  (sizesReady ??= (async () => {
    DEV_MANIFEST.sizes = {
      js: await measure("src/client/app.ts", ".js"),
      css: await measure("src/styles/app.css", ".css"),
      htmx: Bun.gzipSync(await Bun.file(HTMX).bytes()).byteLength,
    };
    setManifest(DEV_MANIFEST);
  })());

const bundleOnce = async (entry: string, ext: ".js" | ".css", type: string) => {
  const out = await Bun.build({
    entrypoints: [join(ROOT, entry)],
    target: "browser",
    minify: false,
    sourcemap: "inline",
    throw: false,
  });
  if (!out.success) {
    return new Response(out.logs.join("\n"), { status: 500 });
  }
  const artifact = out.outputs.find((o) => o.path.endsWith(ext));
  if (!artifact) return new Response(`no ${ext} output`, { status: 500 });
  return new Response(await artifact.arrayBuffer(), {
    headers: { "content-type": type, "cache-control": "no-store" },
  });
};

const page = (body: string, status = 200) =>
  new Response(body, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });

export default {
  port: 3000,
  async fetch(request: Request) {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith("/@public/")) {
      const file = Bun.file(join(PUBLIC, pathname.slice("/@public/".length)));
      if (await file.exists()) return new Response(file);
    }
    if (pathname === "/assets/app.js") {
      return bundleOnce("src/client/app.ts", ".js", "text/javascript");
    }
    if (pathname === "/assets/app.css") {
      return bundleOnce("src/styles/app.css", ".css", "text/css");
    }
    if (pathname === "/assets/htmx.min.js") {
      return new Response(Bun.file(HTMX), {
        headers: { "content-type": "text/javascript" },
      });
    }

    const staticFile = Bun.file(join(STATIC, pathname));
    if (pathname !== "/" && (await staticFile.exists())) {
      return new Response(staticFile);
    }

    if (pathname === "/sitemap.xml") {
      const { renderSitemap } = await import("@/site/sitemap");
      return new Response(renderSitemap(), {
        headers: { "content-type": "application/xml" },
      });
    }

    await ensureSizes();

    const route = routeFor(pathname);
    if (route) return page(renderPage(route));

    return page(renderPage(NOT_FOUND), 404);
  },
};
