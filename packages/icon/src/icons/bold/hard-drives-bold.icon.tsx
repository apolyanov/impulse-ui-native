import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const HardDrivesBoldIcon = memo(function HardDrivesBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,36H48A20,20,0,0,0,28,56V200a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V56A20,20,0,0,0,208,36Zm-4,24v56H52V60ZM52,196V140H204v56ZM160,88a16,16,0,1,1,16,16A16,16,0,0,1,160,88Zm32,80a16,16,0,1,1-16-16A16,16,0,0,1,192,168Z" />
    </Svg>
  );
});
