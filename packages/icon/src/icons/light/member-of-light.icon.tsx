import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MemberOfLightIcon = memo(function MemberOfLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,134H54.26A74.09,74.09,0,0,0,128,202h72a6,6,0,0,1,0,12H128a86,86,0,0,1,0-172h72a6,6,0,0,1,0,12H128a74.09,74.09,0,0,0-73.74,68H200a6,6,0,0,1,0,12Z" />
    </Svg>
  );
});
