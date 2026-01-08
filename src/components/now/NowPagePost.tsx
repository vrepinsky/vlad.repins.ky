import { styled } from "goober";
import { Body, Heading, Subtitle } from "../core/Typography";

interface NowPagePostProps {
  title: string;
  date: string;
  content: string[];
  images?: string[];
}

export const NowPagePost = ({
  title,
  date,
  content,
  images = [],
}: NowPagePostProps) => {
  return (
    <PostContainer>
      <PostHeader>
        <Heading>{title}</Heading>
        <Subtitle>{date}</Subtitle>
      </PostHeader>

      <PostContent>
        {content.map((paragraph, index) => (
          <Body key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </PostContent>

      {images?.length > 0 && (
        <ImagesContainer>
          {images.map((image, index) => (
            <PostImage
              key={index}
              src={image}
              alt={`${title} - Image ${index + 1}`}
            />
          ))}
        </ImagesContainer>
      )}
    </PostContainer>
  );
};

const PostContainer = styled("article")`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const PostHeader = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const PostContent = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ImagesContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
`;

const PostImage = styled("img")`
  flex: 1 1 calc(33.333% - 7px);
  min-width: 0;
  height: auto;
`;
