import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PizzaBold } from "../bold";
import { PizzaDuotone } from "../duotone";
import { PizzaFill } from "../fill";
import { PizzaLight } from "../light";
import { PizzaRegular } from "../regular";
import { PizzaThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Pizza = memo(function Pizza(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PizzaBold,
      duotone: PizzaDuotone,
      fill: PizzaFill,
      light: PizzaLight,
      regular: PizzaRegular,
      thin: PizzaThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
