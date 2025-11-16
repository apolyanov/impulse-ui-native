import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ShapesFill = memo(function ShapesFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M111.59,181.47A8,8,0,0,1,104,192H24a8,8,0,0,1-7.59-10.53l40-120a8,8,0,0,1,15.18,0ZM208,76a52,52,0,1,0-52,52A52.06,52.06,0,0,0,208,76Zm16,68H136a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h88a8,8,0,0,0,8-8V152A8,8,0,0,0,224,144Z" />
    </Svg>
  );
});
