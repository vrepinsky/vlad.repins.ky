import { styled } from "goober";
import { Page } from "../core/Page";
import { Title } from "../core/Typography";

export const Now = () => {
  return (
    <Page>
      <Content>
        <TitleWrapper>
          <Title>Now</Title>
        </TitleWrapper>
      </Content>
    </Page>
  );
};

const Content = styled("div")`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
`;

const TitleWrapper = styled("div")`
  margin-bottom: 1rem;
`;
