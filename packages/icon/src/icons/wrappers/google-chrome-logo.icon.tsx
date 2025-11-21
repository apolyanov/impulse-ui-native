import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GoogleChromeLogoBoldIcon } from "../bold";
import { GoogleChromeLogoDuotoneIcon } from "../duotone";
import { GoogleChromeLogoFillIcon } from "../fill";
import { GoogleChromeLogoLightIcon } from "../light";
import { GoogleChromeLogoRegularIcon } from "../regular";
import { GoogleChromeLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GoogleChromeLogoIcon = memo(function GoogleChromeLogo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GoogleChromeLogoBoldIcon,
      duotone: GoogleChromeLogoDuotoneIcon,
      fill: GoogleChromeLogoFillIcon,
      light: GoogleChromeLogoLightIcon,
      regular: GoogleChromeLogoRegularIcon,
      thin: GoogleChromeLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
