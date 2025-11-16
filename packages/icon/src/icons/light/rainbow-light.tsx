import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const RainbowLight = memo(function RainbowLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M182,168v16a6,6,0,0,1-12,0V168a42,42,0,0,0-84,0v16a6,6,0,0,1-12,0V168a54,54,0,0,1,108,0ZM128,82a86.1,86.1,0,0,0-86,86v16a6,6,0,0,0,12,0V168a74,74,0,0,1,148,0v16a6,6,0,0,0,12,0V168A86.1,86.1,0,0,0,128,82Zm0-32A118.13,118.13,0,0,0,10,168v16a6,6,0,0,0,12,0V168a106,106,0,0,1,212,0v16a6,6,0,0,0,12,0V168A118.13,118.13,0,0,0,128,50Z" />
    </Svg>
  );
});
