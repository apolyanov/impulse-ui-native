import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowsHorizontalThinIcon = memo(function ArrowsHorizontalThin(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M234.83,130.83l-32,32a4,4,0,0,1-5.66-5.66L222.34,132H33.66l25.17,25.17a4,4,0,0,1-5.66,5.66l-32-32a4,4,0,0,1,0-5.66l32-32a4,4,0,0,1,5.66,5.66L33.66,124H222.34L197.17,98.83a4,4,0,0,1,5.66-5.66l32,32A4,4,0,0,1,234.83,130.83Z" />
    </Svg>
  );
});
