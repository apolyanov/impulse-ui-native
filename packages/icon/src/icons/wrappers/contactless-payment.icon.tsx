import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ContactlessPaymentBoldIcon } from "../bold/contactless-payment-bold.icon";
import { ContactlessPaymentDuotoneIcon } from "../duotone/contactless-payment-duotone.icon";
import { ContactlessPaymentFillIcon } from "../fill/contactless-payment-fill.icon";
import { ContactlessPaymentLightIcon } from "../light/contactless-payment-light.icon";
import { ContactlessPaymentRegularIcon } from "../regular/contactless-payment-regular.icon";
import { ContactlessPaymentThinIcon } from "../thin/contactless-payment-thin.icon";

export const ContactlessPaymentIcon = memo(function ContactlessPayment(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ContactlessPaymentBoldIcon,
      duotone: ContactlessPaymentDuotoneIcon,
      fill: ContactlessPaymentFillIcon,
      light: ContactlessPaymentLightIcon,
      regular: ContactlessPaymentRegularIcon,
      thin: ContactlessPaymentThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
