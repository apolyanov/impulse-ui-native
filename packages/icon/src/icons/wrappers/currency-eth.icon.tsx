import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CurrencyEthBoldIcon } from "../bold/currency-eth-bold.icon";
import { CurrencyEthDuotoneIcon } from "../duotone/currency-eth-duotone.icon";
import { CurrencyEthFillIcon } from "../fill/currency-eth-fill.icon";
import { CurrencyEthLightIcon } from "../light/currency-eth-light.icon";
import { CurrencyEthRegularIcon } from "../regular/currency-eth-regular.icon";
import { CurrencyEthThinIcon } from "../thin/currency-eth-thin.icon";

export const CurrencyEthIcon = memo(function CurrencyEth(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyEthBoldIcon,
      duotone: CurrencyEthDuotoneIcon,
      fill: CurrencyEthFillIcon,
      light: CurrencyEthLightIcon,
      regular: CurrencyEthRegularIcon,
      thin: CurrencyEthThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
