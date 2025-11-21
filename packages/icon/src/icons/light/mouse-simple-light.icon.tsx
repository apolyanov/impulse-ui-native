import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MouseSimpleLightIcon = memo(function MouseSimpleLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M144,18H112A62.07,62.07,0,0,0,50,80v96a62.07,62.07,0,0,0,62,62h32a62.07,62.07,0,0,0,62-62V80A62.07,62.07,0,0,0,144,18Zm50,158a50.06,50.06,0,0,1-50,50H112a50.06,50.06,0,0,1-50-50V80a50.06,50.06,0,0,1,50-50h32a50.06,50.06,0,0,1,50,50ZM134,64v48a6,6,0,0,1-12,0V64a6,6,0,0,1,12,0Z" />
    </Svg>
  );
});
