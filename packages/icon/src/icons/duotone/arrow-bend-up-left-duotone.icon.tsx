import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowBendUpLeftDuotoneIcon = memo(function ArrowBendUpLeftDuotone(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M80,56v96L32,104Z" opacity={0.2} />
      <Path d="M128,96H88V56a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,88,152V112h40a88.1,88.1,0,0,1,88,88,8,8,0,0,0,16,0A104.11,104.11,0,0,0,128,96ZM72,132.69,43.31,104,72,75.31Z" />
    </Svg>
  );
});
