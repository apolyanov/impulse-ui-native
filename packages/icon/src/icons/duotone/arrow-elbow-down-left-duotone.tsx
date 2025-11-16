import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowDownLeftDuotone = memo(
  function ArrowElbowDownLeftDuotone(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M96,128v96L48,176Z" opacity={0.2} />
        <Path d="M192,24a8,8,0,0,0-8,8V168H104V128a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,104,224V184h88a8,8,0,0,0,8-8V32A8,8,0,0,0,192,24ZM88,204.69,59.31,176,88,147.31Z" />
      </Svg>
    );
  },
);
