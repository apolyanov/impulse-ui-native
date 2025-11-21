import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PizzaBoldIcon } from "../bold";
import { PizzaDuotoneIcon } from "../duotone";
import { PizzaFillIcon } from "../fill";
import { PizzaLightIcon } from "../light";
import { PizzaRegularIcon } from "../regular";
import { PizzaThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
