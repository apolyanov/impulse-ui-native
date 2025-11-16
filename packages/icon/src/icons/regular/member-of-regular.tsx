import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MemberOfRegular = memo(function MemberOfRegular(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,136H56.46A72.08,72.08,0,0,0,128,200h72a8,8,0,0,1,0,16H128a88,88,0,0,1,0-176h72a8,8,0,0,1,0,16H128a72.08,72.08,0,0,0-71.54,64H200a8,8,0,0,1,0,16Z" />
    </Svg>
  );
});
