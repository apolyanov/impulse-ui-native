import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CellSignalNoneLightIcon = memo(function CellSignalNoneLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M46,192v8a6,6,0,0,1-12,0v-8a6,6,0,0,1,12,0Z" />
    </Svg>
  );
});
