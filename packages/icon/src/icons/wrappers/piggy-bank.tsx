import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PiggyBankBold } from "../bold";
import { PiggyBankDuotone } from "../duotone";
import { PiggyBankFill } from "../fill";
import { PiggyBankLight } from "../light";
import { PiggyBankRegular } from "../regular";
import { PiggyBankThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PiggyBank = memo(function PiggyBank(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PiggyBankBold,
      duotone: PiggyBankDuotone,
      fill: PiggyBankFill,
      light: PiggyBankLight,
      regular: PiggyBankRegular,
      thin: PiggyBankThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
