import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GoogleLogoBold } from "../bold";
import { GoogleLogoDuotone } from "../duotone";
import { GoogleLogoFill } from "../fill";
import { GoogleLogoLight } from "../light";
import { GoogleLogoRegular } from "../regular";
import { GoogleLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GoogleLogo = memo(function GoogleLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GoogleLogoBold,
      duotone: GoogleLogoDuotone,
      fill: GoogleLogoFill,
      light: GoogleLogoLight,
      regular: GoogleLogoRegular,
      thin: GoogleLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
