import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MoneyBoldIcon } from "../bold/money-bold.icon";
import { MoneyDuotoneIcon } from "../duotone/money-duotone.icon";
import { MoneyFillIcon } from "../fill/money-fill.icon";
import { MoneyLightIcon } from "../light/money-light.icon";
import { MoneyRegularIcon } from "../regular/money-regular.icon";
import { MoneyThinIcon } from "../thin/money-thin.icon";

export const MoneyIcon = memo(function Money(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MoneyBoldIcon,
      duotone: MoneyDuotoneIcon,
      fill: MoneyFillIcon,
      light: MoneyLightIcon,
      regular: MoneyRegularIcon,
      thin: MoneyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
