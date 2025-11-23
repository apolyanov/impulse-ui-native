import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const RecordBoldIcon = memo(function RecordBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm0-148a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64Zm0,104a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" />
    </Svg>
  );
});
