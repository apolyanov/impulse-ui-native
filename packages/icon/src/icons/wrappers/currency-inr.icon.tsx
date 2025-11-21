import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyInrBoldIcon } from "../bold";
import { CurrencyInrDuotoneIcon } from "../duotone";
import { CurrencyInrFillIcon } from "../fill";
import { CurrencyInrLightIcon } from "../light";
import { CurrencyInrRegularIcon } from "../regular";
import { CurrencyInrThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyInrIcon = memo(function CurrencyInr(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyInrBoldIcon,
      duotone: CurrencyInrDuotoneIcon,
      fill: CurrencyInrFillIcon,
      light: CurrencyInrLightIcon,
      regular: CurrencyInrRegularIcon,
      thin: CurrencyInrThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
