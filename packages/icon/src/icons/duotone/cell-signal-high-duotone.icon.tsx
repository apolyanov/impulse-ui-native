import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CellSignalHighDuotoneIcon = memo(function CellSignalHighDuotone(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M160,60.7V208H32a8,8,0,0,1-5.66-13.66Z" opacity={0.2} />
      <Path d="M198.12,25.23a16,16,0,0,0-17.44,3.46l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A15.94,15.94,0,0,0,198.12,25.23ZM152,80V200H32Zm40,120H168V64l24-24Z" />
    </Svg>
  );
});
