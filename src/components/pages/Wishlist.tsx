import { WISHLIST_ITEMS } from "@/constants/wishlist.constant";
import { useIsMobile } from "@/hooks/useIsMobile";
import { styled } from "goober";
import { Page } from "../core/Page";
import { Title } from "../core/Typography";
import { WishlistItem } from "../wishlist/WishlistItem";

export const Wishlist = () => {
  const isMobile = useIsMobile();

  const wishlistItemsSortedByPrice = WISHLIST_ITEMS.sort((a, b) => {
    return (a.price ?? 0) - (b.price ?? 0);
  });

  return (
    <Page>
      <Content $isMobile={isMobile}>
        <TitleWrapper>
          <Title>🤫 Wishlist</Title>
        </TitleWrapper>
        <WishlistItemList>
          {wishlistItemsSortedByPrice.map((item) => (
            <WishlistItem
              key={item.title}
              title={item.title}
              link={item.link}
              price={item.price}
              category={item.category}
            />
          ))}
        </WishlistItemList>
      </Content>
    </Page>
  );
};

const Content = styled("div")<{ $isMobile?: boolean }>`
  width: 100%;
  min-width: 0;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$isMobile ? "2.5rem" : "4rem")};
`;

const TitleWrapper = styled("div")`
  margin-bottom: 1rem;
`;

const WishlistItemList = styled("div")`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
