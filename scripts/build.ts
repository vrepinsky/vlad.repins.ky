/**
 * Static site build.
 *
 * Deliberately does NOT use Bun's HTML entrypoint. Two verified behaviours make
 * it the wrong tool here:
 *   1. Its loader hard-fails on root-absolute asset refs (`<link href="/x.css">`),
 *      leaving no escape hatch for anything Bun shouldn't rewrite.
 *   2. Its CSS bundler base64-inlines woff2 unconditionally and `loader` does
 *      not override it, which turned a 1.4 KB stylesheet into 76 KB of
 *      render-blocking CSS.
 * So we bundle JS/CSS first, hash assets ourselves, and write HTML last with
 * every URL already resolved.
 */

import { basename, dirname, extname, join } from "node:path";
import { rm } from "node:fs/promises";
import { setManifest } from "@/site/assets";
import { renderPage } from "@/site/render";
import { ROUTES } from "@/site/routes";
import { renderSitemap } from "@/site/sitemap";

const ROOT = new URL("..", import.meta.url).pathname;
const DIST = join(ROOT, "dist");
const PUBLIC = join(ROOT, "public");
const STATIC = join(ROOT, "static");
const HTMX = join(ROOT, "node_modules/htmx.org/dist/htmx.min.js");

const hash8 = async (path: string) => {
  const hasher = new Bun.CryptoHasher("sha256");
  hasher.update(await Bun.file(path).bytes());
  return hasher.digest("hex").slice(0, 8);
};

const copyTree = async (from: string, to: string) => {
  const copied: string[] = [];
  for await (const rel of new Bun.Glob("**/*").scan({
    cwd: from,
    onlyFiles: true,
  })) {
    await Bun.write(join(to, rel), Bun.file(join(from, rel)));
    copied.push(rel);
  }
  return copied;
};

await rm(DIST, { recursive: true, force: true });

// 1. Client bundle. Both entrypoints are named "app"; they differ by extension,
//    so they can't collide.
const built = await Bun.build({
  entrypoints: [join(ROOT, "src/client/app.ts"), join(ROOT, "src/styles/app.css")],
  outdir: join(DIST, "assets"),
  target: "browser",
  format: "esm",
  minify: true,
  sourcemap: "linked",
  publicPath: "/assets/",
  naming: {
    entry: "[name]-[hash].[ext]",
    chunk: "[name]-[hash].[ext]",
    asset: "[name]-[hash].[ext]",
  },
  throw: true,
});

// Key off the extension, not artifact.kind: a CSS entrypoint reports
// kind === "asset", not "entry-point".
const jsArtifact = built.outputs.find((out) => out.path.endsWith(".js"));
const cssArtifact = built.outputs.find((out) => out.path.endsWith(".css"));
if (!jsArtifact || !cssArtifact) {
  throw new Error("build: expected both a JS and a CSS artifact");
}

// 2. Content-hash public/ (path-preserving, so basenames can't collide).
const assets = new Map<string, string>();
for await (const rel of new Bun.Glob("**/*").scan({
  cwd: PUBLIC,
  onlyFiles: true,
})) {
  const abs = join(PUBLIC, rel);
  const ext = extname(rel);
  const dir = dirname(rel);
  const hashed = `${basename(rel, ext)}-${await hash8(abs)}${ext}`;
  const url = `/assets/${dir === "." ? hashed : `${dir}/${hashed}`}`;
  await Bun.write(join(DIST, url), Bun.file(abs));
  assets.set(rel, url);
}

// 3. Vendored htmx, in its own hash bucket so it stays cached across content
//    deploys.
const htmxUrl = `/assets/htmx-${await hash8(HTMX)}.min.js`;
await Bun.write(join(DIST, htmxUrl), Bun.file(HTMX));

// 4. Verbatim statics (robots.txt, CNAME) — stable URLs, never hashed.
const statics = await copyTree(STATIC, DIST);

// BuildArtifact extends Blob but has no .bytes(), so go via arrayBuffer().
const gzipped = async (artifact: Blob) =>
  Bun.gzipSync(new Uint8Array(await artifact.arrayBuffer())).byteLength;

const jsGz = await gzipped(jsArtifact);
const cssGz = await gzipped(cssArtifact);
const htmxGz = Bun.gzipSync(await Bun.file(HTMX).bytes()).byteLength;

setManifest({
  js: `/assets/${basename(jsArtifact.path)}`,
  css: `/assets/${basename(cssArtifact.path)}`,
  htmx: htmxUrl,
  assets,
  sizes: { js: jsGz, css: cssGz, htmx: htmxGz },
});

// 5. Pages.
for (const route of ROUTES) {
  await Bun.write(join(DIST, route.out), renderPage(route));
}

// 6. Sitemap + report.
await Bun.write(join(DIST, "sitemap.xml"), renderSitemap());

const kb = (bytes: number) => `${(bytes / 1024).toFixed(2)} KB`;

console.log(`  pages    ${ROUTES.length} (${ROUTES.map((r) => r.path).join(", ")})`);
console.log(`  assets   ${assets.size} hashed, ${statics.length} verbatim`);
console.log(`  js       ${kb(jsArtifact.size)} raw / ${kb(jsGz)} gz`);
console.log(`  css      ${kb(cssArtifact.size)} raw / ${kb(cssGz)} gz`);
console.log(`  htmx     ${kb(htmxGz)} gz`);
console.log(`  total    ${kb(jsGz + cssGz + htmxGz)} gz over the wire`);
