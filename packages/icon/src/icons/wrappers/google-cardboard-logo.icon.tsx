import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GoogleCardboardLogoBoldIcon } from "../bold";
import { GoogleCardboardLogoDuotoneIcon } from "../duotone";
import { GoogleCardboardLogoFillIcon } from "../fill";
import { GoogleCardboardLogoLightIcon } from "../light";
import { GoogleCardboardLogoRegularIcon } from "../regular";
import { GoogleCardboardLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GoogleCardboardLogoIcon = memo(function GoogleCardboardLogo(
  props: IconWrapperProps
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
