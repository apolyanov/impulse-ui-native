import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CopyrightBoldIcon = memo(function CopyrightBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm41.59-52.79a52,52,0,1,1,0-62.43,12,12,0,1,1-19.18,14.42,28,28,0,1,0,0,33.6,12,12,0,1,1,19.18,14.41Z" />
    </Svg>
  );
});
