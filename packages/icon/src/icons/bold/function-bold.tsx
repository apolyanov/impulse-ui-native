import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FunctionBold = memo(function FunctionBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212,40a12,12,0,0,1-12,12H170.71A20,20,0,0,0,151,68.42L142.38,116H184a12,12,0,0,1,0,24H138l-9.44,51.87A44,44,0,0,1,85.29,228H56a12,12,0,0,1,0-24H85.29A20,20,0,0,0,105,187.58L113.62,140H72a12,12,0,0,1,0-24h46l9.44-51.87A44,44,0,0,1,170.71,28H200A12,12,0,0,1,212,40Z" />
    </Svg>
  );
});
