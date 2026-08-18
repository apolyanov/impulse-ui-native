import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MotorcycleBoldIcon } from "../bold/motorcycle-bold.icon";
import { MotorcycleDuotoneIcon } from "../duotone/motorcycle-duotone.icon";
import { MotorcycleFillIcon } from "../fill/motorcycle-fill.icon";
import { MotorcycleLightIcon } from "../light/motorcycle-light.icon";
import { MotorcycleRegularIcon } from "../regular/motorcycle-regular.icon";
import { MotorcycleThinIcon } from "../thin/motorcycle-thin.icon";

export const MotorcycleIcon = memo(function Motorcycle(
  props: IconWrapperProps,
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
