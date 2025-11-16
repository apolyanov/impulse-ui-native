import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ContactlessPaymentBold } from "../bold";
import { ContactlessPaymentDuotone } from "../duotone";
import { ContactlessPaymentFill } from "../fill";
import { ContactlessPaymentLight } from "../light";
import { ContactlessPaymentRegular } from "../regular";
import { ContactlessPaymentThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ContactlessPayment = memo(function ContactlessPayment(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ContactlessPaymentBold,
      duotone: ContactlessPaymentDuotone,
      fill: ContactlessPaymentFill,
      light: ContactlessPaymentLight,
      regular: ContactlessPaymentRegular,
      thin: ContactlessPaymentThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
