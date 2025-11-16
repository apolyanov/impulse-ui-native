import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyCnyBold } from "../bold";
import { CurrencyCnyDuotone } from "../duotone";
import { CurrencyCnyFill } from "../fill";
import { CurrencyCnyLight } from "../light";
import { CurrencyCnyRegular } from "../regular";
import { CurrencyCnyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyCny = memo(function CurrencyCny(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyCnyBold,
      duotone: CurrencyCnyDuotone,
      fill: CurrencyCnyFill,
      light: CurrencyCnyLight,
      regular: CurrencyCnyRegular,
      thin: CurrencyCnyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
