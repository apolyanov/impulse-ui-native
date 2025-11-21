import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowBendLeftDownDuotoneIcon = memo(
  function ArrowBendLeftDownDuotone(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M152,176l-48,48L56,176Z" opacity={0.2} />
        <Path d="M200,24A104.11,104.11,0,0,0,96,128v40H56a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,152,168H112V128a88.1,88.1,0,0,1,88-88,8,8,0,0,0,0-16ZM104,212.69,75.31,184h57.38Z" />
      </Svg>
    );
  }
);
