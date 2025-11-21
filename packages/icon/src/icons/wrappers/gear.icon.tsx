import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GearBoldIcon } from "../bold";
import { GearDuotoneIcon } from "../duotone";
import { GearFillIcon } from "../fill";
import { GearLightIcon } from "../light";
import { GearRegularIcon } from "../regular";
import { GearThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GearIcon = memo(function Gear(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GearBoldIcon,
      duotone: GearDuotoneIcon,
      fill: GearFillIcon,
      light: GearLightIcon,
      regular: GearRegularIcon,
      thin: GearThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
