import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GoogleChromeLogoBold } from "../bold";
import { GoogleChromeLogoDuotone } from "../duotone";
import { GoogleChromeLogoFill } from "../fill";
import { GoogleChromeLogoLight } from "../light";
import { GoogleChromeLogoRegular } from "../regular";
import { GoogleChromeLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GoogleChromeLogo = memo(function GoogleChromeLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GoogleChromeLogoBold,
      duotone: GoogleChromeLogoDuotone,
      fill: GoogleChromeLogoFill,
      light: GoogleChromeLogoLight,
      regular: GoogleChromeLogoRegular,
      thin: GoogleChromeLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
