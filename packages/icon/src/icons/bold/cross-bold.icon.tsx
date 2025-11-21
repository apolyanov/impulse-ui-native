import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CrossBoldIcon = memo(function CrossBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,68H164V32a20,20,0,0,0-20-20H112A20,20,0,0,0,92,32V68H56A20,20,0,0,0,36,88v32a20,20,0,0,0,20,20H92v84a20,20,0,0,0,20,20h32a20,20,0,0,0,20-20V140h36a20,20,0,0,0,20-20V88A20,20,0,0,0,200,68Zm-4,48H152a12,12,0,0,0-12,12v92H116V128a12,12,0,0,0-12-12H60V92h44a12,12,0,0,0,12-12V36h24V80a12,12,0,0,0,12,12h44Z" />
    </Svg>
  );
});
