import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyBtcBoldIcon } from "../bold";
import { CurrencyBtcDuotoneIcon } from "../duotone";
import { CurrencyBtcFillIcon } from "../fill";
import { CurrencyBtcLightIcon } from "../light";
import { CurrencyBtcRegularIcon } from "../regular";
import { CurrencyBtcThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyBtcIcon = memo(function CurrencyBtc(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyBtcBoldIcon,
      duotone: CurrencyBtcDuotoneIcon,
      fill: CurrencyBtcFillIcon,
      light: CurrencyBtcLightIcon,
      regular: CurrencyBtcRegularIcon,
      thin: CurrencyBtcThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
