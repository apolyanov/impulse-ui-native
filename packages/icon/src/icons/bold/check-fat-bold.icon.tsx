import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CheckFatBoldIcon = memo(function CheckFatBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M246.15,65.46l-.07-.08L222.15,41.85a20,20,0,0,0-28.23-.05l-90,88.83L70.06,97.78a20,20,0,0,0-28.21.08l-24,24a20,20,0,0,0,0,28.26l71.62,72a20,20,0,0,0,28.29,0L246.15,93.74A20,20,0,0,0,246.15,65.46ZM103.61,202.33,37.64,136,56,117.61,95.65,156a12,12,0,0,0,16.78-.08L208,61.61l18.32,18Z" />
    </Svg>
  );
});
