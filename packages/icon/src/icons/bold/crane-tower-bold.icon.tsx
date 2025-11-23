import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CraneTowerBoldIcon = memo(function CraneTowerBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,76H111.42L90.73,34.63A12,12,0,0,0,80,28H48A12,12,0,0,0,36,40V76H24a12,12,0,0,0,0,24H36V204H24a12,12,0,0,0,0,24H128a12,12,0,0,0,0-24H116V100h88v80H192v-4a12,12,0,0,0-24,0v8a20,20,0,0,0,20,20h20a20,20,0,0,0,20-20V100h12a12,12,0,0,0,0-24ZM60,52H72.58l12,24H60Zm0,152V164H92v40Zm32-64H60V100H92Z" />
    </Svg>
  );
});
