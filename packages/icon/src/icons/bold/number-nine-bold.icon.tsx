import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberNineBoldIcon = memo(function NumberNineBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M188,96a60,60,0,1,0-60,60,59.21,59.21,0,0,0,7.81-.53l-26.27,46.64a12,12,0,0,0,20.92,11.78l49.54-88A59.57,59.57,0,0,0,188,96ZM92,96a36,36,0,1,1,36,36A36,36,0,0,1,92,96Z" />
    </Svg>
  );
});
