import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ParachuteBoldIcon } from "../bold/parachute-bold.icon";
import { ParachuteDuotoneIcon } from "../duotone/parachute-duotone.icon";
import { ParachuteFillIcon } from "../fill/parachute-fill.icon";
import { ParachuteLightIcon } from "../light/parachute-light.icon";
import { ParachuteRegularIcon } from "../regular/parachute-regular.icon";
import { ParachuteThinIcon } from "../thin/parachute-thin.icon";

export const ParachuteIcon = memo(function Parachute(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ParachuteBoldIcon,
      duotone: ParachuteDuotoneIcon,
      fill: ParachuteFillIcon,
      light: ParachuteLightIcon,
      regular: ParachuteRegularIcon,
      thin: ParachuteThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
