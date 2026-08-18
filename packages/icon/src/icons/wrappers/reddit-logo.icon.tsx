import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RedditLogoBoldIcon } from "../bold/reddit-logo-bold.icon";
import { RedditLogoDuotoneIcon } from "../duotone/reddit-logo-duotone.icon";
import { RedditLogoFillIcon } from "../fill/reddit-logo-fill.icon";
import { RedditLogoLightIcon } from "../light/reddit-logo-light.icon";
import { RedditLogoRegularIcon } from "../regular/reddit-logo-regular.icon";
import { RedditLogoThinIcon } from "../thin/reddit-logo-thin.icon";

export const RedditLogoIcon = memo(function RedditLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RedditLogoBoldIcon,
      duotone: RedditLogoDuotoneIcon,
      fill: RedditLogoFillIcon,
      light: RedditLogoLightIcon,
      regular: RedditLogoRegularIcon,
      thin: RedditLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
