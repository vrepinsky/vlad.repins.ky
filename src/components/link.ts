import { html } from "@/site/html";

export const link = (url: string, label?: string, showIcon = false) =>
  html`<a class="link" href="${url}" target="_blank" rel="noopener noreferrer"
    >${showIcon && "🔗 "}${label || url}</a
  >`;
