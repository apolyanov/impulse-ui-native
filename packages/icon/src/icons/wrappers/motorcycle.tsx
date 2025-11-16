import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MotorcycleBold } from "../bold";
import { MotorcycleDuotone } from "../duotone";
import { MotorcycleFill } from "../fill";
import { MotorcycleLight } from "../light";
import { MotorcycleRegular } from "../regular";
import { MotorcycleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Motorcycle = memo(function Motorcycle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MotorcycleBold,
      duotone: MotorcycleDuotone,
      fill: MotorcycleFill,
      light: MotorcycleLight,
      regular: MotorcycleRegular,
      thin: MotorcycleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
