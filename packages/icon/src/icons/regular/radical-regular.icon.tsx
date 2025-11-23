import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const RadicalRegularIcon = memo(function RadicalRegular(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M248,80v24a8,8,0,0,1-16,0V88H133.55L87.49,210.81a8,8,0,0,1-15,0l-48-128a8,8,0,1,1,15-5.62L80,185.22l40.51-108A8,8,0,0,1,128,72H240A8,8,0,0,1,248,80Z" />
    </Svg>
  );
});
