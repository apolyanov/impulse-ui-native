import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BicycleBoldIcon } from "../bold/bicycle-bold.icon";
import { BicycleDuotoneIcon } from "../duotone/bicycle-duotone.icon";
import { BicycleFillIcon } from "../fill/bicycle-fill.icon";
import { BicycleLightIcon } from "../light/bicycle-light.icon";
import { BicycleRegularIcon } from "../regular/bicycle-regular.icon";
import { BicycleThinIcon } from "../thin/bicycle-thin.icon";

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
