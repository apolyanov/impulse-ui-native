import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowLineDownBold = memo(function ArrowLineDownBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M47.51,112.49a12,12,0,0,1,17-17L116,147V32a12,12,0,0,1,24,0V147l51.51-51.52a12,12,0,0,1,17,17l-72,72a12,12,0,0,1-17,0ZM216,204H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" />
    </Svg>
  );
});
