import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BusBold } from "../bold";
import { BusDuotone } from "../duotone";
import { BusFill } from "../fill";
import { BusLight } from "../light";
import { BusRegular } from "../regular";
import { BusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bus = memo(function Bus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BusBold,
      duotone: BusDuotone,
      fill: BusFill,
      light: BusLight,
      regular: BusRegular,
      thin: BusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
