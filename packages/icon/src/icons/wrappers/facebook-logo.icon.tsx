import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FacebookLogoBoldIcon } from "../bold";
import { FacebookLogoDuotoneIcon } from "../duotone";
import { FacebookLogoFillIcon } from "../fill";
import { FacebookLogoLightIcon } from "../light";
import { FacebookLogoRegularIcon } from "../regular";
import { FacebookLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FacebookLogoIcon = memo(function FacebookLogo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FacebookLogoBoldIcon,
      duotone: FacebookLogoDuotoneIcon,
      fill: FacebookLogoFillIcon,
      light: FacebookLogoLightIcon,
      regular: FacebookLogoRegularIcon,
      thin: FacebookLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
