import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CoffeeBeanBoldIcon } from "../bold";
import { CoffeeBeanDuotoneIcon } from "../duotone";
import { CoffeeBeanFillIcon } from "../fill";
import { CoffeeBeanLightIcon } from "../light";
import { CoffeeBeanRegularIcon } from "../regular";
import { CoffeeBeanThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CoffeeBeanIcon = memo(function CoffeeBean(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CoffeeBeanBoldIcon,
      duotone: CoffeeBeanDuotoneIcon,
      fill: CoffeeBeanFillIcon,
      light: CoffeeBeanLightIcon,
      regular: CoffeeBeanRegularIcon,
      thin: CoffeeBeanThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
