export interface WishlistItemData {
  title: string;
  link?: string;
  price?: number;
}

export interface WishlistSection {
  heading: string;
  items: WishlistItemData[];
}
