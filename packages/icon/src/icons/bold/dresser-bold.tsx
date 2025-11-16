import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DresserBold = memo(function DresserBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M148,176a12,12,0,0,1-12,12H120a12,12,0,0,1,0-24h16A12,12,0,0,1,148,176ZM120,92h16a12,12,0,0,0,0-24H120a12,12,0,0,0,0,24ZM220,40V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V40A20,20,0,0,1,56,20H200A20,20,0,0,1,220,40ZM60,44v72H196V44ZM196,212V140H60v72Z" />
    </Svg>
  );
});
