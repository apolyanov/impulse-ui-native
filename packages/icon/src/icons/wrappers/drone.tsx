import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DroneBold } from "../bold";
import { DroneDuotone } from "../duotone";
import { DroneFill } from "../fill";
import { DroneLight } from "../light";
import { DroneRegular } from "../regular";
import { DroneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Drone = memo(function Drone(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DroneBold,
      duotone: DroneDuotone,
      fill: DroneFill,
      light: DroneLight,
      regular: DroneRegular,
      thin: DroneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
