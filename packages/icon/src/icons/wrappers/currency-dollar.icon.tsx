import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyDollarBoldIcon } from "../bold";
import { CurrencyDollarDuotoneIcon } from "../duotone";
import { CurrencyDollarFillIcon } from "../fill";
import { CurrencyDollarLightIcon } from "../light";
import { CurrencyDollarRegularIcon } from "../regular";
import { CurrencyDollarThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyDollarIcon = memo(function CurrencyDollar(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyDollarBoldIcon,
      duotone: CurrencyDollarDuotoneIcon,
      fill: CurrencyDollarFillIcon,
      light: CurrencyDollarLightIcon,
      regular: CurrencyDollarRegularIcon,
      thin: CurrencyDollarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
