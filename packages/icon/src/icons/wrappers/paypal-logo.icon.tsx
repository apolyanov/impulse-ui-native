import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PaypalLogoBoldIcon } from "../bold/paypal-logo-bold.icon";
import { PaypalLogoDuotoneIcon } from "../duotone/paypal-logo-duotone.icon";
import { PaypalLogoFillIcon } from "../fill/paypal-logo-fill.icon";
import { PaypalLogoLightIcon } from "../light/paypal-logo-light.icon";
import { PaypalLogoRegularIcon } from "../regular/paypal-logo-regular.icon";
import { PaypalLogoThinIcon } from "../thin/paypal-logo-thin.icon";

export const PaypalLogoIcon = memo(function PaypalLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaypalLogoBoldIcon,
      duotone: PaypalLogoDuotoneIcon,
      fill: PaypalLogoFillIcon,
      light: PaypalLogoLightIcon,
      regular: PaypalLogoRegularIcon,
      thin: PaypalLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
