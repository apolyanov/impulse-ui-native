import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FacebookLogoBoldIcon } from "../bold/facebook-logo-bold.icon";
import { FacebookLogoDuotoneIcon } from "../duotone/facebook-logo-duotone.icon";
import { FacebookLogoFillIcon } from "../fill/facebook-logo-fill.icon";
import { FacebookLogoLightIcon } from "../light/facebook-logo-light.icon";
import { FacebookLogoRegularIcon } from "../regular/facebook-logo-regular.icon";
import { FacebookLogoThinIcon } from "../thin/facebook-logo-thin.icon";

export const FacebookLogoIcon = memo(function FacebookLogo(
  props: IconWrapperProps,
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
