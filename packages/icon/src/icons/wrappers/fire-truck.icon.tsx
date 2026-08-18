import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FireTruckBoldIcon } from "../bold/fire-truck-bold.icon";
import { FireTruckDuotoneIcon } from "../duotone/fire-truck-duotone.icon";
import { FireTruckFillIcon } from "../fill/fire-truck-fill.icon";
import { FireTruckLightIcon } from "../light/fire-truck-light.icon";
import { FireTruckRegularIcon } from "../regular/fire-truck-regular.icon";
import { FireTruckThinIcon } from "../thin/fire-truck-thin.icon";

export const FireTruckIcon = memo(function FireTruck(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FireTruckBoldIcon,
      duotone: FireTruckDuotoneIcon,
      fill: FireTruckFillIcon,
      light: FireTruckLightIcon,
      regular: FireTruckRegularIcon,
      thin: FireTruckThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
