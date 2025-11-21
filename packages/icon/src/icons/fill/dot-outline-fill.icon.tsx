import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DotOutlineFillIcon = memo(function DotOutlineFill(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" />
    </Svg>
  );
});
