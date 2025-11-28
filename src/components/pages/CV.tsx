import { WORK_EXPERIENCE, EDUCATION } from "@/constants/cv.constant";
import { styled } from "goober";
import { Title } from "../core/Typography";
import { CVEntryList } from "../cv/CVEntryList";

export const CV = () => {
  return (
    <Page>
      <Section id="work-experience">
        <TitleWrapper>
          <Title>Work</Title>
        </TitleWrapper>
        <CVEntryList entries={WORK_EXPERIENCE} />
      </Section>

      <Section id="education">
        <TitleWrapper>
          <Title>Education</Title>
        </TitleWrapper>
        <CVEntryList entries={EDUCATION} />
      </Section>
    </Page>
  );
};

const Page = styled("div")`
  flex: 1;
  padding: 8rem clamp(1.5rem, 4vw, 6rem);
  background: ${(props) => props.theme.palette.bg};
  color: ${(props) => props.theme.palette.text};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
`;

const Section = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  scroll-margin-top: 8rem;
`;

const TitleWrapper = styled("div")`
  width: 100%;
  max-width: 600px;
  text-align: left;
  margin-bottom: 2rem;
`;
