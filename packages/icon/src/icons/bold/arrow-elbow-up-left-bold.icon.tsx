import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowUpLeftBoldIcon = memo(function ArrowElbowUpLeftBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M204,80V224a12,12,0,0,1-24,0V92H77l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,1,1,17,17L77,68H192A12,12,0,0,1,204,80Z" />
    </Svg>
  );
});
