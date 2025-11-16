import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GooglePhotosLogoBold } from "../bold";
import { GooglePhotosLogoDuotone } from "../duotone";
import { GooglePhotosLogoFill } from "../fill";
import { GooglePhotosLogoLight } from "../light";
import { GooglePhotosLogoRegular } from "../regular";
import { GooglePhotosLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GooglePhotosLogo = memo(function GooglePhotosLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GooglePhotosLogoBold,
      duotone: GooglePhotosLogoDuotone,
      fill: GooglePhotosLogoFill,
      light: GooglePhotosLogoLight,
      regular: GooglePhotosLogoRegular,
      thin: GooglePhotosLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
