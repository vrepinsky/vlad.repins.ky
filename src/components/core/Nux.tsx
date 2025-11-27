import { styled } from "goober";
import constructionImage from "../../../public/construction.jpg";

export const Nux = () => {
  return (
    <Page>
      <Title>Work in Progress</Title>
      <Image src={constructionImage} alt="Eiffel Tower under construction" />
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
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin-bottom: 1rem;
`;

const Image = styled("img")`
  max-width: 500px;
  height: auto;
`;
