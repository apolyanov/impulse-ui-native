import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const EqualsThinIcon = memo(function EqualsThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M220,160a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,160ZM40,100H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Z" />
    </Svg>
  );
});
