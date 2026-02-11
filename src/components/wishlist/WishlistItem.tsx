import { styled } from "goober";
import { Link } from "../core/Link";
import { Body } from "../core/Typography";

interface WishlistItemProps {
  title: string;
  link?: string;
}

export const WishlistItem = ({ title, link }: WishlistItemProps) => {
  return (
    <Container>
      <Body>{title}</Body>
      {link && <Link url={link} />}
    </Container>
  );
};

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;
