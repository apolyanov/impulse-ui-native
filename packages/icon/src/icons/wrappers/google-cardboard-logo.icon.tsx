import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GoogleCardboardLogoBoldIcon } from "../bold/google-cardboard-logo-bold.icon";
import { GoogleCardboardLogoDuotoneIcon } from "../duotone/google-cardboard-logo-duotone.icon";
import { GoogleCardboardLogoFillIcon } from "../fill/google-cardboard-logo-fill.icon";
import { GoogleCardboardLogoLightIcon } from "../light/google-cardboard-logo-light.icon";
import { GoogleCardboardLogoRegularIcon } from "../regular/google-cardboard-logo-regular.icon";
import { GoogleCardboardLogoThinIcon } from "../thin/google-cardboard-logo-thin.icon";

export const GoogleCardboardLogoIcon = memo(function GoogleCardboardLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GoogleCardboardLogoBoldIcon,
      duotone: GoogleCardboardLogoDuotoneIcon,
      fill: GoogleCardboardLogoFillIcon,
      light: GoogleCardboardLogoLightIcon,
      regular: GoogleCardboardLogoRegularIcon,
      thin: GoogleCardboardLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
