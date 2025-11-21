import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CurrencyKztBoldIcon = memo(function CurrencyKztBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212,100a12,12,0,0,1-12,12H140V212a12,12,0,0,1-24,0V112H56a12,12,0,0,1,0-24H200A12,12,0,0,1,212,100ZM56,64H200a12,12,0,0,0,0-24H56a12,12,0,0,0,0,24Z" />
    </Svg>
  );
});
