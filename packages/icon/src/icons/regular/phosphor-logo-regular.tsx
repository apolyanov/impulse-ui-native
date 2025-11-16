import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PhosphorLogoRegular = memo(function PhosphorLogoRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M152,32H72a8,8,0,0,0-8,8V168a80.09,80.09,0,0,0,80,80,8,8,0,0,0,8-8V176a72,72,0,0,0,0-144ZM80,70.54,130.32,160H80Zm56,66.92L85.68,48H136ZM80.51,176H136v55.5A64.14,64.14,0,0,1,80.51,176ZM152,160V48a56,56,0,0,1,0,112Z" />
    </Svg>
  );
});
