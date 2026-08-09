// Hashed JS/CSS URLs for templates — set by the build script or Vite dev plugin.

export type Manifest = {
  js: string;
  css: string;
  // Gzipped byte sizes shown on the one-pager about section.
  sizes: { js: number; css: number };
};

let manifest: Manifest | null = null;

export const setManifest = (next: Manifest) => {
  manifest = next;
};

export const bundle = (): Manifest => {
  if (!manifest) throw new Error("bundle(): manifest not set");

  return manifest;
};
