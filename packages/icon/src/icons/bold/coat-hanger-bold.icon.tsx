import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CoatHangerBoldIcon = memo(function CoatHangerBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M244,168,148,96l19.2-14.4A12,12,0,0,0,172,72a44,44,0,0,0-87.66-5.48,12,12,0,1,0,23.82,3,20,20,0,0,1,39.09-2.92L121,86.24c-.15.1-.29.21-.43.32L12,168a20,20,0,0,0,12,36H232a20,20,0,0,0,12-36ZM36,180l92-69,92,69Z" />
    </Svg>
  );
});
