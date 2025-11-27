import { styled } from "goober";
import type { ReactNode } from "react";
import { useState } from "react";

interface CollapsibleProps {
  label: string;
  children: ReactNode;
  defaultExpanded?: boolean;
}

export const Collapsible = ({
  label,
  children,
  defaultExpanded = false,
}: CollapsibleProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Wrapper>
      <Toggle onClick={() => setIsExpanded(!isExpanded)}>
        <span>{label}</span>
        <Triangle $expanded={isExpanded}>▶</Triangle>
      </Toggle>
      <Content $expanded={isExpanded}>
        <ContentInner>{children}</ContentInner>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

const Toggle = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.palette.text};
  opacity: 0.8;
  margin-bottom: 0.5rem;
  user-select: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const Triangle = styled("span")<{ $expanded: boolean }>`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: rotate(${(props) => (props.$expanded ? "90deg" : "0deg")});
  transform-origin: center;
`;

const Content = styled("div")<{ $expanded: boolean }>`
  overflow: hidden;
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
  max-height: ${(props) => (props.$expanded ? "1000px" : "0")};
  opacity: ${(props) => (props.$expanded ? "1" : "0")};
`;

const ContentInner = styled("div")`
  padding-top: 0.5rem;
`;
