import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberOneBoldIcon = memo(function NumberOneBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M148,48V208a12,12,0,0,1-24,0V69.19l-21.83,13.1A12,12,0,0,1,89.83,61.71l40-24A12,12,0,0,1,148,48Z" />
    </Svg>
  );
});
