import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CodeSimpleLight = memo(function CodeSimpleLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M92,68.49,25,128l67,59.52a6,6,0,1,1-8,9l-72-64a6,6,0,0,1,0-9l72-64a6,6,0,0,1,8,9Zm152,55-72-64a6,6,0,0,0-8,9L231,128l-67,59.52a6,6,0,1,0,8,9l72-64a6,6,0,0,0,0-9Z" />
    </Svg>
  );
});
