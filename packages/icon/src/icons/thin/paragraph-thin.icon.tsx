import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ParagraphThinIcon = memo(function ParagraphThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,44H96a60,60,0,0,0,0,120h44v44a4,4,0,0,0,8,0V52h32V208a4,4,0,0,0,8,0V52h20a4,4,0,0,0,0-8ZM140,156H96A52,52,0,0,1,96,52h44Z" />
    </Svg>
  );
});
