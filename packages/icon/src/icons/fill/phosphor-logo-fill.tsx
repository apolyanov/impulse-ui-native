import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PhosphorLogoFill = memo(function PhosphorLogoFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M152,32H72a8,8,0,0,0-8,8V168a80.09,80.09,0,0,0,80,80,8,8,0,0,0,8-8V176a72,72,0,0,0,0-144ZM136,231.5A64.14,64.14,0,0,1,80.51,176H136Zm0-94L85.68,48H136ZM152,160V48a56,56,0,0,1,0,112Z" />
    </Svg>
  );
});
