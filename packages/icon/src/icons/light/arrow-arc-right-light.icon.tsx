import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowArcRightLightIcon = memo(function ArrowArcRightLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M238,88v64a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h49.45l-25.8-25.63A90,90,0,0,0,38,184a6,6,0,0,1-12,0,102,102,0,0,1,174.12-72.12L226,137.58V88a6,6,0,0,1,12,0Z" />
    </Svg>
  );
});
