import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BatteryWarningVerticalFillIcon = memo(
  function BatteryWarningVerticalFill(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M88,8a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,8ZM200,56V224a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V56A24,24,0,0,1,80,32h96A24,24,0,0,1,200,56Zm-80,80a8,8,0,0,0,16,0V96a8,8,0,0,0-16,0Zm20,36a12,12,0,1,0-12,12A12,12,0,0,0,140,172Z" />
      </Svg>
    );
  }
);
