import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { InstagramLogoBoldIcon } from "../bold/instagram-logo-bold.icon";
import { InstagramLogoDuotoneIcon } from "../duotone/instagram-logo-duotone.icon";
import { InstagramLogoFillIcon } from "../fill/instagram-logo-fill.icon";
import { InstagramLogoLightIcon } from "../light/instagram-logo-light.icon";
import { InstagramLogoRegularIcon } from "../regular/instagram-logo-regular.icon";
import { InstagramLogoThinIcon } from "../thin/instagram-logo-thin.icon";

export const InstagramLogoIcon = memo(function InstagramLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: InstagramLogoBoldIcon,
      duotone: InstagramLogoDuotoneIcon,
      fill: InstagramLogoFillIcon,
      light: InstagramLogoLightIcon,
      regular: InstagramLogoRegularIcon,
      thin: InstagramLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
