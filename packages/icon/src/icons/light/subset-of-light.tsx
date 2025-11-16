import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SubsetOfLight = memo(function SubsetOfLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M206,208a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12H200A6,6,0,0,1,206,208Zm-6-46H104a50,50,0,0,1,0-100h96a6,6,0,0,0,0-12H104a62,62,0,0,0,0,124h96a6,6,0,0,0,0-12Z" />
    </Svg>
  );
});
