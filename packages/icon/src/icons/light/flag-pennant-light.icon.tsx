import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FlagPennantLightIcon = memo(function FlagPennantLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M242,98.33l-184-64A6,6,0,0,0,50,40V216a6,6,0,0,0,12,0V172.27l180-62.6a6,6,0,0,0,0-11.34ZM62,159.56V48.44L221.74,104Z" />
    </Svg>
  );
});
