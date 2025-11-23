import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DiceTwoRegularIcon = memo(function DiceTwoRegular(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16Zm-88-84a12,12,0,1,1-12-12A12,12,0,0,1,120,108Zm40,40a12,12,0,1,1-12-12A12,12,0,0,1,160,148Z" />
    </Svg>
  );
});
