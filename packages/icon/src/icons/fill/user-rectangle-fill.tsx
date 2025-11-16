import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const UserRectangleFill = memo(function UserRectangleFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M172,120a44,44,0,1,1-44-44A44,44,0,0,1,172,120Zm60-64V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H54.68a80,80,0,0,1,29.41-34.84,4,4,0,0,1,4.83.31,59.82,59.82,0,0,0,78.16,0,4,4,0,0,1,4.83-.31A80,80,0,0,1,201.32,200H216Z" />
    </Svg>
  );
});
