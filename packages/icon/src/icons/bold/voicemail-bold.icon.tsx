import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const VoicemailBoldIcon = memo(function VoicemailBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M196,68a60,60,0,0,0-48,96H108a60,60,0,1,0-48,24H196a60,60,0,0,0,0-120ZM24,128a36,36,0,1,1,36,36A36,36,0,0,1,24,128Zm172,36a36,36,0,1,1,36-36A36,36,0,0,1,196,164Z" />
    </Svg>
  );
});
