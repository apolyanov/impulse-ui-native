import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DroneBoldIcon } from "../bold";
import { DroneDuotoneIcon } from "../duotone";
import { DroneFillIcon } from "../fill";
import { DroneLightIcon } from "../light";
import { DroneRegularIcon } from "../regular";
import { DroneThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DroneIcon = memo(function Drone(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DroneBoldIcon,
      duotone: DroneDuotoneIcon,
      fill: DroneFillIcon,
      light: DroneLightIcon,
      regular: DroneRegularIcon,
      thin: DroneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
