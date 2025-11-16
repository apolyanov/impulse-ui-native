import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyGbpBold } from "../bold";
import { CurrencyGbpDuotone } from "../duotone";
import { CurrencyGbpFill } from "../fill";
import { CurrencyGbpLight } from "../light";
import { CurrencyGbpRegular } from "../regular";
import { CurrencyGbpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyGbp = memo(function CurrencyGbp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyGbpBold,
      duotone: CurrencyGbpDuotone,
      fill: CurrencyGbpFill,
      light: CurrencyGbpLight,
      regular: CurrencyGbpRegular,
      thin: CurrencyGbpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
