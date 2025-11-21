import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShoppingBagBoldIcon } from "../bold";
import { ShoppingBagDuotoneIcon } from "../duotone";
import { ShoppingBagFillIcon } from "../fill";
import { ShoppingBagLightIcon } from "../light";
import { ShoppingBagRegularIcon } from "../regular";
import { ShoppingBagThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShoppingBagIcon = memo(function ShoppingBag(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShoppingBagBoldIcon,
      duotone: ShoppingBagDuotoneIcon,
      fill: ShoppingBagFillIcon,
      light: ShoppingBagLightIcon,
      regular: ShoppingBagRegularIcon,
      thin: ShoppingBagThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
