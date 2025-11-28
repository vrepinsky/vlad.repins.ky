import { EdgeBlur } from "@/components/core/EdgeBlur";
import { RouteTransition } from "@/components/core/RouteTransition";
import { CV } from "@/components/pages/CV";
import { Home } from "@/components/pages/Home";
import { Lab } from "@/components/pages/Lab";
import { MobilePage } from "@/components/pages/MobilePage";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { useIsMobile } from "@/hooks/useIsMobile";
import { styled } from "goober";
import { Route, Router, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { About } from "../pages/About";

const Routes = () => {
  const [location] = useLocation();

  return (
    <RouteTransition key={location}>
      <Route path="/" component={Home} />
      <Route path="/cv" component={CV} />
      <Route path="/lab" component={Lab} />
      <Route path="/about" component={About} />
    </RouteTransition>
  );
};

export const App = () => {
  const isMobile = useIsMobile();

  return (
    <Router hook={useHashLocation}>
      <AppContainer>
        {isMobile && (
          <>
            <MobilePage />
            <EdgeBlur direction="bottom" height={50} />
          </>
        )}
        {!isMobile && (
          <>
            <EdgeBlur direction="top" />
            <Sidebar />
            <ContentArea>
              <Routes />
            </ContentArea>
            <EdgeBlur direction="bottom" />
          </>
        )}
      </AppContainer>
    </Router>
  );
};

const AppContainer = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background: ${(props) => props.theme.palette.bg};
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
  background: ${(props) => props.theme.palette.bg};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
