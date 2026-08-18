import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MastodonLogoBoldIcon } from "../bold/mastodon-logo-bold.icon";
import { MastodonLogoDuotoneIcon } from "../duotone/mastodon-logo-duotone.icon";
import { MastodonLogoFillIcon } from "../fill/mastodon-logo-fill.icon";
import { MastodonLogoLightIcon } from "../light/mastodon-logo-light.icon";
import { MastodonLogoRegularIcon } from "../regular/mastodon-logo-regular.icon";
import { MastodonLogoThinIcon } from "../thin/mastodon-logo-thin.icon";

export const MastodonLogoIcon = memo(function MastodonLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MastodonLogoBoldIcon,
      duotone: MastodonLogoDuotoneIcon,
      fill: MastodonLogoFillIcon,
      light: MastodonLogoLightIcon,
      regular: MastodonLogoRegularIcon,
      thin: MastodonLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
