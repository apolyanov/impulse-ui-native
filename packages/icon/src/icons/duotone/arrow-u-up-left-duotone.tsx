import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowUUpLeftDuotone = memo(function ArrowUUpLeftDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M80,40v96L32,88Z" opacity={0.2} />
      <Path d="M168,80H88V40a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,88,136V96h80a48,48,0,0,1,0,96H80a8,8,0,0,0,0,16h88a64,64,0,0,0,0-128ZM72,116.69,43.31,88,72,59.31Z" />
    </Svg>
  );
});
