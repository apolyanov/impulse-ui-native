import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowUUpRightRegular = memo(function ArrowUUpRightRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M170.34,130.34,204.69,96H88a48,48,0,0,0,0,96h88a8,8,0,0,1,0,16H88A64,64,0,0,1,88,80H204.69L170.34,45.66a8,8,0,0,1,11.32-11.32l48,48a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32-11.32Z" />
    </Svg>
  );
});
