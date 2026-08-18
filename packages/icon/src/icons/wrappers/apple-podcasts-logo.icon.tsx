import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ApplePodcastsLogoBoldIcon } from "../bold/apple-podcasts-logo-bold.icon";
import { ApplePodcastsLogoDuotoneIcon } from "../duotone/apple-podcasts-logo-duotone.icon";
import { ApplePodcastsLogoFillIcon } from "../fill/apple-podcasts-logo-fill.icon";
import { ApplePodcastsLogoLightIcon } from "../light/apple-podcasts-logo-light.icon";
import { ApplePodcastsLogoRegularIcon } from "../regular/apple-podcasts-logo-regular.icon";
import { ApplePodcastsLogoThinIcon } from "../thin/apple-podcasts-logo-thin.icon";

export const ApplePodcastsLogoIcon = memo(function ApplePodcastsLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ApplePodcastsLogoBoldIcon,
      duotone: ApplePodcastsLogoDuotoneIcon,
      fill: ApplePodcastsLogoFillIcon,
      light: ApplePodcastsLogoLightIcon,
      regular: ApplePodcastsLogoRegularIcon,
      thin: ApplePodcastsLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
