import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BatteryChargingVerticalBoldIcon } from "../bold";
import { BatteryChargingVerticalDuotoneIcon } from "../duotone";
import { BatteryChargingVerticalFillIcon } from "../fill";
import { BatteryChargingVerticalLightIcon } from "../light";
import { BatteryChargingVerticalRegularIcon } from "../regular";
import { BatteryChargingVerticalThinIcon } from "../thin";

export const BatteryChargingVerticalIcon = memo(
  function BatteryChargingVertical(props: IconWrapperProps) {
    const Icon = useMemo(() => {
      const icons: Record<IconVariant, ComponentType<SvgProps>> = {
        bold: BatteryChargingVerticalBoldIcon,
        duotone: BatteryChargingVerticalDuotoneIcon,
        fill: BatteryChargingVerticalFillIcon,
        light: BatteryChargingVerticalLightIcon,
        regular: BatteryChargingVerticalRegularIcon,
        thin: BatteryChargingVerticalThinIcon,
      };

      return icons[props.variant ?? "regular"];
    }, [props.variant]);

    return <Icon {...props} />;
  },
);
