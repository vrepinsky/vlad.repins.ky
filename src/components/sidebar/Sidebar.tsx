import { Link, useLocation } from "wouter";
import { SidebarThemeToggle } from "@/components/sidebar/SidebarThemeToggle";
import { styled } from "goober";

export const Sidebar = () => {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <SidebarContainer>
      <TopSection>
        <NavSection>
          <SectionTitle>Click Around</SectionTitle>
          <SidebarLinks>
            <SidebarLink to="/" $active={isActive("/")}>
              Home
            </SidebarLink>
            <SidebarLink to="/cv" $active={isActive("/cv")}>
              CV
            </SidebarLink>
            <SidebarLink to="/lab" $active={isActive("/lab")}>
              Lab
            </SidebarLink>
            <SidebarLink to="/about" $active={isActive("/about")}>
              About
            </SidebarLink>
          </SidebarLinks>
        </NavSection>
        <SocialSection>
          <SectionTitle>Keep in Touch</SectionTitle>
          <SocialLinks>
            <SocialLink
              href="https://github.com/vladrepinskiy"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/vladrepinsky/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </SocialLink>
            <SocialLink href="mailto:vladrepinsky@gmail.com">Email</SocialLink>
          </SocialLinks>
        </SocialSection>
      </TopSection>
      <ThemeToggleWrapper>
        <SidebarThemeToggle />
      </ThemeToggleWrapper>
    </SidebarContainer>
  );
};

const SidebarContainer = styled("nav")`
  width: 260px;
  height: 100vh;
  padding: 5rem 0 0 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.palette.bg};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TopSection = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const NavSection = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SocialSection = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SectionTitle = styled("h3")`
  font-family: var(--font-inconsolata);
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 400;
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.palette.textMuted};
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;

const SidebarLinks = styled("div")`
  display: flex;
  flex-direction: column;
`;

const SidebarLink = styled(Link)<{ $active: boolean }>`
  font-family: var(--font-inconsolata);
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${(props) =>
    props.$active ? props.theme.palette.text : props.theme.palette.textMuted};
  padding: 0.1rem 0;
  text-decoration: none;
  transform: ${(props) =>
    props.$active ? "translateX(10px)" : "translateX(0)"};
  transition:
    transform 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateX(10px);
    color: ${(props) => props.theme.palette.text};
  }
`;

const SocialLinks = styled("div")`
  display: flex;
  flex-direction: column;
`;

const SocialLink = styled("a")`
  font-family: var(--font-inconsolata);
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.palette.textMuted};
  padding: 0.1rem 0;
  text-decoration: none;
  transform: translateX(0);
  transition:
    transform 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateX(10px);
    color: ${(props) => props.theme.palette.text};
  }
`;

const ThemeToggleWrapper = styled("div")`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;
