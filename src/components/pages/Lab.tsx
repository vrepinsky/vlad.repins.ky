import { Nux } from "@/components/nux/Nux";
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
  padding: 4rem clamp(1.5rem, 4vw, 6rem);
  background: ${(props) => props.theme.palette.bg};
  color: ${(props) => props.theme.palette.text};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
