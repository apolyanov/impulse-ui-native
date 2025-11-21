import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LampLightIcon = memo(function LampLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M245.51,149.64l-48-112A6,6,0,0,0,192,34H64a6,6,0,0,0-5.51,3.64l-48,112A6,6,0,0,0,16,158H122v52H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12H134V158h60v34a6,6,0,0,0,12,0V158h34a6,6,0,0,0,5.51-8.36ZM25.1,146,68,46H188L230.9,146Z" />
    </Svg>
  );
});
