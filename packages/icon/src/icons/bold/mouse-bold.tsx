import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MouseBold = memo(function MouseBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M144,12H112A68.07,68.07,0,0,0,44,80v96a68.07,68.07,0,0,0,68,68h32a68.07,68.07,0,0,0,68-68V80A68.07,68.07,0,0,0,144,12Zm44,68v20H140V36h4A44.05,44.05,0,0,1,188,80ZM112,36h4v64H68V80A44.05,44.05,0,0,1,112,36Zm32,184H112a44.05,44.05,0,0,1-44-44V124H188v52A44.05,44.05,0,0,1,144,220Z" />
    </Svg>
  );
});
