import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AlignRightSimpleThin = memo(function AlignRightSimpleThin(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M228,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0ZM196,96v64a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V96A12,12,0,0,1,32,84H184A12,12,0,0,1,196,96Zm-8,0a4,4,0,0,0-4-4H32a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4H184a4,4,0,0,0,4-4Z" />
    </Svg>
  );
});
