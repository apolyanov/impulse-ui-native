import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SkipBackCircleFill = memo(function SkipBackCircleFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,144a8,8,0,0,1-12.65,6.51L104,137.83V168a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0v30.17l51.35-36.68A8,8,0,0,1,168,88Z" />
    </Svg>
  );
});
