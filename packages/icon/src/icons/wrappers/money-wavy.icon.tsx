import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MoneyWavyBoldIcon } from "../bold/money-wavy-bold.icon";
import { MoneyWavyDuotoneIcon } from "../duotone/money-wavy-duotone.icon";
import { MoneyWavyFillIcon } from "../fill/money-wavy-fill.icon";
import { MoneyWavyLightIcon } from "../light/money-wavy-light.icon";
import { MoneyWavyRegularIcon } from "../regular/money-wavy-regular.icon";
import { MoneyWavyThinIcon } from "../thin/money-wavy-thin.icon";

export const MoneyWavyIcon = memo(function MoneyWavy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MoneyWavyBoldIcon,
      duotone: MoneyWavyDuotoneIcon,
      fill: MoneyWavyFillIcon,
      light: MoneyWavyLightIcon,
      regular: MoneyWavyRegularIcon,
      thin: MoneyWavyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
