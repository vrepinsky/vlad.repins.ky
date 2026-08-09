// Render routes + sitemap into dist/ after Vite has written the asset manifest.

import { readFileSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { basename, join } from "node:path";
import { setManifest } from "@/site/assets";
import { renderPage } from "@/site/render";
import { ROUTES } from "@/site/routes";
import { renderSitemap } from "@/site/sitemap";

const ROOT = new URL("..", import.meta.url).pathname;
const DIST = join(ROOT, "dist");
const MANIFEST_PATH = join(DIST, ".vite/manifest.json");
const HTMX_PATH = join(ROOT, "public/htmx.min.js");

type ViteManifest = Record<
  string,
  {
    file: string;
    css?: string[];
    isEntry?: boolean;
  }
>;

const gzipFile = (path: string) => gzipSync(readFileSync(path)).byteLength;

const manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf8")) as ViteManifest;
const entry = Object.values(manifest).find((item) => item.isEntry);
if (!entry) throw new Error("build: no Vite entry in manifest");

const cssFile = entry.css?.[0];
if (!cssFile) throw new Error("build: entry has no CSS (app.ts must import app.css)");

const jsUrl = `/${entry.file}`;
const cssUrl = `/${cssFile}`;
const htmxUrl = "/htmx.min.js";

const jsGz = gzipFile(join(DIST, entry.file));
const cssGz = gzipFile(join(DIST, cssFile));
const htmxGz = gzipFile(HTMX_PATH);

setManifest({
  js: jsUrl,
  css: cssUrl,
  htmx: htmxUrl,
  sizes: { js: jsGz, css: cssGz, htmx: htmxGz },
});

for (const route of ROUTES) {
  await Bun.write(join(DIST, route.out), renderPage(route));
}

await Bun.write(join(DIST, "sitemap.xml"), renderSitemap());

const kb = (bytes: number) => `${(bytes / 1024).toFixed(2)} KB`;

console.log(`  pages    ${ROUTES.length} (${ROUTES.map((r) => r.path).join(", ")})`);
console.log(`  js       ${kb(jsGz)} gz  (${basename(entry.file)})`);
console.log(`  css      ${kb(cssGz)} gz  (${basename(cssFile)})`);
console.log(`  htmx     ${kb(htmxGz)} gz`);
console.log(`  total    ${kb(jsGz + cssGz + htmxGz)} gz over the wire`);
