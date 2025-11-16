import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FloppyDiskBackFill = memo(function FloppyDiskBackFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,32H83.31A15.86,15.86,0,0,0,72,36.69L36.69,72A15.86,15.86,0,0,0,32,83.31V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,184a32,32,0,1,1,32-32A32,32,0,0,1,128,184ZM172,80a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4V48h88Z" />
    </Svg>
  );
});
