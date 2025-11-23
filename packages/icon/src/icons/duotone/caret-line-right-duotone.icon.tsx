import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CaretLineRightDuotoneIcon = memo(function CaretLineRightDuotone(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M144,128,64,208V48Z" opacity={0.2} />
      <Path d="M69.66,42.34A8,8,0,0,0,56,48V208a8,8,0,0,0,13.66,5.66l80-80a8,8,0,0,0,0-11.32ZM72,188.69V67.31L132.69,128ZM192,48V208a8,8,0,0,1-16,0V48a8,8,0,0,1,16,0Z" />
    </Svg>
  );
});
