import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GearBoldIcon } from "../bold/gear-bold.icon";
import { GearDuotoneIcon } from "../duotone/gear-duotone.icon";
import { GearFillIcon } from "../fill/gear-fill.icon";
import { GearLightIcon } from "../light/gear-light.icon";
import { GearRegularIcon } from "../regular/gear-regular.icon";
import { GearThinIcon } from "../thin/gear-thin.icon";

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
