import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyKrwBold } from "../bold";
import { CurrencyKrwDuotone } from "../duotone";
import { CurrencyKrwFill } from "../fill";
import { CurrencyKrwLight } from "../light";
import { CurrencyKrwRegular } from "../regular";
import { CurrencyKrwThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyKrw = memo(function CurrencyKrw(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyKrwBold,
      duotone: CurrencyKrwDuotone,
      fill: CurrencyKrwFill,
      light: CurrencyKrwLight,
      regular: CurrencyKrwRegular,
      thin: CurrencyKrwThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
