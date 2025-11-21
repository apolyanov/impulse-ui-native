import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BagSimpleThinIcon = memo(function BagSimpleThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,68H172V64a44,44,0,0,0-88,0v4H40A12,12,0,0,0,28,80V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V80A12,12,0,0,0,216,68ZM92,64a36,36,0,0,1,72,0v4H92ZM220,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Z" />
    </Svg>
  );
});
