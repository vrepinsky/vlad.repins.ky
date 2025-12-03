import { styled } from "goober";

interface EmojiButtonProps {
  children: string;
  disabled?: boolean;
  onClick: () => void;
}

export const EmojiButton = ({
  children,
  disabled,
  onClick,
}: EmojiButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled("button")`
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.xl};

  &:hover:not(:disabled) {
    filter: blur(2px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;
