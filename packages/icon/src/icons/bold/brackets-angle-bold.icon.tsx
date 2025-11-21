import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BracketsAngleBoldIcon = memo(function BracketsAngleBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M90.12,46.44,38.22,128l51.9,81.56a12,12,0,1,1-20.24,12.88l-56-88a12,12,0,0,1,0-12.88l56-88A12,12,0,0,1,90.12,46.44Zm152,75.12-56-88a12,12,0,1,0-20.24,12.88L217.78,128l-51.9,81.56a12,12,0,1,0,20.24,12.88l56-88A12,12,0,0,0,242.12,121.56Z" />
    </Svg>
  );
});
