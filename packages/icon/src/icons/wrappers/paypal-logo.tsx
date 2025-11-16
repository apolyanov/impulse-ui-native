import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaypalLogoBold } from "../bold";
import { PaypalLogoDuotone } from "../duotone";
import { PaypalLogoFill } from "../fill";
import { PaypalLogoLight } from "../light";
import { PaypalLogoRegular } from "../regular";
import { PaypalLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PaypalLogo = memo(function PaypalLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaypalLogoBold,
      duotone: PaypalLogoDuotone,
      fill: PaypalLogoFill,
      light: PaypalLogoLight,
      regular: PaypalLogoRegular,
      thin: PaypalLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
