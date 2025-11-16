import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StripeLogoBold } from "../bold";
import { StripeLogoDuotone } from "../duotone";
import { StripeLogoFill } from "../fill";
import { StripeLogoLight } from "../light";
import { StripeLogoRegular } from "../regular";
import { StripeLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StripeLogo = memo(function StripeLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StripeLogoBold,
      duotone: StripeLogoDuotone,
      fill: StripeLogoFill,
      light: StripeLogoLight,
      regular: StripeLogoRegular,
      thin: StripeLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
