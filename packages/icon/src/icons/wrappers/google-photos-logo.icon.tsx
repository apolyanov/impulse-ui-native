import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GooglePhotosLogoBoldIcon } from "../bold";
import { GooglePhotosLogoDuotoneIcon } from "../duotone";
import { GooglePhotosLogoFillIcon } from "../fill";
import { GooglePhotosLogoLightIcon } from "../light";
import { GooglePhotosLogoRegularIcon } from "../regular";
import { GooglePhotosLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GooglePhotosLogoIcon = memo(function GooglePhotosLogo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GooglePhotosLogoBoldIcon,
      duotone: GooglePhotosLogoDuotoneIcon,
      fill: GooglePhotosLogoFillIcon,
      light: GooglePhotosLogoLightIcon,
      regular: GooglePhotosLogoRegularIcon,
      thin: GooglePhotosLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
