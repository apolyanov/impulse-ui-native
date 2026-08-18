import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GoogleLogoBoldIcon } from "../bold/google-logo-bold.icon";
import { GoogleLogoDuotoneIcon } from "../duotone/google-logo-duotone.icon";
import { GoogleLogoFillIcon } from "../fill/google-logo-fill.icon";
import { GoogleLogoLightIcon } from "../light/google-logo-light.icon";
import { GoogleLogoRegularIcon } from "../regular/google-logo-regular.icon";
import { GoogleLogoThinIcon } from "../thin/google-logo-thin.icon";

export const GoogleLogoIcon = memo(function GoogleLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GoogleLogoBoldIcon,
      duotone: GoogleLogoDuotoneIcon,
      fill: GoogleLogoFillIcon,
      light: GoogleLogoLightIcon,
      regular: GoogleLogoRegularIcon,
      thin: GoogleLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
