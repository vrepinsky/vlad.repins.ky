import { link } from "@/components/link";
import { WISHLIST_CATEGORIES } from "@/constants/wishlist.constant";
import { html } from "@/site/html";
import type { WishlistCategory } from "@/types/wishlist.types";

const CATEGORY_ICONS: Record<string, string> = {
  [WISHLIST_CATEGORIES.BOOK]: "📔",
  [WISHLIST_CATEGORIES.MUSIC]: "💿",
  [WISHLIST_CATEGORIES.CLOTHES]: "👔",
  [WISHLIST_CATEGORIES.TECH]: "🖥️",
  [WISHLIST_CATEGORIES.HOUSEHOLD]: "🛖",
  [WISHLIST_CATEGORIES.DRINK]: "🍸",
  [WISHLIST_CATEGORIES.RARITIES]: "✨",
};

const priceFormatter = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

type Item = {
  title: string;
  link?: string;
  price?: number;
  category?: WishlistCategory;
};

export const wishlistItem = (item: Item) => {
  const label = `${CATEGORY_ICONS[item.category ?? ""] ?? "👀"} ${item.title}`;

  return html`
    <div class="wishlist-item">
      <div class="wishlist-item__label">
        ${item.link ? link(item.link, label) : html`<p class="body">${label}</p>`}
      </div>
      <span class="wishlist-item__price">
        ${item.price != null ? priceFormatter.format(item.price) : "?"}
      </span>
    </div>
  `;
};
