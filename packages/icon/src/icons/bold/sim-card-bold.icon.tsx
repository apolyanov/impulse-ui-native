import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SimCardBoldIcon = memo(function SimCardBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.51ZM196,212H60V44h87l49,49ZM88,112a12,12,0,0,0-12,12v60a12,12,0,0,0,12,12h80a12,12,0,0,0,12-12V124a12,12,0,0,0-12-12Zm12,24h16v36H100Zm56,36H140V136h16Z" />
    </Svg>
  );
});
