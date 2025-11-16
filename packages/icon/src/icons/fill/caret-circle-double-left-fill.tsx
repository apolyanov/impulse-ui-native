import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CaretCircleDoubleLeftFill = memo(
  function CaretCircleDoubleLeftFill(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M201.57,54.42a104,104,0,1,0,0,147.15A104.17,104.17,0,0,0,201.57,54.42Zm-83.92,99.93a8,8,0,1,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,1,1,11.32,11.32L91.29,128Zm56,0a8,8,0,1,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,1,1,11.32,11.32L147.32,128Z" />
      </Svg>
    );
  },
);
