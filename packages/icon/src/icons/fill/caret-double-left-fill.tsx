import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CaretDoubleLeftFill = memo(function CaretDoubleLeftFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,48V208a8,8,0,0,1-13.66,5.66L128,147.31V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,128,48v60.69l66.34-66.35A8,8,0,0,1,208,48Z" />
    </Svg>
  );
});
