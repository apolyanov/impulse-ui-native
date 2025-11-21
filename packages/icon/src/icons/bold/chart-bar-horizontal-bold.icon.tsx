import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChartBarHorizontalBoldIcon = memo(function ChartBarHorizontalBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,92H188V56a12,12,0,0,0-12-12H60V40a12,12,0,0,0-24,0V216a12,12,0,0,0,24,0v-4h84a12,12,0,0,0,12-12V164h68a12,12,0,0,0,12-12V104A12,12,0,0,0,224,92ZM164,68V92H60V68ZM132,188H60V164h72Zm80-48H60V116H212Z" />
    </Svg>
  );
});
