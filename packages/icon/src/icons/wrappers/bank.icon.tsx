import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BankBoldIcon } from "../bold/bank-bold.icon";
import { BankDuotoneIcon } from "../duotone/bank-duotone.icon";
import { BankFillIcon } from "../fill/bank-fill.icon";
import { BankLightIcon } from "../light/bank-light.icon";
import { BankRegularIcon } from "../regular/bank-regular.icon";
import { BankThinIcon } from "../thin/bank-thin.icon";

export const BankIcon = memo(function Bank(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BankBoldIcon,
      duotone: BankDuotoneIcon,
      fill: BankFillIcon,
      light: BankLightIcon,
      regular: BankRegularIcon,
      thin: BankThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
