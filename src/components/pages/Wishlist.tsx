import { WISHLIST_SECTIONS } from "@/constants/wishlist.constant";
import { useIsMobile } from "@/hooks/useIsMobile";
import { styled } from "goober";
import { Page } from "../core/Page";
import { Heading, Title } from "../core/Typography";
import { WishlistItem } from "../wishlist/WishlistItem";

export const Wishlist = () => {
  const isMobile = useIsMobile();

  return (
    <Page>
      <Content $isMobile={isMobile}>
        <TitleWrapper>
          <Title>🤫 Wishlist</Title>
        </TitleWrapper>
        {WISHLIST_SECTIONS.map((section) => (
          <Section key={section.heading}>
            <HeadingWrapper>
              <Heading>{section.heading}</Heading>
            </HeadingWrapper>
            {section.items.map((item) => (
              <WishlistItem
                key={item.title}
                title={item.title}
                link={item.link}
                price={item.price}
              />
            ))}
          </Section>
        ))}
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

const HeadingWrapper = styled("div")`
  margin-bottom: 1rem;
`;

const Section = styled("div")`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
