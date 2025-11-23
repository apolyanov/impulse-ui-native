import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberCircleFourBoldIcon = memo(function NumberCircleFourBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm32-72h-4V80a12,12,0,0,0-21.47-7.37l-56,72A12,12,0,0,0,88,164h44v12a12,12,0,0,0,24,0V164h4a12,12,0,0,0,0-24Zm-28,0H112.54L132,115Z" />
    </Svg>
  );
});
