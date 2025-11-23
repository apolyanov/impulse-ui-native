import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const JarBoldIcon = memo(function JarBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M188,49.68V32a20,20,0,0,0-20-20H88A20,20,0,0,0,68,32V49.68A44.06,44.06,0,0,0,36,92V200a44.05,44.05,0,0,0,44,44h96a44.05,44.05,0,0,0,44-44V92A44.06,44.06,0,0,0,188,49.68ZM164,48H140V36h24ZM116,36V48H92V36Zm80,164a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V92A20,20,0,0,1,80,72h96a20,20,0,0,1,20,20Z" />
    </Svg>
  );
});
