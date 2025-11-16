import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowUpLeftDuotone = memo(function ArrowElbowUpLeftDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M96,32v96L48,80Z" opacity={0.2} />
      <Path d="M192,72H104V32a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,104,128V88h80V224a8,8,0,0,0,16,0V80A8,8,0,0,0,192,72ZM88,108.69,59.31,80,88,51.31Z" />
    </Svg>
  );
});
