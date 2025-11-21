import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CaretLeftLightIcon = memo(function CaretLeftLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z" />
    </Svg>
  );
});
