import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TipiDuotone = memo(function TipiDuotone(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M184.32,216H71.68L128,128Z" opacity={0.2} />
      <Path d="M238.74,211.69,137.5,53.5l21.24-33.19a8,8,0,0,0-13.48-8.62L128,38.66l-17.26-27a8,8,0,1,0-13.48,8.62L118.5,53.5,17.26,211.69A8,8,0,0,0,24,224H232a8,8,0,0,0,6.74-12.31ZM86.3,208,128,142.84,169.7,208Zm102.4,0-54-84.31a8,8,0,0,0-13.48,0L67.3,208H38.62L128,68.34,217.38,208Z" />
    </Svg>
  );
});
