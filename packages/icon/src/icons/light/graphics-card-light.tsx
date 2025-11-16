import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GraphicsCardLight = memo(function GraphicsCardLight(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,50H16a6,6,0,0,0-6,6V208a6,6,0,0,0,12,0V190H42v18a6,6,0,0,0,12,0V190H74v18a6,6,0,0,0,12,0V190h20v18a6,6,0,0,0,12,0V190H232a14,14,0,0,0,14-14V64A14,14,0,0,0,232,50Zm2,126a2,2,0,0,1-2,2H22V62H232a2,2,0,0,1,2,2ZM176,82a38,38,0,1,0,38,38A38,38,0,0,0,176,82Zm26,38a25.81,25.81,0,0,1-3.88,13.64L162.36,97.88A26,26,0,0,1,202,120Zm-52,0a25.81,25.81,0,0,1,3.88-13.64l35.76,35.76A26,26,0,0,1,150,120ZM80,82a38,38,0,1,0,38,38A38,38,0,0,0,80,82Zm26,38a25.81,25.81,0,0,1-3.88,13.64L66.36,97.88A26,26,0,0,1,106,120Zm-52,0a25.81,25.81,0,0,1,3.88-13.64l35.76,35.76A26,26,0,0,1,54,120Z" />
    </Svg>
  );
});
