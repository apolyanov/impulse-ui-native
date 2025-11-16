import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FireTruckBold } from "../bold";
import { FireTruckDuotone } from "../duotone";
import { FireTruckFill } from "../fill";
import { FireTruckLight } from "../light";
import { FireTruckRegular } from "../regular";
import { FireTruckThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FireTruck = memo(function FireTruck(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FireTruckBold,
      duotone: FireTruckDuotone,
      fill: FireTruckFill,
      light: FireTruckLight,
      regular: FireTruckRegular,
      thin: FireTruckThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
