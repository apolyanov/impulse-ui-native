import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BicycleBold } from "../bold";
import { BicycleDuotone } from "../duotone";
import { BicycleFill } from "../fill";
import { BicycleLight } from "../light";
import { BicycleRegular } from "../regular";
import { BicycleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bicycle = memo(function Bicycle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BicycleBold,
      duotone: BicycleDuotone,
      fill: BicycleFill,
      light: BicycleLight,
      regular: BicycleRegular,
      thin: BicycleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
