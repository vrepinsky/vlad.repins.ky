import { styled } from "goober";

export const Home = () => {
  return (
    <Page>
      <Title>Building thoughtful web experiences.</Title>
      <Lead>
        This project uses Bun for bundling and goober for lightweight CSS-in-JS, so styles stay
        close to the components they affect.
      </Lead>
    </Page>
  );
};

const Page = styled("div")`
  flex: 1;
  padding: 4rem clamp(1.5rem, 4vw, 6rem);
  background: ${(props) => props.theme.palette.bg};
  color: ${(props) => props.theme.palette.text};
  overflow-y: auto;
`;

const Title = styled("h1")`
  font-size: clamp(2.5rem, 4vw, 4rem);
  margin-bottom: 1rem;
`;

const Lead = styled("p")`
  font-size: 1.2rem;
  max-width: 42ch;
  line-height: 1.6;
  color: ${(props) => props.theme.palette.text};
  opacity: 0.85;
`;

