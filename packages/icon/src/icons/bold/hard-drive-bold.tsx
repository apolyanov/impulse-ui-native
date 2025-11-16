import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const HardDriveBold = memo(function HardDriveBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,60H32A20,20,0,0,0,12,80v96a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V80A20,20,0,0,0,224,60Zm-4,112H36V84H220Zm-56-44a16,16,0,1,1,16,16A16,16,0,0,1,164,128Z" />
    </Svg>
  );
});
