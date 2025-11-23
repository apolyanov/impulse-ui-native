import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowArcRightRegularIcon = memo(function ArrowArcRightRegular(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,88v64a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h44.6l-22.36-22.21A88,88,0,0,0,40,184a8,8,0,0,1-16,0,104,104,0,0,1,177.54-73.54L224,132.77V88a8,8,0,0,1,16,0Z" />
    </Svg>
  );
});
