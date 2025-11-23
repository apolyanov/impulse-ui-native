import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FunnelSimpleFillIcon = memo(function FunnelSimpleFill(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM144,176H112a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm32-40H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm32-40H48a8,8,0,0,1,0-16H208a8,8,0,0,1,0,16Z" />
    </Svg>
  );
});
