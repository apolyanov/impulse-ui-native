import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlugChargingBoldIcon } from "../bold/plug-charging-bold.icon";
import { PlugChargingDuotoneIcon } from "../duotone/plug-charging-duotone.icon";
import { PlugChargingFillIcon } from "../fill/plug-charging-fill.icon";
import { PlugChargingLightIcon } from "../light/plug-charging-light.icon";
import { PlugChargingRegularIcon } from "../regular/plug-charging-regular.icon";
import { PlugChargingThinIcon } from "../thin/plug-charging-thin.icon";

export const PlugChargingIcon = memo(function PlugCharging(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlugChargingBoldIcon,
      duotone: PlugChargingDuotoneIcon,
      fill: PlugChargingFillIcon,
      light: PlugChargingLightIcon,
      regular: PlugChargingRegularIcon,
      thin: PlugChargingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
