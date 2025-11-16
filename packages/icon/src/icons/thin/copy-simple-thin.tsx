import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CopySimpleThin = memo(function CopySimpleThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M184,68H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H184a4,4,0,0,0,4-4V72A4,4,0,0,0,184,68Zm-4,144H44V76H180ZM220,40V184a4,4,0,0,1-8,0V44H72a4,4,0,0,1,0-8H216A4,4,0,0,1,220,40Z" />
    </Svg>
  );
});
