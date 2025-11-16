import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CoffeeBeanBold } from "../bold";
import { CoffeeBeanDuotone } from "../duotone";
import { CoffeeBeanFill } from "../fill";
import { CoffeeBeanLight } from "../light";
import { CoffeeBeanRegular } from "../regular";
import { CoffeeBeanThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CoffeeBean = memo(function CoffeeBean(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CoffeeBeanBold,
      duotone: CoffeeBeanDuotone,
      fill: CoffeeBeanFill,
      light: CoffeeBeanLight,
      regular: CoffeeBeanRegular,
      thin: CoffeeBeanThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
