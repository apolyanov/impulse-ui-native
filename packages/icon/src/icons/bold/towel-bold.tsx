import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TowelBold = memo(function TowelBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M197.16,20c-.47,0-.93,0-1.39,0H72A28,28,0,0,0,44,48V216a20,20,0,0,0,20,20H168a20,20,0,0,0,20-20V52A8,8,0,0,1,196,44h.35a8.33,8.33,0,0,1,7.7,8.48V148a12,12,0,0,0,24,0V52.48A32.13,32.13,0,0,0,197.16,20ZM72,44h93a32.24,32.24,0,0,0-1,8V172H68V48A4,4,0,0,1,72,44ZM68,212V196h96v16Z" />
    </Svg>
  );
});
