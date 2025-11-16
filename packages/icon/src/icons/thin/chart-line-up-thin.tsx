import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChartLineUpThin = memo(function ChartLineUpThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M228,208a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V48a4,4,0,0,1,8,0V166.34l57.17-57.17a4,4,0,0,1,5.66,0L128,138.34,190.34,76H160a4,4,0,0,1,0-8h40a4,4,0,0,1,4,4v40a4,4,0,0,1-8,0V81.66l-65.17,65.17a4,4,0,0,1-5.66,0L96,117.66l-60,60V204H224A4,4,0,0,1,228,208Z" />
    </Svg>
  );
});
