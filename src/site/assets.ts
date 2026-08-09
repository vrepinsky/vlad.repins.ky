/**
 * Resolves build-time asset URLs for templates.
 *
 * The build hashes everything under `public/` and registers the results here
 * before rendering any page; the dev server registers a passthrough resolver
 * instead. `asset()` throws on an unknown path so a bad reference fails the
 * build rather than shipping a 404.
 */

export type Manifest = {
  js: string;
  css: string;
  htmx: string;
  /** `public/`-relative path (e.g. "fonts/Karrik-Regular.woff2") -> public URL */
  assets: Map<string, string>;
  /** Gzipped bytes of what a visitor actually downloads, shown on /about/. */
  sizes: { js: number; css: number; htmx: number };
};

let manifest: Manifest | null = null;
let devResolve: ((relPath: string) => string) | null = null;

export const setManifest = (next: Manifest) => {
  manifest = next;
};

export const setDevResolver = (resolve: (relPath: string) => string) => {
  devResolve = resolve;
};

export const asset = (relPath: string): string => {
  if (devResolve) return devResolve(relPath);
  const url = manifest?.assets.get(relPath);

  if (!url) throw new Error(`asset(): "${relPath}" is not in the manifest`);

  return url;
};

export const bundle = (): Manifest => {
  if (!manifest) throw new Error("bundle(): manifest not set");

  return manifest;
};
