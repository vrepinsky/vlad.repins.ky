import { styled } from "goober";
import { SidebarThemeToggle } from "./SidebarThemeToggle";
import { EmojiButton } from "../core/EmojiButton";

export const SidebarControls = () => {
  return (
    <SidebarControlsContainer>
      <SidebarThemeToggle />
    </SidebarControlsContainer>
  );
};

const SidebarControlsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0 1rem;
`;
