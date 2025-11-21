import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowUDownLeftLightIcon = memo(function ArrowUDownLeftLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M230,112a62.07,62.07,0,0,1-62,62H46.49l37.75,37.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,0,1,8.48,8.48L46.49,162H168a50,50,0,0,0,0-100H80a6,6,0,0,1,0-12h88A62.07,62.07,0,0,1,230,112Z" />
    </Svg>
  );
});
