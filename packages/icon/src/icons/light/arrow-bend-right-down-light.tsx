import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowBendRightDownLight = memo(function ArrowBendRightDownLight(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M204.24,180.24l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L146,209.51V128A90.1,90.1,0,0,0,56,38a6,6,0,0,1,0-12A102.12,102.12,0,0,1,158,128v81.51l37.76-37.75a6,6,0,0,1,8.48,8.48Z" />
    </Svg>
  );
});
