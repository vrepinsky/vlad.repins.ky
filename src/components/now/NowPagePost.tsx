import { styled } from "goober";
import { useImageViewer } from "../../hooks/useImageViewer";
import type { NowPostLink } from "../../types/now.types";
import { Link } from "../core/Link";
import { Body, Heading, Subtitle } from "../core/Typography";

interface NowPagePostProps {
  title: string;
  date: string;
  content: string[];
  images?: string[];
  links?: NowPostLink[];
}

export const NowPagePost = ({
  title,
  date,
  content,
  images = [],
  links = [],
}: NowPagePostProps) => {
  const { openViewer } = useImageViewer();

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
              onClick={() => openViewer(images, index)}
            />
          ))}
        </ImagesContainer>
      )}

      {links?.length > 0 && (
        <LinksContainer>
          {links.map((link, index) => (
            <Link key={index} url={link.url} label={link.label} />
          ))}
        </LinksContainer>
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
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const LinksContainer = styled("div")`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;
