import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowLineUpLightIcon = memo(function ArrowLineUpLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M204.24,139.76a6,6,0,1,1-8.48,8.48L134,86.49V224a6,6,0,0,1-12,0V86.49L60.24,148.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0ZM216,34H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z" />
    </Svg>
  );
});
