import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ScanFill = memo(function ScanFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,40V80a8,8,0,0,1-16,0V48H176a8,8,0,0,1,0-16h40A8,8,0,0,1,224,40ZM80,208H48V176a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H80a8,8,0,0,0,0-16Zm136-40a8,8,0,0,0-8,8v32H176a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V176A8,8,0,0,0,216,168ZM40,88a8,8,0,0,0,8-8V48H80a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8V80A8,8,0,0,0,40,88Zm32-8v96a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H80A8,8,0,0,0,72,80Z" />
    </Svg>
  );
});
