import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ListMagnifyingGlassFill = memo(function ListMagnifyingGlassFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h72a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm88,48H40a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm109.66,2.34L217.36,166A40,40,0,1,0,206,177.36l20.3,20.3a8,8,0,0,0,11.32-11.32Z" />
    </Svg>
  );
});
