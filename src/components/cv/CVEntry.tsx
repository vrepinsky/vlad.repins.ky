import type { CVEntry } from "@/types/cv.types";
import { styled } from "goober";
import { Link } from "../core/Link";
import { CVEntryStack } from "./CvEntryStack";

export const CvEntry = ({ entry }: { entry: CVEntry }) => {
  return (
    <Container>
      <Heading>
        {entry.title}, {entry.company}
      </Heading>
      <Subtitle>
        {entry.startDate} - {entry.endDate} • {entry.location}
      </Subtitle>
      {entry.description.map((paragraph, index) => (
        <Body key={index}>{paragraph}</Body>
      ))}
      {entry.link && <Link url={entry.link} />}
      <CVEntryStack stack={entry.technologies} />
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: ${(props) => props.theme.palette.bg};
  border-radius: 8px;
  width: 100%;
  text-align: left;
`;

const Heading = styled("h3")`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 600;
  color: ${(props) => props.theme.palette.text};
`;

const Subtitle = styled("p")`
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.palette.text};
  opacity: 0.7;
`;

const Body = styled("p")`
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: 1.6;
  color: ${(props) => props.theme.palette.text};
`;
