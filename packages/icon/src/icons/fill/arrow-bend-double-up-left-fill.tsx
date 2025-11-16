import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowBendDoubleUpLeftFill = memo(
  function ArrowBendDoubleUpLeftFill(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M85.66,146.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L43.31,104ZM136,96.3V56a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,136,152V112.37A88.11,88.11,0,0,1,216,200a8,8,0,0,0,16,0A104.15,104.15,0,0,0,136,96.3Z" />
      </Svg>
    );
  },
);
