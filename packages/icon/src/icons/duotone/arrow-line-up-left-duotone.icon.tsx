import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowLineUpLeftDuotoneIcon = memo(function ArrowLineUpLeftDuotone(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M168,48,72,144V48Z" opacity={0.2} />
      <Path d="M232,208a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208ZM64,144V48a8,8,0,0,1,8-8h96a8,8,0,0,1,5.66,13.66L131.31,96l58.35,58.34a8,8,0,0,1-11.32,11.32L120,107.31,77.66,149.66A8,8,0,0,1,64,144Zm16-19.31,34.34-34.35h0L148.69,56H80Z" />
    </Svg>
  );
});
