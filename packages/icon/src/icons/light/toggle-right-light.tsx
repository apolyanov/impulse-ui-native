import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ToggleRightLight = memo(function ToggleRightLight(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M176,58H80a70,70,0,0,0,0,140h96a70,70,0,0,0,0-140Zm0,128H80A58,58,0,0,1,80,70h96a58,58,0,0,1,0,116Zm0-96a38,38,0,1,0,38,38A38,38,0,0,0,176,90Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,176,154Z" />
    </Svg>
  );
});
