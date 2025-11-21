import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SubsetOfRegularIcon = memo(function SubsetOfRegular(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,208a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H200A8,8,0,0,1,208,208Zm-8-48H104a48,48,0,0,1,0-96h96a8,8,0,0,0,0-16H104a64,64,0,0,0,0,128h96a8,8,0,0,0,0-16Z" />
    </Svg>
  );
});
