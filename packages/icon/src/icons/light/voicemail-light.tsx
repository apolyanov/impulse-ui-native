import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const VoicemailLight = memo(function VoicemailLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,74a54,54,0,0,0-33.89,96H89.89A54,54,0,1,0,56,182H200a54,54,0,0,0,0-108ZM14,128a42,42,0,1,1,42,42A42,42,0,0,1,14,128Zm186,42a42,42,0,1,1,42-42A42,42,0,0,1,200,170Z" />
    </Svg>
  );
});
