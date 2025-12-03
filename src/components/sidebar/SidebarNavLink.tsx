import { Link } from "wouter";
import { styled } from "goober";

interface SidebarNavLinkProps {
  label: string;
  path: string;
  isActive: boolean;
  onClick: () => void;
}

export const SidebarNavLink = ({
  label,
  path,
  isActive,
  onClick,
}: SidebarNavLinkProps) => {
  return (
    <LinkContainer $active={isActive}>
      <StyledLink to={path} onClick={onClick}>
        {label}
      </StyledLink>
    </LinkContainer>
  );
};

const LinkContainer = styled("div")<{ $active: boolean }>`
  --link-color: ${(props) =>
    props.$active ? props.theme.palette.text : props.theme.palette.textMuted};
  transform: ${(props) =>
    props.$active ? "translateX(5px)" : "translateX(0)"};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
    --link-color: ${(props) => props.theme.palette.text};
  }
`;

const StyledLink = styled(Link)`
  font-family: var(--font-inconsolata);
  font-size: ${(props) => props.theme.fontSizes.md};
  letter-spacing: 0.08em;
  color: var(--link-color);
  padding: 0.1rem 0;
  text-decoration: none;
  display: block;
  transition: color 0.2s ease;
`;
