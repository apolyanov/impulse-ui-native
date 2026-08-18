import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandDepositBoldIcon } from "../bold/hand-deposit-bold.icon";
import { HandDepositDuotoneIcon } from "../duotone/hand-deposit-duotone.icon";
import { HandDepositFillIcon } from "../fill/hand-deposit-fill.icon";
import { HandDepositLightIcon } from "../light/hand-deposit-light.icon";
import { HandDepositRegularIcon } from "../regular/hand-deposit-regular.icon";
import { HandDepositThinIcon } from "../thin/hand-deposit-thin.icon";

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
