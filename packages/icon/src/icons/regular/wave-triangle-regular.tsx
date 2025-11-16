import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const WaveTriangleRegular = memo(function WaveTriangleRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M238.48,132.68l-52,72a8,8,0,0,1-13,0L76,69.66l-45.51,63a8,8,0,1,1-13-9.36l52-72a8,8,0,0,1,13,0l97.51,135,45.51-63a8,8,0,1,1,13,9.36Z" />
    </Svg>
  );
});
