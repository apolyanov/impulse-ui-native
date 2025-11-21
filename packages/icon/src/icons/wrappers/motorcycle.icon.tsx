import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MotorcycleBoldIcon } from "../bold";
import { MotorcycleDuotoneIcon } from "../duotone";
import { MotorcycleFillIcon } from "../fill";
import { MotorcycleLightIcon } from "../light";
import { MotorcycleRegularIcon } from "../regular";
import { MotorcycleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MotorcycleIcon = memo(function Motorcycle(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MotorcycleBoldIcon,
      duotone: MotorcycleDuotoneIcon,
      fill: MotorcycleFillIcon,
      light: MotorcycleLightIcon,
      regular: MotorcycleRegularIcon,
      thin: MotorcycleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
