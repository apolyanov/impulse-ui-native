import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CurrencyDollarSimpleBoldIcon } from "../bold/currency-dollar-simple-bold.icon";
import { CurrencyDollarSimpleDuotoneIcon } from "../duotone/currency-dollar-simple-duotone.icon";
import { CurrencyDollarSimpleFillIcon } from "../fill/currency-dollar-simple-fill.icon";
import { CurrencyDollarSimpleLightIcon } from "../light/currency-dollar-simple-light.icon";
import { CurrencyDollarSimpleRegularIcon } from "../regular/currency-dollar-simple-regular.icon";
import { CurrencyDollarSimpleThinIcon } from "../thin/currency-dollar-simple-thin.icon";

export const CurrencyDollarSimpleIcon = memo(function CurrencyDollarSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyDollarSimpleBoldIcon,
      duotone: CurrencyDollarSimpleDuotoneIcon,
      fill: CurrencyDollarSimpleFillIcon,
      light: CurrencyDollarSimpleLightIcon,
      regular: CurrencyDollarSimpleRegularIcon,
      thin: CurrencyDollarSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
