import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TextTBoldIcon = memo(function TextTBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212,56V88a12,12,0,0,1-24,0V68H140V188h20a12,12,0,0,1,0,24H96a12,12,0,0,1,0-24h20V68H68V88a12,12,0,0,1-24,0V56A12,12,0,0,1,56,44H200A12,12,0,0,1,212,56Z" />
    </Svg>
  );
});
