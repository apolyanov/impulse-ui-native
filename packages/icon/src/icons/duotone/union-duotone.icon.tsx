import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const UnionDuotoneIcon = memo(function UnionDuotone(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,64v80a72,72,0,0,1-144,0V64Z" opacity={0.2} />
      <Path d="M208,64v80a80,80,0,0,1-160,0V64a8,8,0,0,1,16,0v80a64,64,0,0,0,128,0V64a8,8,0,0,1,16,0Z" />
    </Svg>
  );
});
