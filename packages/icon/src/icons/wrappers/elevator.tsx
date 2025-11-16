import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ElevatorBold } from "../bold";
import { ElevatorDuotone } from "../duotone";
import { ElevatorFill } from "../fill";
import { ElevatorLight } from "../light";
import { ElevatorRegular } from "../regular";
import { ElevatorThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Elevator = memo(function Elevator(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ElevatorBold,
      duotone: ElevatorDuotone,
      fill: ElevatorFill,
      light: ElevatorLight,
      regular: ElevatorRegular,
      thin: ElevatorThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
