import { styled } from "goober";
import { AboutBundleStats } from "../about/AboutBundleStats";
import { AboutDependencies } from "../about/AboutDependencies";
import { Link } from "../core/Link";
import { Page } from "../core/Page";
import { Body, Heading, Subtitle, Title } from "../core/Typography";

export const About = () => {
  return (
    <Page>
      <Content>
        <TitleWrapper>
          <Title>About This Site</Title>
        </TitleWrapper>

        <Section>
          <AboutBundleStats />
        </Section>

        <Section>
          <AboutDependencies />
        </Section>

        <Section>
          <Heading>Credits & Thanks</Heading>
          <Body>
            Karrik by Jean-Baptiste Morizot, Lucas Le Bihan. Distributed by{" "}
            <Link url="https://velvetyne.fr" />
          </Body>
        </Section>

        <Section>
          <Subtitle>
            Built and designed with ¯\(ツ)/¯ in Amsterdam Slotervaart © Vlad
            Repinskiy {new Date().getFullYear()}
          </Subtitle>
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
  gap: 1rem;
  text-align: left;
`;

const TitleWrapper = styled("div")`
  margin-bottom: 1rem;
`;

const Section = styled("section")`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
