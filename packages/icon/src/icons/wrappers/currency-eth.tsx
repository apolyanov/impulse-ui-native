import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyEthBold } from "../bold";
import { CurrencyEthDuotone } from "../duotone";
import { CurrencyEthFill } from "../fill";
import { CurrencyEthLight } from "../light";
import { CurrencyEthRegular } from "../regular";
import { CurrencyEthThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyEth = memo(function CurrencyEth(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyEthBold,
      duotone: CurrencyEthDuotone,
      fill: CurrencyEthFill,
      light: CurrencyEthLight,
      regular: CurrencyEthRegular,
      thin: CurrencyEthThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
