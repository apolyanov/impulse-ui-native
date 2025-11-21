import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CarBatteryBoldIcon } from "../bold";
import { CarBatteryDuotoneIcon } from "../duotone";
import { CarBatteryFillIcon } from "../fill";
import { CarBatteryLightIcon } from "../light";
import { CarBatteryRegularIcon } from "../regular";
import { CarBatteryThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CarBatteryIcon = memo(function CarBattery(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CarBatteryBoldIcon,
      duotone: CarBatteryDuotoneIcon,
      fill: CarBatteryFillIcon,
      light: CarBatteryLightIcon,
      regular: CarBatteryRegularIcon,
      thin: CarBatteryThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
