import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChartScatterThin = memo(function ChartScatterThin(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M228,208a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V48a4,4,0,0,1,8,0V204H224A4,4,0,0,1,228,208Zm-96-52a8,8,0,1,0-8-8A8,8,0,0,0,132,156Zm-24-56a8,8,0,1,0-8-8A8,8,0,0,0,108,100ZM76,172a8,8,0,1,0-8-8A8,8,0,0,0,76,172Zm96-48a8,8,0,1,0-8-8A8,8,0,0,0,172,124Zm24-40a8,8,0,1,0-8-8A8,8,0,0,0,196,84Zm-8,88a8,8,0,1,0-8-8A8,8,0,0,0,188,172Z" />
    </Svg>
  );
});
