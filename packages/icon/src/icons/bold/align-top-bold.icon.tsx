import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AlignTopBoldIcon = memo(function AlignTopBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M228,40a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,40ZM212,88v88a20,20,0,0,1-20,20H156a20,20,0,0,1-20-20V88a20,20,0,0,1,20-20h36A20,20,0,0,1,212,88Zm-24,4H160v80h28Zm-68-4V216a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V88A20,20,0,0,1,64,68h36A20,20,0,0,1,120,88ZM96,92H68V212H96Z" />
    </Svg>
  );
});
