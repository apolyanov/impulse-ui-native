import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChartBarHorizontalFillIcon = memo(function ChartBarHorizontalFill(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,112v32a8,8,0,0,1-8,8H56v16h88a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H56v8a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0v8H176a8,8,0,0,1,8,8V80a8,8,0,0,1-8,8H56v16H224A8,8,0,0,1,232,112Z" />
    </Svg>
  );
});
