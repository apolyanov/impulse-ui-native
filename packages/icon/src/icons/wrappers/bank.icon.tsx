import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BankBoldIcon } from "../bold";
import { BankDuotoneIcon } from "../duotone";
import { BankFillIcon } from "../fill";
import { BankLightIcon } from "../light";
import { BankRegularIcon } from "../regular";
import { BankThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
