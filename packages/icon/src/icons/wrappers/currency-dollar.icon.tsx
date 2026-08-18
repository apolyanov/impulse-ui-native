import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CurrencyDollarBoldIcon } from "../bold/currency-dollar-bold.icon";
import { CurrencyDollarDuotoneIcon } from "../duotone/currency-dollar-duotone.icon";
import { CurrencyDollarFillIcon } from "../fill/currency-dollar-fill.icon";
import { CurrencyDollarLightIcon } from "../light/currency-dollar-light.icon";
import { CurrencyDollarRegularIcon } from "../regular/currency-dollar-regular.icon";
import { CurrencyDollarThinIcon } from "../thin/currency-dollar-thin.icon";

export const CurrencyDollarIcon = memo(function CurrencyDollar(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyDollarBoldIcon,
      duotone: CurrencyDollarDuotoneIcon,
      fill: CurrencyDollarFillIcon,
      light: CurrencyDollarLightIcon,
      regular: CurrencyDollarRegularIcon,
      thin: CurrencyDollarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
