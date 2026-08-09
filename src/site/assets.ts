/**
 * Resolves hashed JS/CSS/htmx URLs for templates.
 *
 * Vite fills this in after bundling (build) or with dev URLs (dev middleware).
 */

export type Manifest = {
  js: string;
  /** Empty in dev — Vite injects CSS via the JS module graph. */
  css: string;
  htmx: string;
  /** Gzipped bytes of what a visitor actually downloads, shown on /about/. */
  sizes: { js: number; css: number; htmx: number };
};

let manifest: Manifest | null = null;

export const setManifest = (next: Manifest) => {
  manifest = next;
};

export const bundle = (): Manifest => {
  if (!manifest) throw new Error("bundle(): manifest not set");
  return manifest;
};
