import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BracketsSquareDuotoneIcon = memo(function BracketsSquareDuotone(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,40V216H40V40Z" opacity={0.2} />
      <Path d="M48,48V208H80a8,8,0,0,1,0,16H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16ZM216,32H176a8,8,0,0,0,0,16h32V208H176a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Z" />
    </Svg>
  );
});
