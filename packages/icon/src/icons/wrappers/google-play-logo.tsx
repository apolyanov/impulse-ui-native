import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GooglePlayLogoBold } from "../bold";
import { GooglePlayLogoDuotone } from "../duotone";
import { GooglePlayLogoFill } from "../fill";
import { GooglePlayLogoLight } from "../light";
import { GooglePlayLogoRegular } from "../regular";
import { GooglePlayLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GooglePlayLogo = memo(function GooglePlayLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GooglePlayLogoBold,
      duotone: GooglePlayLogoDuotone,
      fill: GooglePlayLogoFill,
      light: GooglePlayLogoLight,
      regular: GooglePlayLogoRegular,
      thin: GooglePlayLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
