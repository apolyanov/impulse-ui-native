import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CurrencyKztBoldIcon } from "../bold/currency-kzt-bold.icon";
import { CurrencyKztDuotoneIcon } from "../duotone/currency-kzt-duotone.icon";
import { CurrencyKztFillIcon } from "../fill/currency-kzt-fill.icon";
import { CurrencyKztLightIcon } from "../light/currency-kzt-light.icon";
import { CurrencyKztRegularIcon } from "../regular/currency-kzt-regular.icon";
import { CurrencyKztThinIcon } from "../thin/currency-kzt-thin.icon";

export const CurrencyKztIcon = memo(function CurrencyKzt(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyKztBoldIcon,
      duotone: CurrencyKztDuotoneIcon,
      fill: CurrencyKztFillIcon,
      light: CurrencyKztLightIcon,
      regular: CurrencyKztRegularIcon,
      thin: CurrencyKztThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
