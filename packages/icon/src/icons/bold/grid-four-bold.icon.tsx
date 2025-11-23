import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GridFourBoldIcon = memo(function GridFourBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,36H56A20,20,0,0,0,36,56V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,80H140V60h56ZM116,60v56H60V60ZM60,140h56v56H60Zm80,56V140h56v56Z" />
    </Svg>
  );
});
