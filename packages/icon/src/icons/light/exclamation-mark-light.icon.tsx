import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ExclamationMarkLightIcon = memo(function ExclamationMarkLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M142,200a14,14,0,1,1-14-14A14,14,0,0,1,142,200Zm-14-42a6,6,0,0,0,6-6V48a6,6,0,0,0-12,0V152A6,6,0,0,0,128,158Z" />
    </Svg>
  );
});
