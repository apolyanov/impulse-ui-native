import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CopyLight = memo(function CopyLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z" />
    </Svg>
  );
});
