import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CoffeeBold } from "../bold";
import { CoffeeDuotone } from "../duotone";
import { CoffeeFill } from "../fill";
import { CoffeeLight } from "../light";
import { CoffeeRegular } from "../regular";
import { CoffeeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Coffee = memo(function Coffee(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CoffeeBold,
      duotone: CoffeeDuotone,
      fill: CoffeeFill,
      light: CoffeeLight,
      regular: CoffeeRegular,
      thin: CoffeeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
