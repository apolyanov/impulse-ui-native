import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GoogleLogoLightIcon = memo(function GoogleLogoLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M222,128a94,94,0,1,1-21.49-59.82,6,6,0,1,1-9.25,7.64A82,82,0,1,0,209.78,134H128a6,6,0,0,1,0-12h88A6,6,0,0,1,222,128Z" />
    </Svg>
  );
});
