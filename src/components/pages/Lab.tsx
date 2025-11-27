import { Nux } from "@/components/core/Nux";
import { styled } from "goober";

export const Lab = () => {
  return (
    <Page>
      <Nux />
    </Page>
  );
};

const Page = styled("div")`
  flex: 1;
  padding: 4rem clamp(1.5rem, 4vw, 6rem) 0;
  background: ${(props) => props.theme.palette.bg};
  color: ${(props) => props.theme.palette.text};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
