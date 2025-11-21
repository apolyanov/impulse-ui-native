import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowsInLineHorizontalLightIcon = memo(
  function ArrowsInLineHorizontalLight(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M134,40V216a6,6,0,0,1-12,0V40a6,6,0,0,1,12,0ZM68.24,91.76a6,6,0,0,0-8.48,8.48L81.51,122H16a6,6,0,0,0,0,12H81.51L59.76,155.76a6,6,0,1,0,8.48,8.48l32-32a6,6,0,0,0,0-8.48ZM240,122H174.49l21.75-21.76a6,6,0,0,0-8.48-8.48l-32,32a6,6,0,0,0,0,8.48l32,32a6,6,0,0,0,8.48-8.48L174.49,134H240a6,6,0,0,0,0-12Z" />
      </Svg>
    );
  }
);
