import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryVerticalMediumBoldIcon } from "../bold";
import { BatteryVerticalMediumDuotoneIcon } from "../duotone";
import { BatteryVerticalMediumFillIcon } from "../fill";
import { BatteryVerticalMediumLightIcon } from "../light";
import { BatteryVerticalMediumRegularIcon } from "../regular";
import { BatteryVerticalMediumThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryVerticalMediumIcon = memo(function BatteryVerticalMedium(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryVerticalMediumBoldIcon,
      duotone: BatteryVerticalMediumDuotoneIcon,
      fill: BatteryVerticalMediumFillIcon,
      light: BatteryVerticalMediumLightIcon,
      regular: BatteryVerticalMediumRegularIcon,
      thin: BatteryVerticalMediumThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
