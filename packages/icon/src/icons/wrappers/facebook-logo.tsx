import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FacebookLogoBold } from "../bold";
import { FacebookLogoDuotone } from "../duotone";
import { FacebookLogoFill } from "../fill";
import { FacebookLogoLight } from "../light";
import { FacebookLogoRegular } from "../regular";
import { FacebookLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FacebookLogo = memo(function FacebookLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FacebookLogoBold,
      duotone: FacebookLogoDuotone,
      fill: FacebookLogoFill,
      light: FacebookLogoLight,
      regular: FacebookLogoRegular,
      thin: FacebookLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
