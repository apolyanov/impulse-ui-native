import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BicycleBoldIcon } from "../bold";
import { BicycleDuotoneIcon } from "../duotone";
import { BicycleFillIcon } from "../fill";
import { BicycleLightIcon } from "../light";
import { BicycleRegularIcon } from "../regular";
import { BicycleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BicycleIcon = memo(function Bicycle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BicycleBoldIcon,
      duotone: BicycleDuotoneIcon,
      fill: BicycleFillIcon,
      light: BicycleLightIcon,
      regular: BicycleRegularIcon,
      thin: BicycleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
