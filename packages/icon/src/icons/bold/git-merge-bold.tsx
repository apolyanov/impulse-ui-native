import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GitMergeBold = memo(function GitMergeBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,108a36.05,36.05,0,0,0-33.38,22.54l-39-5.57a4,4,0,0,1-2.47-1.35L100.55,85.53A36,36,0,1,0,68,89.94v76.12a36,36,0,1,0,24,0V112.44l23,26.8a28,28,0,0,0,17.3,9.49l41.34,5.91A36,36,0,1,0,208,108ZM80,44A12,12,0,1,1,68,56,12,12,0,0,1,80,44Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,80,212Zm128-56a12,12,0,1,1,12-12A12,12,0,0,1,208,156Z" />
    </Svg>
  );
});
