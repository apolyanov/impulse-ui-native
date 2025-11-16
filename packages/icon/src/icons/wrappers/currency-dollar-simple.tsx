import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyDollarSimpleBold } from "../bold";
import { CurrencyDollarSimpleDuotone } from "../duotone";
import { CurrencyDollarSimpleFill } from "../fill";
import { CurrencyDollarSimpleLight } from "../light";
import { CurrencyDollarSimpleRegular } from "../regular";
import { CurrencyDollarSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyDollarSimple = memo(function CurrencyDollarSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyDollarSimpleBold,
      duotone: CurrencyDollarSimpleDuotone,
      fill: CurrencyDollarSimpleFill,
      light: CurrencyDollarSimpleLight,
      regular: CurrencyDollarSimpleRegular,
      thin: CurrencyDollarSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
