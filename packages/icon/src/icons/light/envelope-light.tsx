import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const EnvelopeLight = memo(function EnvelopeLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.86L47.42,62H208.58ZM101.67,128,38,186.36V69.64Zm8.88,8.14L124,148.42a6,6,0,0,0,8.1,0l13.4-12.28L208.58,194H47.43ZM154.33,128,218,69.64V186.36Z" />
    </Svg>
  );
});
