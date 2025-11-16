import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CaretUpLight = memo(function CaretUpLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212.24,164.24a6,6,0,0,1-8.48,0L128,88.49,52.24,164.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0l80,80A6,6,0,0,1,212.24,164.24Z" />
    </Svg>
  );
});
