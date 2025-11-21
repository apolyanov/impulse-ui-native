import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyCnyBoldIcon } from "../bold";
import { CurrencyCnyDuotoneIcon } from "../duotone";
import { CurrencyCnyFillIcon } from "../fill";
import { CurrencyCnyLightIcon } from "../light";
import { CurrencyCnyRegularIcon } from "../regular";
import { CurrencyCnyThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyCnyIcon = memo(function CurrencyCny(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyCnyBoldIcon,
      duotone: CurrencyCnyDuotoneIcon,
      fill: CurrencyCnyFillIcon,
      light: CurrencyCnyLightIcon,
      regular: CurrencyCnyRegularIcon,
      thin: CurrencyCnyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
