import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CarBatteryBoldIcon } from "../bold/car-battery-bold.icon";
import { CarBatteryDuotoneIcon } from "../duotone/car-battery-duotone.icon";
import { CarBatteryFillIcon } from "../fill/car-battery-fill.icon";
import { CarBatteryLightIcon } from "../light/car-battery-light.icon";
import { CarBatteryRegularIcon } from "../regular/car-battery-regular.icon";
import { CarBatteryThinIcon } from "../thin/car-battery-thin.icon";

export const CarBatteryIcon = memo(function CarBattery(
  props: IconWrapperProps,
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
