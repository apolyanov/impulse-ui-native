import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowFatRightLight = memo(function ArrowFatRightLight(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M236.24,123.76l-96-96A6,6,0,0,0,130,32V74H48A14,14,0,0,0,34,88v80a14,14,0,0,0,14,14h82v42a6,6,0,0,0,10.24,4.24l96-96A6,6,0,0,0,236.24,123.76ZM142,209.51V176a6,6,0,0,0-6-6H48a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2h88a6,6,0,0,0,6-6V46.49L223.51,128Z" />
    </Svg>
  );
});
