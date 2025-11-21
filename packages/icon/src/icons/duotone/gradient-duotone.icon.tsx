import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GradientDuotoneIcon = memo(function GradientDuotone(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,64V184H32V64Z" opacity={0.2} />
      <Path d="M24,104a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H32A8,8,0,0,1,24,104Zm200-8H144a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16ZM72,136H32a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm152,0H184a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16ZM96,144a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H104A8,8,0,0,0,96,144ZM56,176H32a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm56,0H88a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm56,0H144a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm56,0H200a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16ZM32,72H224a8,8,0,0,0,0-16H32a8,8,0,0,0,0,16Z" />
    </Svg>
  );
});
