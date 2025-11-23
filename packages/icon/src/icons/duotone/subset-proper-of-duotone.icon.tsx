import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SubsetProperOfDuotoneIcon = memo(function SubsetProperOfDuotone(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path
        d="M200,48V208H128a80,80,0,0,1-80-80h0a80,80,0,0,1,80-80Z"
        opacity={0.2}
      />
      <Path d="M208,208a8,8,0,0,1-8,8H128a88,88,0,0,1,0-176h72a8,8,0,0,1,0,16H128a72,72,0,0,0,0,144h72A8,8,0,0,1,208,208Z" />
    </Svg>
  );
});
