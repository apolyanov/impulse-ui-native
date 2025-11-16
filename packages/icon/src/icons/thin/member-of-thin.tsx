import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MemberOfThin = memo(function MemberOfThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,132H52.11A76.09,76.09,0,0,0,128,204h72a4,4,0,0,1,0,8H128a84,84,0,0,1,0-168h72a4,4,0,0,1,0,8H128a76.09,76.09,0,0,0-75.89,72H200a4,4,0,0,1,0,8Z" />
    </Svg>
  );
});
