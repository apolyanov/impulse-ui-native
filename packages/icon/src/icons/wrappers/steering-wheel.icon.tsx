import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SteeringWheelBoldIcon } from "../bold/steering-wheel-bold.icon";
import { SteeringWheelDuotoneIcon } from "../duotone/steering-wheel-duotone.icon";
import { SteeringWheelFillIcon } from "../fill/steering-wheel-fill.icon";
import { SteeringWheelLightIcon } from "../light/steering-wheel-light.icon";
import { SteeringWheelRegularIcon } from "../regular/steering-wheel-regular.icon";
import { SteeringWheelThinIcon } from "../thin/steering-wheel-thin.icon";

export const SteeringWheelIcon = memo(function SteeringWheel(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SteeringWheelBoldIcon,
      duotone: SteeringWheelDuotoneIcon,
      fill: SteeringWheelFillIcon,
      light: SteeringWheelLightIcon,
      regular: SteeringWheelRegularIcon,
      thin: SteeringWheelThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
