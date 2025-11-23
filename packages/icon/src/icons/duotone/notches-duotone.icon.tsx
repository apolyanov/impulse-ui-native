import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NotchesDuotoneIcon = memo(function NotchesDuotone(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M192,40V192H40Z" opacity={0.2} />
      <Path d="M195.06,32.61a8,8,0,0,0-8.72,1.73l-152,152A8,8,0,0,0,40,200H192a8,8,0,0,0,8-8V40A8,8,0,0,0,195.06,32.61ZM184,184H59.31L184,59.31Z" />
    </Svg>
  );
});
