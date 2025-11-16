import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GoogleDriveLogoBold } from "../bold";
import { GoogleDriveLogoDuotone } from "../duotone";
import { GoogleDriveLogoFill } from "../fill";
import { GoogleDriveLogoLight } from "../light";
import { GoogleDriveLogoRegular } from "../regular";
import { GoogleDriveLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GoogleDriveLogo = memo(function GoogleDriveLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GoogleDriveLogoBold,
      duotone: GoogleDriveLogoDuotone,
      fill: GoogleDriveLogoFill,
      light: GoogleDriveLogoLight,
      regular: GoogleDriveLogoRegular,
      thin: GoogleDriveLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
