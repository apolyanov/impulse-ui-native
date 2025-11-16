import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DiamondLight = memo(function DiamondLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M233.92,118.14,137.86,22.08a14,14,0,0,0-19.72,0L22.08,118.14a14,14,0,0,0,0,19.72l96.06,96.06h0a14,14,0,0,0,19.72,0l96-96.06a13.94,13.94,0,0,0,0-19.72Zm-8.49,11.24-96.05,96.06a2,2,0,0,1-2.76,0L30.57,129.38a2,2,0,0,1,0-2.76l96.05-96.06a2,2,0,0,1,2.76,0l96.05,96.06a2,2,0,0,1,0,2.76Z" />
    </Svg>
  );
});
