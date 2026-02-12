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
          <Title>Wishlist</Title>
        </TitleWrapper>
        <Section>
          <Heading>Clothes</Heading>
          <WishlistItem
            title="Shyne Hoodie"
            link="https://shyneteam.com/collections/shyne"
            isMobile={isMobile}
          />
          <WishlistItem
            title="STRAIGHT-LEG SWEATPANTS - HEATHER GREY"
            link="https://akimboclub.com/products/akimbo-straight-leg-sweatpants-heather-grey"
            isMobile={isMobile}
          />
          <WishlistItem
            title="Ich <3 betrunken E-roller Fahren"
            link="https://versagerclo.de/products/betrunken-e-roller-fahren-t-shirt"
            isMobile={isMobile}
          />
          <WishlistItem
            title="Original Muay Thai Shorts Silver"
            link="https://eu.yokkao.com/de/products/original-muay-thai-shorts-silver"
            isMobile={isMobile}
          />
          <WishlistItem
            title="England jacket Union Jack Plaid Zipup"
            link="https://shopjogabonito.com/products/union-jack-plaid-zipup"
            isMobile={isMobile}
          />
          <WishlistItem
            title="Collective Grappling Shorts"
            link="https://moribound.com/products/jiu-jitsu-collective-grappling-shorts"
            isMobile={isMobile}
          />
          <WishlistItem
            title="Куртки или кофты с сайта с формой"
            link="https://universal-surplus.com/products/ffa-newyork-jacket"
            isMobile={isMobile}
          />
        </Section>

        <Section>
          <Heading>House</Heading>
          <WishlistItem
            title="Vintage & Modern Lamp 01"
            link="https://kismas.com/collections/vintage-modern-lamp-01"
            isMobile={isMobile}
          />
        </Section>

        <Section>
          <Heading>Misc</Heading>
          <WishlistItem
            title="Mezcal Sacrificio Reposado"
            link="https://www.totalwine.com/spirits/mezcal/mezcal-sacrificio-reposado/p/141213750"
            isMobile={isMobile}
          />
          <WishlistItem
            title="Kinnie Zero"
            link="https://maltaladen.de/product/24-kinnie-zero-pet-softdrink/"
            isMobile={isMobile}
          />
          <WishlistItem
            title="Apfelweinkontor"
            link="https://www.apfelweinkontor.com/online-shop/"
            isMobile={isMobile}
          />
          <WishlistItem
            title="Apple iMac G4 Sunflower 17 inch"
            link="https://www.marktplaats.nl/v/computers-en-software/apple-desktops/m2363904367-apple-imac-g4-sunflower-17-inch-werkend-designklassieker"
            isMobile={isMobile}
          />
          <WishlistItem
            title="Drive DVD by NWR"
            link="https://bynwr.com/shop/drive-nordic-dvd"
            isMobile={isMobile}
          />
          <WishlistItem
            title="Vinyl groove of ESSR"
            link="https://vinylpladen.de/vinyl/various-artists/groove-of-essr-funk-disco-jazz-from-soviet-estonia-LP"
            isMobile={isMobile}
          />
          <WishlistItem title="Gotthard Base Tunnel Tour" isMobile={isMobile} />
          <WishlistItem
            title="Amber Eau de Parfum Soie Malaquais"
            link="https://www.driesvannoten.com/en-de/products/001-099009"
            isMobile={isMobile}
          />
        </Section>
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

const Section = styled("div")`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
