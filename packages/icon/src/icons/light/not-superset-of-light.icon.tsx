import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NotSupersetOfLightIcon = memo(function NotSupersetOfLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,194H76.11l25.45-28H152A62,62,0,0,0,196.81,61.22L212.44,44A6,6,0,1,0,203.56,36L187.73,53.38A61.61,61.61,0,0,0,152,42H56a6,6,0,0,0,0,12h96a49.67,49.67,0,0,1,27.59,8.33L96.25,154H56a6,6,0,0,0,0,12H85.35L43.56,212A6,6,0,0,0,52.44,220L65.2,206H208a6,6,0,0,0,0-12ZM188.73,70.12A50,50,0,0,1,152,154H112.47Z" />
    </Svg>
  );
});
