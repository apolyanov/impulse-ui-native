import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TumblrLogoBoldIcon } from "../bold/tumblr-logo-bold.icon";
import { TumblrLogoDuotoneIcon } from "../duotone/tumblr-logo-duotone.icon";
import { TumblrLogoFillIcon } from "../fill/tumblr-logo-fill.icon";
import { TumblrLogoLightIcon } from "../light/tumblr-logo-light.icon";
import { TumblrLogoRegularIcon } from "../regular/tumblr-logo-regular.icon";
import { TumblrLogoThinIcon } from "../thin/tumblr-logo-thin.icon";

export const TumblrLogoIcon = memo(function TumblrLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TumblrLogoBoldIcon,
      duotone: TumblrLogoDuotoneIcon,
      fill: TumblrLogoFillIcon,
      light: TumblrLogoLightIcon,
      regular: TumblrLogoRegularIcon,
      thin: TumblrLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
