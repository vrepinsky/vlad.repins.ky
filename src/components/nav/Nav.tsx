import { Link } from "wouter";
import { NavThemeToggle } from "@/components/nav/NavThemeToggle";
import { styled } from "goober";

export const Nav = () => {
  return (
    <NavBar>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cv">CV</NavLink>
        <NavLink to="/lab">Lab</NavLink>
      </NavLinks>
      <NavThemeToggle />
    </NavBar>
  );
}

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

const NavLink = styled(Link)`
  font-family: var(--font-inconsolata);
  font-size: ${(props) => props.theme.fontSizes.xl};
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.palette.text};
  padding-bottom: 0.2rem;
  text-decoration: none;
`;


