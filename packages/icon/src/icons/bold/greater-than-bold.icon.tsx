import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GreaterThanBoldIcon = memo(function GreaterThanBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M228,128a12,12,0,0,1-6.86,10.84l-152,72a12,12,0,0,1-10.27-21.69L188,128,58.87,66.85A12,12,0,0,1,69.14,45.16l152,72A12,12,0,0,1,228,128Z" />
    </Svg>
  );
});
