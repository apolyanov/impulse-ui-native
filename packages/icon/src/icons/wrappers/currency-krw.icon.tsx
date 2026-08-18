import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CurrencyKrwBoldIcon } from "../bold/currency-krw-bold.icon";
import { CurrencyKrwDuotoneIcon } from "../duotone/currency-krw-duotone.icon";
import { CurrencyKrwFillIcon } from "../fill/currency-krw-fill.icon";
import { CurrencyKrwLightIcon } from "../light/currency-krw-light.icon";
import { CurrencyKrwRegularIcon } from "../regular/currency-krw-regular.icon";
import { CurrencyKrwThinIcon } from "../thin/currency-krw-thin.icon";

export const CurrencyKrwIcon = memo(function CurrencyKrw(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyKrwBoldIcon,
      duotone: CurrencyKrwDuotoneIcon,
      fill: CurrencyKrwFillIcon,
      light: CurrencyKrwLightIcon,
      regular: CurrencyKrwRegularIcon,
      thin: CurrencyKrwThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
