import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyRubBold } from "../bold";
import { CurrencyRubDuotone } from "../duotone";
import { CurrencyRubFill } from "../fill";
import { CurrencyRubLight } from "../light";
import { CurrencyRubRegular } from "../regular";
import { CurrencyRubThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyRub = memo(function CurrencyRub(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyRubBold,
      duotone: CurrencyRubDuotone,
      fill: CurrencyRubFill,
      light: CurrencyRubLight,
      regular: CurrencyRubRegular,
      thin: CurrencyRubThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
