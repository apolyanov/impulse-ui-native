import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowLeftDownFill = memo(function ArrowElbowLeftDownFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,72a8,8,0,0,1-8,8H96v80h40a8,8,0,0,1,5.66,13.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,40,160H80V72a8,8,0,0,1,8-8H232A8,8,0,0,1,240,72Z" />
    </Svg>
  );
});
