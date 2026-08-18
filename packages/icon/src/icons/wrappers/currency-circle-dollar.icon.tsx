import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CurrencyCircleDollarBoldIcon } from "../bold/currency-circle-dollar-bold.icon";
import { CurrencyCircleDollarDuotoneIcon } from "../duotone/currency-circle-dollar-duotone.icon";
import { CurrencyCircleDollarFillIcon } from "../fill/currency-circle-dollar-fill.icon";
import { CurrencyCircleDollarLightIcon } from "../light/currency-circle-dollar-light.icon";
import { CurrencyCircleDollarRegularIcon } from "../regular/currency-circle-dollar-regular.icon";
import { CurrencyCircleDollarThinIcon } from "../thin/currency-circle-dollar-thin.icon";

export const CurrencyCircleDollarIcon = memo(function CurrencyCircleDollar(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyCircleDollarBoldIcon,
      duotone: CurrencyCircleDollarDuotoneIcon,
      fill: CurrencyCircleDollarFillIcon,
      light: CurrencyCircleDollarLightIcon,
      regular: CurrencyCircleDollarRegularIcon,
      thin: CurrencyCircleDollarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
