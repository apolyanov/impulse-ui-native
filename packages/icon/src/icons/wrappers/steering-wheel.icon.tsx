import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SteeringWheelBoldIcon } from "../bold";
import { SteeringWheelDuotoneIcon } from "../duotone";
import { SteeringWheelFillIcon } from "../fill";
import { SteeringWheelLightIcon } from "../light";
import { SteeringWheelRegularIcon } from "../regular";
import { SteeringWheelThinIcon } from "../thin";

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
