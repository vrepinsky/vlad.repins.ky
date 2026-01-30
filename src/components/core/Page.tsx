import { styled } from "goober";
import type { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return <PageContainer>{children}</PageContainer>;
};

const PageContainer = styled("div")`
  flex: 1;
  padding-top: 15vh;
  padding-bottom: 15vh;
  padding-left: 10vh;
  padding-right: 10vh;
  background: ${(props) => props.theme.palette.bg};
  color: ${(props) => props.theme.palette.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
`;
