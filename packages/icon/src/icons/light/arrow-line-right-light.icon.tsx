import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowLineRightLightIcon = memo(function ArrowLineRightLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M188.24,123.76a6,6,0,0,1,0,8.48l-72,72a6,6,0,0,1-8.48-8.48L169.51,134H32a6,6,0,0,1,0-12H169.51L107.76,60.24a6,6,0,0,1,8.48-8.48ZM216,34a6,6,0,0,0-6,6V216a6,6,0,0,0,12,0V40A6,6,0,0,0,216,34Z" />
    </Svg>
  );
});
