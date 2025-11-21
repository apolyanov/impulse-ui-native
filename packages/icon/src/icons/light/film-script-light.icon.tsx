import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FilmScriptLightIcon = memo(function FilmScriptLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26Zm2,190a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2ZM94,80A10,10,0,1,1,84,70,10,10,0,0,1,94,80Zm0,96a10,10,0,1,1-10-10A10,10,0,0,1,94,176Zm0-48a10,10,0,1,1-10-10A10,10,0,0,1,94,128Z" />
    </Svg>
  );
});
