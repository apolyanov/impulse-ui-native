import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CurrencyGbpBoldIcon } from "../bold/currency-gbp-bold.icon";
import { CurrencyGbpDuotoneIcon } from "../duotone/currency-gbp-duotone.icon";
import { CurrencyGbpFillIcon } from "../fill/currency-gbp-fill.icon";
import { CurrencyGbpLightIcon } from "../light/currency-gbp-light.icon";
import { CurrencyGbpRegularIcon } from "../regular/currency-gbp-regular.icon";
import { CurrencyGbpThinIcon } from "../thin/currency-gbp-thin.icon";

export const CurrencyGbpIcon = memo(function CurrencyGbp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyGbpBoldIcon,
      duotone: CurrencyGbpDuotoneIcon,
      fill: CurrencyGbpFillIcon,
      light: CurrencyGbpLightIcon,
      regular: CurrencyGbpRegularIcon,
      thin: CurrencyGbpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
