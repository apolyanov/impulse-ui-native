import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LessThanBoldIcon = memo(function LessThanBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M210.84,205.13a12,12,0,0,1-16,5.71l-152-72a12,12,0,0,1,0-21.68l152-72a12,12,0,1,1,10.27,21.69L76,128l129.1,61.15A12,12,0,0,1,210.84,205.13Z" />
    </Svg>
  );
});
