import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GoogleCardboardLogoBold } from "../bold";
import { GoogleCardboardLogoDuotone } from "../duotone";
import { GoogleCardboardLogoFill } from "../fill";
import { GoogleCardboardLogoLight } from "../light";
import { GoogleCardboardLogoRegular } from "../regular";
import { GoogleCardboardLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GoogleCardboardLogo = memo(function GoogleCardboardLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GoogleCardboardLogoBold,
      duotone: GoogleCardboardLogoDuotone,
      fill: GoogleCardboardLogoFill,
      light: GoogleCardboardLogoLight,
      regular: GoogleCardboardLogoRegular,
      thin: GoogleCardboardLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
