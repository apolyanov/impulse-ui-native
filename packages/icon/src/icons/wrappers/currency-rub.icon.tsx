import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CurrencyRubBoldIcon } from "../bold/currency-rub-bold.icon";
import { CurrencyRubDuotoneIcon } from "../duotone/currency-rub-duotone.icon";
import { CurrencyRubFillIcon } from "../fill/currency-rub-fill.icon";
import { CurrencyRubLightIcon } from "../light/currency-rub-light.icon";
import { CurrencyRubRegularIcon } from "../regular/currency-rub-regular.icon";
import { CurrencyRubThinIcon } from "../thin/currency-rub-thin.icon";

export const CurrencyRubIcon = memo(function CurrencyRub(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyRubBoldIcon,
      duotone: CurrencyRubDuotoneIcon,
      fill: CurrencyRubFillIcon,
      light: CurrencyRubLightIcon,
      regular: CurrencyRubRegularIcon,
      thin: CurrencyRubThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
