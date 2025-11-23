import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TextboxBoldIcon = memo(function TextboxBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M112,36a12,12,0,0,0-12,12V60H24A20,20,0,0,0,4,80v96a20,20,0,0,0,20,20h76v12a12,12,0,0,0,24,0V48A12,12,0,0,0,112,36ZM28,172V84h72v88ZM252,80v96a20,20,0,0,1-20,20H152a12,12,0,0,1,0-24h76V84H152a12,12,0,0,1,0-24h80A20,20,0,0,1,252,80ZM88,112a12,12,0,0,1-12,12v20a12,12,0,0,1-24,0V124a12,12,0,0,1,0-24H76A12,12,0,0,1,88,112Z" />
    </Svg>
  );
});
