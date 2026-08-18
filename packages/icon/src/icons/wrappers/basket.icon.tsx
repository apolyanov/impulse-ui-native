import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BasketBoldIcon } from "../bold/basket-bold.icon";
import { BasketDuotoneIcon } from "../duotone/basket-duotone.icon";
import { BasketFillIcon } from "../fill/basket-fill.icon";
import { BasketLightIcon } from "../light/basket-light.icon";
import { BasketRegularIcon } from "../regular/basket-regular.icon";
import { BasketThinIcon } from "../thin/basket-thin.icon";

export const BasketIcon = memo(function Basket(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BasketBoldIcon,
      duotone: BasketDuotoneIcon,
      fill: BasketFillIcon,
      light: BasketLightIcon,
      regular: BasketRegularIcon,
      thin: BasketThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
