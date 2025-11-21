import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberCircleOneLightIcon = memo(function NumberCircleOneLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM138,80v96a6,6,0,0,1-12,0V91.21L111.33,101a6,6,0,0,1-6.66-10l24-16A6,6,0,0,1,138,80Z" />
    </Svg>
  );
});
