import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShoppingBagBoldIcon } from "../bold/shopping-bag-bold.icon";
import { ShoppingBagDuotoneIcon } from "../duotone/shopping-bag-duotone.icon";
import { ShoppingBagFillIcon } from "../fill/shopping-bag-fill.icon";
import { ShoppingBagLightIcon } from "../light/shopping-bag-light.icon";
import { ShoppingBagRegularIcon } from "../regular/shopping-bag-regular.icon";
import { ShoppingBagThinIcon } from "../thin/shopping-bag-thin.icon";

export const ShoppingBagIcon = memo(function ShoppingBag(
  props: IconWrapperProps,
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
