import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FlashlightFillIcon = memo(function FlashlightFill(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M184,16H72A16,16,0,0,0,56,32V77.33a16.12,16.12,0,0,0,3.2,9.6L80,114.67V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V114.67l20.8-27.74a16.12,16.12,0,0,0,3.2-9.6V32A16,16,0,0,0,184,16ZM136,152a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM72,56V32H184V56Z" />
    </Svg>
  );
});
