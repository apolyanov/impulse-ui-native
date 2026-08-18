import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GooglePhotosLogoBoldIcon } from "../bold/google-photos-logo-bold.icon";
import { GooglePhotosLogoDuotoneIcon } from "../duotone/google-photos-logo-duotone.icon";
import { GooglePhotosLogoFillIcon } from "../fill/google-photos-logo-fill.icon";
import { GooglePhotosLogoLightIcon } from "../light/google-photos-logo-light.icon";
import { GooglePhotosLogoRegularIcon } from "../regular/google-photos-logo-regular.icon";
import { GooglePhotosLogoThinIcon } from "../thin/google-photos-logo-thin.icon";

export const GooglePhotosLogoIcon = memo(function GooglePhotosLogo(
  props: IconWrapperProps,
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
