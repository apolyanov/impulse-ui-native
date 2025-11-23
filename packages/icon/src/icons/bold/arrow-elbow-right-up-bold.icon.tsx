import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowRightUpBoldIcon = memo(function ArrowElbowRightUpBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224.49,104.49a12,12,0,0,1-17,0L180,77V192a12,12,0,0,1-12,12H24a12,12,0,0,1,0-24H156V77l-27.51,27.52a12,12,0,1,1-17-17l48-48a12,12,0,0,1,17,0l48,48A12,12,0,0,1,224.49,104.49Z" />
    </Svg>
  );
});
