import { styled } from "goober";
import { SidebarThemeToggle } from "@/components/sidebar/SidebarThemeToggle";
import { SidebarNavigation } from "@/components/sidebar/SidebarNavigation";
import { SidebarLinks } from "@/components/sidebar/SidebarLinks";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <TopSection>
        <SidebarNavigation />
        <SidebarLinks />
        <SidebarThemeToggle />
      </TopSection>
    </SidebarContainer>
  );
};

const SidebarContainer = styled("nav")`
  width: 260px;
  height: 100vh;
  padding: 8rem 0 0 8rem;
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
