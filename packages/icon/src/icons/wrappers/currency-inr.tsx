import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyInrBold } from "../bold";
import { CurrencyInrDuotone } from "../duotone";
import { CurrencyInrFill } from "../fill";
import { CurrencyInrLight } from "../light";
import { CurrencyInrRegular } from "../regular";
import { CurrencyInrThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyInr = memo(function CurrencyInr(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyInrBold,
      duotone: CurrencyInrDuotone,
      fill: CurrencyInrFill,
      light: CurrencyInrLight,
      regular: CurrencyInrRegular,
      thin: CurrencyInrThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
