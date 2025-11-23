import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const EqualsBoldIcon = memo(function EqualsBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M228,160a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,160ZM40,108H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Z" />
    </Svg>
  );
});
