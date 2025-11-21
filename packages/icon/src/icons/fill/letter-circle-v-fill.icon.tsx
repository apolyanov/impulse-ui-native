import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LetterCircleVFillIcon = memo(function LetterCircleVFill(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.43,75-32,80a8,8,0,0,1-14.86,0l-32-80A8,8,0,0,1,103.43,93L128,154.46,152.57,93A8,8,0,1,1,167.43,99Z" />
    </Svg>
  );
});
