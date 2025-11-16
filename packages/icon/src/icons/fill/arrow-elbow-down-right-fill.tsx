import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowDownRightFill = memo(function ArrowElbowDownRightFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M221.66,181.66l-48,48A8,8,0,0,1,160,224V184H72a8,8,0,0,1-8-8V32a8,8,0,0,1,16,0V168h80V128a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,221.66,181.66Z" />
    </Svg>
  );
});
