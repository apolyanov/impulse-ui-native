import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FunnelBoldIcon = memo(function FunnelBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M234.29,47.91A20,20,0,0,0,216,36H40A20,20,0,0,0,25.2,69.45l.12.14L92,140.75V216a20,20,0,0,0,31.1,16.64l32-21.33A20,20,0,0,0,164,194.66V140.75l66.67-71.16.12-.14A20,20,0,0,0,234.29,47.91Zm-91,79.89A12,12,0,0,0,140,136v56.52l-24,16V136a12,12,0,0,0-3.25-8.2L49.23,60H206.77Z" />
    </Svg>
  );
});
