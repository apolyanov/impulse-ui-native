import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ListPlusBold = memo(function ListPlusBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm104,40H40a12,12,0,0,0,0,24H144a12,12,0,0,0,0-24Zm88,0H220V168a12,12,0,0,0-24,0v12H184a12,12,0,0,0,0,24h12v12a12,12,0,0,0,24,0V204h12a12,12,0,0,0,0-24Z" />
    </Svg>
  );
});
