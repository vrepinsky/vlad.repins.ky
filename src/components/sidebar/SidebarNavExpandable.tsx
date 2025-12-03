import { styled } from "goober";

interface Child {
  label: string;
  hash: string;
}

interface SidebarNavExpandableProps {
  label: string;
  isActive: boolean;
  isExpanded: boolean;
  children: Child[];
  onParentClick: () => void;
  onChildClick: (hash: string) => void;
}

export const SidebarNavExpandable = ({
  label,
  isActive,
  isExpanded,
  children,
  onParentClick,
  onChildClick,
}: SidebarNavExpandableProps) => {
  return (
    <>
      <ParentLink onClick={onParentClick} $active={isActive}>
        {label}
      </ParentLink>
      <ChildrenContainer $expanded={isExpanded}>
        <ChildrenInner>
          {children.map((child) => (
            <ChildLink
              key={child.hash}
              onClick={() => onChildClick(child.hash)}
            >
              {child.label}
            </ChildLink>
          ))}
        </ChildrenInner>
      </ChildrenContainer>
    </>
  );
};

const ParentLink = styled("div")<{ $active: boolean }>`
  font-family: var(--font-inconsolata);
  font-size: ${(props) => props.theme.fontSizes.md};
  letter-spacing: 0.08em;
  color: ${(props) =>
    props.$active ? props.theme.palette.text : props.theme.palette.textMuted};
  padding: 0.1rem 0;
  cursor: pointer;
  transform: ${(props) =>
    props.$active ? "translateX(5px)" : "translateX(0)"};
  transition:
    transform 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateX(5px);
    color: ${(props) => props.theme.palette.text};
  }
`;

const ChildrenContainer = styled("div")<{ $expanded: boolean }>`
  display: grid;
  grid-template-rows: ${(props) => (props.$expanded ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
`;

const ChildrenInner = styled("div")`
  min-height: 0;
  padding-left: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ChildLink = styled("div")`
  font-family: var(--font-inconsolata);
  font-size: ${(props) => props.theme.fontSizes.md};
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.palette.textMuted};
  padding: 0.1rem 0;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateX(5px);
    color: ${(props) => props.theme.palette.text};
  }
`;
