import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CellSignalNoneBoldIcon = memo(function CellSignalNoneBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M52,192v8a12,12,0,0,1-24,0v-8a12,12,0,0,1,24,0Z" />
    </Svg>
  );
});
