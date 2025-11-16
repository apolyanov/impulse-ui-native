import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyCircleDollarBold } from "../bold";
import { CurrencyCircleDollarDuotone } from "../duotone";
import { CurrencyCircleDollarFill } from "../fill";
import { CurrencyCircleDollarLight } from "../light";
import { CurrencyCircleDollarRegular } from "../regular";
import { CurrencyCircleDollarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyCircleDollar = memo(function CurrencyCircleDollar(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyCircleDollarBold,
      duotone: CurrencyCircleDollarDuotone,
      fill: CurrencyCircleDollarFill,
      light: CurrencyCircleDollarLight,
      regular: CurrencyCircleDollarRegular,
      thin: CurrencyCircleDollarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
