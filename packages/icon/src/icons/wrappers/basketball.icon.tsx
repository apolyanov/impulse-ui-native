import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BasketballBoldIcon } from "../bold/basketball-bold.icon";
import { BasketballDuotoneIcon } from "../duotone/basketball-duotone.icon";
import { BasketballFillIcon } from "../fill/basketball-fill.icon";
import { BasketballLightIcon } from "../light/basketball-light.icon";
import { BasketballRegularIcon } from "../regular/basketball-regular.icon";
import { BasketballThinIcon } from "../thin/basketball-thin.icon";

export const BasketballIcon = memo(function Basketball(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BasketballBoldIcon,
      duotone: BasketballDuotoneIcon,
      fill: BasketballFillIcon,
      light: BasketballLightIcon,
      regular: BasketballRegularIcon,
      thin: BasketballThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
