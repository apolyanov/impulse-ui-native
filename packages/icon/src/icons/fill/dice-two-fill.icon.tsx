import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DiceTwoFillIcon = memo(function DiceTwoFill(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm-84,88a12,12,0,1,1,12-12A12,12,0,0,1,108,120Zm40,40a12,12,0,1,1,12-12A12,12,0,0,1,148,160Z" />
    </Svg>
  );
});
