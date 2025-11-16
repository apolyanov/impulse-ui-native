import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CodeSimpleDuotone = memo(function CodeSimpleDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,128l-72,64H88L16,128,88,64h80Z" opacity={0.2} />
      <Path d="M93.31,70,28,128l65.27,58a8,8,0,1,1-10.62,12l-72-64a8,8,0,0,1,0-12l72-64A8,8,0,1,1,93.31,70Zm152,52-72-64a8,8,0,0,0-10.62,12L228,128l-65.27,58a8,8,0,1,0,10.62,12l72-64a8,8,0,0,0,0-12Z" />
    </Svg>
  );
});
