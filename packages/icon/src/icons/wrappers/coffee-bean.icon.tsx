import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CoffeeBeanBoldIcon } from "../bold/coffee-bean-bold.icon";
import { CoffeeBeanDuotoneIcon } from "../duotone/coffee-bean-duotone.icon";
import { CoffeeBeanFillIcon } from "../fill/coffee-bean-fill.icon";
import { CoffeeBeanLightIcon } from "../light/coffee-bean-light.icon";
import { CoffeeBeanRegularIcon } from "../regular/coffee-bean-regular.icon";
import { CoffeeBeanThinIcon } from "../thin/coffee-bean-thin.icon";

export const CoffeeBeanIcon = memo(function CoffeeBean(
  props: IconWrapperProps,
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
