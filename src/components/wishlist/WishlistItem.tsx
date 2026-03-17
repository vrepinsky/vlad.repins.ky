import type { WishlistCategory } from "@/types/wishlist.types";
import { styled } from "goober";
import { Link } from "../core/Link";
import { Body } from "../core/Typography";
import { WISHLIST_CATEGORIES } from "@/constants/wishlist.constant";

interface WishlistItemProps {
  title: string;
  link?: string;
  price?: number;
  category?: WishlistCategory;
}

export const WishlistItem = ({
  title,
  link,
  price,
  category,
}: WishlistItemProps) => {
  const formatPrice = (value: number) =>
    new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  const getCategoryIcon = (category: WishlistCategory) => {
    switch (category) {
      case WISHLIST_CATEGORIES.BOOK:
        return "📔";
      case WISHLIST_CATEGORIES.MUSIC:
        return "💿";
      case WISHLIST_CATEGORIES.CLOTHES:
        return "👔";
      case WISHLIST_CATEGORIES.TECH:
        return "🖥️";
      case WISHLIST_CATEGORIES.HOUSEHOLD:
        return "🛖";
      case WISHLIST_CATEGORIES.DRINK:
        return "🍸";
      case WISHLIST_CATEGORIES.RARITIES:
        return "✨";
      default:
        return "👀";
    }
  };

  const getCategoryLabel = (category: WishlistCategory, title: string) => {
    return getCategoryIcon(category) + " " + title;
  };

  return (
    <Container>
      <LeftCell>
        {link ? (
          <Link url={link} label={getCategoryLabel(category ?? "", title)} />
        ) : (
          <Body>{getCategoryLabel(category ?? "", title)}</Body>
        )}
      </LeftCell>
      <PriceCell>
        <Price>{price != null ? formatPrice(price) : "?"}</Price>
      </PriceCell>
    </Container>
  );
};

const Container = styled("div")`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
`;

const LeftCell = styled("div")`
  min-width: 0;
  flex: 1;
  overflow-wrap: break-word;
  word-break: break-word;
`;

const PriceCell = styled("div")`
  flex-shrink: 0;
`;

const Price = styled("span")`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.palette.textMuted};
  white-space: nowrap;
`;
