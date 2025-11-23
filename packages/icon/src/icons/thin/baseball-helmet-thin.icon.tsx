import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BaseballHelmetThinIcon = memo(function BaseballHelmetThin(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M88,132a24,24,0,1,0,24,24A24,24,0,0,0,88,132Zm0,40a16,16,0,1,1,16-16A16,16,0,0,1,88,172Zm160-48H219.92A100,100,0,0,0,20,128v24a68.07,68.07,0,0,0,68,68h40a68.07,68.07,0,0,0,68-68V132h52a4,4,0,0,0,0-8Zm-60,28a60.07,60.07,0,0,1-60,60h-8a68.07,68.07,0,0,0,36-60V132h32Zm-36-28a4,4,0,0,0-4,4v24a60,60,0,0,1-120,0V128a92,92,0,0,1,183.91-4Z" />
    </Svg>
  );
});
