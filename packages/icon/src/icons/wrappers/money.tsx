import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MoneyBold } from "../bold";
import { MoneyDuotone } from "../duotone";
import { MoneyFill } from "../fill";
import { MoneyLight } from "../light";
import { MoneyRegular } from "../regular";
import { MoneyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Money = memo(function Money(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MoneyBold,
      duotone: MoneyDuotone,
      fill: MoneyFill,
      light: MoneyLight,
      regular: MoneyRegular,
      thin: MoneyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
