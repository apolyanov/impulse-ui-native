import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LetterCircleHThinIcon = memo(function LetterCircleHThin(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM164,88v80a4,4,0,0,1-8,0V132H100v36a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0v36h56V88a4,4,0,0,1,8,0Z" />
    </Svg>
  );
});
