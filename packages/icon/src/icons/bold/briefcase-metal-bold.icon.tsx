import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BriefcaseMetalBoldIcon = memo(function BriefcaseMetalBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,52H180V40a28,28,0,0,0-28-28H104A28,28,0,0,0,76,40V52H40A20,20,0,0,0,20,72V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V72A20,20,0,0,0,216,52ZM44,120H212v32H44Zm56-80a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V52H100ZM212,76V96H44V76ZM44,196V176H212v20Z" />
    </Svg>
  );
});
