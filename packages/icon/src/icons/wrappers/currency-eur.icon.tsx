import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CurrencyEurBoldIcon } from "../bold/currency-eur-bold.icon";
import { CurrencyEurDuotoneIcon } from "../duotone/currency-eur-duotone.icon";
import { CurrencyEurFillIcon } from "../fill/currency-eur-fill.icon";
import { CurrencyEurLightIcon } from "../light/currency-eur-light.icon";
import { CurrencyEurRegularIcon } from "../regular/currency-eur-regular.icon";
import { CurrencyEurThinIcon } from "../thin/currency-eur-thin.icon";

export const CurrencyEurIcon = memo(function CurrencyEur(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyEurBoldIcon,
      duotone: CurrencyEurDuotoneIcon,
      fill: CurrencyEurFillIcon,
      light: CurrencyEurLightIcon,
      regular: CurrencyEurRegularIcon,
      thin: CurrencyEurThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
