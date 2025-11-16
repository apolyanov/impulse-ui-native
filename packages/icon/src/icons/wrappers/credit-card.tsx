import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CreditCardBold } from "../bold";
import { CreditCardDuotone } from "../duotone";
import { CreditCardFill } from "../fill";
import { CreditCardLight } from "../light";
import { CreditCardRegular } from "../regular";
import { CreditCardThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CreditCard = memo(function CreditCard(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CreditCardBold,
      duotone: CreditCardDuotone,
      fill: CreditCardFill,
      light: CreditCardLight,
      regular: CreditCardRegular,
      thin: CreditCardThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
