import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlugChargingBold } from "../bold";
import { PlugChargingDuotone } from "../duotone";
import { PlugChargingFill } from "../fill";
import { PlugChargingLight } from "../light";
import { PlugChargingRegular } from "../regular";
import { PlugChargingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PlugCharging = memo(function PlugCharging(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlugChargingBold,
      duotone: PlugChargingDuotone,
      fill: PlugChargingFill,
      light: PlugChargingLight,
      regular: PlugChargingRegular,
      thin: PlugChargingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
