import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BasketBoldIcon } from "../bold";
import { BasketDuotoneIcon } from "../duotone";
import { BasketFillIcon } from "../fill";
import { BasketLightIcon } from "../light";
import { BasketRegularIcon } from "../regular";
import { BasketThinIcon } from "../thin";

export const BasketIcon = memo(function Basket(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BasketBoldIcon,
      duotone: BasketDuotoneIcon,
      fill: BasketFillIcon,
      light: BasketLightIcon,
      regular: BasketRegularIcon,
      thin: BasketThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
