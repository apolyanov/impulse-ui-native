import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const HandPalmBoldIcon = memo(function HandPalmBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M188,84a32,32,0,0,0-8,1V60a32,32,0,0,0-43.21-30A32,32,0,0,0,76,44v1A32,32,0,0,0,36,76v76a92,92,0,0,0,184,0V116A32,32,0,0,0,188,84Zm8,68a68,68,0,0,1-136,0V76a8,8,0,0,1,16,0v40a12,12,0,0,0,24,0V44a8,8,0,0,1,16,0v64a12,12,0,0,0,24,0V60a8,8,0,0,1,16,0v65.4A52.09,52.09,0,0,0,116,176a12,12,0,0,0,24,0,28,28,0,0,1,28-28,12,12,0,0,0,12-12V116a8,8,0,0,1,16,0Z" />
    </Svg>
  );
});
