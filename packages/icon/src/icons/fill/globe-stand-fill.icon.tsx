import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GlobeStandFillIcon = memo(function GlobeStandFill(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M56,104a80,80,0,1,1,80,80A80.09,80.09,0,0,1,56,104Zm146.46,69.28A96,96,0,0,1,66.72,37.54,8,8,0,1,0,55.18,26.46,112,112,0,0,0,128,215.71V232H104a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H144V215.72a111.21,111.21,0,0,0,69.54-30.9,8,8,0,1,0-11.08-11.54Z" />
    </Svg>
  );
});
