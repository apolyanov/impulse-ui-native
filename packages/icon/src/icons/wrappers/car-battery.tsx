import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CarBatteryBold } from "../bold";
import { CarBatteryDuotone } from "../duotone";
import { CarBatteryFill } from "../fill";
import { CarBatteryLight } from "../light";
import { CarBatteryRegular } from "../regular";
import { CarBatteryThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CarBattery = memo(function CarBattery(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CarBatteryBold,
      duotone: CarBatteryDuotone,
      fill: CarBatteryFill,
      light: CarBatteryLight,
      regular: CarBatteryRegular,
      thin: CarBatteryThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
