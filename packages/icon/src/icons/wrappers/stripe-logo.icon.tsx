import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StripeLogoBoldIcon } from "../bold/stripe-logo-bold.icon";
import { StripeLogoDuotoneIcon } from "../duotone/stripe-logo-duotone.icon";
import { StripeLogoFillIcon } from "../fill/stripe-logo-fill.icon";
import { StripeLogoLightIcon } from "../light/stripe-logo-light.icon";
import { StripeLogoRegularIcon } from "../regular/stripe-logo-regular.icon";
import { StripeLogoThinIcon } from "../thin/stripe-logo-thin.icon";

export const StripeLogoIcon = memo(function StripeLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StripeLogoBoldIcon,
      duotone: StripeLogoDuotoneIcon,
      fill: StripeLogoFillIcon,
      light: StripeLogoLightIcon,
      regular: StripeLogoRegularIcon,
      thin: StripeLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
