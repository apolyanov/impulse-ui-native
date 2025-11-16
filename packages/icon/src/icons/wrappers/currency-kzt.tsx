import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyKztBold } from "../bold";
import { CurrencyKztDuotone } from "../duotone";
import { CurrencyKztFill } from "../fill";
import { CurrencyKztLight } from "../light";
import { CurrencyKztRegular } from "../regular";
import { CurrencyKztThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyKzt = memo(function CurrencyKzt(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyKztBold,
      duotone: CurrencyKztDuotone,
      fill: CurrencyKztFill,
      light: CurrencyKztLight,
      regular: CurrencyKztRegular,
      thin: CurrencyKztThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
