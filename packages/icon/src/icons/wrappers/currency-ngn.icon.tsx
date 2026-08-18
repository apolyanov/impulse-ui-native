import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CurrencyNgnBoldIcon } from "../bold/currency-ngn-bold.icon";
import { CurrencyNgnDuotoneIcon } from "../duotone/currency-ngn-duotone.icon";
import { CurrencyNgnFillIcon } from "../fill/currency-ngn-fill.icon";
import { CurrencyNgnLightIcon } from "../light/currency-ngn-light.icon";
import { CurrencyNgnRegularIcon } from "../regular/currency-ngn-regular.icon";
import { CurrencyNgnThinIcon } from "../thin/currency-ngn-thin.icon";

export const CurrencyNgnIcon = memo(function CurrencyNgn(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyNgnBoldIcon,
      duotone: CurrencyNgnDuotoneIcon,
      fill: CurrencyNgnFillIcon,
      light: CurrencyNgnLightIcon,
      regular: CurrencyNgnRegularIcon,
      thin: CurrencyNgnThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
