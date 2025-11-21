import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const WaveTriangleBoldIcon = memo(function WaveTriangleBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M241.73,135l-52,72a12,12,0,0,1-19.46,0L76,76.5,33.73,135A12,12,0,1,1,14.27,121l52-72a12,12,0,0,1,19.46,0L180,179.5,222.27,121A12,12,0,1,1,241.73,135Z" />
    </Svg>
  );
});
