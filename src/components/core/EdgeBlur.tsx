import { styled } from "goober";

interface EdgeBlurProps {
  direction: "top" | "bottom";
  height?: number;
}

export const EdgeBlur = ({ direction, height = 100 }: EdgeBlurProps) => {
  // Blur values progression
  const blurLayers = [
    {
      blur: 0.1953125,
      maskStart: 0,
      maskPeak1: 12.5,
      maskPeak2: 25,
      maskEnd: 37.5,
    },
    {
      blur: 0.390625,
      maskStart: 12.5,
      maskPeak1: 25,
      maskPeak2: 37.5,
      maskEnd: 50,
    },
    {
      blur: 0.78125,
      maskStart: 25,
      maskPeak1: 37.5,
      maskPeak2: 50,
      maskEnd: 62.5,
    },
    {
      blur: 1.5625,
      maskStart: 37.5,
      maskPeak1: 50,
      maskPeak2: 62.5,
      maskEnd: 75,
    },
    {
      blur: 3.125,
      maskStart: 50,
      maskPeak1: 62.5,
      maskPeak2: 75,
      maskEnd: 87.5,
    },
    {
      blur: 6.25,
      maskStart: 62.5,
      maskPeak1: 75,
      maskPeak2: 87.5,
      maskEnd: 100,
    },
    {
      blur: 12.5,
      maskStart: 75,
      maskPeak1: 87.5,
      maskPeak2: 100,
      maskEnd: 112.5,
    },
    {
      blur: 25,
      maskStart: 87.5,
      maskPeak1: 100,
      maskPeak2: 112.5,
      maskEnd: 125,
    },
  ];

  const gradientDirection = direction === "top" ? "to top" : "to bottom";

  return (
    <BlurContainer $direction={direction} $height={height}>
      {blurLayers.map((layer, index) => (
        <BlurLayer
          key={index}
          $blur={layer.blur}
          $gradientDirection={gradientDirection}
          $maskStart={layer.maskStart}
          $maskPeak1={layer.maskPeak1}
          $maskPeak2={layer.maskPeak2}
          $maskEnd={layer.maskEnd}
          $zIndex={index + 1}
        />
      ))}
    </BlurContainer>
  );
};

const BlurContainer = styled("div")<{
  $direction: "top" | "bottom";
  $height: number;
}>`
  position: fixed;
  ${(props) => (props.$direction === "top" ? "top: 0;" : "bottom: 0;")}
  left: 260px;
  right: 15px;
  height: ${(props) => props.$height}px;
  pointer-events: none;
  z-index: 10;

  @media (max-width: 640px) {
    left: 0;
  }
`;

const BlurLayer = styled("div")<{
  $blur: number;
  $gradientDirection: string;
  $maskStart: number;
  $maskPeak1: number;
  $maskPeak2: number;
  $maskEnd: number;
  $zIndex: number;
}>`
  position: absolute;
  inset: 0;
  z-index: ${(props) => props.$zIndex};
  pointer-events: none;
  backdrop-filter: blur(${(props) => props.$blur}px);
  -webkit-backdrop-filter: blur(${(props) => props.$blur}px);
  mask-image: linear-gradient(
    ${(props) => props.$gradientDirection},
    rgba(0, 0, 0, 0) ${(props) => props.$maskStart}%,
    rgba(0, 0, 0, 1) ${(props) => props.$maskPeak1}%,
    rgba(0, 0, 0, 1) ${(props) => props.$maskPeak2}%,
    rgba(0, 0, 0, 0) ${(props) => props.$maskEnd}%
  );
  -webkit-mask-image: linear-gradient(
    ${(props) => props.$gradientDirection},
    rgba(0, 0, 0, 0) ${(props) => props.$maskStart}%,
    rgba(0, 0, 0, 1) ${(props) => props.$maskPeak1}%,
    rgba(0, 0, 0, 1) ${(props) => props.$maskPeak2}%,
    rgba(0, 0, 0, 0) ${(props) => props.$maskEnd}%
  );
`;
