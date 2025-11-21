import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SoundcloudLogoThinIcon = memo(function SoundcloudLogoThin(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M20,120v48a4,4,0,0,1-8,0V120a4,4,0,0,1,8,0ZM48,92a4,4,0,0,0-4,4v96a4,4,0,0,0,8,0V96A4,4,0,0,0,48,92Zm32-8a4,4,0,0,0-4,4V192a4,4,0,0,0,8,0V88A4,4,0,0,0,80,84Zm32-32a4,4,0,0,0-4,4V192a4,4,0,0,0,8,0V56A4,4,0,0,0,112,52Zm107.27,57.46A76,76,0,0,0,144,44a4,4,0,0,0,0,8,67.75,67.75,0,0,1,67.66,61.13,4,4,0,0,0,3.22,3.53A36,36,0,0,1,208,188H144a4,4,0,0,0,0,8h64a44,44,0,0,0,11.27-86.54Z" />
    </Svg>
  );
});
