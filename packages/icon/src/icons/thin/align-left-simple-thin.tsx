import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AlignLeftSimpleThin = memo(function AlignLeftSimpleThin(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M36,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0ZM236,96v64a12,12,0,0,1-12,12H72a12,12,0,0,1-12-12V96A12,12,0,0,1,72,84H224A12,12,0,0,1,236,96Zm-8,0a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4Z" />
    </Svg>
  );
});
