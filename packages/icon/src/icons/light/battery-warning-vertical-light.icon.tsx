import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BatteryWarningVerticalLightIcon = memo(
  function BatteryWarningVerticalLight(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M122,136V96a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm6,26a10,10,0,1,0,10,10A10,10,0,0,0,128,162ZM96,14h64a6,6,0,0,0,0-12H96a6,6,0,0,0,0,12ZM198,56V224a22,22,0,0,1-22,22H80a22,22,0,0,1-22-22V56A22,22,0,0,1,80,34h96A22,22,0,0,1,198,56Zm-12,0a10,10,0,0,0-10-10H80A10,10,0,0,0,70,56V224a10,10,0,0,0,10,10h96a10,10,0,0,0,10-10Z" />
      </Svg>
    );
  }
);
