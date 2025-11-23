import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TextTSlashDuotoneIcon = memo(function TextTSlashDuotone(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,56V200H72a16,16,0,0,1-16-16V56Z" opacity={0.2} />
      <Path d="M213.38,221.92a8,8,0,0,1-11.3-.54L136,148.69V192h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V131.09L64,69.49V88a8,8,0,0,1-16,0V56a8,8,0,0,1,.72-3.31l-6.64-7.31A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92ZM105.79,64H120V80.43a8,8,0,0,0,16,0V64h56V88a8,8,0,0,0,16,0V56a8,8,0,0,0-8-8H105.79a8,8,0,0,0,0,16Z" />
    </Svg>
  );
});
