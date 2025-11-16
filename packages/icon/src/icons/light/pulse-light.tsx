import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PulseLight = memo(function PulseLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M238,128a6,6,0,0,1-6,6H203.71l-38.34,76.68A6,6,0,0,1,160,214h-.3a6,6,0,0,1-5.31-3.85L95.51,55.57,61.46,130.48A6,6,0,0,1,56,134H24a6,6,0,0,1,0-12H52.14l38.4-84.48a6,6,0,0,1,11.07.34L160.74,193.1l33.89-67.78A6,6,0,0,1,200,122h32A6,6,0,0,1,238,128Z" />
    </Svg>
  );
});
