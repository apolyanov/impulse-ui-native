import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GenderNeuterFill = memo(function GenderNeuterFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M167.84,108.35a40,40,0,1,1-36.19-36.19A40,40,0,0,1,167.84,108.35ZM216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Zm-32,72a56,56,0,1,0-64,55.42v32.31a8.18,8.18,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V167.42A56.09,56.09,0,0,0,184,112Z" />
    </Svg>
  );
});
