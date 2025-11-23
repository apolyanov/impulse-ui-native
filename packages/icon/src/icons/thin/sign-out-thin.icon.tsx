import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SignOutThinIcon = memo(function SignOutThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M116,216a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H52V212h60A4,4,0,0,1,116,216Zm110.83-90.83-40-40a4,4,0,0,0-5.66,5.66L214.34,124H112a4,4,0,0,0,0,8H214.34l-33.17,33.17a4,4,0,0,0,5.66,5.66l40-40A4,4,0,0,0,226.83,125.17Z" />
    </Svg>
  );
});
