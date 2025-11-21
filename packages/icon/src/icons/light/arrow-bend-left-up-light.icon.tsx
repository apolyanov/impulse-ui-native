import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowBendLeftUpLightIcon = memo(function ArrowBendLeftUpLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M206,224a6,6,0,0,1-6,6A102.12,102.12,0,0,1,98,128V46.49L60.24,84.24a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48a6,6,0,1,1-8.48,8.48L110,46.49V128a90.1,90.1,0,0,0,90,90A6,6,0,0,1,206,224Z" />
    </Svg>
  );
});
