import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShoppingCartSimpleBoldIcon } from "../bold";
import { ShoppingCartSimpleDuotoneIcon } from "../duotone";
import { ShoppingCartSimpleFillIcon } from "../fill";
import { ShoppingCartSimpleLightIcon } from "../light";
import { ShoppingCartSimpleRegularIcon } from "../regular";
import { ShoppingCartSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShoppingCartSimpleIcon = memo(function ShoppingCartSimple(
  props: IconWrapperProps
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
