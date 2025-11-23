import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PictureInPictureLightIcon = memo(function PictureInPictureLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,50H40A14,14,0,0,0,26,64V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V64A14,14,0,0,0,216,50ZM38,192V64a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v58H136a6,6,0,0,0-6,6v66H40A2,2,0,0,1,38,192Zm178,2H142V134h76v58A2,2,0,0,1,216,194Z" />
    </Svg>
  );
});
