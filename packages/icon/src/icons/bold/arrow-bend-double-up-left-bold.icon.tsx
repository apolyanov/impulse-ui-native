import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowBendDoubleUpLeftBoldIcon = memo(
  function ArrowBendDoubleUpLeftBold(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M88.49,143.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,0,1,17,17L49,104ZM128,92H117l27.52-27.52a12,12,0,0,0-17-17l-48,48a12,12,0,0,0,0,17l48,48a12,12,0,0,0,17-17L117,116h11a84.09,84.09,0,0,1,84,84,12,12,0,0,0,24,0A108.12,108.12,0,0,0,128,92Z" />
      </Svg>
    );
  }
);
