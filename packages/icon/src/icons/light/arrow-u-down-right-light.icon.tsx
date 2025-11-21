import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowUDownRightLightIcon = memo(function ArrowUDownRightLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M228.24,172.24l-48,48a6,6,0,0,1-8.48-8.48L209.51,174H88A62,62,0,0,1,88,50h88a6,6,0,0,1,0,12H88a50,50,0,0,0,0,100H209.51l-37.75-37.76a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,228.24,172.24Z" />
    </Svg>
  );
});
