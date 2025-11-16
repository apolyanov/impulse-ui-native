import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ToggleRightFill = memo(function ToggleRightFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M176,56H80a72,72,0,0,0,0,144h96a72,72,0,0,0,0-144Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,176,168Z" />
    </Svg>
  );
});
