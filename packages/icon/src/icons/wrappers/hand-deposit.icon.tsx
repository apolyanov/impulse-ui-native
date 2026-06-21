import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandDepositBoldIcon } from "../bold";
import { HandDepositDuotoneIcon } from "../duotone";
import { HandDepositFillIcon } from "../fill";
import { HandDepositLightIcon } from "../light";
import { HandDepositRegularIcon } from "../regular";
import { HandDepositThinIcon } from "../thin";

export const HandDepositIcon = memo(function HandDeposit(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandDepositBoldIcon,
      duotone: HandDepositDuotoneIcon,
      fill: HandDepositFillIcon,
      light: HandDepositLightIcon,
      regular: HandDepositRegularIcon,
      thin: HandDepositThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
