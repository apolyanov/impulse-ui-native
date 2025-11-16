import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowUpLeftFill = memo(function ArrowElbowUpLeftFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,80V224a8,8,0,0,1-16,0V88H104v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,104,32V72h88A8,8,0,0,1,200,80Z" />
    </Svg>
  );
});
