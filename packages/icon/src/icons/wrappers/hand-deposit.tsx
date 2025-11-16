import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandDepositBold } from "../bold";
import { HandDepositDuotone } from "../duotone";
import { HandDepositFill } from "../fill";
import { HandDepositLight } from "../light";
import { HandDepositRegular } from "../regular";
import { HandDepositThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandDeposit = memo(function HandDeposit(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandDepositBold,
      duotone: HandDepositDuotone,
      fill: HandDepositFill,
      light: HandDepositLight,
      regular: HandDepositRegular,
      thin: HandDepositThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
