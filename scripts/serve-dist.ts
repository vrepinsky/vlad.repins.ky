// Preview server for dist/ with GitHub Pages directory + 404.html behaviour.

import { join } from "node:path";

const DIST = new URL("../dist", import.meta.url).pathname;

const serve = async (path: string) => {
  const file = Bun.file(join(DIST, path));

  return (await file.exists()) ? file : null;
};

export default {
  port: 4173,
  async fetch(request: Request) {
    const { pathname } = new URL(request.url);
    const candidates = pathname.endsWith("/")
      ? [`${pathname}index.html`]
      : [pathname, `${pathname}/index.html`];

    for (const candidate of candidates) {
      const file = await serve(candidate);
      if (file) return new Response(file);
    }

    const notFound = await serve("404.html");

    return notFound
      ? new Response(notFound, { status: 404 })
      : new Response("Not found", { status: 404 });
  },
};
