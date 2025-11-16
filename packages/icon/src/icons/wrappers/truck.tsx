import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TruckBold } from "../bold";
import { TruckDuotone } from "../duotone";
import { TruckFill } from "../fill";
import { TruckLight } from "../light";
import { TruckRegular } from "../regular";
import { TruckThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Truck = memo(function Truck(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TruckBold,
      duotone: TruckDuotone,
      fill: TruckFill,
      light: TruckLight,
      regular: TruckRegular,
      thin: TruckThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
