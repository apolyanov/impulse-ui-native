import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DeskBold = memo(function DeskBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M244,60H12a12,12,0,0,0,0,24h4V192a12,12,0,0,0,24,0V156H216v36a12,12,0,0,0,24,0V84h4a12,12,0,0,0,0-24ZM40,84h76v48H40Zm176,48H140V84h76ZM100,108a12,12,0,0,1-12,12H68a12,12,0,0,1,0-24H88A12,12,0,0,1,100,108Zm56,0a12,12,0,0,1,12-12h20a12,12,0,0,1,0,24H168A12,12,0,0,1,156,108Z" />
    </Svg>
  );
});
