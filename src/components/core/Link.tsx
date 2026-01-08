import { styled } from "goober";

interface LinkProps {
  url: string;
  label?: string;
}
export const Link = ({ url, label }: LinkProps) => {
  return (
    <LinkWrapper href={url} target="_blank" rel="noopener noreferrer">
      <span>🔗</span> {label || url}
    </LinkWrapper>
  );
};

const LinkWrapper = styled("a")`
  width: fit-content;
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.palette.text};
  opacity: 0.7;
  transition:
    opacity 0.2s ease,
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
    transform: translateY(-0.1rem);
  }
`;
