import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CashRegisterBold } from "../bold";
import { CashRegisterDuotone } from "../duotone";
import { CashRegisterFill } from "../fill";
import { CashRegisterLight } from "../light";
import { CashRegisterRegular } from "../regular";
import { CashRegisterThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CashRegister = memo(function CashRegister(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CashRegisterBold,
      duotone: CashRegisterDuotone,
      fill: CashRegisterFill,
      light: CashRegisterLight,
      regular: CashRegisterRegular,
      thin: CashRegisterThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
