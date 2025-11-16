import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GooglePodcastsLogoBold } from "../bold";
import { GooglePodcastsLogoDuotone } from "../duotone";
import { GooglePodcastsLogoFill } from "../fill";
import { GooglePodcastsLogoLight } from "../light";
import { GooglePodcastsLogoRegular } from "../regular";
import { GooglePodcastsLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GooglePodcastsLogo = memo(function GooglePodcastsLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GooglePodcastsLogoBold,
      duotone: GooglePodcastsLogoDuotone,
      fill: GooglePodcastsLogoFill,
      light: GooglePodcastsLogoLight,
      regular: GooglePodcastsLogoRegular,
      thin: GooglePodcastsLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
