import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PiggyBankBoldIcon } from "../bold/piggy-bank-bold.icon";
import { PiggyBankDuotoneIcon } from "../duotone/piggy-bank-duotone.icon";
import { PiggyBankFillIcon } from "../fill/piggy-bank-fill.icon";
import { PiggyBankLightIcon } from "../light/piggy-bank-light.icon";
import { PiggyBankRegularIcon } from "../regular/piggy-bank-regular.icon";
import { PiggyBankThinIcon } from "../thin/piggy-bank-thin.icon";

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
