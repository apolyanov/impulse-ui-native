import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowUpThin = memo(function ArrowUpThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M202.83,114.83a4,4,0,0,1-5.66,0L132,49.66V216a4,4,0,0,1-8,0V49.66L58.83,114.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0l72,72A4,4,0,0,1,202.83,114.83Z" />
    </Svg>
  );
});
