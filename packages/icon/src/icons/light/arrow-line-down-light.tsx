import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowLineDownLight = memo(function ArrowLineDownLight(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M51.76,116.24a6,6,0,0,1,8.48-8.48L122,169.51V32a6,6,0,0,1,12,0V169.51l61.76-61.75a6,6,0,0,1,8.48,8.48l-72,72a6,6,0,0,1-8.48,0ZM216,210H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z" />
    </Svg>
  );
});
