import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const VaultThinIcon = memo(function VaultThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,44H40A12,12,0,0,0,28,56V192a12,12,0,0,0,12,12H60v20a4,4,0,0,0,8,0V204H188v20a4,4,0,0,0,8,0V204h20a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm0,152H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4v68H195.81a44,44,0,1,0,0,8H220v60A4,4,0,0,1,216,196Zm-52.7-72a12,12,0,1,0,0,8h24.47a36,36,0,1,1,0-8Z" />
    </Svg>
  );
});
