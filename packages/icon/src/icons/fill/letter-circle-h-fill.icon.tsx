import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LetterCircleHFillIcon = memo(function LetterCircleHFill(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,144a8,8,0,0,1-16,0V136H104v32a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0v32h48V88a8,8,0,0,1,16,0Z" />
    </Svg>
  );
});
