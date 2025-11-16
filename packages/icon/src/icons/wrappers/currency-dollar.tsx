import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyDollarBold } from "../bold";
import { CurrencyDollarDuotone } from "../duotone";
import { CurrencyDollarFill } from "../fill";
import { CurrencyDollarLight } from "../light";
import { CurrencyDollarRegular } from "../regular";
import { CurrencyDollarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyDollar = memo(function CurrencyDollar(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyDollarBold,
      duotone: CurrencyDollarDuotone,
      fill: CurrencyDollarFill,
      light: CurrencyDollarLight,
      regular: CurrencyDollarRegular,
      thin: CurrencyDollarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
