import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowURightUpThinIcon = memo(function ArrowURightUpThin(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M218.83,82.83a4,4,0,0,1-5.66,0L172,41.66V168a60,60,0,0,1-120,0V80a4,4,0,0,1,8,0v88a52,52,0,0,0,104,0V41.66L122.83,82.83a4,4,0,0,1-5.66-5.66l48-48a4,4,0,0,1,5.66,0l48,48A4,4,0,0,1,218.83,82.83Z" />
    </Svg>
  );
});
