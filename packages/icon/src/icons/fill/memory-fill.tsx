import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MemoryFill = memo(function MemoryFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,56H24A16,16,0,0,0,8,72V200a8,8,0,0,0,16,0V184H40v16a8,8,0,0,0,16,0V184H72v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V72A16,16,0,0,0,232,56ZM208,96v48H144V96Zm-96,0v48H48V96Z" />
    </Svg>
  );
});
