import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CurrencyJpyBoldIcon } from "../bold/currency-jpy-bold.icon";
import { CurrencyJpyDuotoneIcon } from "../duotone/currency-jpy-duotone.icon";
import { CurrencyJpyFillIcon } from "../fill/currency-jpy-fill.icon";
import { CurrencyJpyLightIcon } from "../light/currency-jpy-light.icon";
import { CurrencyJpyRegularIcon } from "../regular/currency-jpy-regular.icon";
import { CurrencyJpyThinIcon } from "../thin/currency-jpy-thin.icon";

export const CurrencyJpyIcon = memo(function CurrencyJpy(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyJpyBoldIcon,
      duotone: CurrencyJpyDuotoneIcon,
      fill: CurrencyJpyFillIcon,
      light: CurrencyJpyLightIcon,
      regular: CurrencyJpyRegularIcon,
      thin: CurrencyJpyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
