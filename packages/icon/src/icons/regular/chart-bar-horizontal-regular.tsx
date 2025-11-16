import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChartBarHorizontalRegular = memo(
  function ChartBarHorizontalRegular(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M224,96H184V56a8,8,0,0,0-8-8H56V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0v-8h88a8,8,0,0,0,8-8V160h72a8,8,0,0,0,8-8V104A8,8,0,0,0,224,96ZM168,64V96H56V64ZM136,192H56V160h80Zm80-48H56V112H216Z" />
      </Svg>
    );
  },
);
