import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowCircleDownLeftFill = memo(function ArrowCircleDownLeftFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,77.66L115.31,152H144a8,8,0,0,1,0,16H96a8,8,0,0,1-8-8V112a8,8,0,0,1,16,0v28.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
    </Svg>
  );
});
