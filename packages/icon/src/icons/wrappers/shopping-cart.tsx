import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShoppingCartBold } from "../bold";
import { ShoppingCartDuotone } from "../duotone";
import { ShoppingCartFill } from "../fill";
import { ShoppingCartLight } from "../light";
import { ShoppingCartRegular } from "../regular";
import { ShoppingCartThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShoppingCart = memo(function ShoppingCart(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShoppingCartBold,
      duotone: ShoppingCartDuotone,
      fill: ShoppingCartFill,
      light: ShoppingCartLight,
      regular: ShoppingCartRegular,
      thin: ShoppingCartThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
