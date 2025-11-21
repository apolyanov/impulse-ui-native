import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const OvenBoldIcon = memo(function OvenBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Zm44,0a16,16,0,1,1,16,16A16,16,0,0,1,112,80Zm44,0a16,16,0,1,1,16,16A16,16,0,0,1,156,80ZM76,192H180a12,12,0,0,0,12-12V120a12,12,0,0,0-12-12H76a12,12,0,0,0-12,12v60A12,12,0,0,0,76,192Zm12-60h80v36H88Z" />
    </Svg>
  );
});
