import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MicrophoneBold = memo(function MicrophoneBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,180a52.06,52.06,0,0,0,52-52V64A52,52,0,0,0,76,64v64A52.06,52.06,0,0,0,128,180ZM100,64a28,28,0,0,1,56,0v64a28,28,0,0,1-56,0Zm40,155.22V240a12,12,0,0,1-24,0V219.22A92.14,92.14,0,0,1,36,128a12,12,0,0,1,24,0,68,68,0,0,0,136,0,12,12,0,0,1,24,0A92.14,92.14,0,0,1,140,219.22Z" />
    </Svg>
  );
});
