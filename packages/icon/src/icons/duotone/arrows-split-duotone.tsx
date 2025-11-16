import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowsSplitDuotone = memo(function ArrowsSplitDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M192,136v80H64V136l64-64Z" opacity={0.2} />
      <Path d="M229.66,189.66l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L184,196.69V139.31l-56-56-56,56v57.38l18.34-18.35a8,8,0,0,1,11.32,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L56,196.69V136a8,8,0,0,1,2.34-5.66L120,68.69V24a8,8,0,0,1,16,0V68.69l61.66,61.65A8,8,0,0,1,200,136v60.69l18.34-18.35a8,8,0,0,1,11.32,11.32Z" />
    </Svg>
  );
});
