import { styled } from "goober";
import { Route, Router } from "wouter";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Home } from "@/components/pages/Home";
import { CV } from "@/components/pages/CV";
import { Lab } from "@/components/pages/Lab";
import { About } from "../pages/About";

export const App = () => {
  return (
    <Router>
      <AppContainer>
        <Sidebar />
        <ContentArea>
          <Route path="/" component={Home} />
          <Route path="/cv" component={CV} />
          <Route path="/lab" component={Lab} />
          <Route path="/about" component={About} />
        </ContentArea>
      </AppContainer>
    </Router>
  );
};

const AppContainer = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const ContentArea = styled("div")`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  position: relative;
  margin-left: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    margin-left: 0;
  }

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 260px;
    right: 0;
    height: 100px;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.palette.bg} 0%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 10;

    @media (max-width: 768px) {
      left: 0;
    }
  }

  &::after {
    content: "";
    position: fixed;
    bottom: 0;
    left: 260px;
    right: 0;
    height: 100px;
    background: linear-gradient(
      to top,
      ${(props) => props.theme.palette.bg} 0%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 10;

    @media (max-width: 768px) {
      left: 0;
    }
  }
`;
