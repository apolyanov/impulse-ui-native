import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CropLightIcon = memo(function CropLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M238,192a6,6,0,0,1-6,6H198v34a6,6,0,0,1-12,0V198H64a6,6,0,0,1-6-6V70H24a6,6,0,0,1,0-12H58V24a6,6,0,0,1,12,0V186H232A6,6,0,0,1,238,192ZM96,70h90v90a6,6,0,0,0,12,0V64a6,6,0,0,0-6-6H96a6,6,0,0,0,0,12Z" />
    </Svg>
  );
});
