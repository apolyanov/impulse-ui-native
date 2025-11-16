import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const HardDriveDuotone = memo(function HardDriveDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path
        d="M232,80v96a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H224A8,8,0,0,1,232,80Z"
        opacity={0.2}
      />
      <Path d="M224,64H32A16,16,0,0,0,16,80v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm0,112H32V80H224v96Zm-24-48a12,12,0,1,1-12-12A12,12,0,0,1,200,128Z" />
    </Svg>
  );
});
