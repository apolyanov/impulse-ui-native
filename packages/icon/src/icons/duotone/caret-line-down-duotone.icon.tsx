import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CaretLineDownDuotoneIcon = memo(function CaretLineDownDuotone(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,72l-80,80L48,72Z" opacity={0.2} />
      <Path d="M122.34,157.66a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,208,64H48a8,8,0,0,0-5.66,13.66ZM188.69,80,128,140.69,67.31,80ZM216,192a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,192Z" />
    </Svg>
  );
});
