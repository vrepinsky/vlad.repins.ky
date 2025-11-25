import { styled } from "goober";

export const Nux = () => {
  return (
    <Page>
      <Title>This Page is Under Construction 🚧</Title>
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

const Title = styled("h1")`
  font-size: clamp(2.5rem, 4vw, 4rem);
  margin-bottom: 1rem;
`;
