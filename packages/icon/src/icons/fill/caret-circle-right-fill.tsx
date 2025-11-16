import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CaretCircleRightFill = memo(function CaretCircleRightFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm29.66,109.66-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,157.66,133.66Z" />
    </Svg>
  );
});
