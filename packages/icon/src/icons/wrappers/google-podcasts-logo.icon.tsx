import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GooglePodcastsLogoBoldIcon } from "../bold/google-podcasts-logo-bold.icon";
import { GooglePodcastsLogoDuotoneIcon } from "../duotone/google-podcasts-logo-duotone.icon";
import { GooglePodcastsLogoFillIcon } from "../fill/google-podcasts-logo-fill.icon";
import { GooglePodcastsLogoLightIcon } from "../light/google-podcasts-logo-light.icon";
import { GooglePodcastsLogoRegularIcon } from "../regular/google-podcasts-logo-regular.icon";
import { GooglePodcastsLogoThinIcon } from "../thin/google-podcasts-logo-thin.icon";

export const GooglePodcastsLogoIcon = memo(function GooglePodcastsLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GooglePodcastsLogoBoldIcon,
      duotone: GooglePodcastsLogoDuotoneIcon,
      fill: GooglePodcastsLogoFillIcon,
      light: GooglePodcastsLogoLightIcon,
      regular: GooglePodcastsLogoRegularIcon,
      thin: GooglePodcastsLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
