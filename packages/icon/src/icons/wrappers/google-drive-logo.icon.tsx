import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GoogleDriveLogoBoldIcon } from "../bold/google-drive-logo-bold.icon";
import { GoogleDriveLogoDuotoneIcon } from "../duotone/google-drive-logo-duotone.icon";
import { GoogleDriveLogoFillIcon } from "../fill/google-drive-logo-fill.icon";
import { GoogleDriveLogoLightIcon } from "../light/google-drive-logo-light.icon";
import { GoogleDriveLogoRegularIcon } from "../regular/google-drive-logo-regular.icon";
import { GoogleDriveLogoThinIcon } from "../thin/google-drive-logo-thin.icon";

export const GoogleDriveLogoIcon = memo(function GoogleDriveLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GoogleDriveLogoBoldIcon,
      duotone: GoogleDriveLogoDuotoneIcon,
      fill: GoogleDriveLogoFillIcon,
      light: GoogleDriveLogoLightIcon,
      regular: GoogleDriveLogoRegularIcon,
      thin: GoogleDriveLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
