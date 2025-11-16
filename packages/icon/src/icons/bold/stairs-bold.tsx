import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const StairsBold = memo(function StairsBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V40A20,20,0,0,0,200,20ZM152,148h44v16H116V148Zm12-24V108h32v16Zm32-80V84H152a12,12,0,0,0-12,12v28H104a12,12,0,0,0-12,12v28H60V44ZM60,212V188H196v24Z" />
    </Svg>
  );
});
