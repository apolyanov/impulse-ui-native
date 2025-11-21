import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FastForwardCircleBoldIcon = memo(function FastForwardCircleBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M196,128a12,12,0,0,1-4.5,9.37l-40,32A12,12,0,0,1,132,160V140.17l-36.5,29.2A12,12,0,0,1,76,160V96a12,12,0,0,1,19.5-9.37l36.5,29.2V96a12,12,0,0,1,19.5-9.37l40,32A12,12,0,0,1,196,128Zm40,0A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" />
    </Svg>
  );
});
