import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AlignRightLightIcon = memo(function AlignRightLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M222,40V216a6,6,0,0,1-12,0V40a6,6,0,0,1,12,0ZM190,64v40a14,14,0,0,1-14,14H80a14,14,0,0,1-14-14V64A14,14,0,0,1,80,50h96A14,14,0,0,1,190,64Zm-12,0a2,2,0,0,0-2-2H80a2,2,0,0,0-2,2v40a2,2,0,0,0,2,2h96a2,2,0,0,0,2-2Zm12,88v40a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V152a14,14,0,0,1,14-14H176A14,14,0,0,1,190,152Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2v40a2,2,0,0,0,2,2H176a2,2,0,0,0,2-2Z" />
    </Svg>
  );
});
