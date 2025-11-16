import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MoneyWavyBold } from "../bold";
import { MoneyWavyDuotone } from "../duotone";
import { MoneyWavyFill } from "../fill";
import { MoneyWavyLight } from "../light";
import { MoneyWavyRegular } from "../regular";
import { MoneyWavyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MoneyWavy = memo(function MoneyWavy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MoneyWavyBold,
      duotone: MoneyWavyDuotone,
      fill: MoneyWavyFill,
      light: MoneyWavyLight,
      regular: MoneyWavyRegular,
      thin: MoneyWavyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
