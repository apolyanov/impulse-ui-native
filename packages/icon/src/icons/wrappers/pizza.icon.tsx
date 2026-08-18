import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PizzaBoldIcon } from "../bold/pizza-bold.icon";
import { PizzaDuotoneIcon } from "../duotone/pizza-duotone.icon";
import { PizzaFillIcon } from "../fill/pizza-fill.icon";
import { PizzaLightIcon } from "../light/pizza-light.icon";
import { PizzaRegularIcon } from "../regular/pizza-regular.icon";
import { PizzaThinIcon } from "../thin/pizza-thin.icon";

export const PizzaIcon = memo(function Pizza(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PizzaBoldIcon,
      duotone: PizzaDuotoneIcon,
      fill: PizzaFillIcon,
      light: PizzaLightIcon,
      regular: PizzaRegularIcon,
      thin: PizzaThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
