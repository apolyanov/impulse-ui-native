import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GreaterThanRegular = memo(function GreaterThanRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,128a8,8,0,0,1-4.58,7.23l-152,72a8,8,0,1,1-6.85-14.46L197.31,128,60.58,63.23a8,8,0,1,1,6.85-14.46l152,72A8,8,0,0,1,224,128Z" />
    </Svg>
  );
});
