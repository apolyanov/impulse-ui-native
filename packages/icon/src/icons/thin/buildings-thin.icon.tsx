import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BuildingsThinIcon = memo(function BuildingsThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,212H220V96a12,12,0,0,0-12-12H140V32a12,12,0,0,0-18.66-10l-80,53.33a12,12,0,0,0-5.34,10V212H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM208,92a4,4,0,0,1,4,4V212H140V92ZM44,85.34A4,4,0,0,1,45.78,82l80-53.33A4,4,0,0,1,132,32V212H44ZM108,112v16a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm-32,0v16a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm0,56v16a4,4,0,0,1-8,0V168a4,4,0,0,1,8,0Zm32,0v16a4,4,0,0,1-8,0V168a4,4,0,0,1,8,0Z" />
    </Svg>
  );
});
