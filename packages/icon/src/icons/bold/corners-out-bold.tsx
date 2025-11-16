import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CornersOutBold = memo(function CornersOutBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M220,48V88a12,12,0,0,1-24,0V60H168a12,12,0,0,1,0-24h40A12,12,0,0,1,220,48ZM88,196H60V168a12,12,0,0,0-24,0v40a12,12,0,0,0,12,12H88a12,12,0,0,0,0-24Zm120-40a12,12,0,0,0-12,12v28H168a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V168A12,12,0,0,0,208,156ZM88,36H48A12,12,0,0,0,36,48V88a12,12,0,0,0,24,0V60H88a12,12,0,0,0,0-24Z" />
    </Svg>
  );
});
