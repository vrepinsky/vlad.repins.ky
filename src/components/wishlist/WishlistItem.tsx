import { styled } from "goober";
import { Link } from "../core/Link";
import { Body } from "../core/Typography";

interface WishlistItemProps {
  title: string;
  link?: string;
  price?: number;
}

export const WishlistItem = ({ title, link, price }: WishlistItemProps) => {
  const formatPrice = (value: number) =>
    new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <Container>
      <LeftCell>
        {link ? <Link url={link} label={title} /> : <Body>{title}</Body>}
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
