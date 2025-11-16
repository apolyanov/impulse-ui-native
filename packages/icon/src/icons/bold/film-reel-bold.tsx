import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FilmReelBold = memo(function FilmReelBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,212H195.8A107.94,107.94,0,1,0,128,236H232a12,12,0,0,0,0-24ZM44,128a84,84,0,1,1,84,84A84.09,84.09,0,0,1,44,128Zm64-44a20,20,0,1,1,20,20A20,20,0,0,1,108,84Zm20,108a20,20,0,1,1,20-20A20,20,0,0,1,128,192Zm24-64a20,20,0,1,1,20,20A20,20,0,0,1,152,128Zm-48,0a20,20,0,1,1-20-20A20,20,0,0,1,104,128Z" />
    </Svg>
  );
});
