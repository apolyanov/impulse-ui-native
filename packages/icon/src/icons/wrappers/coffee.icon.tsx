import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CoffeeBoldIcon } from "../bold/coffee-bold.icon";
import { CoffeeDuotoneIcon } from "../duotone/coffee-duotone.icon";
import { CoffeeFillIcon } from "../fill/coffee-fill.icon";
import { CoffeeLightIcon } from "../light/coffee-light.icon";
import { CoffeeRegularIcon } from "../regular/coffee-regular.icon";
import { CoffeeThinIcon } from "../thin/coffee-thin.icon";

export const CoffeeIcon = memo(function Coffee(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CoffeeBoldIcon,
      duotone: CoffeeDuotoneIcon,
      fill: CoffeeFillIcon,
      light: CoffeeLightIcon,
      regular: CoffeeRegularIcon,
      thin: CoffeeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
