import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowURightUpLightIcon = memo(function ArrowURightUpLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M220.24,84.24a6,6,0,0,1-8.48,0L174,46.49V168a62,62,0,0,1-124,0V80a6,6,0,0,1,12,0v88a50,50,0,0,0,100,0V46.49L124.24,84.24a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48A6,6,0,0,1,220.24,84.24Z" />
    </Svg>
  );
});
