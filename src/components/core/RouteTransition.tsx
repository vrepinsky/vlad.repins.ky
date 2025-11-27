import { styled } from "goober";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

interface RouteTransitionProps {
  children: React.ReactNode;
}

export const RouteTransition = ({ children }: RouteTransitionProps) => {
  const [location] = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<"fadeIn" | "fadeOut">(
    "fadeIn",
  );

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  return (
    <TransitionContainer
      $stage={transitionStage}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransitionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      {children}
    </TransitionContainer>
  );
};

const TransitionContainer = styled("div")<{ $stage: "fadeIn" | "fadeOut" }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.palette.bg};
  animation: ${(props) => (props.$stage === "fadeOut" ? "fadeOut" : "fadeIn")}
    0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`;
