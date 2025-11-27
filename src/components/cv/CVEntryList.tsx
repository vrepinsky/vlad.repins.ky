import { CvEntry } from "@/components/cv/CVEntry";
import type { CVEntry } from "@/types/cv.types";
import { styled } from "goober";

export const CVEntryList = ({ entries }: { entries: CVEntry[] }) => {
  return (
    <ListContainer>
      {entries.map((entry, index) => (
        <EntryWrapper key={entry.company + entry.title}>
          <CvEntry entry={entry} />
        </EntryWrapper>
      ))}
    </ListContainer>
  );
};

const ListContainer = styled("div")`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EntryWrapper = styled("div")`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin-bottom: 4rem;
`;
