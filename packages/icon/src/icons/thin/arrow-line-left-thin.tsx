import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowLineLeftThin = memo(function ArrowLineLeftThin(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M228,128a4,4,0,0,1-4,4H81.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,1,1,5.66,5.66L81.66,124H224A4,4,0,0,1,228,128ZM40,36a4,4,0,0,0-4,4V216a4,4,0,0,0,8,0V40A4,4,0,0,0,40,36Z" />
    </Svg>
  );
});
