import { useTheme } from "@/hooks/useTheme";
import { getImageInvertFilter } from "@/utils/theme.util";
import { styled } from "goober";
import constructionImage from "../../../public/construction.jpg";
import { Heading, Subtitle } from "./Typography";

export const Nux = () => {
  const theme = useTheme();
  const imageFilter = getImageInvertFilter(theme);

  return (
    <Container>
      <TitleWrapper>
        <Heading>The Page is Still Under Construction</Heading>
        <Subtitle>Check back in a bit. Rome was not built in a day.</Subtitle>
      </TitleWrapper>
      <Image
        src={constructionImage}
        alt="Eiffel Tower under construction"
        style={{ filter: imageFilter }}
      />
    </Container>
  );
};

const Container = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TitleWrapper = styled("div")`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Image = styled("img")`
  width: 100%;
  max-width: 600px;
  height: auto;
`;
