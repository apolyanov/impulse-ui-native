import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GooglePlayLogoBoldIcon } from "../bold/google-play-logo-bold.icon";
import { GooglePlayLogoDuotoneIcon } from "../duotone/google-play-logo-duotone.icon";
import { GooglePlayLogoFillIcon } from "../fill/google-play-logo-fill.icon";
import { GooglePlayLogoLightIcon } from "../light/google-play-logo-light.icon";
import { GooglePlayLogoRegularIcon } from "../regular/google-play-logo-regular.icon";
import { GooglePlayLogoThinIcon } from "../thin/google-play-logo-thin.icon";

export const GooglePlayLogoIcon = memo(function GooglePlayLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GooglePlayLogoBoldIcon,
      duotone: GooglePlayLogoDuotoneIcon,
      fill: GooglePlayLogoFillIcon,
      light: GooglePlayLogoLightIcon,
      regular: GooglePlayLogoRegularIcon,
      thin: GooglePlayLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
