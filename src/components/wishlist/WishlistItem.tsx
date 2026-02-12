import { styled } from "goober";
import { Link } from "../core/Link";
import { Body } from "../core/Typography";

interface WishlistItemProps {
  title: string;
  link?: string;
  isMobile?: boolean;
}

export const WishlistItem = ({ title, link, isMobile }: WishlistItemProps) => {
  return (
    <Container $isMobile={isMobile}>
      <TitleCell $isMobile={isMobile}>
        <Body>{title}</Body>
      </TitleCell>
      {link && (
        <LinkCell>
          <Link url={link} />
        </LinkCell>
      )}
    </Container>
  );
};

const Container = styled("div")<{ $isMobile?: boolean }>`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: ${(props) => (props.$isMobile ? "column" : "row")};
  justify-content: space-between;
  align-items: ${(props) => (props.$isMobile ? "flex-start" : "center")};
  gap: ${(props) => (props.$isMobile ? "0.25rem" : "1rem")};
`;

const TitleCell = styled("div")<{ $isMobile?: boolean }>`
  min-width: 0;
  ${(props) => !props.$isMobile && "flex: 1;"}
  overflow-wrap: break-word;
  word-break: break-word;
`;

const LinkCell = styled("div")`
  min-width: 0;
  overflow-wrap: break-word;
  word-break: break-word;
`;
