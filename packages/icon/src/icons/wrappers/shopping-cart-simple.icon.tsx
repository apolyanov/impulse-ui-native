import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShoppingCartSimpleBoldIcon } from "../bold/shopping-cart-simple-bold.icon";
import { ShoppingCartSimpleDuotoneIcon } from "../duotone/shopping-cart-simple-duotone.icon";
import { ShoppingCartSimpleFillIcon } from "../fill/shopping-cart-simple-fill.icon";
import { ShoppingCartSimpleLightIcon } from "../light/shopping-cart-simple-light.icon";
import { ShoppingCartSimpleRegularIcon } from "../regular/shopping-cart-simple-regular.icon";
import { ShoppingCartSimpleThinIcon } from "../thin/shopping-cart-simple-thin.icon";

export const ShoppingCartSimpleIcon = memo(function ShoppingCartSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShoppingCartSimpleBoldIcon,
      duotone: ShoppingCartSimpleDuotoneIcon,
      fill: ShoppingCartSimpleFillIcon,
      light: ShoppingCartSimpleLightIcon,
      regular: ShoppingCartSimpleRegularIcon,
      thin: ShoppingCartSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
