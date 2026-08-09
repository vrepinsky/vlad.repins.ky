import type { WISHLIST_CATEGORIES } from "@/constants/wishlist.constant";

export interface WishlistItemData {
  title: string;
  link?: string;
  price?: number;
  category?: string;
}

export interface WishlistSection {
  heading: string;
  items: WishlistItemData[];
}

export type WishlistCategory = (typeof WISHLIST_CATEGORIES)[keyof typeof WISHLIST_CATEGORIES];
