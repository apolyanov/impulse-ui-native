import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyNgnBold } from "../bold";
import { CurrencyNgnDuotone } from "../duotone";
import { CurrencyNgnFill } from "../fill";
import { CurrencyNgnLight } from "../light";
import { CurrencyNgnRegular } from "../regular";
import { CurrencyNgnThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyNgn = memo(function CurrencyNgn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyNgnBold,
      duotone: CurrencyNgnDuotone,
      fill: CurrencyNgnFill,
      light: CurrencyNgnLight,
      regular: CurrencyNgnRegular,
      thin: CurrencyNgnThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
