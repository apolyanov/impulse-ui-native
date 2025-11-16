import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ExclamationMarkRegular = memo(function ExclamationMarkRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M144,200a16,16,0,1,1-16-16A16,16,0,0,1,144,200Zm-16-40a8,8,0,0,0,8-8V48a8,8,0,0,0-16,0V152A8,8,0,0,0,128,160Z" />
    </Svg>
  );
});
