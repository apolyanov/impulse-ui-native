import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TreeStructureBoldIcon = memo(function TreeStructureBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M160,116h48a20,20,0,0,0,20-20V48a20,20,0,0,0-20-20H160a20,20,0,0,0-20,20V60H128a28,28,0,0,0-28,28v28H76v-4A20,20,0,0,0,56,92H24A20,20,0,0,0,4,112v32a20,20,0,0,0,20,20H56a20,20,0,0,0,20-20v-4h24v28a28,28,0,0,0,28,28h12v12a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V160a20,20,0,0,0-20-20H160a20,20,0,0,0-20,20v12H128a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4h12V96A20,20,0,0,0,160,116ZM52,140H28V116H52Zm112,24h40v40H164Zm0-112h40V92H164Z" />
    </Svg>
  );
});
