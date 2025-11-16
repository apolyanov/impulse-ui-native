import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberSixFill = memo(function NumberSixFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM128,192a44,44,0,0,1-38.3-65.62L123.38,68a8,8,0,0,1,13.86,8l-16.52,28.61A44.79,44.79,0,0,1,128,104a44,44,0,0,1,0,88Zm28-44a28,28,0,1,1-28-28A28,28,0,0,1,156,148Z" />
    </Svg>
  );
});
