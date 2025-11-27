import { useTheme } from "@/hooks/useTheme";
import { useToggleTheme } from "@/hooks/useToggleTheme";
import { styled } from "goober";

export const SidebarThemeToggle = () => {
  const toggleTheme = useToggleTheme();
  const theme = useTheme();

  return (
    <SidebarThemeToggleButton onClick={toggleTheme}>
      {theme.icon}
    </SidebarThemeToggleButton>
  );
};

const SidebarThemeToggleButton = styled("button")`
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.xl};

  &:hover {
    filter: blur(2px);
  }
`;
