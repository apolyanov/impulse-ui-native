import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const WaveTriangleLight = memo(function WaveTriangleLight(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M236.86,131.51l-52,72a6,6,0,0,1-9.72,0L76,66.25,28.86,131.51a6,6,0,1,1-9.72-7l52-72a6,6,0,0,1,9.72,0L180,189.75l47.14-65.26a6,6,0,0,1,9.72,7Z" />
    </Svg>
  );
});
