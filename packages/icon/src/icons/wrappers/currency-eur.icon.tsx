import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyEurBoldIcon } from "../bold";
import { CurrencyEurDuotoneIcon } from "../duotone";
import { CurrencyEurFillIcon } from "../fill";
import { CurrencyEurLightIcon } from "../light";
import { CurrencyEurRegularIcon } from "../regular";
import { CurrencyEurThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyEurIcon = memo(function CurrencyEur(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyEurBoldIcon,
      duotone: CurrencyEurDuotoneIcon,
      fill: CurrencyEurFillIcon,
      light: CurrencyEurLightIcon,
      regular: CurrencyEurRegularIcon,
      thin: CurrencyEurThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
