import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const HourglassSimpleHighBold = memo(function HourglassSimpleHighBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M214,193.68,145.35,128,214,62.32l.18-.18A20,20,0,0,0,200,28H56A20,20,0,0,0,41.87,62.14l.18.18L110.65,128l-68.6,65.68-.18.18A20,20,0,0,0,56,228H200a20,20,0,0,0,14.14-34.14ZM103.58,88h48.84L128,111.39ZM190,52,177.49,64h-99L66,52ZM66,204l62-59.39L190,204Z" />
    </Svg>
  );
});
