import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BusBoldIcon } from "../bold/bus-bold.icon";
import { BusDuotoneIcon } from "../duotone/bus-duotone.icon";
import { BusFillIcon } from "../fill/bus-fill.icon";
import { BusLightIcon } from "../light/bus-light.icon";
import { BusRegularIcon } from "../regular/bus-regular.icon";
import { BusThinIcon } from "../thin/bus-thin.icon";

export const BusIcon = memo(function Bus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BusBoldIcon,
      duotone: BusDuotoneIcon,
      fill: BusFillIcon,
      light: BusLightIcon,
      regular: BusRegularIcon,
      thin: BusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
