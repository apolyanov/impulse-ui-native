import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PiDuotone = memo(function PiDuotone(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M196,200H88V64h80V172A28,28,0,0,0,196,200Z" opacity={0.2} />
      <Path d="M232,172a36,36,0,0,1-72,0V72H96V200a8,8,0,0,1-16,0V72H72a40,40,0,0,0-40,40,8,8,0,0,1-16,0A56.06,56.06,0,0,1,72,56H224a8,8,0,0,1,0,16H176V172a20,20,0,0,0,40,0,8,8,0,0,1,16,0Z" />
    </Svg>
  );
});
