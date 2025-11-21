import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyRubBoldIcon } from "../bold";
import { CurrencyRubDuotoneIcon } from "../duotone";
import { CurrencyRubFillIcon } from "../fill";
import { CurrencyRubLightIcon } from "../light";
import { CurrencyRubRegularIcon } from "../regular";
import { CurrencyRubThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyRubIcon = memo(function CurrencyRub(
  props: IconWrapperProps
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
