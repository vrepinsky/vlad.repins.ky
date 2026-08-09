import { wishlistItem } from "@/components/wishlist-item";
import { WISHLIST_ITEMS } from "@/constants/wishlist.constant";
import { html } from "@/site/html";

export const wishlist = () => {
  // toSorted, not sort — the React version mutated the imported WISHLIST_ITEMS.
  const byPrice = WISHLIST_ITEMS.toSorted((a, b) => (a.price ?? 0) - (b.price ?? 0));

  return html`
    <div class="page">
      <div class="page__content page__content--wishlist">
        <div class="section__title"><h1 class="title">🤫 Wishlist</h1></div>
        <div class="wishlist">${byPrice.map(wishlistItem)}</div>
      </div>
    </div>
  `;
};
