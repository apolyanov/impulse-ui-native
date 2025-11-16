import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NotebookThin = memo(function NotebookThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M180,112a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h64A4,4,0,0,1,180,112Zm-4,28H112a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm44-92V208a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48ZM48,212H76V44H48a4,4,0,0,0-4,4V208A4,4,0,0,0,48,212ZM212,48a4,4,0,0,0-4-4H84V212H208a4,4,0,0,0,4-4Z" />
    </Svg>
  );
});
