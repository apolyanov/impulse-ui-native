import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowLeftUpLightIcon = memo(function ArrowElbowLeftUpLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M238,192a6,6,0,0,1-6,6H88a6,6,0,0,1-6-6V62.49L44.24,100.24a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48a6,6,0,1,1-8.48,8.48L94,62.49V186H232A6,6,0,0,1,238,192Z" />
    </Svg>
  );
});
