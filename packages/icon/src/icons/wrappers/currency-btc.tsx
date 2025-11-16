import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyBtcBold } from "../bold";
import { CurrencyBtcDuotone } from "../duotone";
import { CurrencyBtcFill } from "../fill";
import { CurrencyBtcLight } from "../light";
import { CurrencyBtcRegular } from "../regular";
import { CurrencyBtcThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyBtc = memo(function CurrencyBtc(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyBtcBold,
      duotone: CurrencyBtcDuotone,
      fill: CurrencyBtcFill,
      light: CurrencyBtcLight,
      regular: CurrencyBtcRegular,
      thin: CurrencyBtcThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
