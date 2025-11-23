import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const HardDriveThinIcon = memo(function HardDriveThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,68H32A12,12,0,0,0,20,80v96a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V80A12,12,0,0,0,224,68Zm4,108a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4Zm-32-48a8,8,0,1,1-8-8A8,8,0,0,1,196,128Z" />
    </Svg>
  );
});
