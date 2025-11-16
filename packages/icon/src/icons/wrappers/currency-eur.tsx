import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyEurBold } from "../bold";
import { CurrencyEurDuotone } from "../duotone";
import { CurrencyEurFill } from "../fill";
import { CurrencyEurLight } from "../light";
import { CurrencyEurRegular } from "../regular";
import { CurrencyEurThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyEur = memo(function CurrencyEur(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyEurBold,
      duotone: CurrencyEurDuotone,
      fill: CurrencyEurFill,
      light: CurrencyEurLight,
      regular: CurrencyEurRegular,
      thin: CurrencyEurThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
