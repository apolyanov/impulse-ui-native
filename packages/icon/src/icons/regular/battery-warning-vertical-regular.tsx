import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BatteryWarningVerticalRegular = memo(
  function BatteryWarningVerticalRegular(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M120,136V96a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,24a12,12,0,1,0,12,12A12,12,0,0,0,128,160ZM96,16h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM200,56V224a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V56A24,24,0,0,1,80,32h96A24,24,0,0,1,200,56Zm-16,0a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V224a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8Z" />
      </Svg>
    );
  },
);
