import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CaretLineDownBoldIcon = memo(function CaretLineDownBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M39.51,80.49a12,12,0,0,1,17-17L128,135l71.51-71.52a12,12,0,0,1,17,17l-80,80a12,12,0,0,1-17,0ZM208,180H48a12,12,0,0,0,0,24H208a12,12,0,0,0,0-24Z" />
    </Svg>
  );
});
