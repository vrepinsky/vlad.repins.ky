import { styled } from "goober";
import { Title } from "../core/Typography";
import { Hero } from "../core/Hero";
import { WORK_EXPERIENCE, EDUCATION } from "@/constants/cv.constant";
import { CVEntryList } from "../cv/CVEntryList";

export const MobilePage = () => {
  return (
    <Page>
      <Content>
        <Section>
          <Hero />
        </Section>

        <Section>
          <TitleWrapper>
            <Title>Work</Title>
          </TitleWrapper>
          <CVEntryList entries={WORK_EXPERIENCE} />
        </Section>

        <Section>
          <TitleWrapper>
            <Title>Education</Title>
          </TitleWrapper>
          <CVEntryList entries={EDUCATION} />
        </Section>
      </Content>
    </Page>
  );
};

const Page = styled("div")`
  min-height: 100vh;
  padding: 6rem 3rem;
  background: ${(props) => props.theme.palette.bg};
  color: ${(props) => props.theme.palette.text};
  overflow-y: auto;
  display: flex;
  justify-content: center;
  position: relative;

  /* Fade effect at top only */
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    pointer-events: none;
    z-index: 10;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.palette.bg} 0%,
      transparent 100%
    );
  }
`;

const Content = styled("div")`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Section = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TitleWrapper = styled("div")`
  margin-bottom: 1rem;
`;
