import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChalkboardSimpleRegular = memo(function ChalkboardSimpleRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,192h-8V168a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v24H40V56H216v80a8,8,0,0,0,16,0V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-72-16h48v16H168Z" />
    </Svg>
  );
});
