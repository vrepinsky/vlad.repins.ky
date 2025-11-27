import { Link, useLocation } from "wouter";
import { NavThemeToggle } from "@/components/nav/NavThemeToggle";
import { styled } from "goober";

export const Nav = () => {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <NavBar>
      <NavLinks>
        <NavLink to="/" $active={isActive("/")}>
          Home
        </NavLink>
        <NavLink to="/cv" $active={isActive("/cv")}>
          CV
        </NavLink>
        <NavLink to="/lab" $active={isActive("/lab")}>
          Lab
        </NavLink>
        <NavLink to="/contact" $active={isActive("/contact")}>
          Contact
        </NavLink>
        <NavLink to="/about" $active={isActive("/about")}>
          About
        </NavLink>
      </NavLinks>
      <NavThemeToggle />
    </NavBar>
  );
};

const NavBar = styled("nav")`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: ${(props) => props.theme.palette.bg};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLinks = styled("div")`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  font-family: var(--font-inconsolata);
  font-size: ${(props) => props.theme.fontSizes.xl};
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.palette.text};
  padding-bottom: 0.2rem;
  text-decoration: none;
  border-bottom: ${(props) =>
    props.$active ? `2px solid ${props.theme.palette.text}` : "none"};
`;
