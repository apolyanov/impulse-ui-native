import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CaretDoubleDownLightIcon = memo(function CaretDoubleDownLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212.24,131.76a6,6,0,0,1,0,8.48l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,207.51l75.76-75.75A6,6,0,0,1,212.24,131.76Zm-88.48,8.48a6,6,0,0,0,8.48,0l80-80a6,6,0,0,0-8.48-8.48L128,127.51,52.24,51.76a6,6,0,0,0-8.48,8.48Z" />
    </Svg>
  );
});
