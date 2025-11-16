import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CircleHalfDuotone = memo(function CircleHalfDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path
        d="M224,128a96,96,0,0,1-96,96V32A96,96,0,0,1,224,128Z"
        opacity={0.2}
      />
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.11,88.11,0,0,1,80-87.63V215.63A88.11,88.11,0,0,1,40,128Zm96,87.63V40.37a88,88,0,0,1,0,175.26Z" />
    </Svg>
  );
});
