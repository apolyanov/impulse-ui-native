import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BatteryChargingVerticalRegularIcon = memo(
  function BatteryChargingVerticalRegular(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M150.81,131.79a8,8,0,0,1,.35,7.79l-16,32a8,8,0,0,1-14.32-7.16L131.06,144H112a8,8,0,0,1-7.16-11.58l16-32a8,8,0,1,1,14.32,7.16L124.94,128H144A8,8,0,0,1,150.81,131.79ZM96,16h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM200,56V224a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V56A24,24,0,0,1,80,32h96A24,24,0,0,1,200,56Zm-16,0a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V224a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8Z" />
      </Svg>
    );
  }
);
