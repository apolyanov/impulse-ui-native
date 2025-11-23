import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FadersThinIcon = memo(function FadersThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M132,120v96a4,4,0,0,1-8,0V120a4,4,0,0,1,8,0Zm68,76a4,4,0,0,0-4,4v16a4,4,0,0,0,8,0V200A4,4,0,0,0,200,196Zm24-32H204V40a4,4,0,0,0-8,0V164H176a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8ZM56,164a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V168A4,4,0,0,0,56,164Zm24-32H60V40a4,4,0,0,0-8,0v92H32a4,4,0,0,0,0,8H80a4,4,0,0,0,0-8Zm72-48H132V40a4,4,0,0,0-8,0V84H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Z" />
    </Svg>
  );
});
