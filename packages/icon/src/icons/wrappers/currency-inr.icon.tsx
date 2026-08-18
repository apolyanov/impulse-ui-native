import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CurrencyInrBoldIcon } from "../bold/currency-inr-bold.icon";
import { CurrencyInrDuotoneIcon } from "../duotone/currency-inr-duotone.icon";
import { CurrencyInrFillIcon } from "../fill/currency-inr-fill.icon";
import { CurrencyInrLightIcon } from "../light/currency-inr-light.icon";
import { CurrencyInrRegularIcon } from "../regular/currency-inr-regular.icon";
import { CurrencyInrThinIcon } from "../thin/currency-inr-thin.icon";

export const CurrencyInrIcon = memo(function CurrencyInr(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyInrBoldIcon,
      duotone: CurrencyInrDuotoneIcon,
      fill: CurrencyInrFillIcon,
      light: CurrencyInrLightIcon,
      regular: CurrencyInrRegularIcon,
      thin: CurrencyInrThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
