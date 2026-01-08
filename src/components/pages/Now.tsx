import { NOW_POSTS } from "../../constants/now.constant";
import { styled } from "goober";
import { Link } from "../core/Link";
import { Page } from "../core/Page";
import { Body, Title } from "../core/Typography";
import { NowPagePost } from "../now/NowPagePost";

export const Now = () => {
  return (
    <Page>
      <Content>
        <TitleWrapper>
          <Title>Now</Title>
        </TitleWrapper>
        <Body>
          A now page is a page on a personal website that tells you what a
          person is focused on at the current time, day, or very recently.
          Ephemeral story posts are often about what someone is doing now{" "}
          <Link
            url="https://nownownow.com/about"
            label="About the Now Page Movement"
          />
        </Body>

        <PostsSection>
          {NOW_POSTS.map((post, index) => (
            <NowPagePost
              key={index}
              title={post.title}
              date={post.date}
              content={post.content}
              images={post.images}
              links={post.links}
            />
          ))}
        </PostsSection>
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

const PostsSection = styled("div")`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
`;
