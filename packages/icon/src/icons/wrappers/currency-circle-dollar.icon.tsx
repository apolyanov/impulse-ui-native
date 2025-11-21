import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyCircleDollarBoldIcon } from "../bold";
import { CurrencyCircleDollarDuotoneIcon } from "../duotone";
import { CurrencyCircleDollarFillIcon } from "../fill";
import { CurrencyCircleDollarLightIcon } from "../light";
import { CurrencyCircleDollarRegularIcon } from "../regular";
import { CurrencyCircleDollarThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyCircleDollarIcon = memo(function CurrencyCircleDollar(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyCircleDollarBoldIcon,
      duotone: CurrencyCircleDollarDuotoneIcon,
      fill: CurrencyCircleDollarFillIcon,
      light: CurrencyCircleDollarLightIcon,
      regular: CurrencyCircleDollarRegularIcon,
      thin: CurrencyCircleDollarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
