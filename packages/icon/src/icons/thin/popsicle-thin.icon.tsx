import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PopsicleThinIcon = memo(function PopsicleThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,12A68.07,68.07,0,0,0,60,80v96a12,12,0,0,0,12,12h36v44a20,20,0,0,0,40,0V188h36a12,12,0,0,0,12-12V80A68.07,68.07,0,0,0,128,12Zm12,220a12,12,0,0,1-24,0V188h24Zm48-56a4,4,0,0,1-4,4H72a4,4,0,0,1-4-4V80a60,60,0,0,1,120,0ZM116,72v80a4,4,0,0,1-8,0V72a4,4,0,0,1,8,0Zm32,0v80a4,4,0,0,1-8,0V72a4,4,0,0,1,8,0Z" />
    </Svg>
  );
});
