import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShoppingCartBoldIcon } from "../bold/shopping-cart-bold.icon";
import { ShoppingCartDuotoneIcon } from "../duotone/shopping-cart-duotone.icon";
import { ShoppingCartFillIcon } from "../fill/shopping-cart-fill.icon";
import { ShoppingCartLightIcon } from "../light/shopping-cart-light.icon";
import { ShoppingCartRegularIcon } from "../regular/shopping-cart-regular.icon";
import { ShoppingCartThinIcon } from "../thin/shopping-cart-thin.icon";

export const ShoppingCartIcon = memo(function ShoppingCart(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShoppingCartBoldIcon,
      duotone: ShoppingCartDuotoneIcon,
      fill: ShoppingCartFillIcon,
      light: ShoppingCartLightIcon,
      regular: ShoppingCartRegularIcon,
      thin: ShoppingCartThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
