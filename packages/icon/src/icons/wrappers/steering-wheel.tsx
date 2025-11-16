import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SteeringWheelBold } from "../bold";
import { SteeringWheelDuotone } from "../duotone";
import { SteeringWheelFill } from "../fill";
import { SteeringWheelLight } from "../light";
import { SteeringWheelRegular } from "../regular";
import { SteeringWheelThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SteeringWheel = memo(function SteeringWheel(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SteeringWheelBold,
      duotone: SteeringWheelDuotone,
      fill: SteeringWheelFill,
      light: SteeringWheelLight,
      regular: SteeringWheelRegular,
      thin: SteeringWheelThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
