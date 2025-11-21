import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PiggyBankBoldIcon } from "../bold";
import { PiggyBankDuotoneIcon } from "../duotone";
import { PiggyBankFillIcon } from "../fill";
import { PiggyBankLightIcon } from "../light";
import { PiggyBankRegularIcon } from "../regular";
import { PiggyBankThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PiggyBankIcon = memo(function PiggyBank(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PiggyBankBoldIcon,
      duotone: PiggyBankDuotoneIcon,
      fill: PiggyBankFillIcon,
      light: PiggyBankLightIcon,
      regular: PiggyBankRegularIcon,
      thin: PiggyBankThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
