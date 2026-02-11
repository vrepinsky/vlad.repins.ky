import { styled } from "goober";
import { Page } from "../core/Page";
import { Heading, Title } from "../core/Typography";
import { WishlistItem } from "../wishlist/WishlistItem";

export const Wishlist = () => {
  return (
    <Page>
      <Content>
        <TitleWrapper>
          <Title>Wishlist</Title>
        </TitleWrapper>
        <Section>
          <Heading>Clothes</Heading>
          <WishlistItem
            title="Shyne Hoodie"
            link="https://shyneteam.com/collections/shyne"
          />
          <WishlistItem
            title="STRAIGHT-LEG SWEATPANTS - HEATHER GREY"
            link="https://akimboclub.com/products/akimbo-straight-leg-sweatpants-heather-grey"
          />
          <WishlistItem
            title="Ich <3 betrunken E-roller Fahren"
            link="https://versagerclo.de/products/betrunken-e-roller-fahren-t-shirt"
          />
          <WishlistItem
            title="Original Muay Thai Shorts Silver"
            link="https://eu.yokkao.com/de/products/original-muay-thai-shorts-silver"
          />
          <WishlistItem
            title="England jacket Union Jack Plaid Zipup"
            link="https://shopjogabonito.com/products/union-jack-plaid-zipup"
          />
          <WishlistItem
            title="Collective Grappling Shorts"
            link="https://moribound.com/products/jiu-jitsu-collective-grappling-shorts"
          />
          <WishlistItem
            title="Куртки или кофты с сайта с формой"
            link="https://universal-surplus.com/products/ffa-newyork-jacket"
          />
        </Section>

        <Section>
          <Heading>House</Heading>
          <WishlistItem
            title="Vintage & Modern Lamp 01"
            link="https://kismas.com/collections/vintage-modern-lamp-01"
          />
        </Section>

        <Section>
          <Heading>Misc</Heading>
          <WishlistItem
            title="Mezcal Sacrificio Reposado"
            link="https://www.totalwine.com/spirits/mezcal/mezcal-sacrificio-reposado/p/141213750"
          />
          <WishlistItem
            title="Kinnie Zero"
            link="https://maltaladen.de/product/24-kinnie-zero-pet-softdrink/"
          />
          <WishlistItem
            title="Apfelweinkontor"
            link="https://www.apfelweinkontor.com/online-shop/"
          />
          <WishlistItem
            title="Apple iMac G4 Sunflower 17 inch"
            link="https://www.marktplaats.nl/v/computers-en-software/apple-desktops/m2363904367-apple-imac-g4-sunflower-17-inch-werkend-designklassieker"
          />
          <WishlistItem
            title="Drive DVD by NWR"
            link="https://bynwr.com/shop/drive-nordic-dvd"
          />
          <WishlistItem
            title="Vinyl groove of ESSR"
            link="https://vinylpladen.de/vinyl/various-artists/groove-of-essr-funk-disco-jazz-from-soviet-estonia-LP"
          />
          <WishlistItem title="Gotthard Base Tunnel Tour" />
          <WishlistItem
            title="Amber Eau de Parfum Soie Malaquais"
            link="https://www.driesvannoten.com/en-de/products/001-099009"
          />
        </Section>
      </Content>
    </Page>
  );
};

const Content = styled("div")`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const TitleWrapper = styled("div")`
  margin-bottom: 1rem;
`;

const Section = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
