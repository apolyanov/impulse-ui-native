import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FilmSlateBold = memo(function FilmSlateBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,100H132.92l78.14-20.63a12,12,0,0,0,8.52-14.75l-8.16-30a19.94,19.94,0,0,0-24.3-13.95L34.79,60.87a19.74,19.74,0,0,0-12.14,9.27,19.48,19.48,0,0,0-1.95,15L28,112v88a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V112A12,12,0,0,0,216,100ZM124.89,61.91l18.29,10.56-25.95,6.85L98.94,68.76Zm64.45-17,3.91,14.35-17.13,4.52L157.83,53.21ZM66,77.46,84.29,88l-35.4,9.35L45,83ZM204,196H52V124H204Z" />
    </Svg>
  );
});
