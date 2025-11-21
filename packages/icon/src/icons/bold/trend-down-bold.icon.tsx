import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TrendDownBoldIcon = memo(function TrendDownBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M244,128v64a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h35l-67-67-31.51,31.52a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L96,119l31.51-31.52a12,12,0,0,1,17,0L220,163V128a12,12,0,0,1,24,0Z" />
    </Svg>
  );
});
