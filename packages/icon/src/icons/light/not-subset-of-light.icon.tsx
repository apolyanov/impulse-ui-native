import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NotSubsetOfLightIcon = memo(function NotSubsetOfLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212,35.56a6,6,0,0,0-8.48.4l-5.49,6H128A85.93,85.93,0,0,0,65.9,187.4L43.56,212A6,6,0,0,0,52.44,220l22.33-24.57A85.52,85.52,0,0,0,128,214h72a6,6,0,0,0,0-12H128a73.65,73.65,0,0,1-45.14-15.42L212.44,44A6,6,0,0,0,212,35.56ZM54,128a74.09,74.09,0,0,1,74-74h59.16L74,178.5A73.7,73.7,0,0,1,54,128Z" />
    </Svg>
  );
});
