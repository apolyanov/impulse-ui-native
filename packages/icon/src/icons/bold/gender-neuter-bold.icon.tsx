import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GenderNeuterBoldIcon = memo(function GenderNeuterBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212,104a84,84,0,1,0-96,83.13V232a12,12,0,0,0,24,0V187.13A84.12,84.12,0,0,0,212,104Zm-84,60a60,60,0,1,1,60-60A60.07,60.07,0,0,1,128,164Z" />
    </Svg>
  );
});
