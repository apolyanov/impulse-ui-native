import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberSixThinIcon = memo(function NumberSixThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,108a51.66,51.66,0,0,0-24.74,6.27L139.49,50a4,4,0,0,0-7-3.92L83,134.05A52,52,0,1,0,128,108Zm0,96a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,204Z" />
    </Svg>
  );
});
