import { EdgeBlur } from "@/components/core/EdgeBlur";
import { RouteTransition } from "@/components/core/RouteTransition";
import { About } from "@/components/pages/About";
import { CV } from "@/components/pages/CV";
import { Home } from "@/components/pages/Home";
import { Lab } from "@/components/pages/Lab";
import { MobilePage } from "@/components/pages/MobilePage";
import { Now } from "@/components/pages/Now";
import { Wishlist } from "@/components/pages/Wishlist";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { useIsMobile } from "@/hooks/useIsMobile";
import { styled } from "goober";
import { Route, Router, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

const Routes = () => {
  const [location] = useLocation();

  return (
    <RouteTransition key={location}>
      <Route path="/" component={Home} />
      <Route path="/cv" component={CV} />
      <Route path="/now" component={Now} />
      <Route path="/lab" component={Lab} />
      <Route path="/about" component={About} />
      <Route path="/wishlist" component={Wishlist} />
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
  scrollbar-gutter: stable;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.palette.bg};
`;
