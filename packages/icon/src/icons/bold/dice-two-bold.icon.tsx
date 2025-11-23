import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DiceTwoBoldIcon = memo(function DiceTwoBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M192,28H64A36,36,0,0,0,28,64V192a36,36,0,0,0,36,36H192a36,36,0,0,0,36-36V64A36,36,0,0,0,192,28Zm12,164a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V64A12,12,0,0,1,64,52H192a12,12,0,0,1,12,12Zm-84-88a16,16,0,1,1-16-16A16,16,0,0,1,120,104Zm48,48a16,16,0,1,1-16-16A16,16,0,0,1,168,152Z" />
    </Svg>
  );
});
