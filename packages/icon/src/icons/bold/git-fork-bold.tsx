import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GitForkBold = memo(function GitForkBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M228,64a36,36,0,1,0-48,33.94V112a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V97.94a36,36,0,1,0-24,0V112a28,28,0,0,0,28,28h36v18.06a36,36,0,1,0,24,0V140h36a28,28,0,0,0,28-28V97.94A36.07,36.07,0,0,0,228,64ZM64,52A12,12,0,1,1,52,64,12,12,0,0,1,64,52Zm64,152a12,12,0,1,1,12-12A12,12,0,0,1,128,204ZM192,76a12,12,0,1,1,12-12A12,12,0,0,1,192,76Z" />
    </Svg>
  );
});
