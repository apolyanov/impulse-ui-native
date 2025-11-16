import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyJpyBold } from "../bold";
import { CurrencyJpyDuotone } from "../duotone";
import { CurrencyJpyFill } from "../fill";
import { CurrencyJpyLight } from "../light";
import { CurrencyJpyRegular } from "../regular";
import { CurrencyJpyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyJpy = memo(function CurrencyJpy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyJpyBold,
      duotone: CurrencyJpyDuotone,
      fill: CurrencyJpyFill,
      light: CurrencyJpyLight,
      regular: CurrencyJpyRegular,
      thin: CurrencyJpyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
