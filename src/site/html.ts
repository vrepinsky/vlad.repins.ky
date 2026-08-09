const RAW = Symbol("raw");

export type Raw = { readonly [RAW]: string };

export type Renderable = Raw | string | number | null | undefined | false | Renderable[];

export const raw = (value: string): Raw => ({ [RAW]: value });

export const isRaw = (value: unknown): value is Raw =>
  typeof value === "object" && value !== null && RAW in value;

export const toHtml = (value: Raw): string => value[RAW];

const ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export const escape = (value: string): string =>
  value.replace(/[&<>"']/g, (char) => ESCAPES[char]!);

const stringify = (value: Renderable): string => {
  if (value === null || value === undefined || value === false) return "";
  if (isRaw(value)) return value[RAW];
  if (Array.isArray(value)) return value.map(stringify).join("");
  if (typeof value === "number") return String(value);

  return escape(value);
};

// Auto-escaping template tag. Nest `html` / use `raw()` to skip escaping.
export const html = (strings: TemplateStringsArray, ...values: Renderable[]): Raw => {
  let out = strings[0]!;

  for (let i = 0; i < values.length; i++) {
    out += stringify(values[i]) + strings[i + 1]!;
  }

  return raw(out);
};
