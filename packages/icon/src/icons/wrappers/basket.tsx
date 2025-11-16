import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BasketBold } from "../bold";
import { BasketDuotone } from "../duotone";
import { BasketFill } from "../fill";
import { BasketLight } from "../light";
import { BasketRegular } from "../regular";
import { BasketThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Basket = memo(function Basket(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BasketBold,
      duotone: BasketDuotone,
      fill: BasketFill,
      light: BasketLight,
      regular: BasketRegular,
      thin: BasketThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
