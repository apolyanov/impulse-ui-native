import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberThreeRegular = memo(function NumberThreeRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M176,160a56,56,0,0,1-93.33,41.74,8,8,0,1,1,10.66-11.92A40,40,0,1,0,120,120a8,8,0,0,1-6.4-12.8L152,56H88a8,8,0,0,1,0-16h80a8,8,0,0,1,6.4,12.8l-39.84,53.12A56.1,56.1,0,0,1,176,160Z" />
    </Svg>
  );
});
