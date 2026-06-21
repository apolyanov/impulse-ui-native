import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ContactlessPaymentBoldIcon } from "../bold";
import { ContactlessPaymentDuotoneIcon } from "../duotone";
import { ContactlessPaymentFillIcon } from "../fill";
import { ContactlessPaymentLightIcon } from "../light";
import { ContactlessPaymentRegularIcon } from "../regular";
import { ContactlessPaymentThinIcon } from "../thin";

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
