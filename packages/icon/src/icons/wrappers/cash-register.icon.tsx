import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CashRegisterBoldIcon } from "../bold";
import { CashRegisterDuotoneIcon } from "../duotone";
import { CashRegisterFillIcon } from "../fill";
import { CashRegisterLightIcon } from "../light";
import { CashRegisterRegularIcon } from "../regular";
import { CashRegisterThinIcon } from "../thin";

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
