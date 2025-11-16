import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChecksThin = memo(function ChecksThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M146.8,82.85l-89.6,88a4,4,0,0,1-5.6,0L13.2,133.14a4,4,0,0,1,5.6-5.71l35.6,35,86.8-85.24a4,4,0,0,1,5.6,5.7Zm96-5.65a4,4,0,0,0-5.65,0l-86.8,85.24-21.63-21.24a4,4,0,1,0-5.61,5.7l24.44,24a4,4,0,0,0,5.6,0l89.6-88A4,4,0,0,0,242.85,77.2Z" />
    </Svg>
  );
});
