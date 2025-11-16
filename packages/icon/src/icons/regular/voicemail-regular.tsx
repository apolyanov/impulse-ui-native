import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const VoicemailRegular = memo(function VoicemailRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,72a56,56,0,0,0-39.14,96H95.14A56,56,0,1,0,56,184H200a56,56,0,0,0,0-112ZM16,128a40,40,0,1,1,40,40A40,40,0,0,1,16,128Zm184,40a40,40,0,1,1,40-40A40,40,0,0,1,200,168Z" />
    </Svg>
  );
});
