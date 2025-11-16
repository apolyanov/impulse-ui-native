import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const StopCircleThin = memo(function StopCircleThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM160,92H96a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V96A4,4,0,0,0,160,92Zm-4,64H100V100h56Z" />
    </Svg>
  );
});
