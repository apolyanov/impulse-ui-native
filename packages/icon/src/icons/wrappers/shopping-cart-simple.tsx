import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShoppingCartSimpleBold } from "../bold";
import { ShoppingCartSimpleDuotone } from "../duotone";
import { ShoppingCartSimpleFill } from "../fill";
import { ShoppingCartSimpleLight } from "../light";
import { ShoppingCartSimpleRegular } from "../regular";
import { ShoppingCartSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShoppingCartSimple = memo(function ShoppingCartSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShoppingCartSimpleBold,
      duotone: ShoppingCartSimpleDuotone,
      fill: ShoppingCartSimpleFill,
      light: ShoppingCartSimpleLight,
      regular: ShoppingCartSimpleRegular,
      thin: ShoppingCartSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
