import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SignpostBoldIcon = memo(function SignpostBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M248.92,104,215.3,66.62A20,20,0,0,0,200.44,60H140V32a12,12,0,0,0-24,0V60H40A20,20,0,0,0,20,80v64a20,20,0,0,0,20,20h76v60a12,12,0,0,0,24,0V164h60.44a20,20,0,0,0,14.86-6.62L248.92,120A12,12,0,0,0,248.92,104Zm-50.26,36H44V84H198.66l25.2,28Z" />
    </Svg>
  );
});
