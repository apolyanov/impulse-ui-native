import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShoppingBagBold } from "../bold";
import { ShoppingBagDuotone } from "../duotone";
import { ShoppingBagFill } from "../fill";
import { ShoppingBagLight } from "../light";
import { ShoppingBagRegular } from "../regular";
import { ShoppingBagThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShoppingBag = memo(function ShoppingBag(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShoppingBagBold,
      duotone: ShoppingBagDuotone,
      fill: ShoppingBagFill,
      light: ShoppingBagLight,
      regular: ShoppingBagRegular,
      thin: ShoppingBagThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
