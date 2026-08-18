import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TruckBoldIcon } from "../bold/truck-bold.icon";
import { TruckDuotoneIcon } from "../duotone/truck-duotone.icon";
import { TruckFillIcon } from "../fill/truck-fill.icon";
import { TruckLightIcon } from "../light/truck-light.icon";
import { TruckRegularIcon } from "../regular/truck-regular.icon";
import { TruckThinIcon } from "../thin/truck-thin.icon";

export const TruckIcon = memo(function Truck(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TruckBoldIcon,
      duotone: TruckDuotoneIcon,
      fill: TruckFillIcon,
      light: TruckLightIcon,
      regular: TruckRegularIcon,
      thin: TruckThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
