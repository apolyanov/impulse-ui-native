import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CreditCardBoldIcon } from "../bold/credit-card-bold.icon";
import { CreditCardDuotoneIcon } from "../duotone/credit-card-duotone.icon";
import { CreditCardFillIcon } from "../fill/credit-card-fill.icon";
import { CreditCardLightIcon } from "../light/credit-card-light.icon";
import { CreditCardRegularIcon } from "../regular/credit-card-regular.icon";
import { CreditCardThinIcon } from "../thin/credit-card-thin.icon";

export const CreditCardIcon = memo(function CreditCard(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CreditCardBoldIcon,
      duotone: CreditCardDuotoneIcon,
      fill: CreditCardFillIcon,
      light: CreditCardLightIcon,
      regular: CreditCardRegularIcon,
      thin: CreditCardThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
