import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DroneBoldIcon } from "../bold/drone-bold.icon";
import { DroneDuotoneIcon } from "../duotone/drone-duotone.icon";
import { DroneFillIcon } from "../fill/drone-fill.icon";
import { DroneLightIcon } from "../light/drone-light.icon";
import { DroneRegularIcon } from "../regular/drone-regular.icon";
import { DroneThinIcon } from "../thin/drone-thin.icon";

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
