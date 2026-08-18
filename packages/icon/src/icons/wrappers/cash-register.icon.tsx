import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CashRegisterBoldIcon } from "../bold/cash-register-bold.icon";
import { CashRegisterDuotoneIcon } from "../duotone/cash-register-duotone.icon";
import { CashRegisterFillIcon } from "../fill/cash-register-fill.icon";
import { CashRegisterLightIcon } from "../light/cash-register-light.icon";
import { CashRegisterRegularIcon } from "../regular/cash-register-regular.icon";
import { CashRegisterThinIcon } from "../thin/cash-register-thin.icon";

export const CashRegisterIcon = memo(function CashRegister(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CashRegisterBoldIcon,
      duotone: CashRegisterDuotoneIcon,
      fill: CashRegisterFillIcon,
      light: CashRegisterLightIcon,
      regular: CashRegisterRegularIcon,
      thin: CashRegisterThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
