import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const StopCircleLightIcon = memo(function StopCircleLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM160,90H96a6,6,0,0,0-6,6v64a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V96A6,6,0,0,0,160,90Zm-6,64H102V102h52Z" />
    </Svg>
  );
});
