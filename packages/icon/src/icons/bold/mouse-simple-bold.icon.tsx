import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MouseSimpleBoldIcon = memo(function MouseSimpleBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M144,12H112A68.07,68.07,0,0,0,44,80v96a68.07,68.07,0,0,0,68,68h32a68.07,68.07,0,0,0,68-68V80A68.07,68.07,0,0,0,144,12Zm44,164a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44V80a44.05,44.05,0,0,1,44-44h32a44.05,44.05,0,0,1,44,44ZM140,64v48a12,12,0,0,1-24,0V64a12,12,0,0,1,24,0Z" />
    </Svg>
  );
});
