import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShoppingBagOpenBoldIcon } from "../bold";
import { ShoppingBagOpenDuotoneIcon } from "../duotone";
import { ShoppingBagOpenFillIcon } from "../fill";
import { ShoppingBagOpenLightIcon } from "../light";
import { ShoppingBagOpenRegularIcon } from "../regular";
import { ShoppingBagOpenThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShoppingBagOpenIcon = memo(function ShoppingBagOpen(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShoppingBagOpenBoldIcon,
      duotone: ShoppingBagOpenDuotoneIcon,
      fill: ShoppingBagOpenFillIcon,
      light: ShoppingBagOpenLightIcon,
      regular: ShoppingBagOpenRegularIcon,
      thin: ShoppingBagOpenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
