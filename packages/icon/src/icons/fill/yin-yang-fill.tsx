import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const YinYangFill = memo(function YinYangFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M140,80a12,12,0,1,1-12-12A12,12,0,0,1,140,80Zm92,48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-92,48a12,12,0,1,0-12,12A12,12,0,0,0,140,176Zm32-92a44.05,44.05,0,0,0-44-44A88,88,0,0,0,81.09,202.42,52,52,0,0,1,128,128,44.05,44.05,0,0,0,172,84Z" />
    </Svg>
  );
});
