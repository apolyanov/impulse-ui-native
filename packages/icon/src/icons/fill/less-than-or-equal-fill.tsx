import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LessThanOrEqualFill = memo(function LessThanOrEqualFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM176,184H72a8,8,0,0,1,0-16H176a8,8,0,0,1,0,16Zm2.35-55.65a8,8,0,0,1-4.7,15.3l-104-32a8,8,0,0,1,0-15.3l104-32a8,8,0,0,1,4.7,15.3L99.2,104Z" />
    </Svg>
  );
});
