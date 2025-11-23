import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowLineUpLeftRegularIcon = memo(function ArrowLineUpLeftRegular(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,208a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208ZM72,152a8,8,0,0,0,8-8V67.31l98.34,98.35a8,8,0,0,0,11.32-11.32L91.31,56H168a8,8,0,0,0,0-16H72a8,8,0,0,0-8,8v96A8,8,0,0,0,72,152Z" />
    </Svg>
  );
});
