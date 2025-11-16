import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SkipBackFill = memo(function SkipBackFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,47.88V208.12a16,16,0,0,1-24.43,13.43L64,146.77V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0v69.23L183.57,34.45A15.95,15.95,0,0,1,208,47.88Z" />
    </Svg>
  );
});
