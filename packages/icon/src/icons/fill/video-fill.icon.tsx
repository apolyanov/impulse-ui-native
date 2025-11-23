import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const VideoFillIcon = memo(function VideoFill(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Zm0-152V168a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-68,56a8,8,0,0,0-3.41-6.55l-40-28A8,8,0,0,0,108,84v56a8,8,0,0,0,12.59,6.55l40-28A8,8,0,0,0,164,112Z" />
    </Svg>
  );
});
