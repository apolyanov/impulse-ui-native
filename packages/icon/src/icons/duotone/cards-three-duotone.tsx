import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CardsThreeDuotone = memo(function CardsThreeDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path
        d="M216,104v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8H208A8,8,0,0,1,216,104Z"
        opacity={0.2}
      />
      <Path d="M208,88H48a16,16,0,0,0-16,16v96a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104A16,16,0,0,0,208,88Zm0,112H48V104H208v96ZM48,64a8,8,0,0,1,8-8H200a8,8,0,0,1,0,16H56A8,8,0,0,1,48,64ZM64,32a8,8,0,0,1,8-8H184a8,8,0,0,1,0,16H72A8,8,0,0,1,64,32Z" />
    </Svg>
  );
});
