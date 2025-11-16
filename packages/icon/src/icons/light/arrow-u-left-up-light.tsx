import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowULeftUpLight = memo(function ArrowULeftUpLight(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M206,80v88a62,62,0,0,1-124,0V46.49L44.24,84.24a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48a6,6,0,1,1-8.48,8.48L94,46.49V168a50,50,0,0,0,100,0V80a6,6,0,0,1,12,0Z" />
    </Svg>
  );
});
