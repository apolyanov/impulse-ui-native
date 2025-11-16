import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BankBold } from "../bold";
import { BankDuotone } from "../duotone";
import { BankFill } from "../fill";
import { BankLight } from "../light";
import { BankRegular } from "../regular";
import { BankThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bank = memo(function Bank(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BankBold,
      duotone: BankDuotone,
      fill: BankFill,
      light: BankLight,
      regular: BankRegular,
      thin: BankThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
