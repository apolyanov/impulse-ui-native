import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CouchRegular = memo(function CouchRegular(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,106.17V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72v34.17A16,16,0,0,0,8,120v48a16,16,0,0,0,16,16h8v16a8,8,0,0,0,16,0V184H208v16a8,8,0,0,0,16,0V184h8a16,16,0,0,0,16-16V120A16,16,0,0,0,240,106.17ZM224,104h-8a16,16,0,0,0-16,16v16H136V72h88ZM120,72v64H56V120a16,16,0,0,0-16-16H32V72Zm112,96H24V120H40v24a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V120h16Z" />
    </Svg>
  );
});
