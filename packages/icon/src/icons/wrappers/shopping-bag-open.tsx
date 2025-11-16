import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShoppingBagOpenBold } from "../bold";
import { ShoppingBagOpenDuotone } from "../duotone";
import { ShoppingBagOpenFill } from "../fill";
import { ShoppingBagOpenLight } from "../light";
import { ShoppingBagOpenRegular } from "../regular";
import { ShoppingBagOpenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShoppingBagOpen = memo(function ShoppingBagOpen(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShoppingBagOpenBold,
      duotone: ShoppingBagOpenDuotone,
      fill: ShoppingBagOpenFill,
      light: ShoppingBagOpenLight,
      regular: ShoppingBagOpenRegular,
      thin: ShoppingBagOpenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
