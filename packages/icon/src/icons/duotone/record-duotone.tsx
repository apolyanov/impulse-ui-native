import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const RecordDuotone = memo(function RecordDuotone(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M192,128a64,64,0,1,1-64-64A64,64,0,0,1,192,128Z" opacity={0.2} />
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-160a72,72,0,1,0,72,72A72.08,72.08,0,0,0,128,56Zm0,128a56,56,0,1,1,56-56A56.06,56.06,0,0,1,128,184Z" />
    </Svg>
  );
});
