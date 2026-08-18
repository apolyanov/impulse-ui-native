import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CurrencyBtcBoldIcon } from "../bold/currency-btc-bold.icon";
import { CurrencyBtcDuotoneIcon } from "../duotone/currency-btc-duotone.icon";
import { CurrencyBtcFillIcon } from "../fill/currency-btc-fill.icon";
import { CurrencyBtcLightIcon } from "../light/currency-btc-light.icon";
import { CurrencyBtcRegularIcon } from "../regular/currency-btc-regular.icon";
import { CurrencyBtcThinIcon } from "../thin/currency-btc-thin.icon";

export const CurrencyBtcIcon = memo(function CurrencyBtc(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyBtcBoldIcon,
      duotone: CurrencyBtcDuotoneIcon,
      fill: CurrencyBtcFillIcon,
      light: CurrencyBtcLightIcon,
      regular: CurrencyBtcRegularIcon,
      thin: CurrencyBtcThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
